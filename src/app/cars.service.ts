import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
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

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  cars: any = {};
  carList = new Array();
  carListChanged = new Subject<void>();

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
    this.cars['TFATF'] = [
      { make: 'Acura',      baseModel: 'Integra',       year: 1995,   model: 'Integra GS-R' },
      { make: 'Acura',      baseModel: 'Integra',       year: 1994,   model: 'Integra GS-R' },
      { make: 'Chevrolet',  baseModel: 'Chevelle',      year: 1968,   model: 'Chevelle SS' },
      { make: 'Dodge',      baseModel: 'Charger',       year: 1968 },
      { make: 'Ferrari',    baseModel: 'F355',          year: 1995,   model: 'F355 Spider' },
      { make: 'Ford',       baseModel: 'F-150',         year: 1997,   model: 'F-150 SVT Lightning' },
      /* 3 honda civics */
      { make: 'Honda',      baseModel: 'S2000',         year: 1999 },
      { make: 'Mazda',      baseModel: 'RX-7',          year: 1992 },
      { make: 'Mitsubishi', baseModel: 'Eclipse',       year: 1995,   model: 'Eclipse RS' },
      { make: 'Nissan',     baseModel: '240SX',         year: 1995,   note: '"Kouki" facelift' },
      { make: 'Nissan',     baseModel: 'Skyline',       year: 1998,   model: 'Skyline GT-R' },
      { make: 'Toyota',     baseModel: 'Supra',         year: 1993 },
      { make: 'Volkswagen', baseModel: 'Jetta',         year: 1992 }
    ];
    this.cars['2F2F'] = [
      /* BMW kinda */
      { make: 'Chevrolet',  baseModel: 'Camaro',        year: 1967,   model: 'Camaro Yenko S/C Replica' },
      { make: 'Dodge',      baseModel: 'Challenger',    year: 1970,   model: 'Challenger R/T' },
      { make: 'Honda',      baseModel: 'S2000',         year: 1999 },
      { make: 'Mazda',      baseModel: 'RX-7',          year: 1992 },
      { make: 'Mitsubishi', baseModel: 'Eclipse',       year: 2000,   model: 'Eclipse Spyder GTS' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2002,   model: 'Lancer Evolution VII' },
      { make: 'Nissan',     baseModel: 'Skyline',       year: 1998,   model: 'Skyline GT-R' },
      { make: 'Toyota',     baseModel: 'Supra',         year: 1993 }
    ];
    this.cars['TFATF2006'] = [
      { make: 'Acura',      baseModel: 'Integra',       year: 1994,   model: 'Integra Type R' },
      { make: 'Acura',      baseModel: 'NSX',           year: 1990 },
      { make: 'Chevrolet',  baseModel: 'Chevelle',      year: 1968,   model: 'Chevelle SS' },
      { make: 'Chevrolet',  baseModel: 'Corvette',      year: 2005,   model: 'Corvette C6' },
      { make: 'Chevrolet',  baseModel: 'Corvette',      year: 2005,   model: 'Corvette C6R' },
      { make: 'Chevrolet',  baseModel: 'Corvette',      year: 2005,   model: 'Corvette Z06' },
      { make: 'Dodge',      baseModel: 'Neon',          year: 1995,   model: 'Neon SRT-4' },
      { make: 'Dodge',      baseModel: 'Viper',         year: 2003,   model: 'Viper SRT-10' },
      { make: 'Dodge',      baseModel: 'Charger',       year: 1968,   model: 'Charger R/T 440 Magnum' },
      { make: 'Dodge',      baseModel: 'Charger',       year: 1968,   model: 'Charger R/T HEMI' },
      { make: 'Dodge',      baseModel: 'Charger',       year: 2006,   model: 'Charger Daytona R/T' },
      { make: 'Dodge',      baseModel: 'Charger',       year: 2006,   model: 'Charger SRT-8' },
      { make: 'Ford',       baseModel: 'Mustang',       year: 1965,   model: 'Mustang Fastback' },
      { make: 'Shelby',     baseModel: 'GT500',         year: 1967 },
      { make: 'Ford',       baseModel: 'Mustang',       year: 2005,   model: 'Mustang  GT' },
      { make: 'Ford',       baseModel: 'Mustang',       year: 2005,   model: 'Mustang  GTR Concept' },
      { make: 'Shelby',     baseModel: 'GT500',         year: 2005,   model: 'GT500 Concept' },
      { make: 'Saleen',     baseModel: 'S281',          year: 2005,   model: 'S281E' },
      { make: 'Ford',       baseModel: 'Focus',         year: 1998,   model: 'Focus SVT' },
      { make: 'Saleen',     baseModel: 'S121',          year: 2004,   model: 'S121 N20 Focus' },
      { make: 'Honda',      baseModel: 'Civic',         year: 2006,   model: 'Civic Si' },
      { make: 'Lexus',      baseModel: 'IS',            year: 1999,   model: 'IS 300' },
      { make: 'Lexus',      baseModel: 'IS',            year: 1999,   model: 'IS 300 Sport Design' },
      { make: 'Mazda',      baseModel: 'Mazda6',        year: 2002 },
      { make: 'Mazda',      baseModel: 'RX-7',          year: 1992 },
      { make: 'Mitsubishi', baseModel: 'Eclipse',       year: 1995,   model: 'Eclipse GSX' },
      { make: 'Mitsubishi', baseModel: 'Eclipse',       year: 2000,   model: 'Eclipse GT' },
      { make: 'Mitsubishi', baseModel: 'Eclipse',       year: 2006,   model: 'Eclipse GT' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2002,   model: 'Lancer Evolution VIII RS' },
      { make: 'Nissan',     baseModel: '350Z',          year: 2003,   model: '350Z 35th Anniversary Edition' },
      { make: 'Scion',      baseModel: 'tC',            year: 2005 },
      { make: 'Toyota',     baseModel: 'Supra',         year: 1993,   model: 'Supra Twin Turbo' },
      { make: 'Lexus',      baseModel: 'LF-C Concept',  year: 2004 },
      { make: 'Mitsubishi', baseModel: '3000GT',        year: 1990,   model: 'GTO Twin Turbo MR' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2002,   model: 'Lancer Evolution VII GSR' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2002,   model: 'Lancer Evolution VIII GSR' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2002,   model: 'Lancer Evolution VIII MR' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2002,   model: 'Lancer Evolution VIII FQ-400' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2002,   model: 'Lancer Evolution IX GSR' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2002,   model: 'Lancer Evolution IX RS' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2002,   model: 'Lancer Evolution IX MR' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2002,   model: 'Lancer Evolution IX Ralliart' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2008,   model: 'Concept-X (2005)' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2008,   model: 'Concept-Sportback (2005)' },
      { make: 'Acura',      baseModel: 'NSX',           year: 1990,   model: 'NSX-R' },
      { make: 'Acura',      baseModel: 'NSX',           year: 1990,   model: 'NSX-R GT' },
      { make: 'Honda',      baseModel: 'S2000',         year: 1999 },
      { make: 'Acura',      baseModel: 'Integra',       year: 1994,   model: 'Integra Type R (DC2)' },
      { make: 'Acura',      baseModel: 'RSX',           year: 2002,   model: 'Integra Type R' }
      /* INCOMPLETE */
    ];
    this.cars['TD2002'] = [
      { make: 'Aston Martin', baseModel: 'DB7',       year: 1997,   model: 'DB7 Vantage'},
      { make: 'Chevrolet',    baseModel: 'Camaro',    year: 1967,   model: 'Camaro Z28' },
      { make: 'Chevrolet',    baseModel: 'Chevelle',  year: 1968,   model: 'Chevelle SS' },
      { make: 'Chevrolet',    baseModel: 'Corvette',  year: 1968,   model: 'Corvette C3' },
      { make: 'Chevrolet',    baseModel: 'Corvette',  year: 1997,   model: 'Corvette C5 Z06' },
      { make: 'Dodge',        baseModel: 'Charger',   year: 1968,   model: 'Charger R/T' },
      { make: 'Dodge',        baseModel: 'Viper',     year: 1996,   note: 'GTS and GTS-R versions are included' },
      { make: 'Ford',         baseModel: 'GT40',      year: 1968,   model: 'GT40 Mk I' },
      { make: 'Ford',         baseModel: 'Mustang',   year: 1965,   model: 'Mustang Mach 1' },
      { make: 'Ford',         baseModel: 'Mustang',   year: 1994,   model: 'Mustang SVT Cobra R' },
      { make: 'Jaguar',       baseModel: 'XJ220',     year: 1992 },
      { make: 'Jaguar',       baseModel: 'XK',        year: 1997,   model: 'XKR' },
      { make: 'Lotus',        baseModel: 'Elise',     year: 1996,   model: 'Elise 111S' },
      { make: 'Lotus',        baseModel: 'Esprit',    year: 1993,   model: 'Esprit GT1' },
      { make: 'Nissan',       baseModel: 'Skyline',   year: 1998,   model: 'Skyline GT-R' },
      { make: 'Plymouth',     baseModel: 'Barracuda', year: 1970,   model: '\'Cuda' },
      { make: 'Pontiac',      baseModel: 'GTO',       year: 1964 },
      { make: 'Shelby',       baseModel: 'Cobra',     year: 1967,   model: 'Cobra 427' },
      { make: 'Shelby',       baseModel: 'Series 1',  year: 1998 },
      { make: 'Subaru',       baseModel: 'Impreza',   year: 1992,   model: 'Impreza 22B-STi' },
      { make: 'Toyota',       baseModel: 'Supra',     year: 1993 },
      { make: 'TVR',          baseModel: 'Cerbera',   year: 1996,   model: 'Cerbera Speed 12' }
    ];
    this.cars['TXR'] = [
      { make: 'Acura',      baseModel: 'Integra',   year: 1994,     model: 'Integra Type R',  note: 'Appears as a Honda Type R' },
      { make: 'Acura',      baseModel: 'NSX',       year: 1990,     note: 'Appears as a Honda NSX' },
      { make: 'Honda',      baseModel: 'Civic',     year: 1996,     model: 'Civic Type R' },
      { make: 'Honda',      baseModel: 'S2000',     year: 1999 },
      { make: 'Lexus',      baseModel: 'IS',        year: 1999,     model: 'IS 300',  note: 'Appears as Toyota Altezza' },
      { make: 'Mazda',      baseModel: 'RX-7',      year: 1985 },
      { make: 'Mazda',      baseModel: 'RX-7',      year: 1992 },
      { make: 'Mitsubishi', baseModel: 'Eclipse',   year: 1995,     model: 'Eclipse GSX' },
      { make: 'Mitsubishi', baseModel: 'Eclipse',   year: 2000,     model: 'Eclipse GT' },
      { make: 'Mitsubishi', baseModel: 'Lancer',    year: 1995,     model: 'Lancer Evolution III' },
      { make: 'Mitsubishi', baseModel: 'Lancer',    year: 1995,     model: 'Lancer Evolution V' },
      { make: 'Nissan',     baseModel: '240SX',     year: 1989,     note: 'Appears as a Nissan 180SX' },
      { make: 'Nissan',     baseModel: 'Cedric',    year: 1995 },
      { make: 'Nissan',     baseModel: '240Z',      year: 1969,     note: 'Appears as Fairlady Z' },
      { make: 'Nissan',     baseModel: '300ZX',     year: 1989,     model: '300ZX Z32' },
      { make: 'Nissan',     baseModel: 'Gloria',    year: 1995 },
      { make: 'Nissan',     baseModel: 'S13',       year: 1990 },
      { make: 'Nissan',     baseModel: 'S14',       year: 1994 },
      { make: 'Nissan',     baseModel: 'S15',       year: 1999 },
      { make: 'Nissan',     baseModel: 'Skyline',   year: 1989,     model: 'Skyline GT-R' },
      { make: 'Nissan',     baseModel: 'Skyline',   year: 1993,     model: 'Skyline GT-R' },
      { make: 'Nissan',     baseModel: 'Skyline',   year: 1998,     model: 'Skyline GT-R' },
      { make: 'Porsche',    baseModel: '911',       year: 1975,     model: '930 Turbo' },
      { make: 'Subaru',     baseModel: 'Impreza',   year: 1992,     model: 'WRX STI' },
      { make: 'Toyota',     baseModel: 'Chaser',    year: 1996 },
      { make: 'Toyota',     baseModel: 'Corolla',   year: 1984,     model: 'Corolla GT-S',
        note: 'Sprinter Trueno and Corolla Levin versions are included' },
      { make: 'Toyota',     baseModel: 'Supra',     year: 1993 },
      { make: 'Toyota',     baseModel: 'MR2',       year: 1989 }
    ];
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
  }

  games = [
    { id: 'J',      title: 'Juiced' },
    { id: 'LAR',    title: 'LA Rush' },
    { id: 'MCSR',   title: 'Midnight Club: Street Racing' },
    { id: 'MC2',    title: 'Midnight Club 2' },
    { id: 'MC3',    title: 'Midnight Club 3: Dub Edition' },
    { id: 'MC3R',   title: 'Midnight Club 3: Dub Edition Remix' },
    { id: 'MCLA',   title: 'Midnight Club: Los Angeles' },
    { id: 'NFSU',   title: 'Need for Speed: Underground' },
    { id: 'NFSU2',  title: 'Need for Speed: Underground 2' },
    { id: 'NFSMW',  title: 'Need for Speed: Most Wanted' },
    { id: 'NFSC',   title: 'Need for Speed: Carbon' },
    { id: 'NFS',    title: 'Need for Speed' },
    { id: 'SRS',    title: 'Street Racing Syndicate' },
    { id: 'TD2002', title: 'Test Drive (2002)' },
    /*{ id: 'TFATF2006',  title: 'The Fast and the Furious (2006)' },
    { id: 'TXR',    title: 'Tokyo Xtreme Racer' },
    { id: 'TXR2',   title: 'Tokyo Xtreme Racer 2' },
    { id: 'TXRZ',   title: 'Tokyo Xtreme Racer Zero' },
    { id: 'TXR3',   title: 'Tokyo Xtreme Racer 3' },
    { id: 'ITC',    title: 'Import Tuner Challenge' },*/
  ];

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
      if (arr1[i].make < arr2[j].make) {
        // add car 1
        this.carList.push(this.formatEntry(arr1[i], null));
        i++;
      // make of car 2 comes first
      } else if (arr1[i].make > arr2[j].make) {
        // add car 2
        this.carList.push(this.formatEntry(null, arr2[j]));
        j++;
      // make of car 1 and 2 is the same
      } else if (arr1[i].make === arr2[j].make) {
        // base model of car 1 comes first
        if (arr1[i].baseModel < arr2[j].baseModel) {
          // add car 1
          this.carList.push(this.formatEntry(arr1[i], null));
          i++;
        // base model of car 2 comes first
        } else if (arr1[i].baseModel > arr2[j].baseModel) {
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
      if (arr1[i].make < arr2[j].make) {
        // add car 1
        this.carList.push(this.formatEntry(arr1[i], null));
        i++;
      // make of car 2 comes first
      } else if (arr1[i].make > arr2[j].make) {
        // skip car 2
        j++;
      // make of car 1 and 2 is the same
      } else if (arr1[i].make === arr2[j].make) {
        // base model of car 1 comes first
        if (arr1[i].baseModel < arr2[j].baseModel) {
          // add car 1
          this.carList.push(this.formatEntry(arr1[i], null));
          i++;
        // base model of car 2 comes first
        } else if (arr1[i].baseModel > arr2[j].baseModel) {
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
      if (arr1[i].make < arr2[j].make) {
        // skip car 1
        i++;
      // make of car 2 comes first
      } else if (arr1[i].make > arr2[j].make) {
        // add car 2
        this.carList.push(this.formatEntry(null, arr2[j]));
        j++;
        // base model of car 1 comes first
      } else if (arr1[i].make === arr2[j].make) {
        if (arr1[i].baseModel < arr2[j].baseModel) {
          // skip car 1
          i++;
        // base model of car 2 comes first
        } else if (arr1[i].baseModel > arr2[j].baseModel) {
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
      if (arr1[i].make < arr2[j].make) {
        // add car 1
        this.carList.push(this.formatEntry(arr1[i], null));
        i++;
      // make of car 2 comes first
      } else if (arr1[i].make > arr2[j].make) {
        // add car 2
        this.carList.push(this.formatEntry(null, arr2[j]));
        j++;
      // make of car 1 and 2 is the same
      } else if (arr1[i].make === arr2[j].make) {
        // base model of car 1 comes first
        if (arr1[i].baseModel < arr2[j].baseModel) {
          // add car 1
          this.carList.push(this.formatEntry(arr1[i], null));
          i++;
        // base model of car 2 comes first
        } else if (arr1[i].baseModel > arr2[j].baseModel) {
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
}
