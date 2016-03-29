'use strict';

import ComicsListView from 'comics-list-view';
import SeriesInfoView from 'series-info-view';
import CharacterListView from 'character-list-view';
const id = #####;

export default function () {
  fetch(`http://gateway.marvel.com:80/v1/public/series/9856?apikey=03d447ae0f2abf63a91a516b765da6e5`)
  .then((response) => response.json())
  .then((info) => {
    // Select profile container
    const element = document.querySelector(`.sidebar`);
    // New profile data
    const profile = new SeriesInfoView(element, info.data.results[0]);
  });

  fetch(`http://gateway.marvel.com:80/v1/public/series/9856/characters?apikey=03d447ae0f2abf63a91a516b765da6e5`)
  .then((response) => response.json())
  .then((info) => {
    const element = document.querySelector(`.characters`);
    const character = new CharacterListView(element, info.data.results);
  });

  fetch(`http://gateway.marvel.com:80/v1/public/series/9856/comics?apikey=03d447ae0f2abf63a91a516b765da6e5`)
  .then((response) => response.json())
  .then((info) => {
    const element = document.querySelector(`.comics`);
    const comic = new ComicListView(element, info.data.results);
  });
}
