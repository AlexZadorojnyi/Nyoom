import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

import TFATF2006Cars from '../assets/data/TFATF2006Cars.json';
import JCars from '../assets/data/JCars.json';
import LARCars from '../assets/data/LARCars.json';
import MMCars from '../assets/data/MMCars.json';
import MM2Cars from '../assets/data/MM2Cars.json';
import MCSRCars from '../assets/data/MCSRCars.json';
import MC2Cars from '../assets/data/MC2Cars.json';
import MC3Cars from '../assets/data/MC3Cars.json';
import MC3RCars from '../assets/data/MC3RCars.json';
import MCLACars from '../assets/data/MCLACars.json';
import NFSUCars from '../assets/data/NFSUCars.json';
import NFSU2Cars from '../assets/data/NFSU2Cars.json';
import NFSMWCars from '../assets/data/NFSMWCars.json';
import NFSCCars from '../assets/data/NFSCCars.json';
import NFSCars from '../assets/data/NFSCars.json';
import SRSCars from '../assets/data/SRSCars.json';
import TD2002Cars from '../assets/data/TD2002Cars.json';
import TXRCars from '../assets/data/TXRCars.json';
import TXR2Cars from '../assets/data/TXR2Cars.json';
import TXRZCars from '../assets/data/TXRZCars.json';
import TXR3Cars from '../assets/data/TXR3Cars.json';
import ITCCars from '../assets/data/ITCCars.json';
import TFATFCars from '../assets/data/TFATFCars.json';
import TFTFCars from '../assets/data/TFTFCars.json';

@Injectable({ providedIn: 'root' })
export class CarsService {

