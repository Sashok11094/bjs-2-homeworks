class PrintEditionItem {
  constructor (name, releaseDate, pagesCount,) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    if (this._state >= 0 && this._state < 100) {
        this._state = Math.min(this._state * 1.5, 100); 
    }
  }

  set state (newState) {
    if(this.newState < 0) {
      this._state = 0;
    } else if (this.newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
    }
    get state() {
      return this._state;
    }
  }  
         
class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    super (name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount, author) {
    super (name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor (name, releaseDate, pagesCount, authot) {
    super (name, releaseDate, pagesCount, authot);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor (name, releaseDate, pagesCount, authot) {
    super (name, releaseDate, pagesCount, authot);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor (name, releaseDate, pagesCount, authot) {
    super (name, releaseDate, pagesCount, authot);
    this.type = "detective";
  }
}