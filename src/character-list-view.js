'use strict';
import CharacterView from 'character-view';

export default class CharacterListView {
  constructor(element, data) {
    this.element = element;
    this.data = data;

    this.data.forEach((character) => {
      const characterView = new CharacterView(character);
      this.element.appendChild(characterView.element);
    });
  }
}