  /* Object storing key/value pairs
     - Key: Game id
     - Value: Array of car objects pertaining to that game */
  cars: any = {};
  /* Array of car objects to be displayed in the compare section of the website */
  carList = new Array();
  /* Number of cars selected */
  totalSelectedCars = 0;
  /* Observable used to update the car list in the compare section */
  carListChanged = new Subject<void>();
  /* Observable used to update the game list in the select section with computed data */
  gameListChanged = new Subject<void>();
  /* Observable used to update */
  filtersChanged = new Subject<void>();
  /* Array of objects containing data about the games
     - id: Shorthand unique notation
     - order: Specifies the order the games should appear in when sorted alphabetically by title, the last digit determines the order
       within the game's grouping and the other digits determine the grouping
     - type: Used to differentiate between games and movies, which are not games :^P, used for sorting
     - releaseDate: The release date of the game in YYYYMMDD format, used for sorting
     - selectedCars: The number of selected cars that also appear in a game
     - title: The full title of the game */
  games = [
    { id: 'TFATF2006',  order: 11,  type: 'game',   releaseDate: 20060926,  selectedCars: 0, title: 'The Fast and the Furious (2006)' },
    { id: 'J',          order: 21,  type: 'game',   releaseDate: 20050613,  selectedCars: 0, title: 'Juiced' },
    { id: 'LAR',        order: 31,  type: 'game',   releaseDate: 20051010,  selectedCars: 0, title: 'LA Rush' },
    { id: 'MM',         order: 41,  type: 'game',   releaseDate: 19990430,  selectedCars: 0, title: 'Midtown Madness' },
    { id: 'MM2',        order: 42,  type: 'game',   releaseDate: 20000921,  selectedCars: 0, title: 'Midtown Madness 2' },
    { id: 'MCSR',       order: 43,  type: 'game',   releaseDate: 20001025,  selectedCars: 0, title: 'Midnight Club: Street Racing' },
    { id: 'MC2',        order: 44,  type: 'game',   releaseDate: 20030409,  selectedCars: 0, title: 'Midnight Club 2' },
    { id: 'MC3',        order: 45,  type: 'game',   releaseDate: 20050411,  selectedCars: 0, title: 'Midnight Club 3: Dub Edition' },
    { id: 'MC3R',       order: 46,  type: 'game',   releaseDate: 20060312,  selectedCars: 0, title: 'Midnight Club 3: Dub Edition Remix' },
    { id: 'MCLA',       order: 47,  type: 'game',   releaseDate: 20081020,  selectedCars: 0, title: 'Midnight Club: Los Angeles' },
    { id: 'NFSU',       order: 51,  type: 'game',   releaseDate: 20031117,  selectedCars: 0, title: 'Need for Speed: Underground' },
    { id: 'NFSU2',      order: 52,  type: 'game',   releaseDate: 20041115,  selectedCars: 0, title: 'Need for Speed: Underground 2' },
    { id: 'NFSMW',      order: 53,  type: 'game',   releaseDate: 20051116,  selectedCars: 0, title: 'Need for Speed: Most Wanted' },
    { id: 'NFSC',       order: 54,  type: 'game',   releaseDate: 20061031,  selectedCars: 0, title: 'Need for Speed: Carbon' },
    { id: 'NFS',        order: 55,  type: 'game',   releaseDate: 20151103,  selectedCars: 0, title: 'Need for Speed' },
    { id: 'SRS',        order: 61,  type: 'game',   releaseDate: 20040831,  selectedCars: 0, title: 'Street Racing Syndicate' },
    { id: 'TD2002',     order: 71,  type: 'game',   releaseDate: 20020528,  selectedCars: 0, title: 'Test Drive (2002)' },
    { id: 'TXR',        order: 81,  type: 'game',   releaseDate: 19990909,  selectedCars: 0, title: 'Tokyo Xtreme Racer' },
    { id: 'TXR2',       order: 82,  type: 'game',   releaseDate: 20000927,  selectedCars: 0, title: 'Tokyo Xtreme Racer 2' },
    { id: 'TXRZ',       order: 83,  type: 'game',   releaseDate: 20010315,  selectedCars: 0, title: 'Tokyo Xtreme Racer Zero' },
    { id: 'TXR3',       order: 84,  type: 'game',   releaseDate: 20030724,  selectedCars: 0, title: 'Tokyo Xtreme Racer 3' },
    { id: 'ITC',        order: 85,  type: 'game',   releaseDate: 20060727,  selectedCars: 0, title: 'Import Tuner Challenge' },
    { id: 'TFATF',      order: 991, type: 'movie',  releaseDate: 20010622,  selectedCars: 0, title: 'The Fast and the Furious' },
    { id: 'TFTF',       order: 992, type: 'movie',  releaseDate: 20030606,  selectedCars: 0, title: '2 Fast 2 Furious' }
  ];
  /* Object containing settings used to filter cars and games in the select section of the website */
  filterSettings = {
    cars: {
      makeFilter: '',
      decadeFilter: -1,
      modelSort: false,
      yearSort: false,
      selectedSort: true,
      reverse: false
    },
    games: {
      gamesFilter: true,
      moviesFilter: true,
      titleSort: true,
      pctSort: false,
      yearSort: false,
      reverse: false
    }
  };

  constructor() {
    this.cars['TFATF2006'] = TFATF2006Cars;
    this.cars['J'] = JCars;
    this.cars['LAR'] = LARCars;
    this.cars['MM'] = MMCars;
    this.cars['MM2'] = MM2Cars;
    this.cars['MCSR'] = MCSRCars;
    this.cars['MC2'] = MC2Cars;
    this.cars['MC3'] = MC3Cars;
    this.cars['MC3R'] = MC3RCars;
    this.cars['MCLA'] = MCLACars;
    this.cars['NFSU'] = NFSUCars;
    this.cars['NFSU2'] = NFSU2Cars;
    this.cars['NFSMW'] = NFSMWCars;
    this.cars['NFSC'] = NFSCCars;
    this.cars['NFS'] = NFSCars;
    this.cars['SRS'] = SRSCars;
    this.cars['TD2002'] = TD2002Cars;
    this.cars['TXR'] = TXRCars;
    this.cars['TXR2'] = TXR2Cars;
    this.cars['TXRZ'] = TXRZCars;
    this.cars['TXR3'] = TXR3Cars;
    this.cars['ITC'] = ITCCars;
    this.cars['TFATF'] = TFATFCars;
    this.cars['TFTF'] = TFTFCars;
    this.cars['All'] = this.getAllCars();
  }

