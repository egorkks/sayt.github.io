document.addEventListener('DOMContentLoaded', function () {
    const accessForm = document.getElementById('accessForm');
    const accessButton = document.getElementById('accessButton');
    const selectedServiceInfo = document.getElementById('selectedServiceInfo');

    let selectedService = '';

    accessForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        const accessCodeInput = document.getElementById('accessCode');
        const accessCode = accessCodeInput.value;

        // Пример: Проверка кода (ваша логика проверки должна быть на сервере)
        if (accessCode === '1111') {

            // Сохраняем выбор услуги в localStorage
            localStorage.setItem('selectedService', selectedService);

            // Перенаправляем пользователя на другую страницу в папке system1
            window.location.href = "file:///C:/Users/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C/Desktop/%D0%B7%D0%B0%D0%BA%D0%B7%D0%B0/system/system1/main_functionality.html"
            return true; // Разрешаем отправку формы
        } else {
            alert('Неправильный код доступа. Попробуйте снова.');
            return false; // Запрещаем отправку формы
        }
    });

    const serviceButtons = document.querySelectorAll('input[name="service"]');
    serviceButtons.forEach(function (button) {
        button.addEventListener('change', function () {
            selectedService = button.value; // Здесь сохраняется выбор пользователя
        });
    });
    
    function toggleAboutUs() {
        const aboutUsSection = document.getElementById('aboutUsSection');
        aboutUsSection.style.display = aboutUsSection.style.display === 'none' ? 'block' : 'none';
    }

    function resetButtons() {
        const aboutUsSection = document.getElementById('aboutUsSection');
        aboutUsSection.style.display = 'none';
    }

    function redirectToTelegram() {
        window.location.href = 'https://t.me/w3trr';
    }
});


