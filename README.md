# Đánh Giá Giảng Viên Trên Hệ Thống Nhanh Nhất 🚀

Hướng dẫn này cung cấp hai cách để tự động điền thông tin đánh giá giảng viên trên hệ thống [https://mydtu.duytan.edu.vn/](https://mydtu.duytan.edu.vn/) một cách nhanh chóng và dễ dàng: sử dụng mã JavaScript trong Console (Cách 1) hoặc sử dụng tiện ích mở rộng Chrome (Cách 2).

## Cách 1: Sử dụng Mã JavaScript trong Console

### Bước 1: Mở DevTools

1. Mở trình duyệt (Chrome, Firefox, hoặc Edge).
2. Truy cập trang [https://mydtu.duytan.edu.vn/](https://mydtu.duytan.edu.vn/).
3. Nhấn phím **F12** trên bàn phím (hoặc **Ctrl + Shift + I** trên Windows, **Cmd + Option + I** trên Mac) để mở DevTools.
   - **Hoặc**: Nhấp chuột phải trên trang web và chọn **Inspect (Kiểm tra)**.

### Bước 2: Chuyển sang tab Console

1. Khi DevTools đã mở, bạn sẽ thấy một số tab (Elements, Console, Network, Sources, v.v.).
2. Nhấp vào tab **Console** để tiếp tục.

### Bước 3: Dán và chạy đoạn mã

1. Trong tab Console, dán đoạn mã dưới đây vào:

    ```javascript
    for (let i = 0; i <= 47; i++) {
        const radioId = `R${i}A`;
        const radio = document.getElementById(radioId);
        if (radio) {
            radio.checked = true;
            checkOption(radioId);
        }
    }

    for (let j = 48; j <= 52; j++) {
        const textareaId = `R${j}`;
        const textarea = document.getElementById(textareaId);
        if (textarea) {
            textarea.value = "Rất Tốt";
        }
    }

    alert("Đã tự động nhập thành công!");
    console.log("Đã tự động nhập thành công!");
    ```

2. Nếu bạn gặp thông báo cảnh báo sau khi dán mã:

    ```
    Warning: Don’t paste code into the DevTools Console that you don’t understand or haven’t reviewed yourself. This could allow attackers to steal your identity or take control of your computer. Please type ‘allow pasting’ below and hit Enter to allow pasting.
    ```

    - Nhập **allow pasting** vào Console và nhấn **Enter** để cấp phép dán mã.
    - Sau đó, dán lại đoạn mã trên vào Console.

3. Nhấn **Enter** để chạy đoạn mã.

### Bước 4: Kiểm tra kết quả

- Sau khi nhấn **Enter**, bạn sẽ thấy thông báo "Đã tự động nhập thành công!".
- Lúc này, các câu từ **Câu 1** đến **Câu 48** sẽ được tự động chọn, và các câu từ **Câu 49** đến **Câu 52** sẽ được tự động điền giá trị là "Rất Tốt".

---

## Cách 2: Sử dụng Tiện Ích Mở Rộng Chrome

### Bước 1: Tải và cài đặt tiện ích
1. Tải tệp ZIP của tiện ích bằng một trong hai cách sau:
   - **Cách 1**: Nhấp vào liên kết này để tải trực tiếp: [DTU-extension.zip](https://github.com/duyvinh09/Script-Danh-Gia-Giang-Vien/releases/download/extension/DTU-extension.zip).
   - **Cách 2**: Truy cập [https://github.com/duyvinh09/Script-Danh-Gia-Giang-Vien](https://github.com/duyvinh09/Script-Danh-Gia-Giang-Vien), nhấp vào nút **Code** (nút màu xanh lá cây gần góc trên bên phải của trang).

     ![Screenshot of Download ZIP option](https://github.com/user-attachments/assets/2c4325ce-bbb8-408b-bedf-2eec20ceb214)

     Khi menu dropdown hiện ra, nhấp vào **Download ZIP** để tải tệp ZIP về máy tính.
1. Truy cập [https://github.com/duyvinh09/Script-Danh-Gia-Giang-Vien](https://github.com/duyvinh09/Script-Danh-Gia-Giang-Vien).
2. Giải nén tệp ZIP vừa tải vào một thư mục trên máy tính.
3. Mở trình duyệt Chrome và truy cập **chrome://extensions/**.
4. Bật **Chế độ dành cho nhà phát triển** (Developer mode) ở góc trên bên phải.
5. Nhấp vào **Tải tiện ích không được đóng gói** (Load unpacked) và chọn thư mục chứa tiện ích đã giải nén.
6. Tiện ích sẽ được thêm vào Chrome.

### Bước 2: Sử dụng tiện ích

1. Truy cập trang [https://mydtu.duytan.edu.vn/](https://mydtu.duytan.edu.vn/) và mở trang đánh giá giảng viên.
2. Nhấp vào biểu tượng của tiện ích trên thanh công cụ Chrome để mở giao diện.
3. Trong giao diện tiện ích:
   - Chọn **Xếp loại (Câu 1 - 48)** từ menu thả xuống (ví dụ: "Rất Tốt", "Tốt", v.v.).
   - Nhập **Nội dung đánh giá (Câu 49 - 52)** vào ô văn bản. Nếu bỏ trống, hệ thống sẽ tự động điền giá trị mặc định (ví dụ: "Giảng viên dạy tốt").

    ![Screenshot of extension interface](https://github.com/user-attachments/assets/28ea3711-5797-4379-a7ec-3033fe467ecd)

4. Nhấp vào nút **Xác nhận** để tự động điền đánh giá.
5. Sau khi nhấp **Xác nhận**, tiện ích sẽ tự động điền các câu đánh giá.
6. Việc của bạn bây giờ chỉ cần nhập **mã xác nhận** rồi nhấp vào nút **GỬI ĐÁNH GIÁ** trên hệ thống DTU để hoàn tất.

### Bước 3: Kiểm tra kết quả

- Sau khi nhấp **Xác nhận**, các câu từ **Câu 1** đến **Câu 48** sẽ được chọn theo xếp loại bạn đã chọn, và các câu từ **Câu 49** đến **Câu 52** sẽ được điền nội dung bạn đã nhập (hoặc giá trị mặc định nếu bỏ trống).
- Đánh giá sẽ được tự động gửi, và bạn sẽ thấy thông báo xác nhận từ hệ thống DTU.

---

## Lưu ý

- Với **Cách 1**, bạn có thể sửa các giá trị trong đoạn mã nếu muốn thay đổi đánh giá.
- Với **Cách 2**, tiện ích cung cấp giao diện thân thiện hơn và tự động hóa toàn bộ quy trình, bao gồm gửi đánh giá.
- Hãy đảm bảo bạn hiểu rõ mã hoặc tiện ích trước khi sử dụng để tránh rủi ro bảo mật.

## Liên hệ

Nếu bạn có bất kỳ câu hỏi hoặc góp ý nào, hãy mở một Issue trên [GitHub](https://github.com/duyvinh09/Script-Danh-Gia-Giang-Vien) hoặc liên hệ với mình qua [Email](mailto:dinhduyvinh69@gmail.com).

---

**Cảnh báo**: Hãy sử dụng mã hoặc tiện ích này một cách có trách nhiệm và tuân theo các quy định của nhà trường về việc đánh giá giảng viên.