  /* Compares two car objects based on the name of make and model and the model year */
  compareCars = function(car1, car2) {
    /* console.log('car1: { ' + car1.make + ', ' + car1.baseModel + ', ' + car1.year + '},\n' +
                'car2: { ' + car2.make + ', ' + car2.baseModel + ', ' + car2.year + '}\n\n'); */
    if (typeof car2 === 'undefined') { return -1; }
    if (typeof car1 === 'undefined') { return 1; }
    if (car1.make.toLowerCase() < car2.make.toLowerCase()) { return -1;
    } else if (car1.make.toLowerCase() > car2.make.toLowerCase()) { return 1;
    } else {
      if (car1.baseModel.toLowerCase() < car2.baseModel.toLowerCase()) { return -1;
      } else if (car1.baseModel.toLowerCase() > car2.baseModel.toLowerCase()) { return 1;
      } else {
        if (car1.year < car2.year) { return -1;
        } else if (car1.year > car2.year) { return 1;
        } else { return 0;
        }
      }
    }
  };

  /* Searches for a car object based on its make, model, and year and returns its index */
  indexOfCar = function(car, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].make.toLowerCase() === car.make.toLowerCase() &&
          arr[i].baseModel.toLowerCase() === car.baseModel.toLowerCase() &&
          arr[i].year === car.year) {
        return i;
      }
    }
    return -1;
  };

  /* Returns a random game object from the game array, used in the compare section */
  getRandomGame = function () {
    return this.games[Math.floor(Math.random() * (this.games.length - 1))];
  };

  /* Updates carList with a list of cars computed based on game selection and set relation */
  updateCarList = function (gameA: string, gameB: string, setRelation: string) {
    if (typeof this.cars[gameA] !== 'undefined' && typeof this.cars[gameB] !== 'undefined') {
      switch (setRelation) {
        case 'Union':
          this.getUnion(this.cars[gameA], this.cars[gameB]);
          break;
        case 'SetA':
          this.getSetA(this.cars[gameA], this.cars[gameB]);
          break;
        case 'SetB':
          this.getSetB(this.cars[gameA], this.cars[gameB]);
          break;
        case 'Intersection':
          this.getIntersection(this.cars[gameA], this.cars[gameB]);
          break;
        case 'ComplimentB':
          this.getComplimentB(this.cars[gameA], this.cars[gameB]);
          break;
        case 'ComplimentA':
          this.getComplimentA(this.cars[gameA], this.cars[gameB]);
          break;
        case 'Difference':
          this.getDifference(this.cars[gameA], this.cars[gameB]);
          break;
        default:
          console.log('no cars for this game');
          break;
      }
      this.carListChanged.next();
    }
  };

  /* Sets carList to the union of two car lists (cars that are in either game) */
  getUnion = function (arr1: any[], arr2: any[]) {
    this.carList = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length || j < arr2.length) {
      switch (this.compareCars(arr1[i], arr2[j])) {
        case -1:
          this.carList.push(this.formatEntryCompare(arr1[i], null));
          i++;
          break;
        case 1:
          this.carList.push(this.formatEntryCompare(null, arr2[j]));
          j++;
          break;
        case 0:
          this.carList.push(this.formatEntryCompare(arr1[i], arr2[j]));
          i++;
          j++;
          break;
      }
    }
  };

  /* Sets carList to the first of two car lists (cars that are in game one) */
  getSetA = function (arr1: any[], arr2: any[]) {
    this.carList = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length || j < arr2.length) {
      switch (this.compareCars(arr1[i], arr2[j])) {
        case -1:
          this.carList.push(this.formatEntryCompare(arr1[i], null));
          i++;
          break;
        case 1:
          j++;
          break;
        case 0:
          this.carList.push(this.formatEntryCompare(arr1[i], arr2[j]));
          i++;
          j++;
          break;
      }
    }
  };

  /* Sets carList to the second of two car lists (cars that are in game two) */
  getSetB = function (arr1: any[], arr2: any[]) {
    this.carList = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length || j < arr2.length) {
      switch (this.compareCars(arr1[i], arr2[j])) {
        case -1:
          i++;
          break;
        case 1:
          this.carList.push(this.formatEntryCompare(null, arr2[j]));
          j++;
          break;
        case 0:
          this.carList.push(this.formatEntryCompare(arr1[i], arr2[j]));
          i++;
          j++;
          break;
      }
    }
  };

  /* Sets carList to the intersection of two car lists (cars that are in both games) */
  getIntersection = function (arr1: any[], arr2: any[]) {
    this.carList = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length || j < arr2.length) {
      switch (this.compareCars(arr1[i], arr2[j])) {
        case -1:
          i++;
          break;
        case 1:
          j++;
          break;
        case 0:
          this.carList.push(this.formatEntryCompare(arr1[i], arr2[j]));
          i++;
          j++;
          break;
      }
    }
  };

  /* Sets carList to the compliment of the second car list (cars that are only in game one) */
  getComplimentB = function (arr1: any[], arr2: any[]) {
    this.carList = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length || j < arr2.length) {
      switch (this.compareCars(arr1[i], arr2[j])) {
        case -1:
          this.carList.push(this.formatEntryCompare(arr1[i], null));
          i++;
          break;
        case 1:
          j++;
          break;
        case 0:
          i++;
          j++;
          break;
      }
    }
  };

  /* Sets carList to the compliment of the first car list (cars that are only in game two) */
  getComplimentA = function (arr1: any[], arr2: any[]) {
    this.carList = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length || j < arr2.length) {
      switch (this.compareCars(arr1[i], arr2[j])) {
        case -1:
          i++;
          break;
        case 1:
          this.carList.push(this.formatEntryCompare(null, arr2[j]));
          j++;
          break;
        case 0:
          i++;
          j++;
          break;
      }
    }
  };

  /* Sets carList to the difference of the two car lists (cars that are not in both games) */
  getDifference = function (arr1: any[], arr2: any[]) {
    this.carList = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length || j < arr2.length) {
      switch (this.compareCars(arr1[i], arr2[j])) {
        case -1:
          this.carList.push(this.formatEntryCompare(arr1[i], null));
          i++;
          break;
        case 1:
          this.carList.push(this.formatEntryCompare(null, arr2[j]));
          j++;
          break;
        case 0:
          i++;
          j++;
          break;
      }
    }
  };

  /* Returns the union of all cars */
  getAllCars = function () {
    let temp = [];
    let allCars = [];

    this.games.forEach(game => {
      temp = allCars;
      allCars = [];

      let i = 0;
      let j = 0;

      while (i < temp.length || j < this.cars[game.id].length) {
        switch (this.compareCars(temp[i], this.cars[game.id][j])) {
          case -1:
            allCars.push(this.formatEntrySelect(temp[i], null));
            i++;
            break;
          case 1:
            allCars.push(this.formatEntrySelect(null, this.cars[game.id][j]));
            j++;
            break;
          case 0:
            allCars.push(this.formatEntrySelect(temp[i], this.cars[game.id][j]));
            i++;
            j++;
            break;
        }
      }
    });

    /* Debug
    let temp2 = [];
    allCars.forEach(element => {
      if (element.models.length > 1) {
        temp2.push(element);
      }
    });
    console.log(temp2);
    console.log(allCars);*/

    return allCars;
  };

  /* Returns all car makes from an array of cars */
  getAllCarMakes = function (arr: any[]) {
    const allCarMakes = [];
    if (typeof arr !== 'undefined' && arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        if (allCarMakes.indexOf(arr[i].make) === -1) {
          allCarMakes.push(arr[i].make);
        }
      }
    }
    return allCarMakes;
  };

  /* Combines the data of two car objects into a single car object for use in the compare section */
  formatEntryCompare = function (car1: any, car2: any) {
    const car = {
      make: null,
      baseModel: null,
      year: null,
      gameAModels: [],
      gameBModels: [],
      isInGameA: false,
      isInGameB: false
    };

    // car 2 is null
    if (car2 === null) {
      car.make = car1.make;
      car.baseModel = car1.baseModel;
      car.year = car1.year;
      if (typeof car1.models !== 'undefined') {
        car.gameAModels = car1.models;
      }
      car.isInGameA = true;
    // car 1 is null
    } else if (car1 === null) {
      car.make = car2.make;
      car.baseModel = car2.baseModel;
      car.year = car2.year;
      if (typeof car2.models !== 'undefined') {
        car.gameBModels = car2.models;
      }
      car.isInGameB = true;
    // neither car is null
    } else {
      car.make = car1.make;
      car.baseModel = car1.baseModel;
      car.year = car1.year;
      if (typeof car1.models !== 'undefined') {
        car.gameAModels = car1.models;
      }
      if (typeof car2.models !== 'undefined') {
        car.gameBModels = car2.models;
      }
      car.isInGameA = true;
      car.isInGameB = true;
    }
    return car;
  };

  /* Combines the data of two car objects into a single car object for use in the select section */
  formatEntrySelect = function (car1: any, car2: any) {
    const car = {
      make: null,
      baseModel: null,
      year: null,
      models: [],
      isSelected: false
    };

    // Old car
    if (car2 === null) {
      car.make = car1.make;
      car.baseModel = car1.baseModel;
      car.year = car1.year;
      if (typeof car1.models !== 'undefined') {
        car.models = car1.models;
      }
    // New car
    } else if (car1 === null) {
      car.make = car2.make;
      car.baseModel = car2.baseModel;
      car.year = car2.year;
      if (typeof car2.models !== 'undefined') {
        car2.models.forEach(element => {
          car.models.push(element.model);
        });
      }
    // Possible new models
    } else {
      car.make = car1.make;
      car.baseModel = car1.baseModel;
      car.year = car1.year;
      car.models = car1.models;
      // No old models
      if (typeof car.models === 'undefined') {
        car2.models.forEach(element => {
          car.models.push(element.model);
        });
      // Old models + new models
      } else if (typeof car2.models !== 'undefined') {
        car2.models.forEach(element => {
          // Model is new
          if (car.models.indexOf(element.model) === -1) {
            car.models.push(element.model);
          }
        });
        car.models.sort();
      }
    }
    return car;
  };

  /* (De)selects the car and (de/in)crements variables used for computing percentage of selected cars in game */
  selectCar = function(car: any) {
    car.isSelected = !car.isSelected;

    if (car.isSelected) {
      this.totalSelectedCars++;
    } else {
      this.totalSelectedCars--;
    }

    this.games.forEach(game => {
      if (this.indexOfCar(car, this.cars[game.id]) !== -1) {
        if (car.isSelected) {
          game.selectedCars++;
        } else {
          game.selectedCars--;
        }
      }
    });

    this.gameListChanged.next();
  };

  /* (De)selects all cars featured in the game */
  selectGame = function(game: any) {
    /* total number of cars in this game = number of selected cars that are in this game & total number of cars selected */
    if (this.cars[game.id].length === game.selectedCars &&
        this.cars[game.id].length === this.totalSelectedCars) {
      this.clearSelectedCars();
    } else {
      this.totalSelectedCars = this.cars[game.id].length;
      this.cars['All'].forEach(car => {
        if (this.indexOfCar(car, this.cars[game.id]) === -1) {
          car.isSelected = false;
        } else {
          car.isSelected = true;
        }
      });
      this.updateGamePercentages();
    }
  };

  /* Clears all selected cars */
  clearSelectedCars = function() {
    this.cars['All'].forEach(car => {
      car.isSelected = false;
    });
    this.totalSelectedCars = 0;
    this.updateGamePercentages();
  };

  /* Increments the number of selected cars in each game */
  updateGamePercentages = function() {
    this.games.forEach(game => {
      game.selectedCars = 0;
      this.cars['All'].forEach(car => {
        if (car.isSelected && this.indexOfCar(car, this.cars[game.id]) !== -1) {
          game.selectedCars++;
        }
      });
    });
    this.gameListChanged.next();
  };

  /* Resets filter settings to their default states */
  resetFilterSettings = function() {
    this.filterSettings = {
      cars: {
        makeFilter: '',
        decadeFilter: -1,
        modelSort: false,
        yearSort: false,
        selectedSort: true,
        reverse: false
      },
      games: {
        gamesFilter: true,
        moviesFilter: true,
        titleSort: true,
        pctSort: false,
        yearSort: false,
        reverse: false
      }
    };
    this.filtersChanged.next();
  };

  /* Updates filter settings to those set by the user */
  updateFilterSettings = function(newFilterSettings: any) {
    this.filterSettings = newFilterSettings;
    this.filtersChanged.next();
  };
}
