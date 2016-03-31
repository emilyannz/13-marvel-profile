'use strict';

import SeriesInfoView from 'series-info-view';
import CharacterListView from 'character-list-view';
import ComicsListView from 'comics-list-view';
const id = 20448;

export default function () {
  fetch(`https://gateway.marvel.com:443/v1/public/series/20448/characters?apikey=e92b6f4f5d1e35d2894877c88ac9710a`)
  .then((response) => response.json())
  .then((info) => {
    // Select profile container
    const element = document.querySelector(`.sidebar`);
    // New profile data
    const profile = new SeriesInfoView(element, info.data.results[0]);
  });

  fetch(`https://gateway.marvel.com:443/v1/public/characters/20448?apikey=e92b6f4f5d1e35d2894877c88ac9710a`)
  .then((response) => response.json())
  .then((info) => {
    const element = document.querySelector(`.characters-list`);
    const character = new CharacterListView(element, info.data.results);
  });

  fetch(`https://gateway.marvel.com:443/v1/public/series/20448/comics?apikey=e92b6f4f5d1e35d2894877c88ac9710a`)
  .then((response) => response.json())
  .then((info) => {
    const element = document.querySelector(`.comics-content`);
    const comic = new ComicListView(element, info.data.results);
  });
}
