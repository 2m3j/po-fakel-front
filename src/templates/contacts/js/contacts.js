export default class ContractsPage {
    start() {
        const textarea = document.getElementById('userComment'),
            namePlaceholder = document.getElementById('placeholderName'),
            phonePlaceholder = document.getElementById('placeholderPhone'),
            mailPlaceholder = document.getElementById('placeholderMail'),
            textareaPlaceholder = document.getElementById('labelComment'),
            inputsPlaceholder = document.querySelectorAll('.form-contacts__placeholder'),
            textareaCurrent = document.querySelector('.form-contacts__current'),
            formInputs = document.querySelectorAll('.form-contacts__input'),
            deleteInputsValue = document.querySelectorAll('.form-contacts__delete'),
            successInputsValue = document.querySelectorAll('.form-contacts__success'),
            errorMessage = document.querySelectorAll('.form-contacts__message');
        textarea.addEventListener('input', () => {
            if (textarea.value !== '') {
                textareaPlaceholder.classList.add('_active');
                textarea.classList.add('_active');
            } else {
                textareaPlaceholder.classList.remove('_active');
                textarea.classList.remove('_active');
            }

            textareaCurrent.textContent = textarea.value.length;
        });

        formInputs.forEach((item, i) => {
            item.addEventListener('input', e => {
                if (item.value !== '') {
                    item.classList.add('_active');
                    deleteInputsValue.forEach((btn, x) => {
                        if (i === x) {
                            btn.classList.remove('_active');
                        }
                    });
                    switch (i) {
                        case 0:
                            namePlaceholder.classList.add('_active');
                            break;
                        case 1:
                            phonePlaceholder.classList.add('_active');
                            break;
                        case 2:
                            mailPlaceholder.classList.add('_active');
                            break;
                    }
                } else {
                    item.classList.remove('_active');
                    deleteInputsValue.forEach((btn, x) => {
                        if (i === x) {
                            btn.classList.add('_active');
                        }
                    });
                    removeClassPlaceholders();
                }

                if (i === 0) {
                    // let regFio = /^\w+\s\w+\s\w+$/iu;
                    // let regFio = /^([а-яё]+|[a-z]+)$/i;
                    let regFio = /^[a-zа-яё\s]+$/iu;

                    if (!this.#validate(regFio, item.value) && item.value !== '') {
                        this.#notValidate(item, errorMessage[i], 'Используйте кириллицу или латиницу')
                    } else {
                        this.#valid(item, errorMessage[i], '')
                    }

                    if (regFio.test(item.value.trim())) {
                        namePlaceholder.classList.add('_success');
                        item.classList.add('_success');
                        successInputsValue[i].classList.add('_active');
                        deleteInputsValue[i].classList.add('_active');
                    } else {
                        namePlaceholder.classList.remove('_success');
                        item.classList.remove('_success');
                        successInputsValue[i].classList.remove('_active');
                    }
                } else if (i === 1) {
                    let regDigit = /^[0-9]+$/gm,
                        regNotDigit = /\D+/g;

                    if (!this.#validate(regDigit, item.value) && item.value !== '') {
                        this.#notValidate(item, errorMessage[i], 'Используйте только цифры')
                    } else {
                        this.#valid(item, errorMessage[i], '')
                    }

                    if (regNotDigit.test(item.value)) {
                        phonePlaceholder.classList.add('_error');
                        item.classList.add('_error');
                    } else {
                        phonePlaceholder.classList.remove('_error');
                        item.classList.remove('_error');
                    }

                    if (regDigit.test(item.value)) {
                        phonePlaceholder.classList.add('_success');
                        item.classList.add('_success');
                        successInputsValue[i].classList.add('_active');
                        deleteInputsValue[i].classList.add('_active');
                    } else {
                        phonePlaceholder.classList.remove('_success');
                        item.classList.remove('_success');
                        successInputsValue[i].classList.remove('_active');
                    }
                } else if (i === 2) {
                    let regMail = /\w+@\w+\.\w+/;

                    if (!this.#validate(regMail, item.value) && item.value !== '') {
                        this.#notValidate(item, errorMessage[i], 'Используйте знаки «@» и точку')
                    } else {
                        this.#valid(item, errorMessage[i], '')
                    }

                    if (regMail.test(item.value)) {
                        mailPlaceholder.classList.add('_success');
                        item.classList.add('_success');
                        successInputsValue[i].classList.add('_active');
                        deleteInputsValue[i].classList.add('_active');
                    } else {
                        mailPlaceholder.classList.remove('_success');
                        item.classList.remove('_success');
                        successInputsValue[i].classList.remove('_active');
                    }
                }

                deleteInputsValue.forEach((btn, x) => {
                    if (i === x) {
                        btn.addEventListener('click', () => {
                            item.value = '';
                            btn.classList.add('_active');
                            item.classList.remove('_active');
                            item.classList.remove('_error');
                            phonePlaceholder.classList.remove('_error');
                            item.classList.remove('_success');
                            phonePlaceholder.classList.remove('_success');
                            removeClassPlaceholders();
                            errorMessage[i].textContent = '';
                        });
                    }
                });

            });

            function removeClassPlaceholders() {
                switch (i) {
                    case 0:
                        namePlaceholder.classList.remove('_active');
                        break;
                    case 1:
                        phonePlaceholder.classList.remove('_active');
                        break;
                    case 2:
                        mailPlaceholder.classList.remove('_active');
                        break;
                }
            }
        });

        document.querySelector('.form-contacts').addEventListener('submit', e => {
            e.preventDefault();
            document.querySelector(".form-contacts__form").innerHTML = '<div class="alert alert-success">Сообщение отправлено<div>';
        });
    }

    showMore() {
        const dots = document.getElementById("dots"),
            moreText = document.getElementById("more"),
            btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Читать далее";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Свернуть";
            moreText.style.display = "inline";
        }
    }

    #validate(regex, inp) {
        // return regex.test(inp)
        return inp.match(regex)
    }

    #notValidate(inp, elem, message) {
        elem.textContent = message;
    }

    #valid(inp, elem, message) {
        elem.textContent = message;
    }
}
