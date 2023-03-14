export default class Card {
  constructor(data, cardsTemplate) {
    this._solder = data.solder;
    this._subtitle = data.subtitle;
    this._text = data.text;
    this._image = data.image;
    this._link = data.link;
    this._handleImageClick = data.handleImageClick;
    this._template = cardsTemplate;
    this.data = data;
  }
  _getTemplate() {
    return this._template.cloneNode(true);
  }
  // Creating a card
  createCard() {
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector(".article-card__image");
    this._cardLink = this._cardElement.querySelector(".article-card__link");
    this._cardElement.querySelector(".article-card__title").textContent =
      this._subtitle;
    this._cardElement.querySelector(".article-card__text").textContent =
      this._text;
    this._cardImage.alt = `${this._solder}`;
    this._cardImage.src = this._image;
    this._cardLink.href = `${this._link}`;
    return this._cardElement;
  }
}
