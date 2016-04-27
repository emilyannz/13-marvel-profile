'use strict';
// import SeriesInfoView from 'series-info-view';
import SidebarView from 'series-info-view';
import CharacterView from 'character-view';
import CharacterListView from 'character-list-view';
import ComicView from 'comic-view';
import ComicListView from 'comic-list-view';



export default function() {
  const id = 20448;

  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}/characters?apikey=03d447ae0f2abf63a91a516b765da6e5`)
    .then((response) => response.json())
    .then((data) => {
      const series = data.data.results[0];
      const sidebar = document.querySelector(`.sidebar`);
      const seriesView = new SidebarView(sidebar, series);
    });

  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}/comics?apikey=03d447ae0f2abf63a91a516b765da6e5`)
    .then((response) => response.json())
    .then((data) => {
      const characters = data.data.results;
      const characterElement = document.querySelector(`.characters-container`);
      const characterView = new CharacterListView(characterElement, characters);
    });

  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}/comics?apikey=03d447ae0f2abf63a91a516b765da6e5`)
    .then((response) => response.json())
    .then((data) => {
      const comics = data.data.results;
      const comicElement = document.querySelector(`.comics-container`);
      const comicElement = new ComicListView(comicElement, comics);
    })
}
