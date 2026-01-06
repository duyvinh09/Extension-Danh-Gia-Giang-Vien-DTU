if (window.location.href.includes('https://mydtu.duytan.edu.vn/sites/index.aspx?p=home_ratingform')) {
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === 'autoRate') {
            try {
                // Xử lý câu 1-48 (radio buttons)
                for (let i = 0; i <= 47; i++) {
                    const radioId = `R${i}${request.optionChar}`;
                    const radio = document.getElementById(radioId);
                    if (radio) {
                        radio.checked = true;
                        radio.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                }
                
                // Xử lý câu 49-52 (textarea)
                for (let j = 48; j <= 52; j++) {
                    const textareaId = `R${j}`;
                    const textarea = document.getElementById(textareaId);
                    if (textarea) {
                        textarea.value = request.text;
                        textarea.dispatchEvent(new Event('input', { bubbles: true }));
                    }
                }
                
                // Xử lý câu 53 (radio buttons với 5 lựa chọn - ID từ R52A đến R52E)
                if (request.question53) {
                    const question53Options = ['A', 'B', 'C', 'D', 'E']; // Tương ứng với 1,2,3,4,5
                    const selectedOption = question53Options[parseInt(request.question53) - 1];
                    const radioId53 = `R52${selectedOption}`; // Sử dụng R52 thay vì R53
                    const radio53 = document.getElementById(radioId53);
                    if (radio53) {
                        radio53.checked = true;
                        radio53.dispatchEvent(new Event('change', { bubbles: true }));
                        console.log(`Đã chọn câu 53: ${radioId53}`);
                    } else {
                        console.log(`Không tìm thấy radio button cho câu 53: ${radioId53}`);
                    }
                }
                
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });

                sendResponse({ success: true });
                
            } catch (error) {
                console.error('Lỗi khi thực hiện autoRate:', error);
                sendResponse({ success: false, error: error.message });
            }
            return true;
        }
    });
}