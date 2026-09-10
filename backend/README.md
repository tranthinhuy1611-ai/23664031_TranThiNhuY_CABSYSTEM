# CAB System Demo MVC Node.js

Demo MVC đơn giản xây dựng trên Node.js để mô phỏng hệ thống CAB System theo tài liệu API YAML đã phân tách.

## Cấu trúc

- src/server.js: khởi động server HTTP
- src/routes/index.js: định tuyến API
- src/controllers/cabController.js: xử lý business logic
- src/models/cabModel.js: dữ liệu mẫu và storage in-memory

## Chạy

```bash
npm start
```

Server mặc định chạy ở: http://localhost:3001

## Các endpoint demo

- GET /api/health
- POST /api/auth/login
- POST /api/customers
- GET /api/customers
- GET /api/customers/:customerId
- POST /api/drivers
- GET /api/drivers
- GET /api/drivers/:driverId
- PUT /api/drivers/:driverId/location
- POST /api/trips
- GET /api/trips
- GET /api/trips/:tripId
- PATCH /api/trips/:tripId
- POST /api/trips/:tripId/assign
- GET /api/trips/:tripId/estimate
- POST /api/trips/:tripId/cancel
- POST /api/payments/quote
- POST /api/payments
- GET /api/payments
- GET /api/payments/:paymentId
- POST /api/payments/:paymentId/refund
- POST /api/notifications
- GET /api/notifications
- GET /api/operations/assignments
- GET /api/operations/schedule
- GET /api/reports/revenue
- GET /api/reports/trips

```

```
