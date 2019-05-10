import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

import JCars from '../assets/data/JCars.json';
import LARCars from '../assets/data/LARCars.json';
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
import TFATFCars from '../assets/data/TFATFCars.json';
import TFATF2006Cars from '../assets/data/TFATF2006Cars.json';
import TFTFCars from '../assets/data/TFTFCars.json';
import TD2002Cars from '../assets/data/TD2002Cars.json';
import TXRCars from '../assets/data/TXRCars.json';
import TXR2Cars from '../assets/data/TXR2Cars.json';

@Injectable({ providedIn: 'root' })
export class CarsService {

  cars: any = {};
  carList = new Array();
  selectedCars = new Array();
  carMakes = new Array();

  filters = {
    carsFilter: {
      make: '',
      decade: -1
    },
    carsSort: {
      model: true,
      year: false,
      reverse: false
    },
    gamesFilter: {
      games: true,
      movies: true
    },
    gamesSort: {
      title: true,
      pct: false,
      year: false,
      reverse: false
    }
  };

  carListChanged = new Subject<void>();
  gameListChanged = new Subject<void>();
  filtersChanged = new Subject<void>();

  games = [
    { id: 'TFATF2006',  order: 11,  type: 'game',   releaseDate: 20060926,  pct: 0,  title: 'The Fast and the Furious (2006)' },
    { id: 'J',          order: 21,  type: 'game',   releaseDate: 20050613,  pct: 0,  title: 'Juiced' },
    { id: 'LAR',        order: 31,  type: 'game',   releaseDate: 20051010,  pct: 0,  title: 'LA Rush' },
    { id: 'MCSR',       order: 41,  type: 'game',   releaseDate: 20001025,  pct: 0,  title: 'Midnight Club: Street Racing' },
    { id: 'MC2',        order: 42,  type: 'game',   releaseDate: 20030409,  pct: 0,  title: 'Midnight Club 2' },
    { id: 'MC3',        order: 43,  type: 'game',   releaseDate: 20050411,  pct: 0,  title: 'Midnight Club 3: Dub Edition' },
    { id: 'MC3R',       order: 44,  type: 'game',   releaseDate: 20060312,  pct: 0,  title: 'Midnight Club 3: Dub Edition Remix' },
    { id: 'MCLA',       order: 45,  type: 'game',   releaseDate: 20081020,  pct: 0,  title: 'Midnight Club: Los Angeles' },
    { id: 'NFSU',       order: 51,  type: 'game',   releaseDate: 20031117,  pct: 0,  title: 'Need for Speed: Underground' },
    { id: 'NFSU2',      order: 52,  type: 'game',   releaseDate: 20041115,  pct: 0,  title: 'Need for Speed: Underground 2' },
    { id: 'NFSMW',      order: 53,  type: 'game',   releaseDate: 20051116,  pct: 0,  title: 'Need for Speed: Most Wanted' },
    { id: 'NFSC',       order: 54,  type: 'game',   releaseDate: 20061031,  pct: 0,  title: 'Need for Speed: Carbon' },
    { id: 'NFS',        order: 55,  type: 'game',   releaseDate: 20151103,  pct: 0,  title: 'Need for Speed' },
    { id: 'SRS',        order: 61,  type: 'game',   releaseDate: 20040831,  pct: 0,  title: 'Street Racing Syndicate' },
    { id: 'TD2002',     order: 71,  type: 'game',   releaseDate: 20020528,  pct: 0,  title: 'Test Drive (2002)' },
    { id: 'TXR',        order: 81,  type: 'game',   releaseDate: 19990909,  pct: 0,  title: 'Tokyo Xtreme Racer' },
    { id: 'TXR2',       order: 82,  type: 'game',   releaseDate: 20000927,  pct: 0,  title: 'Tokyo Xtreme Racer 2' },
    { id: 'TFATF',      order: 101, type: 'movie',  releaseDate: 20010622,  pct: 0,  title: 'The Fast and the Furious' },
    { id: '2F2F',       order: 102, type: 'movie',  releaseDate: 20030606,  pct: 0,  title: '2 Fast 2 Furious' },
    /*{ id: 'TXRZ',       title: 'Tokyo Xtreme Racer Zero' },
    { id: 'TXR3',       title: 'Tokyo Xtreme Racer 3' },
    { id: 'ITC',        title: 'Import Tuner Challenge' },*/
    // { id: 'All',        title: 'All' }, // Debug only
  ];

