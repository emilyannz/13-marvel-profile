'use strict';

export default class ComicView {
  constructor(comicProfile) {
    this.comicItem = comicProfile;
    this.element = document.createElement(`li`);
    this.element.classList.add(`comics-profile`);

    this.element.innerHTML = `
      <div class="comics-profile__photo">
        <img class="comics-profile__photo__thumbnail" src=
        "${comicProfile.thumbnail.path}.${comicProfile.thumbnail.extension}" alt="" />
     </div>

      <div class="comics-profile__series">
      <h3 class="comics-profile__series-number">#${comicProfile.seriesNumber}<h3>
      </div>

      <div class="comics-profile__info">
      <h3 class="comics-profile__info__name">${comicProfile.title}</h3>
      </div>
      <button class="comics-profile__button">Read More</button>

      <div class="modal">
      <div class="modal-card">
        <i class="fa fa-times modal-escape"></i>
        <p class="modal-title">${this.comicProfile.title}</p>
        <p class="modal-description">${this.comicProfile.description}</p>
      </div>`;

    const modal = this.element.querySelector(`.modal`);
    const modalActive = this.element.querySelector(`.modal-active`);

    this.element.querySelector(`.comics-profile__button`).addEventListener(`click`, () => {
      modal.classList.remove(`modal-active`);
    });

    this.element.querySelector(`.modal-escape`).addEventListener(`click`, () => {
    modal.classList.remove(`modal-active`);
  });
}
