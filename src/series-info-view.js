'use strict';

export default class SidebarView {
  constructor(element, data) {
    this.element = element;
    this.data = data;
    this.creatorList();

    const imageUrl = `${data.thumbnail.path}.${data.thumbnail.extension}`;
    this.element.querySelector(`.sidebar-image-container__picture`).src = imageUrl;
    this.element.querySelector(`.sidebar-profile__name`).innerText = data.title;
    this.element.querySelector(`.sidebar-profile__year`).innerText =
     `${data.startYear} - ${data.endYear}`;
  }

  creatorList() {
    this.data.creators.items.forEach((creator) => {
      const creatorsListItems = document.querySelector(`.creators`);
      const creatorsElement = document.createElement(`li`);
      creatorsElement.innerText = creator.name;
      creatorsListItems.appendChild(creatorsElement);
    });
  }
}
