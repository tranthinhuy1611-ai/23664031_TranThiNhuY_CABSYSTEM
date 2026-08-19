Bước 1: - đọc và phân tích yêu cầu: hiểu về bussiness contesxt và bussiness problem
        - trả lời câu hỏi: khách hàng muốn giải quyết vấn đề gì
        - vì sao k thể đáp ứng, ai sử dụng ht này,
        - giá trị sau khi tạo ra 
# BƯỚC 1: 
1. Bối cảnh Nghiệp vụ (Business Context)

Công ty ABC là doanh nghiệp cung cấp dịch vụ đặt xe trực tuyến đang phục vụ khách hàng qua hai kênh: tổng đài và một ứng dụng di động đơn giản. Doanh nghiệp đang đối mặt với sự gia tăng về quy mô nhưng hạ tầng vận hành hiện tại đã chạm ngưỡng giới hạn.

2. Vấn đề Nghiệp vụ (Business Problem) - Khách hàng muốn giải quyết vấn đề gì?

- Công ty ABC muốn giải quyết 4 nhóm vấn đề cốt lõi đang kìm hãm sự phát triển của họ:

- Sự phụ thuộc vào vận hành thủ công: Việc phân công tài xế chủ yếu làm bằng tay, tốn thời gian, dễ gây sai sót và không thể xử lý khi số lượng đơn hàng tăng cao.

- Trải nghiệm khách hàng kém (Lack of Visibility): Khách hàng hoàn toàn "mù thông tin" về tiến trình chuyến đi — không biết trạng thái tìm xe, không biết tài xế đang ở đâu, bao giờ tới và thiếu công cụ đánh giá chất lượng dịch vụ.

- Thanh toán phân tán, rủi ro: Chưa có hệ thống quản lý thanh toán tập trung, thiếu tích hợp thanh toán điện tử an toàn.

- Hạ tầng công nghệ đơn điểm (Single Point of Failure): Hệ thống cũ có kiến trúc đóng, các bộ phận dính liền nhau nên khi một chức năng gặp sự cố sẽ kéo theo toàn bộ hệ thống sập; đồng thời không thể mở rộng quy mô hay bổ sung dịch vụ mới.

3. Vì sao hệ thống hiện tại KHÔNG THỂ đáp ứng nhu cầu?

- Giới hạn về Khả năng Mở rộng (Scalability): Hệ thống cũ được thiết kế đơn giản, không áp dụng kiến trúc phân tán hay độc lập (microservices/modular). Khi tải tăng đột biến, hệ thống không thể tự nâng cấp quy mô từng phần.

- Thiếu Thuật toán Tự động hóa: Không có cơ chế tự động định vị (GPS) và thuật toán ghép chuyến thông minh (matching algorithm) để tự động tìm, điều phối và chuyển đổi tài xế liên tục khi có người từ chối.

- Không đáp ứng Yêu cầu Bảo mật Modern: Hệ thống chưa có cơ chế tích hợp an toàn với Cổng thanh toán bên ngoài (Payment Gateway) theo tiêu chuẩn bảo mật (như không lưu trữ dữ liệu thẻ trực tiếp).

- Thiếu Hạ tầng Dữ liệu & Báo cáo: Dữ liệu bị phân tán, không có công cụ tự động tổng hợp để đưa ra các báo cáo thời gian thực (real-time analytics) cho Ban quản trị.

4. Ai sẽ sử dụng hệ thống này (Actors / User Groups)?

Hệ thống CAB mới phục vụ 3 nhóm người dùng nội bộ/ngoại bộ và tương tác với 2 hệ thống bên ngoài:

- Khách hàng (Customer): Đăng ký/đăng nhập, đặt xe, theo dõi vị trí tài xế theo thời gian thực, thanh toán (tiền mặt/điện tử), xem lịch sử và đánh giá tài xế.

- Tài xế (Driver): Bật/tắt trạng thái sẵn sàng, nhận thông báo chuyến, chấp nhận/từ chối chuyến, cập nhật trạng thái chuyến đi (Đã đến, Đã đón, Hoàn thành), truyền dữ liệu vị trí GPS.

- Nhân viên Vận hành & Quản trị (Operator / Admin): Quản lý tài khoản, giám sát các chuyến đi thực tế, can thiệp xử lý sự cố/khiếu nại, cấu hình phân quyền và khai thác báo cáo doanh thu/hiệu suất.

