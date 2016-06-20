
'use strict';
import SeriesInfoView from 'series-info-view';
import CharacterListView from 'character-list-view';

export default function (id = `20448`) {
  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}?apikey=e92b6f4f5d1e35d2894877c88ac9710a`)
  .then((response) => response.json())
  .then((info) => {
    // Select profile container
    const element = document.querySelector(`.sidebar`);
    // New profile data
    const profile = new SeriesInfoView(element, info.data.results[0]);
  });

  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}/characters?apikey=e92b6f4f5d1e35d2894877c88ac9710a`)
  .then((response) => response.json())
  .then((info) => {
    const element = document.querySelector(`.characters`);
    const character = new CharacterListView(element, info.data.results);
  });
}
