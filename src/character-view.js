'use strict';

export default class CharacterView {
  constructor(characterProfile) {
    this.characterProfile = characterProfile;
    this.element = document.createElement(`li`);
    this.element.classlist.add(`characters-bio`);

    this.element.innerHTML = `
      <div class="characters-bio__photo">
        <img src="${characterProfile.thumbnail.path}.${characterProfile.thumbnail.extension}" class="characters-bio__photo__thumbnail">
      </div>
      <h3 class="characters-bio__name">${characterProfile.name}</h3>`;
  }
}
