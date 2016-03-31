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
    <img class="sidebar__image-pic" src="${this.data.thumbnail.path}.${this.data.thumbnail.extension}">`;
  }

  renderTitle() {
    this.element.querySelector(`.sidebar__title`).innerText = this.data.title;
  }

  renderYears() {
    this.element.querySelector(`.sidebar__years`).innerText = `${this.data.startYear} - ${this.data.endYear}`;
  }

  renderCreators() {
    this.data.creators.items.forEach((character) => {
      const newListItem = document.createElement(`li`);
      newListItem.innerText = character.name;
      this.element.querySelector(`.character__list`).appendChild(newListItem);
    });
  }
}