- Hệ thống Bên ngoài (External Systems):

  + Cổng thanh toán (Payment Gateway): Xử lý giao dịch điện tử an toàn.

  + Dịch vụ thông báo (Notification Provider): Gửi tin nhắn SMS/Push Notification.

5. Giá trị mang lại sau khi hoàn thành dự án (Business Value)

- Tối ưu hóa Chi phí & Năng suất Vận hành: Tự động hóa hoàn toàn luồng ghép chuyến và điều phối giúp giảm thiểu nhân sự tổng đài, xử lý được gấp nhiều lần số lượng chuyến đi cùng lúc.

- Nâng cao Trải nghiệm & Giữ chân Khách hàng: Minh bạch thông tin chuyến đi (vị trí tài xế, thời gian dự kiến đến, giá cước) giúp tăng độ hài lòng và tỷ lệ quay lại của khách hàng.

- Đảm bảo Tính Liên tục của Kinh doanh (High Availability): Kiến trúc hệ thống mới cho phép mở rộng độc lập và cách ly lỗi — sự cố thanh toán hay thông báo không làm gián đoạn luồng đặt xe cốt lõi.

- Tạo Nền tảng Cho Tăng trưởng Lâu dài (Extensibility): Hệ thống linh hoạt dễ dàng mở rộng sang các loại hình dịch vụ mới (giao hàng, xe chung), thêm phương thức thanh toán hoặc đối tác thông báo mà không cần đập đi xây lại.

- Ra quyết định Dựa trên Dữ liệu (Data-Driven Decisions): Cung cấp hệ thống báo cáo chính xác về doanh thu, tỷ lệ hoàn thành/hủy chuyến, giúp Ban lãnh đạo điều chỉnh chiến lược kinh doanh kịp thời.
    
Bước 2: Xác định các stackeholders (các bên liên quan trong hệ thống): 
- Bảng danh sách: cột đầu tiên là stackeholders, cột 2 là vai trò
- Vẽ ma trận stackeholders metric (cho biết mức độ ảnh hưởng của các vai trò )

# BƯỚC 2: XÁC ĐỊNH VÀ PHÂN TÍCH CÁC BÊN LIÊN QUAN (STAKEHOLDERS)

---

### 1. Danh sách các Stakeholders và Vai trò

| Stakeholder (Bên liên quan) | Vai trò & Trách nhiệm chính trong Dự án/Hệ thống |
| :--- | :--- |
| **Ban Giám đốc / Ban Lãnh đạo (Sponsor / Executives)** | Định hướng chiến lược, phê duyệt ngân sách, đặt ra kỳ vọng phát triển dài hạn và đánh giá hiệu quả đầu tư (ROI) của dự án CAB System. |
| **Khách hàng (Customers / End-users)** | Người trực tiếp sử dụng ứng dụng để đặt xe, theo dõi chuyến đi, thực hiện thanh toán và đánh giá chất lượng dịch vụ. |
| **Tài xế (Drivers)** | Người tiếp nhận yêu cầu chuyến đi, thực hiện vận chuyển khách hàng, cập nhật vị trí GPS và trạng thái chuyến đi qua ứng dụng. |
| **Bộ phận Vận hành (Operations Team)** | Sử dụng giao diện quản trị (Admin Dashboard) để giám sát chuyến đi thời gian thực, điều phối thủ công khi có sự cố, quản lý tài khoản khách hàng/tài xế/phương tiện. |
| **Bộ phận Kế toán & Tài chính (Finance & Accounting)** | Quản lý doanh thu, đối soát giao dịch thanh toán điện tử/tiền mặt, xem các báo cáo tài chính và xử lý hoàn tiền nếu có sự cố. |
| **Bộ phận Chăm sóc Khách hàng (Customer Support)** | Tiếp nhận khiếu nại, hỗ trợ giải quyết sự cố phát sinh trong chuyến đi giữa khách hàng và tài xế. |
| **Business Analyst (BA) - Đội Dự án** | Làm rõ yêu cầu nghiệp vụ với khách hàng, xác định phạm vi, quy tắc nghiệp vụ, trường hợp ngoại lệ và truyền đạt cho đội phát triển. |
| **Đội ngũ Phát triển & Kiểm thử (Dev & QA Team)** | Thiết kế kiến trúc, lập trình, kiểm thử và triển khai hệ thống đáp ứng đúng yêu cầu chức năng và phi chức năng trong 7 tuần. |
| **Nhà cung cấp Cổng Thanh toán (Payment Gateway Provider)** | Đối tác bên ngoài cung cấp hạ tầng xử lý giao dịch điện tử an toàn (Tokenization, API thanh toán). |
| **Nhà cung cấp Dịch vụ Thông báo (Notification Provider)** | Đối tác bên ngoài cung cấp hạ tầng gửi tin nhắn SMS, OTP, Push Notification. |

