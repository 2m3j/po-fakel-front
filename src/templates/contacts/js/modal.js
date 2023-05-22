function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector) {
    const modal = document.querySelector(modalSelector),
          modalTrigger = document.querySelectorAll(triggerSelector);

    modalTrigger.forEach(item => {
        // item.addEventListener('click', () => openModal(modalSelector));
        item.addEventListener('submit', () => openModal(modalSelector));
    });

    modal.addEventListener('click', (e) => {
        // console.log(e.target)
        // console.log(modal)
        // console.log(e.target === modal)
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });
}

export default modal;
