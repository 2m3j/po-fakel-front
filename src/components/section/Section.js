import { CardList } from "../card-list/CardList";
export default class Section {
  constructor({ items, renderer, filter }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this.renderer = renderer;
    this._items = items;
    this._filter = filter;
  }
  renderItems() {
    this._items
      .slice(0, CardList(this._items, window.innerWidth))
      .forEach((item) => {
        this.renderer(item);
      });
  }
  addItem(card) {
    this._container.append(card);
  }
  filter() {
    this.filter(searchQuary, solder);
  }
}
