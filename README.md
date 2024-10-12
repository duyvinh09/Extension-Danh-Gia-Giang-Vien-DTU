# Đánh Giá Giảng Viên Trên Hệ Thống Nhanh Nhất 🚀

Hướng dẫn này sẽ giúp bạn tự động điền thông tin đánh giá giảng viên trên hệ thống một cách nhanh chóng và dễ dàng.

## Bước 1: Mở DevTools

1. Mở trình duyệt (Chrome, Firefox, hoặc Edge).
2. Truy cập trang [https://mydtu.duytan.edu.vn/](https://mydtu.duytan.edu.vn/).
3. Nhấn phím **F12** trên bàn phím (hoặc **Ctrl + Shift + I** trên Windows, **Cmd + Option + I** trên Mac) để mở DevTools.
   - **Hoặc**: Nhấp chuột phải trên trang web và chọn **Inspect (Kiểm tra)**.

## Bước 2: Chuyển sang tab Console

1. Khi DevTools đã mở, bạn sẽ thấy một số tab (Elements, Console, Network, Sources, v.v.).
2. Nhấp vào tab **Console** để tiếp tục.

## Bước 3: Dán và chạy đoạn mã

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

## Bước 4: Kiểm tra kết quả

- Sau khi nhấn **Enter**, bạn sẽ thấy thông báo "Đã tự động nhập thành công!".
- Lúc này, các câu từ **Câu 1** đến **Câu 48** sẽ được tự động chọn, và các câu từ **Câu 49** đến **Câu 52** sẽ được tự động điền giá trị là "Rất Tốt".

## Lưu ý

- Bạn cũng có thể sửa các giá trị trong đoạn mã nếu muốn đánh giá khác đi.

## Liên hệ

Nếu bạn có bất kỳ câu hỏi hoặc góp ý nào, hãy mở một Issue hoặc liên hệ với tôi qua email.

---

**Cảnh báo**: Hãy sử dụng đoạn mã này một cách có trách nhiệm và tuân theo các quy định của nhà trường về việc đánh giá giảng viên.
