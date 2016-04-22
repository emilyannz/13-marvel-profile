'use strict';

export default class CharacterView {
  constructor(characterProfile) {
    this.element = document.createElement(`li`);
    this.element.classlist.add(`characters-profile`);

    this.element.innerHTML = `
      <div class="characters-profile__image">
        <img class="character-image"
        src="${this.characterProfile.thumbnail.path}.${this.characterProfile.thumbnail.extension}">
      </div>
      <h3 class="characters-profile__image">${characterProfile.name}</h3>`;
  }
}



//   switchSeries() {
//     // get series id for current character
//     const seriesParts = this.result.series.items[0].resourceURI.split(`/`);
//     const seriesId = seriesParts[seriesParts.length - 1];
//     // click event listener
//     const clickArea = this.element.querySelector(`.character-image--container`);
//     clickArea.addEventListener(`click`, () => {
//       // console.log(`want to update to id`, seriesId)
//       setSeries(seriesId);
//       // update character id number in fetch request in index.js file
//     });
//   }
// }
