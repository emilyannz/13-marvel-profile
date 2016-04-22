'use strict';
// import SeriesInfoView from 'series-info-view';
import SidebarView from 'setSeries';
import CharacterListView from 'character-list-view';
import ComicView from 'comic-view';
import ComicListView from 'comic-list-view';



export default function() {
  const id = 20448;

  // .then((response) => response.json())
  // .then((info) => {
  //   // Select profile container
  //   const element = document.querySelector(`.sidebar`);
  //   // New profile data
  //   const profile = new SeriesInfoView(element, info.data.results[0]);
  // });

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
      const characterElement = document.querySelector(`.characters-list`);
      const characterView = new CharacterListView(characterElement, characters);
    });

  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}/comics?apikey=03d447ae0f2abf63a91a516b765da6e5`)
    .then((response) => response.json())
    .then((data) => {
      const comics = data.data.results;
      const comicElement = new ComicListView(comicElement, comics);
    })
}
