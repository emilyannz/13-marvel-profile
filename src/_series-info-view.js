'use strict';

export default class SeriesInfoView {
  constructor(element, data) {
    this.element = element;
    this.data = data;

    this.renderImage();
    this.renderTitle();
    this.renderYears();
    this.renderCreators();
  }

renderImage() {
    this.element.querySelector(`.sidebar__image`).innerHTML = `
    <img class="sidebar__image-pic" src="${this.data.thumbnail.path}.${this.data.thumbnail.extension}">
    ;
  }

  renderTitle() {
    this.element.querySelector(`.sidebar__spiderGirlTitle`).innerText = this.data.title;
  }

  renderYears() {
   this.element.querySelector(`.sidebar__spiderGirlYears`).innerText = `${this.data.startYear} - ${this.data.endYear}`;
 }

  renderCreators() {
    this.data.creators.items.forEach((creator) => {
      const newListItem = document.createElement(`li`);
      newListItem.innerText = creator.name;
      this.element.querySelector(`.sidebar__list-of-creators`).appendChild(newListItem);
    });
  }
}
