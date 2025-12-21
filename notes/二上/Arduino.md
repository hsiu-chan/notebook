---
html:
    offline: false
    embed_local_images: false #遷入base64圖片
print_background: true
export_on_save:
  html: true
---
# Arduino

## pinMode(name, definition)

    pinMode(LED_BUILTIN, OUTPUT);

## digitalWrite(name, 電位)
    
    digitalWrite(LED_BUILTIN, HIGH)

## Baud Rate
    Serial.begin(9600)
傳輸速度每秒 9600 bps，一般通訊兩端裝置都要設為相同的鮑率
>Arduino並不是真正的Serial Port 傳輸:
arduino 的COM port是透過板子上的 晶片模擬的
其實 Arduino 上有一顆晶片就是 USB to Serail converter
比如 Duemilanove 的 FT232r，或是 UNO 的 atmega16u2
所以真正 PC 的 COM Port 速度限制還要查 USB to Serial 晶片的 datasheet
## analogWrite
    analogWrite(11,val)
Writes an analog value (PWM wave) to a pin


| BOARD|PWM PINS|PWM FREQUENCY |
| -------- | -------- | -------- |
| Mega     | 2 - 13, 44 - 46     | 490 Hz (pins 4 and 13: 980 Hz)     |

## LiquidCrystal_I2C

    #include <LiquidCrystal_I2C.h>
    LiquidCrystal_I2C lcd(0x27,16,2);
    // set the LCD address to 0x27 for a 16x2 display
    void setup()
    {
        lcd.init();  // initialize
        lcd.backlight();
        
        lcd.setCursor(3,0);
        lcd.print("Hello, HAAA");
        lcd.setCursor(2,1);
        lcd.print("bot Arduino!");
    }
## 按鈕
![](https://i.imgur.com/2bcpQRE.png)
    
    const int BUTTON_PIN = 10;  // 按鍵的接腳
    int buttonState = 0;   // 按鈕的狀態
    
    void setup() {
      pinMode(BUTTON_PIN, INPUT); //設定按鈕的接腳為輸入，因為我們要讀取它的狀態
      }
    
    void loop() {
      buttonState = digitalRead(BUTTON_PIN);  //讀取按鍵的狀態
      }
## Analog to Digital Convert
ADC偵測電壓，將訊號用10bit 模擬

    pinMode(腳位, INPUT); // Arduino UNO: A0~A5
    
    int val = analogRead(腳位);   // Arduino UNO: A0~A5, val=0-1023
## Adafruit GFX Library
### Font
     const uint8_t Tiny3x3a2pt7bBitmaps[] PROGMEM = {
        0xC0, 0xB4, 0xBF, 0x80, 0x6B, 0x00, 0xDD, 0x80, 0x59, 0x80, 0x80, 0x64,
        0x98, 0xF0, 0x5D, 0x00, 0xC0, 0xE0, 0x80, 0x2A, 0x00, 0x55, 0x00, 0x94,
        0xC9, 0x80, 0xEF, 0x80, 0xBC, 0x80, 0x6B, 0x00, 0x9F, 0x80, 0xE4, 0x80,
        0x7F, 0x00, 0xFC, 0x80, 0xA0, 0x58, 0x64, 0xE3, 0x80, 0x98, 0xD8, 0xD8,
        0x80, 0x5E, 0x80, 0xDF, 0x80, 0x71, 0x80, 0xD7, 0x00, 0xFB, 0x80, 0xFA,
        0x00, 0xD7, 0x80, 0xBE, 0x80, 0xE0, 0x27, 0x00, 0xBA, 0x80, 0x93, 0x80,
        0xFE, 0x80, 0xF6, 0x80, 0xF7, 0x80, 0xFE, 0x00, 0xF7, 0x00, 0xDE, 0x80,
        0x6B, 0x00, 0xE9, 0x00, 0xB7, 0x80, 0xB5, 0x00, 0xBF, 0x80, 0xAA, 0x80,
        0xA9, 0x00, 0xEB, 0x80, 0xEC, 0x88, 0x80, 0xDC, 0x54, 0xE0, 0x90, 0x70,
        0xBC, 0xF0, 0x7C, 0xB0, 0x68, 0xFC, 0xBC, 0xC0, 0x58, 0x9A, 0x80, 0xA4,
        0xDC, 0xD4, 0xF0, 0xF8, 0xF4, 0xE0, 0x60, 0x59, 0x80, 0xBC, 0xA8, 0xEC,
        0xF0, 0xAC, 0x80, 0x90, 0x79, 0x80, 0xF0, 0xCF, 0x00, 0x78};

    const GFXglyph Tiny3x3a2pt7bGlyphs[] PROGMEM = {
        {0, 0, 0, 4, 0, 1},     // 0x20 ' '
        {0, 1, 2, 3, 1, -2},    // 0x21 '!'
        {1, 3, 2, 4, 0, -2},    // 0x22 '"'
        {2, 3, 3, 4, 0, -2},    // 0x23 '#'
        {4, 3, 3, 4, 0, -2},    // 0x24 '$'
        {6, 3, 3, 4, 0, -2},    // 0x25 '%'
        {8, 3, 3, 4, 0, -2},    // 0x26 '&'
        {10, 1, 1, 3, 1, -2},   // 0x27 '''
        {11, 2, 3, 3, 0, -2},   // 0x28 '('
        {12, 2, 3, 4, 1, -2},   // 0x29 ')'
        {13, 2, 2, 4, 1, -2},   // 0x2A '*'
        //....
        {141, 3, 2, 4, 0, -2}}; // 0x7E '~'

    const GFXfont Tiny3x3a2pt7b PROGMEM = {(uint8_t *)Tiny3x3a2pt7bBitmaps,
                                           (GFXglyph *)Tiny3x3a2pt7bGlyphs, 0x20,
                                           0x7E, 4};
#### 字符定義                                        
    typedef struct {
      uint16_t bitmapOffset; ///起點
      uint8_t width;         
      uint8_t height;        
      uint8_t xAdvance;      /// Distance to advance cursor (x axis)
      int8_t xOffset;        /// X dist from cursor pos to UL corner
      int8_t yOffset;        /// Y dist from cursor pos to UL corner
    } GFXglyph;
起點開始到下一個字起點前展開成二進制填入W*H格子裡
