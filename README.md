# Backend - NestJS API

## 📦 Tech Stack
- [NestJS](https://nestjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)

---

## 🚀 วิธีติดตั้งและรันโปรเจกต์

### 1. Clone โปรเจกต์
```bash
git clone https://github.com/zuyaxiii/Lookbackend.git
cd Lookbackend
```

### 2. ติดตั้ง dependencies
```bash
npm install
```
### 3. สร้างไฟล์ .env
สร้างไฟล์ .env ที่ root ของโปรเจกต์ แล้วใส่ค่าแบบนี้:
```bash
MONGO_URI=mongodb://localhost:27017/your-db-name
PORT=3000
```

### 4. รันโปรเจกต์
```bash
npm run start:dev
```

## 🎁 การเพิ่ม Reward ใหม่

หากต้องการเพิ่ม Reward สามารถส่ง HTTP POST ไปยัง backend ที่ endpoint:


POST {BASE_URL}/api/rewards


### 🔐 ตัวอย่าง Request

```http
POST http://localhost:3000/api/rewards
Content-Type: application/json
```

📦 JSON Payload ตัวอย่าง:

```
{
  "title": "Free Pet Grooming Session",
  "description": "Enjoy a free grooming session for your pet at our partner salon.",
  "pointsRequired": 200,
  "imageUrl": "https://example.com/images/grooming.jpg"
},
{
  "title": "Buy 1 Get 1 Free Coffee",
  "description": "Redeem this reward to enjoy a buy one get one free coffee at CoffeeHub.",
  "pointsRequired": 120,
  "imageUrl": "https://example.com/images/coffee.jpg"
},
{
  "title": "Discounted Vet Checkup",
  "description": "Get a 50% discount on your pet's next health checkup at selected clinics.",
  "pointsRequired": 300,
  "imageUrl": "https://example.com/images/vet.jpg"
}
```

✅ แนะนำให้ใช้ Postman หรือ curl ในการยิง request เพื่อทดสอบ
