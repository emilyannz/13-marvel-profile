'use strict';

import setSeries from 'setSeries';
import CharacterListView from 'character-list-view';
import ComicListView from 'comic-list-view';
const id = 20448;

export default function () {
  setSeries();
  // fetch(`http://gateway.marvel.com:80/v1/public/series/${id}/characters?apikey=03d447ae0f2abf63a91a516b765da6e5`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const series = data.data.results[0];
  //     const sidebar = document.querySelector(`.sidebar`);
  //     const seriesView = new SidebarView(sidebar, series);
  //   });
  //
  // fetch(`http://gateway.marvel.com:80/v1/public/series/${id}/comics?apikey=03d447ae0f2abf63a91a516b765da6e5`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const characters = data.data.results;
  //     const characterElement = document.querySelector(`.characters-container`);
  //     const characterView = new CharacterListView(characterElement, characters);
  //   });

  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}/comics?apikey=03d447ae0f2abf63a91a516b765da6e5`)
    .then((response) => response.json())
    .then((info) => {
      const element = document.querySelector(`.comics`);
      const comic = new ComicListView(element, info.data.results);
  });
}
