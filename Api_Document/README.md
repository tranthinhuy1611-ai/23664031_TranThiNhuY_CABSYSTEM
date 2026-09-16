# CABSYSTEM - Hệ Thống Quản Lý Đặt Xe / Taxi

Hệ thống quản lý và điều hành xe (CABSYSTEM) bao gồm ứng dụng quản lý chuyến đi, tài xế, khách hàng và thanh toán.

---

## 📚 Tài liệu dự án (Documentation)

Tất cả tài liệu được tổ chức gọn gàng trong thư mục [`docs/`](./docs/):

- **Yêu cầu hệ thống:** [SRS Document](./docs/srs/SRS.md)
- **Thiết kế API (OpenAPI / Swagger):**
  - [Tổng quan API](./docs/api/cab-system-api.yaml)
  - [Xác thực & Phân quyền](./docs/api/cab-system-auth.yaml)
  - [Quản lý Khách hàng](./docs/api/cab-system-customers.yaml)
  - [Quản lý Tài xế](./docs/api/cab-system-drivers.yaml)
  - [Quản lý Chuyến đi](./docs/api/cab-system-trips.yaml)
  - [Thanh toán](./docs/api/cab-system-payments.yaml)
  - [Vận hành](./docs/api/cab-system-operations.yaml)
  - [Thông báo](./docs/api/cab-system-notifications.yaml)
  - [Báo cáo](./docs/api/cab-system-reports.yaml)

---

## 🛠 Hướng dẫn Cài đặt & Chạy Backend

Mã nguồn dịch vụ backend được đặt tại thư mục [`backend/`](./backend/).

### Yêu cầu môi trường

- Node.js (phiên bản 18+ trở lên)
- npm hoặc yarn

### Các bước khởi chạy

1. Truy cập vào thư mục backend:
   ```bash
   cd backend
   ```
