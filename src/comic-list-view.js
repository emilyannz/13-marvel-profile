'use strict';

import ComicView from 'comic-view';

export default class ComicListView {
  constructor(element, data) {
    this.element = element;
    this.data = data;
  }

    this.data.forEach((comic) => {
      const comView = new ComicView(comic);
      resultList.appendChild(comView.element);
    });
  }
}
