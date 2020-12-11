import Menu from './menu.js';
import { scrollSmooth } from './scroll.js';


window.addEventListener('DOMContentLoaded', () => {
    // MENU
    new Menu('.hamburger', '.menu', '.menu__close', '.menu__overlay').init();

    //Percentage
    const counters = document.querySelectorAll('.experience__percent-value'),
          lines = document.querySelectorAll('.experience__percent-track span');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });

    // Smooth Scroll
    scrollSmooth('a[href*="#s_"]');


    //Form

    const form = document.querySelector('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        if (formValidate(form) === 0) {
            const formData = new FormData(form);
            let response = await fetch('send.php', {
                method: 'POST',
                body: formData
            });
            if(response.ok) {
                form.reset();
            }
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        formReq.forEach(input => {
            formRemoveError(input);

            if (input.getAttribute("type") === "email") {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                } 
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        });
        return error;
    }

    function formAddError(input) {
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});