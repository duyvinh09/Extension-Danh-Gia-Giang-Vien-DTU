document.addEventListener('DOMContentLoaded', function() {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
    
    function showNotification(message, type = 'info', icon = 'info-circle') {
        notification.className = `notification ${type}`;
        notificationMessage.innerHTML = `<i class="fas fa-${icon}"></i> ${message}`;
        notification.classList.remove('hidden');
        
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 5000);
    }

    document.getElementById('confirmButton').addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const currentTab = tabs[0];
            
            if (!currentTab.url.includes('https://mydtu.duytan.edu.vn/sites/index.aspx?p=home_ratingform')) {
                showNotification('Vui lòng mở trang đánh giá DTU để sử dụng tiện ích', 'error', 'exclamation-triangle');
                console.log('Tiện ích chỉ hoạt động trên trang đánh giá DTU');
                return;
            }

            const ratingValue = document.getElementById('rating').value;
            const optionChar = getOptionChar(ratingValue);
            const customText = document.getElementById('customText').value;
            const finalText = customText.trim() === '' ? getDefaultText(ratingValue) : customText;
            
            chrome.tabs.sendMessage(currentTab.id, {
                action: 'autoRate',
                optionChar: optionChar,
                text: finalText
            }, function(response) {
                if (chrome.runtime.lastError) {
                    showNotification(`Lỗi: ${chrome.runtime.lastError.message}`, 'error', 'exclamation-circle');
                    console.error('Lỗi từ chrome.runtime:', chrome.runtime.lastError);
                    return;
                }
                if (response && response.success) {
                    showNotification('Đánh giá thành công! Vui lòng nhập CAPTCHA để xác nhận', 'success', 'check-circle');
                    console.log('Đánh giá thành công', response);
                } else {
                    showNotification('Đánh giá không thành công. Vui lòng thử lại.', 'error', 'exclamation-triangle');
                    console.log('Đánh giá không thành công', response);
                }
            });
        });
    });

    function getOptionChar(ratingValue) {
        const map = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F' };
        return map[ratingValue] || 'A';
    }

    function getDefaultText(ratingValue) {
        const texts = {
            '1': "Giảng viên xuất sắc, nhiệt tình, phương pháp giảng dạy hiệu quả",
            '2': "Giảng viên rất tốt, truyền đạt kiến thức rõ ràng",
            '3': "Giảng viên dạy tốt, có kiến thức chuyên môn",
            '4': "Giảng viên dạy bình thường, đạt yêu cầu cơ bản",
            '5': "Giảng viên cần cải thiện phương pháp giảng dạy",
            '6': "Giảng viên cần nâng cao chất lượng giảng dạy"
        };
        return texts[ratingValue] || "Giảng viên dạy tốt";
    }
});