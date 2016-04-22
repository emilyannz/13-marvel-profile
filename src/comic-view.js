'use strict';

export default class ComicView {
  constructor(comicProfile) {
    this.comicItem = comicProfile;
    this.element = document.createElement(`li`);
    this.element.classList.add(`comics-profile`);

    this.element.innerHTML = `
      <div class="comics-profile__image">
        <img class="comics-profile__image__avatar" src=
        "${comicProfile.thumbnail.path}.${comicProfile.thumbnail.extension}" alt="" />
     </div>

      <div class="comics-profile__issue">
      <h3 class="comics-profile__issue-number">#${comicProfile.issueNumber}<h3>
      </div>

      <div class="comics-profile__details">
      <h3 class="comics-profile__details__name">${comicProfile.title}</h3>
      </div>

      <button class="comics-profile__button">Read More</button>

      <div class="modal">
      <div class="modal-card">
        <i class="fa fa-times modal-escape"></i>
        <p class="modal-title">${this.comicProfile.title}</p>
        <p class="modal-description">${this.comicProfile.description}</p>
      </div>


    const modal = this.element.querySelector(`.modal`);
    const modalActive = this.element.querySelector(`.modal-active`);

    this.element.querySelector(`.comics-profile__button`).addEventListener(`click`, () => {
      modal.classList.remove(`modal-active`);
    });

    this.element.querySelector(`.modal-escape`).addEventListener(`click`, () => {
    modal.classList.remove(`modal-active`);
  });
}


`
//     ${this.result.title}</div>
//     <div id="modal" class="modal--active modal">
//       <div class="modal-container">
//         <div class="modal__close">
//           <p class="modal__close--button">x close</p>
//         </div>
//         <div class="modal__content">
//           <p class="modal__content--title">${this.result.title}</p>
//           <p class="modal__content">${this.result.description}</p>
//         </div>
//       </div>
//     </div>
//     <button class="comics-profile__button">Read More</button>
//       triggerModal() {
//         const button = this.element.querySelector(`button`);
//         const close = this.element.querySelector(`.modal__close--button`);
//         close.addEventListener(`click`, () => {
//           modal.classList.toggle(`modal`);
//         });
//       }`
