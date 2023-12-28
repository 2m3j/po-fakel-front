export default class AboutPage {
    start() {
        const btnText = document.getElementById('about-details__more-btn');
        const moreText = document.getElementById('about-details__more');

        const more = () => {
            let moreTextStyle = window.getComputedStyle(moreText);
            if (moreTextStyle.display === "none") {
                moreText.classList.add('d-inline');
                btnText.innerHTML = "Свернуть";
            } else {
                btnText.innerHTML = "Читать далее";
                moreText.classList.remove('d-inline');
            }
        };
        if (btnText) {
            btnText.addEventListener('click', () => more());
        }
    }
}