---

### 2. Ma trận Stakeholder (Stakeholder Power/Interest Matrix)

```text
       Mức độ Ảnh hưởng (Power)
                 ▲
          CAO    │   [B] Quản lý chặt chẽ         │   [A] Hợp tác tối đa
                 │   (Keep Satisfied)             │   (Manage Closely)
                 │   - Bộ phận Kế toán & Tài chính│   - Ban Giám đốc (Sponsor)
                 │   - Nhà cung cấp Thanh toán    │   - Bộ phận Vận hành
                 │   - Nhà cung cấp Thông báo     │   - Đội ngũ Phát triển & QA
                 │                                │   - Business Analyst (BA)
                 ├────────────────────────────────┼───────────────────────────────
          THẤP   │   [C] Theo dõi tối thiểu       │   [D] Cung cấp thông tin
                 │   (Monitor)                    │   (Keep Informed)
                 │                                │   - Khách hàng (Customers)
                 │                                │   - Tài xế (Drivers)
                 │                                │   - Bộ phận Chăm sóc Khách hàng
                 └────────────────────────────────┴───────────────────────────────►
                                THẤP                            CAO
                                       Mức độ Quan tâm (Interest)

```

Bước 3: Xác định Business Goal
# BƯỚC 3: XÁC ĐỊNH MỤC TIÊU KINH DOANH (BUSINESS GOALS)

---

### Mục tiêu Tổng quát (Strategic Vision)

Xây dựng và triển khai thành công nền tảng **CAB System** trong vòng **7 tuần**, chuyển đổi từ mô hình vận hành thủ công sang hệ thống đặt xe tự động hóa hoàn toàn. Hệ thống mới đảm bảo khả năng mở rộng linh hoạt, hoạt động ổn định ở tải cao, bảo mật dữ liệu giao dịch và tạo tiền đề để doanh nghiệp phát triển thêm các dịch vụ mới trong tương lai.

---

### Danh sách Mục tiêu Kinh doanh

| STT | Mục tiêu Kinh doanh | Mô tả chi tiết |
|---|---|---|
| **1** | **Tự động hóa vận hành** | Tự động ghép chuyến cho tài xế và khách hàng dựa trên vị trí GPS, giảm 95% sự can thiệp thủ công từ tổng đài. |
| **2** | **Rút ngắn thời gian chờ xe** | Giảm thời gian tìm và kết nối tài xế xuống dưới 30 giây cho mỗi yêu cầu đặt xe. |
| **3** | **Minh bạch thông tin chuyến đi** | Giúp khách hàng nắm rõ vị trí tài xế, thời gian xe đến, giá cước và lịch sử chuyến đi theo thời gian thực. |
| **4** | **Đảm bảo hệ thống chạy liên tục** | Giữ cho hệ thống luôn hoạt động ổn định (đạt 99.5% uptime), không bị sập toàn bộ kể cả khi giao dịch tăng cao vào giờ cao điểm. |
| **5** | **An toàn thanh toán & Bảo mật** | Tích hợp thanh toán qua cổng thanh toán uy tín, bảo mật thông tin tài khoản và không lưu dữ liệu thẻ ngân hàng của khách hàng. |
| **6** | **Dễ dàng mở rộng tương lai** | Xây dựng kiến trúc linh hoạt để sau này có thể thêm loại dịch vụ mới (giao hàng, đi chung), thêm phương thức thanh toán mà không phải làm lại hệ thống. |


---


Bước 4: Xác định scope (phạm vi)
# BƯỚC 4: XÁC ĐỊNH PHẠM VI DỰ ÁN (PROJECT SCOPE)

### 1. Phân định Phạm vi Thực hiện (In-Scope vs. Out-of-Scope)

