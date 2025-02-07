#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>

#define ENA 12 // PWM-capable pin for Motor 1
#define ENB 13 // PWM-capable pin for Motor 2
#define IN1 2  // Input 1 for Motor 1
#define IN2 3  // Input 2 for Motor 1
#define IN3 4  // Input 1 for Motor 2
#define IN4 5  // Input 2 for Motor

#define LED1 14 // GPIO14 for LED 1
#define LED2 27 // GPIO27 for LED 2

#define SERVICE_UUID "12345678-1234-5678-1234-56789abcdef0"
#define CHARACTERISTIC_UUID "87654321-4321-6789-4321-abcdef012345"

String currentCommand = "";

class CommandCallbacks : public BLECharacteristicCallbacks
{
    void onWrite(BLECharacteristic *pCharacteristic) override
    {
        std::string rxValue = pCharacteristic->getValue();
        if (rxValue.length() > 0)
        {
            Serial.print("Received command: ");
            Serial.println(rxValue.c_str());
            currentCommand = String(rxValue.c_str());
        }
    }
};

void setup()
{
    Serial.begin(115200);
    Serial.println("Initializing robot...");

    pinMode(IN1, OUTPUT);
    pinMode(IN2, OUTPUT);
    pinMode(IN3, OUTPUT);
    pinMode(IN4, OUTPUT);

    pinMode(LED1, OUTPUT);
    pinMode(LED2, OUTPUT);

    ledcSetup(0, 5000, 8);
    ledcAttachPin(ENA, 0);
    ledcSetup(1, 5000, 8);
    ledcAttachPin(ENB, 1);

    LEDOnBegin();

    stopMotors();

    BLEDevice::init("Wall-E");
    BLEServer *pServer = BLEDevice::createServer();
    BLEService *pService = pServer->createService(SERVICE_UUID);
    BLECharacteristic *pCharacteristic = pService->createCharacteristic(
        CHARACTERISTIC_UUID,
        BLECharacteristic::PROPERTY_READ | BLECharacteristic::PROPERTY_WRITE);
    pCharacteristic->setCallbacks(new CommandCallbacks());
    pCharacteristic->setValue("stop");
    pService->start();
    BLEAdvertising *pAdvertising = pServer->getAdvertising();
    pAdvertising->start();

    Serial.println("BLE Advertising started. Awaiting commands...");
}

void loop()
{

    if (currentCommand != "")
    {
        Serial.print("Executing command: ");
        Serial.println(currentCommand);

        if (currentCommand == "forward")
        {
            LEDOnBegin();
            moveForward(255);
        }
        else if (currentCommand == "backward")
        {
            LEDOnBegin();
            moveBackward(255);
        }
        else if (currentCommand == "left")
        {
            LEDOnBegin();
            turnLeft(255);
        }
        else if (currentCommand == "right")
        {
            LEDOnBegin();
            turnRight(255);
        }
        else if (currentCommand == "dance")
        {
            ledEmote();
            performDance();
        }
        else if (currentCommand == "circle")
        {
            ledEmote();
            performCircle();
        }
        else if (currentCommand == "wiggle")
        {
            ledEmote();
            performWiggle();
        }
        else if (currentCommand == "stop")
        {
            LEDOnBegin();
            stopMotors();
        }

        currentCommand = "";
    }

    delay(10);
}

void LEDOnBegin()
{
    digitalWrite(LED1, HIGH);
    digitalWrite(LED2, HIGH);
}

void ledEmote()
{
    digitalWrite(LED1, HIGH);
    digitalWrite(LED2, LOW);
    delay(250);
    digitalWrite(LED1, LOW);
    digitalWrite(LED2, HIGH);
    delay(250);
}

// --- Motor Control Functions ---
void moveForward(int speed)
{
    ledcWrite(0, speed);
    ledcWrite(1, speed);
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
}

void moveBackward(int speed)
{
    ledcWrite(0, speed);
    ledcWrite(1, speed);
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, HIGH);
}

void turnLeft(int speed)
{
    ledcWrite(0, speed);
    ledcWrite(1, speed);
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
}

void turnRight(int speed)
{
    ledcWrite(0, speed);
    ledcWrite(1, speed);
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, HIGH);
}

void stopMotors()
{
    ledcWrite(0, 0);
    ledcWrite(1, 0);
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, LOW);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, LOW);
}

void performDance()
{
    moveForward(255);
    delay(500);
    moveBackward(255);
    delay(500);
    turnLeft(255);
    delay(500);
    turnRight(255);
    delay(500);
    turnLeft(255);
    delay(500);
    stopMotors();
}

void performCircle()
{
    ledcWrite(0, 255);
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
}

void performWiggle()
{
    turnLeft(255);
    delay(250);
    turnRight(255);
    delay(250);
}
