import { Subject } from 'rxjs';
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
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CarsService {

  cars: any = {};
  carList = new Array();
  carListChanged = new Subject<void>();
  gameListChanged = new Subject<void>();
  selectedCars = new Array();
  gamePercentages: any = {};

  games = [
    { id: 'J',          title: 'Juiced', pct: 0 },
    { id: 'LAR',        title: 'LA Rush', pct: 0 },
    { id: 'MCSR',       title: 'Midnight Club: Street Racing', pct: 0 },
    { id: 'MC2',        title: 'Midnight Club 2', pct: 0 },
    { id: 'MC3',        title: 'Midnight Club 3: Dub Edition', pct: 0 },
    { id: 'MC3R',       title: 'Midnight Club 3: Dub Edition Remix', pct: 0 },
    { id: 'MCLA',       title: 'Midnight Club: Los Angeles', pct: 0 },
    { id: 'NFSU',       title: 'Need for Speed: Underground', pct: 0 },
    { id: 'NFSU2',      title: 'Need for Speed: Underground 2', pct: 0 },
    { id: 'NFSMW',      title: 'Need for Speed: Most Wanted', pct: 0 },
    { id: 'NFSC',       title: 'Need for Speed: Carbon', pct: 0 },
    { id: 'NFS',        title: 'Need for Speed', pct: 0 },
    { id: 'SRS',        title: 'Street Racing Syndicate', pct: 0 },
    { id: 'TD2002',     title: 'Test Drive (2002)', pct: 0 },
    { id: 'TXR',        title: 'Tokyo Xtreme Racer', pct: 0 },
    { id: 'TFATF',      title: 'The Fast and the Furious', pct: 0 },
    { id: '2F2F',       title: '2 Fast 2 Furious', pct: 0 },
    { id: 'TFATF2006',  title: 'The Fast and the Furious (2006)', pct: 0 },
    /*{ id: 'TXR2',       title: 'Tokyo Xtreme Racer 2' },
    { id: 'TXRZ',       title: 'Tokyo Xtreme Racer Zero' },
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
    this.cars['TXR2'] = [
      { make: 'Suzuki',     baseModel: 'Autozam AZ-1',  year: 1992 },
      { make: 'BMW',        baseModel: 'M3',            year: 1992 },
      { make: 'Dodge',      baseModel: 'Viper',         year: 1996,   model: 'Viper GTS' },
      { make: 'Mazda',      baseModel: 'Eunos Cosmo',   year: 1990 },
      { make: 'Honda',      baseModel: 'Accord',        year: 1997,
        note: 'Standard, Coupe, SiR-T, and Wagon versions are included' },
      { make: 'Honda',      baseModel: 'Beat',          year: 1991 },
      { make: 'Honda',      baseModel: 'Civic',         year: 1991,   note: '2-door hatchback' },
      { make: 'Honda',      baseModel: 'Civic',         year: 1996,   note: '2-door hatchback and 2-door coupe versions are included' },
      { make: 'Honda',      baseModel: 'CR-X',          year: 1988 },
    ];
    this.cars['All'] = [];
    this.cars['All'] = this.getAllCars();
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
    /* Mercedes SL for MW & Carbon will get added because it appears twice, consolidate basemodels to resolve */
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

  isSelected = function(make: string, baseModel: string, year: number) {
    if (this.indexOfCar({make, baseModel, year}, this.selectedCars) !== -1) {
      return true;
    } else {
      return false;
    }
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
      this.games[i].pct = temp / this.selectedCars.length;
      // this.games[i].pct = ((temp / this.selectedCars.length) * 100).toFixed(0);
      // console.log(this.games);
      this.gameListChanged.next();
    }
  };
}