  constructor() {
    this.cars['J'] = JCars;
    this.cars['LAR'] = LARCars;
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
    this.cars['TFATF'] = TFATFCars;
    this.cars['2F2F'] = TFTFCars;
    this.cars['TFATF2006'] = TFATF2006Cars;
    this.cars['TD2002'] = TD2002Cars;
    this.cars['TXR'] = TXRCars;
    this.cars['TXR2'] = TXR2Cars;
    this.cars['All'] = [];
    this.cars['All'] = this.getAllCars();
    this.carMakes = this.getAllCarMakes(this.cars['All']);
    console.log(this.carMakes);
  }

  compareCars = function(car1, car2) {
    if (car1.make.toLowerCase() < car2.make.toLowerCase()) {
      return -1;
    } else if (car1.make.toLowerCase() > car2.make.toLowerCase()) {
      return 1;
    } else {
      if (car1.baseModel.toLowerCase() < car2.baseModel.toLowerCase()) {
        return -1;
      } else if (car1.baseModel.toLowerCase() > car2.baseModel.toLowerCase()) {
        return 1;
      } else {
        return car1.year - car2.year;
      }
    }
  };

  indexOfCar = function(car, arr) {
    let i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i].make.toLowerCase() === car.make.toLowerCase() &&
          arr[i].baseModel.toLowerCase() === car.baseModel.toLowerCase() &&
          arr[i].year === car.year) {
        return i;
      }
    }
    return -1;
  };

  getRandomGame = function () {
    return this.games[Math.floor(Math.random() * (this.games.length - 1))];
  };

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
    }
  };

  getUnion = function (arr1: any[], arr2: any[]) {
    this.carList = [];
    let i = 0;
    let j = 0;
    while (typeof arr1[i] !== 'undefined' && typeof arr2[j] !== 'undefined') {
      // make of car 1 comes first
      if (arr1[i].make.toLowerCase() < arr2[j].make.toLowerCase()) {
        // add car 1
        this.carList.push(this.formatEntry(arr1[i], null));
        i++;
      // make of car 2 comes first
      } else if (arr1[i].make.toLowerCase() > arr2[j].make.toLowerCase()) {
        // add car 2
        this.carList.push(this.formatEntry(null, arr2[j]));
        j++;
      // make of car 1 and 2 is the same
      } else if (arr1[i].make === arr2[j].make) {
        // base model of car 1 comes first
        if (arr1[i].baseModel.toLowerCase() < arr2[j].baseModel.toLowerCase()) {
          // add car 1
          this.carList.push(this.formatEntry(arr1[i], null));
          i++;
        // base model of car 2 comes first
        } else if (arr1[i].baseModel.toLowerCase() > arr2[j].baseModel.toLowerCase()) {
          // add car 2
          this.carList.push(this.formatEntry(null, arr2[j]));
          j++;
        // base model of car 1 and 2 is the same
        } else if (arr1[i].baseModel === arr2[j].baseModel) {
          // year of car 1 comes first
          if (arr1[i].year < arr2[j].year) {
            // add car 1
            this.carList.push(this.formatEntry(arr1[i], null));
            i++;
          // year of car 2 comes first
          } else if (arr1[i].year > arr2[j].year) {
            // add car 2
            this.carList.push(this.formatEntry(null, arr2[j]));
            j++;
          // year of car 1 and 2 is the same
          } else if (arr1[i].year === arr2[j].year) {
            // add both cars
            this.carList.push(this.formatEntry(arr1[i], arr2[j]));
            i++;
            j++;
          }
        }
      }
    }
    // only car 1 remaining
    while (typeof arr1[i] !== 'undefined') {
      // add car 1
      this.carList.push(this.formatEntry(arr1[i], null));
      i++;
    }
    // only car 2 remaining
    while (typeof arr2[j] !== 'undefined') {
      // add car 2
      this.carList.push(this.formatEntry(null, arr2[j]));
      j++;
    }
    this.carListChanged.next();
  };

  getSetA = function (arr1: any[], arr2: any[]) {
    this.carList = [];
    let tempCar: any = null;
    for (let i = 0; i < arr1.length; i++) {
      tempCar = null;
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i].make === arr2[j].make && arr1[i].baseModel === arr2[j].baseModel && arr1[i].year === arr2[j].year) {
          tempCar = arr1[i];
        }
      }
      this.carList.push(this.formatEntry(arr1[i], tempCar));
    }
    this.carListChanged.next();
  };

  getSetB = function (arr1: any[], arr2: any[]) {
    this.carList = [];
    let tempCar: any = null;
    for (let j = 0; j < arr2.length; j++) {
      tempCar = null;
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].make === arr2[j].make && arr1[i].baseModel === arr2[j].baseModel && arr1[i].year === arr2[j].year) {
          tempCar = arr1[i];
        }
      }
      this.carList.push(this.formatEntry(tempCar, arr2[j]));
    }
    this.carListChanged.next();
  };

  getIntersection = function (arr1: any[], arr2: any[]) {
    this.carList = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i].make === arr2[j].make && arr1[i].baseModel === arr2[j].baseModel && arr1[i].year === arr2[j].year) {
          this.carList.push(this.formatEntry(arr1[i], arr2[j]));
        }
      }
    }
    this.carListChanged.next();
  };

  getComplimentB = function (arr1: any[], arr2: any[]) {
    this.carList = [];
    let i = 0;
    let j = 0;
    while (typeof arr1[i] !== 'undefined' && typeof arr2[j] !== 'undefined') {
      // make of car 1 comes first
      if (arr1[i].make.toLowerCase() < arr2[j].make.toLowerCase()) {
        // add car 1
        this.carList.push(this.formatEntry(arr1[i], null));
        i++;
      // make of car 2 comes first
      } else if (arr1[i].make.toLowerCase() > arr2[j].make.toLowerCase()) {
        // skip car 2
        j++;
      // make of car 1 and 2 is the same
      } else if (arr1[i].make === arr2[j].make) {
        // base model of car 1 comes first
        if (arr1[i].baseModel.toLowerCase() < arr2[j].baseModel.toLowerCase()) {
          // add car 1
          this.carList.push(this.formatEntry(arr1[i], null));
          i++;
        // base model of car 2 comes first
        } else if (arr1[i].baseModel.toLowerCase() > arr2[j].baseModel.toLowerCase()) {
          // skip car 2
          j++;
        // base model of car 1 and 2 is the same
        } else if (arr1[i].baseModel === arr2[j].baseModel) {
          // year of car 1 comes first
          if (arr1[i].year < arr2[j].year) {
            // add car 1
            this.carList.push(this.formatEntry(arr1[i], null));
            i++;
          // year of car 2 comes first
          } else if (arr1[i].year > arr2[j].year) {
            // skip car 2
            j++;
          // year of car 1 and 2 is the same
          } else if (arr1[i].year === arr2[j].year) {
            // skip car 1
            i++;
          }
        }
      }
    }
    // only car 1 remaining
    while (typeof arr1[i] !== 'undefined') {
      // add car 1
      this.carList.push(this.formatEntry(arr1[i], null));
      i++;
    }
    this.carListChanged.next();
  };

  getComplimentA = function (arr1: any[], arr2: any[]) {
    this.carList = [];
    let i = 0;
    let j = 0;
    while (typeof arr1[i] !== 'undefined' && typeof arr2[j] !== 'undefined') {
      // make of car 1 comes first
      if (arr1[i].make.toLowerCase() < arr2[j].make.toLowerCase()) {
        // skip car 1
        i++;
      // make of car 2 comes first
      } else if (arr1[i].make.toLowerCase() > arr2[j].make.toLowerCase()) {
        // add car 2
        this.carList.push(this.formatEntry(null, arr2[j]));
        j++;
        // base model of car 1 comes first
      } else if (arr1[i].make === arr2[j].make) {
        if (arr1[i].baseModel.toLowerCase() < arr2[j].baseModel.toLowerCase()) {
          // skip car 1
          i++;
        // base model of car 2 comes first
        } else if (arr1[i].baseModel.toLowerCase() > arr2[j].baseModel.toLowerCase()) {
          // add car 2
          this.carList.push(this.formatEntry(null, arr2[j]));
          j++;
        // base model of car 1 and 2 is the same
        } else if (arr1[i].baseModel === arr2[j].baseModel) {
          // year of car 1 comes first
          if (arr1[i].year < arr2[j].year) {
            // skip car 1
            i++;
          // year of car 2 comes first
          } else if (arr1[i].year > arr2[j].year) {
            // add car 2
            this.carList.push(this.formatEntry(null, arr2[j]));
            j++;
          // year of car 1 and 2 is the same
          } else if (arr1[i].year === arr2[j].year) {
            // skip car 2
            j++;
          }
        }
      }
    }
    // only car 2 remaining
    while (typeof arr2[j] !== 'undefined') {
      // add car 2
      this.carList.push(this.formatEntry(null, arr2[j]));
      j++;
    }
    this.carListChanged.next();
  };

  getDifference = function (arr1: any[], arr2: any[]) {
    this.carList = [];
    let i = 0;
    let j = 0;
    while (typeof arr1[i] !== 'undefined' && typeof arr2[j] !== 'undefined') {
      // make of car 1 comes first
      if (arr1[i].make.toLowerCase() < arr2[j].make.toLowerCase()) {
        // add car 1
        this.carList.push(this.formatEntry(arr1[i], null));
        i++;
      // make of car 2 comes first
      } else if (arr1[i].make.toLowerCase() > arr2[j].make.toLowerCase()) {
        // add car 2
        this.carList.push(this.formatEntry(null, arr2[j]));
        j++;
      // make of car 1 and 2 is the same
      } else if (arr1[i].make === arr2[j].make) {
        // base model of car 1 comes first
        if (arr1[i].baseModel.toLowerCase() < arr2[j].baseModel.toLowerCase()) {
          // add car 1
          this.carList.push(this.formatEntry(arr1[i], null));
          i++;
        // base model of car 2 comes first
        } else if (arr1[i].baseModel.toLowerCase() > arr2[j].baseModel.toLowerCase()) {
          // add car 2
          this.carList.push(this.formatEntry(null, arr2[j]));
          j++;
        // base model of car 1 and 2 is the same
        } else if (arr1[i].baseModel === arr2[j].baseModel) {
          // year of car 1 comes first
          if (arr1[i].year < arr2[j].year) {
            // add car 1
            this.carList.push(this.formatEntry(arr1[i], null));
            i++;
          // year of car 2 comes first
          } else if (arr1[i].year > arr2[j].year) {
            // add car 2
            this.carList.push(this.formatEntry(null, arr2[j]));
            j++;
          // year of car 1 and 2 is the same
          } else if (arr1[i].year === arr2[j].year) {
            // skip both cars
            i++;
            j++;
          }
        }
      }
    }
    // only car 1 remaining
    while (typeof arr1[i] !== 'undefined') {
      // add car 1
      this.carList.push(this.formatEntry(arr1[i], null));
      i++;
    }
    // only car 2 remaining
    while (typeof arr2[j] !== 'undefined') {
      // add car 2
      this.carList.push(this.formatEntry(null, arr2[j]));
      j++;
    }
    this.carListChanged.next();
  };

  formatEntry = function (car1: any, car2: any) {
    const car = {
      make: null,
      baseModel: null,
      year: null,
      gameAModel: null,
      gameBModel: null,
      gameANote: null,
      gameBNote: null,
      isInGameA: false,
      isInGameB: false
    };

    // car 2 is null
    if (car2 === null) {
      car.make = car1.make;
      car.baseModel = car1.baseModel;
      car.year = car1.year;
      if (typeof car1.model !== 'undefined') {
        car.gameAModel = car1.model;
      }
      car.isInGameA = true;
      if (typeof car1.note !== 'undefined') {
        car.gameANote = car1.note;
      }
    // car 1 is null
    } else if (car1 === null) {
      car.make = car2.make;
      car.baseModel = car2.baseModel;
      car.year = car2.year;
      if (typeof car2.model !== 'undefined') {
        car.gameBModel = car2.model;
      }
      car.isInGameB = true;
      if (typeof car2.note !== 'undefined') {
        car.gameBNote = car2.note;
      }
    // neither car is null
    } else {
      car.make = car1.make;
      car.baseModel = car1.baseModel;
      car.year = car1.year;
      if (typeof car1.model !== 'undefined') {
        car.gameAModel = car1.model;
      }
      if (typeof car2.model !== 'undefined') {
        car.gameBModel = car2.model;
      }
      car.isInGameA = true;
      if (typeof car1.note !== 'undefined') {
        car.gameANote = car1.note;
      }
      car.isInGameB = true;
      if (typeof car2.note !== 'undefined') {
        car.gameBNote = car2.note;
      }
    }
    return car;
  };

  getAllCars = function () {
    let temp = [];
    let allCars = [];
    this.games.forEach(game => {
      // temp is empty
      if (temp.length < 1) {
        // set temp to car list of first game
        temp = this.cars[game.id];
      } else {
        temp = allCars;
        allCars = [];
      }
      let i = 0;
      let j = 0;
      while (typeof temp[i] !== 'undefined' && typeof this.cars[game.id][j] !== 'undefined') {
        // make of car 1 comes first
        if (temp[i].make.toLowerCase() < this.cars[game.id][j].make.toLowerCase()) {
          // add car 1
          allCars.push(this.formatEntry(temp[i], null));
          i++;
        // make of car 2 comes first
        } else if (temp[i].make.toLowerCase() > this.cars[game.id][j].make.toLowerCase()) {
          // add car 2
          allCars.push(this.formatEntry(null, this.cars[game.id][j]));
          j++;
        // make of car 1 and 2 is the same
        } else if (temp[i].make === this.cars[game.id][j].make) {
          // base model of car 1 comes first
          if (temp[i].baseModel.toLowerCase() < this.cars[game.id][j].baseModel.toLowerCase()) {
            // add car 1
            allCars.push(this.formatEntry(temp[i], null));
            i++;
          // base model of car 2 comes first
          } else if (temp[i].baseModel.toLowerCase() > this.cars[game.id][j].baseModel.toLowerCase()) {
            // add car 2
            allCars.push(this.formatEntry(null, this.cars[game.id][j]));
            j++;
          // base model of car 1 and 2 is the same
          } else if (temp[i].baseModel === this.cars[game.id][j].baseModel) {
            // year of car 1 comes first
            if (temp[i].year < this.cars[game.id][j].year) {
              // add car 1
              allCars.push(this.formatEntry(temp[i], null));
              i++;
            // year of car 2 comes first
            } else if (temp[i].year > this.cars[game.id][j].year) {
              // add car 2
              allCars.push(this.formatEntry(null, this.cars[game.id][j]));
              j++;
            // year of car 1 and 2 is the same
            } else if (temp[i].year === this.cars[game.id][j].year) {
              // add both cars
              allCars.push(this.formatEntry(temp[i], this.cars[game.id][j]));
              i++;
              j++;
            }
          }
        }
      }
      // only car 1 remaining
      while (typeof temp[i] !== 'undefined') {
        // add car 1
        allCars.push(this.formatEntry(temp[i], null));
        i++;
      }
      // only car 2 remaining
      while (typeof this.cars[game.id][j] !== 'undefined') {
        // add car 2
        allCars.push(this.formatEntry(null, this.cars[game.id][j]));
        j++;
      }
    });
    return allCars;
  };

  getAllCarMakes = function (arr: any[]) {
    const temp = [];
    if (typeof arr !== 'undefined' && arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        if (temp.indexOf(arr[i].make) === -1) {
          console.log('hello');
          temp.push(arr[i].make);
        }
      }
    }
    return temp;
  };

  selectCar = function(make: string, baseModel: string, year: number) {
    if (this.indexOfCar({make, baseModel, year}, this.selectedCars) !== -1) {
      this.selectedCars.splice(this.indexOfCar({make, baseModel, year}, this.selectedCars), 1);
    } else {
      this.selectedCars.push({ make, baseModel, year });
    }
    if (this.selectedCars.length > 1) {
      this.selectedCars.sort(this.compareCars);
    }
    this.updateGamePercentages();
    // console.log(this.selectedCars);
  };

  selectGame = function(gameID: string) {
    const gameCars = this.cars[gameID];
    const temp = [];
    let clearSelectedCars = true;
    for (let i = 0; i < gameCars.length; i++) {
      temp.push({ make: gameCars[i].make, baseModel: gameCars[i].baseModel, year: gameCars[i].year });
      if (gameCars.length !== this.selectedCars.length ||
          gameCars[i].make !== this.selectedCars[i].make ||
          gameCars[i].baseModel !== this.selectedCars[i].baseModel ||
          gameCars[i].year !== this.selectedCars[i].year) {
            clearSelectedCars = false;
      }
    }
    if (clearSelectedCars) {
      this.selectedCars = [];
    } else {
      this.selectedCars = temp;
    }
    this.updateGamePercentages();
  };

  isSelected = function(make: string, baseModel: string, year: number) {
    if (this.indexOfCar({make, baseModel, year}, this.selectedCars) !== -1) {
      return true;
    } else {
      return false;
    }
  };

  clearSelectedCars = function() {
    this.selectedCars = [];
    this.updateGamePercentages();
  };

  updateGamePercentages = function() {
    let i;
    for (i = 0; i < this.games.length; i++) {
      let j;
      let temp = 0;
      for (j = 0; j < this.selectedCars.length; j++) {
        if (this.indexOfCar(this.selectedCars[j], this.cars[this.games[i].id]) !== -1) {
          temp++;
        }
      }
      if (temp === 0) {
        this.games[i].pct = 0;
      } else {
        this.games[i].pct = temp / this.selectedCars.length;
      }
      // this.games[i].pct = ((temp / this.selectedCars.length) * 100).toFixed(0);
    }
    // console.log(this.games);
    this.gameListChanged.next();
  };

  resetFilters = function() {
    this.filters = {
      carsFilter: {
        make: '',
        decade: -1
      },
      carsSort: {
        model: true,
        year: false,
        reverse: false
      },
      gamesFilter: {
        games: true,
        movies: true
      },
      gamesSort: {
        title: true,
        pct: false,
        year: false,
        reverse: false
      }
    };
    this.filtersChanged.next();
  };

  updateFilters = function(newFilters: any) {
    this.filters = newFilters;
    this.filtersChanged.next();
  };
}