| Hạng mục / Chức năng | In-Scope (Thuộc phạm vi 7 tuần) | Out-of-Scope (Không thực hiện ở pha này) |
|---|---|---|
| **Quản lý Tài khoản & Hồ sơ** | - Đăng ký, đăng nhập, quản lý thông tin cho Khách hàng, Tài xế, Nhân viên Vận hành.<br>- Cập nhật hồ sơ tài xế và thông tin phương tiện.<br>- Phân quyền truy cập quản trị cơ bản. | - Đăng nhập qua Mạng xã hội (Google, Facebook, Apple ID).<br>- Xác thực sinh trắc học (FaceID/Vân tay). |
| **Đặt xe & Ghép chuyến** | - Nhập điểm đón/điểm đến, chọn loại xe.<br>- Tự động tìm & gợi ý tài xế theo vị trí GPS và trạng thái sẵn sàng.<br>- Xử lý tự động chuyển tài xế khác khi tài xế trước từ chối/không phản hồi.<br>- Thông báo khi không tìm thấy tài xế. | - Đặt xe trước theo lịch hẹn (Scheduled Rides).<br>- Đặt chuyến đi qua nhiều điểm dừng (Multi-stop rides).<br>- Thuật toán ghép chuyến thông minh tối ưu theo hành vi/lịch sử tài xế. |
| **Theo dõi & Cập nhật Tiến trình** | - Cập nhật trạng thái chuyến đi (*Đã nhận, Đã đến điểm đón, Đã đón khách, Đang di chuyển, Hoàn thành*).<br>- Khách hàng theo dõi vị trí tài xế theo thời gian thực.<br>- Lưu thông tin vị trí GPS của tài xế. | - Chia sẻ hành trình thời gian thực cho người thân (Share Trip Live).<br>- Tích hợp bản đồ riêng của doanh nghiệp (Sử dụng API Bản đồ bên thứ 3 sẵn có). |
| **Tính cước & Thanh toán** | - Tự động tính cước chuyến đi theo loại dịch vụ và thông tin tuyến đường.<br>- Thanh toán bằng Tiền mặt.<br>- Tích hợp 01 Cổng thanh toán điện tử bên ngoài (Payment Gateway).<br>- Xử lý khi thanh toán điện tử thất bại (cho phép thử lại/chuyển tiền mặt). | - Ví điện tử nội bộ / Tài khoản trả trước (In-app Wallet).<br>- Lưu trữ trực tiếp thông tin thẻ ngân hàng/thẻ tín dụng trên hệ thống CAB.<br>- Áp dụng Mã giảm giá / Chương trình khuyến mãi phức tạp. |
| **Thông báo (Notifications)** | - Gửi thông báo Push Notification / SMS về trạng thái chuyến đi và kết quả thanh toán cho Khách hàng & Tài xế.<br>- Tích hợp 01 Nhà cung cấp dịch vụ thông báo bên ngoài. | - Tích hợp Đa kênh thông báo nâng cao (Zalo ZNS, WhatsApp, Email Marketing). |
| **Đánh giá & Lịch sử** | - Khách hàng xem lịch sử chuyến đi và số tiền đã trả.<br>- Khách hàng đánh giá tài xế (sao/nhận xét) sau chuyến đi. | - Hệ thống thưởng/phạt tự động dựa trên đánh giá sao.<br>- Chương trình Khách hàng thân thiết (Loyalty Program). |
| **Quản trị & Báo cáo (Admin)** | - Dashboard xem các chuyến đi đang diễn ra và trạng thái tài xế thời gian thực.<br>- Tra cứu lịch sử giao dịch & hỗ trợ can thiệp chuyến đi bị lỗi.<br>- Báo cáo cơ bản: Số lượng chuyến, doanh thu, tỷ lệ hoàn thành/hủy, hiệu quả tài xế. | - Báo cáo phân tích dự báo bằng AI/Machine Learning.<br>- Tự động xuất hóa đơn điện tử (e-Invoice) kết nối Tổng cục Thuế. |

---

### 2. Phạm vi Phát triển Tương lai (Future Roadmap)

Nhằm đảm bảo mục tiêu **triển khai trong 7 tuần**, các tính năng dưới đây được hoãn lại và sẽ phát triển trong các giai đoạn tiếp theo dựa trên kiến trúc mở của hệ thống:

1. **Mở rộng Loại hình Dịch vụ:** Bổ sung giao hàng (CAB Delivery), đi chung xe (CAB Pool), thuê xe theo giờ.
2. **Đa dạng hóa Thanh toán:** Tích hợp thêm các Cổng thanh toán mới, Ví điện tử (Momo, VNPay, ZaloPay) và Ví nội bộ.
3. **Mở rộng Kênh Thông báo:** Bổ sung các nhà cung cấp SMS/OTT mới để tối ưu chi phí gửi tin.
4. **Tối ưu Thuật toán Ghép chuyến:** Nâng cấp AI để dự báo nhu cầu đặt xe theo khu vực và điều phối tài xế trước (Surge Pricing & Dynamic Dispatch).
