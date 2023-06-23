export default class MobileNav {
    constructor() {
    }

    start() {
        const btn = document.querySelector(".mobile-nav-btn");
        btn.onclick = function () {
            document.querySelector('body').classList.toggle('noscroll');
            this.classList.toggle('mobile-nav-btn_opened');
            document.querySelector('.mobile-nav').classList.toggle('mobile-nav_opened');
        }
    }
}
