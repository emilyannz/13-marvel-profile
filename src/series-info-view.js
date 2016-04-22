'use strict';

export default class SidebarView {
  constructor(element, data) {
    this.element = element;
    this.data = data;
    this.creatorList();

    const imageUrl = `${data.thumbnail.path}.${data.thumbnail.extension}`;

    // this.element.querySelector(`.img-container__pic`).src = imgUrl;

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







//     this.renderImage();
//     this.renderTitle();
//     this.renderYears();
//     this.renderCreators();
//   }
//
//   renderImage() {
//     this.element.querySelector(`.profile-pic`).innerHTML = `
//       <img class="profile-pic--image" src="${this.data.thumbnail.path}.${this.data.thumbnail.extension}" alt=""/>
//     `;
//   }
//
//   renderTitle() {
//     this.element.querySelector(`.profile-title`).innerText = this.data.title;
//   }
//
//   renderYears() {
//     this.element.querySelector(`.profile-years`).innerText = `${this.data.startYear} - ${this.data.endYear}`;
//   }
//
//   renderCreators() {
//     this.data.creators.items.forEach((creator) => {
//       const newListItem = document.createElement(`li`);
//       newListItem.innerText = creator.name;
//       this.element.querySelector(`.creator-list`).appendChild(newListItem);
//     });
//   }
// }
