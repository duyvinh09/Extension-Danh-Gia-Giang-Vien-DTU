if (window.location.href.includes('https://mydtu.duytan.edu.vn/sites/index.aspx?p=home_ratingform')) {
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === 'autoRate') {
            try {
                for (let i = 0; i <= 47; i++) {
                    const radioId = `R${i}${request.optionChar}`;
                    const radio = document.getElementById(radioId);
                    if (radio) {
                        radio.checked = true;
                        const event = new Event('change', { bubbles: true });
                        radio.dispatchEvent(event);
                    }
                }
                
                for (let j = 48; j <= 52; j++) {
                    const textareaId = `R${j}`;
                    const textarea = document.getElementById(textareaId);
                    if (textarea) {
                        textarea.value = request.text;
                        const event = new Event('input', { bubbles: true });
                        textarea.dispatchEvent(event);
                    }
                }
                
                const element = document.getElementById('52');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
                
                console.log({result: "Đã tự động nhập thành công!"});
            } catch (error) {
                console.log({result: "Có lỗi xảy ra: " + error.message});
            }
        }
        return true;
    });
}