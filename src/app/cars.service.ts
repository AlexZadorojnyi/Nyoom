import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  cars: any = {};
  carList = new Array();
  carListChanged = new Subject<void>();

  constructor() {
    this.cars['J'] = [
      { make: 'Acura',        baseModel: 'Integra',     year: 1994,   model: 'Integra Type R',
        note: 'Also appears as a Honda Integra Type R' },
      { make: 'Acura',        baseModel: 'NSX',         year: 1990,
        note: 'Also appears as a Honda NSX' },
      { make: 'Acura',        baseModel: 'RSX',         year: 2002,   model: 'RSX Type S',
        note: 'Also appears as a 2002 Honda Integra Type R' },
      { make: 'Chevrolet',    baseModel: 'Camaro',      year: 1967,   model: 'Camaro Z28' },
      { make: 'Chevrolet',    baseModel: 'Camaro',      year: 1993 },
      { make: 'Chevrolet',    baseModel: 'Corvette',    year: 1968,   model: 'Corvette C3' },
      { make: 'Chevrolet',    baseModel: 'Corvette',    year: 1997,   model: 'Corvette C5 Z06' },
      { make: 'Dodge',        baseModel: 'Charger',     year: 1968,   model: 'Charger R/T' },
      { make: 'Dodge',        baseModel: 'Neon',        year: 1995,   note: 'Neon R/T and Neon SRT-4 versions are included' },
      { make: 'Dodge',        baseModel: 'Viper',       year: 1996,   model: 'Viper GTS' },
      { make: 'Fiat',         baseModel: 'Punto',       year: 1999,   model: 'Punto 1.8 HGT' },
      { make: 'Ford',         baseModel: 'Falcon',      year: 2002,   model: 'Falcon XR6' },
      { make: 'Ford',         baseModel: 'Focus',       year: 1998,   note: 'Focus ZTS and Focus SVT versions are included' },
      { make: 'Ford',         baseModel: 'Mustang',     year: 1965,   model: 'Mustang Mach 1' },
      { make: 'Ford',         baseModel: 'Mustang',     year: 1994,   model: 'Mustang' },
      { make: 'Honda',        baseModel: 'Civic',       year: 1996,   model: 'Civic DX' },
      { make: 'Honda',        baseModel: 'Civic',       year: 2001,   model: 'Type R' },
      { make: 'Honda',        baseModel: 'CR-X',        year: 1988,   model: 'CR-X SiR'},
      { make: 'Honda',        baseModel: 'Prelude',     year: 1991,   model: 'Prelude VTEC' },
      { make: 'Honda',        baseModel: 'S2000',       year: 1999 },
      { make: 'Mazda',        baseModel: 'MX-5',        year: 1989 },
      { make: 'Mazda',        baseModel: 'RX-7',        year: 1992 },
      { make: 'Mazda',        baseModel: 'RX-8',        year: 2003 },
      { make: 'Mitsubishi',   baseModel: '3000GT',      year: 1990 },
      { make: 'Mitsubishi',   baseModel: 'Eclipse',     year: 1995,     model: 'Eclipse GSX' },
      { make: 'Mitsubishi',   baseModel: 'FTO',         year: 1994,     model: 'FTO GS' },
      { make: 'Mitsubishi',   baseModel: 'Lancer',      year: 1999,     model: 'Lancer Evolution VI' },
      { make: 'Mitsubishi',   baseModel: 'Lancer',      year: 2003,     model: 'Lancer Evolution VIII' },
      { make: 'Nissan',       baseModel: '300ZX',       year: 1989,     model: '300ZX Z32' },
      { make: 'Nissan',       baseModel: '350Z',        year: 2003 },
      { make: 'Nissan',       baseModel: 'Skyline',     year: 1998,     model: 'Skyline GT-R' },
      { make: 'Peugeot',      baseModel: '206',         year: 1998,     model: '206 RC' },
      { make: 'Pontiac',      baseModel: 'Firebird',    year: 1993 },
      { make: 'Pontiac',      baseModel: 'GTO',         year: 2004,     note: 'Appears as a Holden Monaro CV8' },
      { make: 'Renault',      baseModel: 'Clio',        year: 1998,     model: 'Clio RS' },
      { make: 'Subaru',       baseModel: 'Impreza',     year: 2000,     model: 'WRX STI',
        note: 'Bug eye version' },
      { make: 'Subaru',       baseModel: 'Impreza',     year: 1992,     model: 'Impreza 22B-STi' },
      { make: 'Toyota',       baseModel: 'Celica',      year: 1994,     model: 'Celica GT' },
      { make: 'Toyota',       baseModel: 'Celica',      year: 1999,     model: 'Celica VVT-i' },
      { make: 'Toyota',       baseModel: 'Corolla',     year: 1995 },
      { make: 'Toyota',       baseModel: 'MR2',         year: 1989 },
      { make: 'Toyota',       baseModel: 'MR2',         year: 1999,     model: 'MR-S' },
      { make: 'Toyota',       baseModel: 'Supra',       year: 1993 },
      { make: 'Vauxhall',     baseModel: 'Corsa',       year: 2000 },
      { make: 'Volkswagen',   baseModel: 'Corrado',     year: 1988,    model: 'Corrado VR6' },
      { make: 'Volkswagen',   baseModel: 'Golf',        year: 1997 },
      { make: 'Volkswagen',   baseModel: 'New Beetle',  year: 1998 }
    ];
    this.cars['LAR'] = [
      { make: 'Buick',          baseModel: 'Regal',       year: 1978,   model: 'Regal GNX' },
      { make: 'Cadillac',       baseModel: 'Eldorado',    year: 1971,   model: 'Eldorado Convertible' },
      { make: 'Cadillac',       baseModel: 'Escalade',    year: 2002 },
      { make: 'Chevrolet',      baseModel: 'Camaro',      year: 1967,   model: 'Camaro SS/RS' },
      { make: 'Chevrolet',      baseModel: 'Chevelle',    year: 1968,   model: 'Chevelle SS' },
      { make: 'Chevrolet',      baseModel: 'Corvette',    year: 1968,   model: 'Corvette C3' },
      { make: 'Chevrolet',      baseModel: 'Corvette',    year: 1997,   model: 'Corvette C5 Z06' },
      { make: 'Chevrolet',      baseModel: 'Impala',      year: 1959 },
      { make: 'Chevrolet',      baseModel: 'Impala',      year: 1961,   model: 'Impala SS' },
      { make: 'Chevrolet',      baseModel: 'Impala',      year: 2000,   model: 'Impala SS' },
      { make: 'Chevrolet',      baseModel: 'Monte Carlo', year: 1973 },
      { make: 'Chevrolet',      baseModel: 'SSR',         year: 2003 },
      { make: 'Dodge',          baseModel: 'Charger',     year: 1968,   model: 'Charger R/T' },
      { make: 'Dodge',          baseModel: 'Charger',     year: 2006,   model: 'Charger R/T' },
      { make: 'Dodge',          baseModel: 'Magnum',      year: 2005 },
      { make: 'Dodge',          baseModel: 'Neon',        year: 1995,   model: 'Neon SRT-4' },
      { make: 'Dodge',          baseModel: 'Ram',         year: 2002,   model: 'Ram Rumble Bee' },
      { make: 'Dodge',          baseModel: 'Viper',       year: 2003,   model: 'Viper SRT-10' },
      { make: 'Hummer',         baseModel: 'H2',          year: 2003 },
      { make: 'Infiniti',       baseModel: 'FX45',        year: 2003 },
      { make: 'Lotus',          baseModel: 'Elise',       year: 2001 },
      { make: 'Lotus',          baseModel: 'Exige',       year: 2004 },
      { make: 'Mitsubishi',     baseModel: 'Eclipse',     year: 2000,   model: 'Eclipse Spyder' },
      { make: 'Mitsubishi',     baseModel: 'Lancer',      year: 2003,   model: 'Lancer Evolution VIII' },
      { make: 'Nissan',         baseModel: '240SX',       year: 1995 },
      { make: 'Nissan',         baseModel: '350Z',        year: 2003 },
      { make: 'Nissan',         baseModel: 'Frontier',    year: 2004,   model: 'Frontier LE Crew Cab 4x4' },
      { make: 'Nissan',         baseModel: 'Sentra',      year: 2000,   model: 'Sentra SE-R Spec V' },
      { make: 'Nissan',         baseModel: 'Skyline',     year: 1998,   model: 'Skyline GT-R' },
      { make: 'Nissan',         baseModel: 'Titan',       year: 2003,   model: 'SE Crew Cab 4x4' },
      { make: 'Oldsmobile',     baseModel: 'Cutlass',     year: 1978,   model: 'Cutlass Supreme Classic' },
      { make: 'Pontiac',        baseModel: 'GTO',         year: 1964 },
      { make: 'Pontiac',        baseModel: 'GTO',         year: 2004 },
      { make: 'Pontiac',        baseModel: 'Solstice',    year: 2006 },
      { make: 'Saleen',         baseModel: 'S7',          year: 2000 },
      { make: 'Subaru',         baseModel: 'Impreza',     year: 2000,   model: 'Impreza WRX STi',
        note: 'Blob eye version' }
    ];
    this.cars['MCSR'] = [
      { make: 'BMC',            baseModel: 'Mini',            year: 1959 },
      { make: 'BMW',            baseModel: 'M5',              year: 1995 },
      { make: 'Chevrolet',      baseModel: 'Camaro',          year: 1967,   model: 'Camaro SS' },
      { make: 'Ferrari',        baseModel: '360',             year: 2000,   model: '360 Modena' },
      { make: 'Ferrari',        baseModel: 'F50',             year: 1995 },
      { make: 'Ford',           baseModel: 'Crown Victoria',  year: 1998 },
      { make: 'Ford',           baseModel: 'F-150',           year: 1997,   model: 'F-150 SVT Lightning' },
      { make: 'Ford',           baseModel: 'Fairlane',        year: 1962 },
      { make: 'Mitsubishi',     baseModel: '3000GT',          year: 1990 },
      { make: 'Nissan',         baseModel: 'Skyline',         year: 1998 },
      { make: 'Renault',        baseModel: '5',               year: 1972,   model: '5' },
      { make: 'Renault',        baseModel: 'Clio',            year: 2001,   model: 'Clio V6' }
    ];
    this.cars['MC2'] = [
      { make: 'Acura',          baseModel: 'Integra',     year: 1994 },
      { make: 'Aston Martin',   baseModel: 'Vanquish',    year: 2001 },
      { make: 'BMW',            baseModel: 'M5',          year: 1988 },
      { make: 'Dodge',          baseModel: 'Viper',       year: 2003,   model: 'Viper GTS-R Concept (2000)' },
      { make: 'Ford',           baseModel: 'Escort',      year: 1986,   model: 'Escort RS Turbo' },
      { make: 'Ford',           baseModel: 'Escort',      year: 1990,   model: 'Escort RS Cosworth' },
      { make: 'Ford',           baseModel: 'Puma',        year: 1997},
      { make: 'Honda',          baseModel: 'Civic',       year: 1996,
        note: 'Coupe and Si versions are included' },
      { make: 'Honda',          baseModel: 'S2000',       year: 1999 },
      { make: 'Lexus',          baseModel: 'GS',          year: 1998,   model: 'GS 300' },
      { make: 'Lotus',          baseModel: 'Elise',       year: 2001 },
      { make: 'Mazda',          baseModel: 'RX-7',        year: 1992 },
      { make: 'Mitsubishi',     baseModel: 'Lancer',      year: 2001,   model: 'Lancer Evolution VII' },
      { make: 'Nissan',         baseModel: '350Z',        year: 2003 },
      { make: 'Nissan',         baseModel: 'Skyline',     year: 1998,   model: 'Skyline GT-R' },
      { make: 'Pontiac',        baseModel: 'GTO',         year: 1964 },
      { make: 'Porsche',        baseModel: '911',         year: 1997,   model: '911 GT3' },
      { make: 'Renault',        baseModel: 'Clio',        year: 2001,   model: 'Clio V6' },
      { make: 'Saleen',         baseModel: 'S7',          year: 2000 },
      { make: 'Toyota',         baseModel: 'MR2',         year: 1989 },
      { make: 'Toyota',         baseModel: 'Supra',       year: 1993,
        note: 'Standard and AB Flug bodykit versions are included' },
      { make: 'Volkswagen',     baseModel: 'Golf',        year: 1997 },
      { make: 'Volkswagen',     baseModel: 'Passat',      year: 1996 }
    ];
    this.cars['MC3'] = [
      { make: 'Cadillac',       baseModel: 'Cien',            year: 2002,   model: 'Cien (2002 Concept)' },
      { make: 'Cadillac',       baseModel: 'CTS',             year: 2003,   model: 'CTS-V' },
      { make: 'Cadillac',       baseModel: 'Escalade',        year: 2002,   note: 'Standard and EXT versions are included' },
      { make: 'Cadillac',       baseModel: 'Sixteen',         year: 2003,   model: 'Sixteen (2003 Concept)' },
      { make: 'Chevrolet',      baseModel: 'Bel Air',         year: 1955 },
      { make: 'Chevrolet',      baseModel: 'Camaro',          year: 1967,   model: 'Camaro Z/28' },
      { make: 'Chevrolet',      baseModel: 'Camaro',          year: 1970,   model: 'Camaro Z28' },
      { make: 'Chevrolet',      baseModel: 'Corvette',        year: 1968,   model: 'Corvette C3' },
      { make: 'Chevrolet',      baseModel: 'Corvette',        year: 1997,   model: 'Corvette C5 Z06' },
      { make: 'Chevrolet',      baseModel: 'El Camino',       year: 1968 },
      { make: 'Chevrolet',      baseModel: 'Fleetline',       year: 1949 },
      { make: 'Chevrolet',      baseModel: 'Impala',          year: 1961 },
      { make: 'Chevrolet',      baseModel: 'Impala',          year: 1994,   model: 'Impala SS' },
      { make: 'Chevrolet',      baseModel: 'Monte Carlo',     year: 1978 },
      { make: 'Chevrolet',      baseModel: 'Silverado',       year: 1999,   model: 'Silverado SST Concept' },
      { make: 'Chrysler',       baseModel: '300C',            year: 2005,   model: '300C' },
      { make: 'Chrysler',       baseModel: 'ME Four-Twelve',  year: 2004,   model: 'ME Four-Twelve (2004 Concept)' },
      { make: 'Dodge',          baseModel: 'Charger',         year: 1968,   model: 'Charger R/T' },
      { make: 'Dodge',          baseModel: 'Charger',         year: 1999,   model: 'Charger R/T (1999 Concept)' },
      { make: 'Dodge',          baseModel: 'Ram',             year: 2002,   model: 'Ram SRT-10' },
      { make: 'Dodge',          baseModel: 'Neon',            year: 1995,   model: 'Neon SRT-4' },
      { make: 'Dodge',          baseModel: 'Viper',           year: 2003,   model: 'Viper GTS-R Concept (2000)' },
      { make: 'Hummer',         baseModel: 'H1',              year: 1992 },
      { make: 'Hummer',         baseModel: 'H2',              year: 2003 },
      { make: 'Lamborghini',    baseModel: 'Gallardo',        year: 2004 },
      { make: 'Lamborghini',    baseModel: 'Murciélago',      year: 2001 },
      { make: 'Lexus',          baseModel: 'GS',              year: 1998,   model: 'GS 430' },
      { make: 'Lexus',          baseModel: 'IS',              year: 1999,   model: 'IS 300' },
      { make: 'Lexus',          baseModel: 'SC',              year: 2001,   model: 'SC 430' },
      { make: 'Lotus',          baseModel: 'Elise',           year: 2001 },
      { make: 'Lotus',          baseModel: 'Esprit',          year: 1993,   model: 'Esprit V8' },
      { make: 'McLaren',        baseModel: 'F1',              year: 1993,   model: 'F1 LM' },
      { make: 'Mercedes-Benz',  baseModel: 'CL-Class',        year: 2000,   note: 'CL 500 and CL 55 AMG versions are included' },
      { make: 'Mercedes-Benz',  baseModel: 'CLK-GTR',         year: 1998 },
      { make: 'Mercedes-Benz',  baseModel: 'G-Class',         year: 1990,   note: 'G 500 and G 55 AMG versions are included' },
      { make: 'Mercedes-Benz',  baseModel: 'SL-Class',        year: 2002,   note: 'SL 500 and SL 55 AMG versions are included' },
      { make: 'Mercedes-Benz',  baseModel: 'SLR McLaren',     year: 2003 },
      { make: 'Mitsubishi',     baseModel: 'Eclipse',         year: 2000 },
      { make: 'Mitsubishi',     baseModel: 'Lancer',          year: 2003,   model: 'Lancer Evolution VIII' },
      { make: 'Nissan',         baseModel: '350Z',            year: 2003 },
      { make: 'Nissan',         baseModel: 'Skyline',         year: 1998,   model: 'Skyline GT-R V-spec' },
      { make: 'Pontiac',        baseModel: 'GTO',             year: 1968,   model: 'GTO "The Judge"' },
      { make: 'Pontiac',        baseModel: 'LeMans',          year: 1968 },
      { make: 'Porsche',        baseModel: '911',             year: 1999,   model: 'Gemballa Sport Coupe' },
      { make: 'Saleen',         baseModel: 'S7',              year: 2000 },
      { make: 'Saleen',         baseModel: 'SR',              year: 1994 },
      { make: 'Toyota',         baseModel: 'Supra',           year: 1993 },
      { make: 'Volkswagen',     baseModel: 'Golf',            year: 2003,   model: 'Golf R32' },
      { make: 'Volkswagen',     baseModel: 'Jetta',           year: 1999 },
      { make: 'Volkswagen',     baseModel: 'Phaeton',         year: 2003 }
    ];
    this.cars['MC3R'] = [
      { make: 'Cadillac',       baseModel: 'Cien',            year: 2002,   model: 'Cien (2002 Concept)' },
      { make: 'Cadillac',       baseModel: 'Coupe DeVille',   year: 1965 },
      { make: 'Cadillac',       baseModel: 'CTS',             year: 2003,   model: 'CTS-V' },
      { make: 'Cadillac',       baseModel: 'Eldorado',        year: 1967 },
      { make: 'Cadillac',       baseModel: 'Escalade',        year: 2002,   note: 'Standard and EXT versions are included' },
      { make: 'Cadillac',       baseModel: 'Sixteen',         year: 2003,   model: 'Sixteen (2003 Concept)' },
      { make: 'Cadillac',       baseModel: 'XLR',             year: 2004 },
      { make: 'Chevrolet',      baseModel: 'Bel Air',         year: 1955 },
      { make: 'Chevrolet',      baseModel: 'Camaro',          year: 1967,   model: 'Camaro Z/28' },
      { make: 'Chevrolet',      baseModel: 'Camaro',          year: 1970,   model: 'Camaro Z28' },
      { make: 'Chevrolet',      baseModel: 'Chevelle',        year: 1968,   model: 'Chevelle SS' },
      { make: 'Chevrolet',      baseModel: 'Cobalt',          year: 2005,   model: 'Cobalt SS' },
      { make: 'Chevrolet',      baseModel: 'Corvette',        year: 1963,   model: 'Corvette C2' },
      { make: 'Chevrolet',      baseModel: 'Corvette',        year: 1968,   model: 'Corvette C3' },
      { make: 'Chevrolet',      baseModel: 'Corvette',        year: 1997,   model: 'Corvette C5 Z06' },
      { make: 'Chevrolet',      baseModel: 'El Camino',       year: 1968 },
      { make: 'Chevrolet',      baseModel: 'Fleetline',       year: 1949 },
      { make: 'Chevrolet',      baseModel: 'Impala',          year: 1961 },
      { make: 'Chevrolet',      baseModel: 'Impala',          year: 1994,   model: 'Impala SS' },
      { make: 'Chevrolet',      baseModel: 'Monte Carlo',     year: 1978 },
      { make: 'Chevrolet',      baseModel: 'Silverado',       year: 1999,   model: 'Silverado SST Concept' },
      { make: 'Chevrolet',      baseModel: 'SSR',             year: 2003 },
      { make: 'Chrysler',       baseModel: '300C',            year: 2005,   model: '300C' },
      { make: 'Chrysler',       baseModel: 'ME Four-Twelve',  year: 2004,   model: 'ME Four-Twelve (2004 Concept)' },
      { make: 'Dodge',          baseModel: 'Charger',         year: 1968,   model: 'Charger R/T' },
      { make: 'Dodge',          baseModel: 'Charger',         year: 1999,   model: 'Charger R/T (1999 Concept)' },
      { make: 'Dodge',          baseModel: 'Charger',         year: 2006,   model: 'Charger SRT-8' },
      { make: 'Dodge',          baseModel: 'Magnum',          year: 2005 },
      { make: 'Dodge',          baseModel: 'Neon',            year: 1995,   model: 'Neon SRT-4' },
      { make: 'Dodge',          baseModel: 'Ram',             year: 2002,   model: 'Ram SRT-10' },
      { make: 'Dodge',          baseModel: 'Super 8 Hemi',    year: 2001 },
      { make: 'Dodge',          baseModel: 'Viper',           year: 2003,   model: 'Viper GTS-R Concept (2000)' },
      { make: 'Ferrari',        baseModel: 'F355',            year: 1995,   model: 'Gemballa F355' },
      { make: 'GMC',            baseModel: 'Yukon',           year: 2000,   model: 'Yukon Denali' },
      { make: 'Hummer',         baseModel: 'H1',              year: 1992 },
      { make: 'Hummer',         baseModel: 'H2',              year: 2003 },
      { make: 'Hummer',         baseModel: 'H3',              year: 2006,   model: 'H3T' },
      { make: 'Infiniti',       baseModel: 'FX45',            year: 2003 },
      { make: 'Infiniti',       baseModel: 'G35',             year: 2003 },
      { make: 'Lamborghini',    baseModel: 'Diablo',          year: 1990,   model: 'Diablo VT' },
      { make: 'Lamborghini',    baseModel: 'Gallardo',        year: 2004 },
      { make: 'Lamborghini',    baseModel: 'Murciélago',      year: 2001 },
      { make: 'Lexus',          baseModel: 'GS',              year: 1998,   model: 'GS 430' },
      { make: 'Lexus',          baseModel: 'IS',              year: 1999,   model: 'IS 300' },
      { make: 'Lexus',          baseModel: 'SC',              year: 2001,   model: 'SC 430' },
      { make: 'Lotus',          baseModel: 'Elise',           year: 2001 },
      { make: 'Lotus',          baseModel: 'Esprit',          year: 1993,   model: 'Esprit V8' },
      { make: 'McLaren',        baseModel: 'F1',              year: 1993,   model: 'F1 LM' },
      { make: 'Mercedes-Benz',  baseModel: 'CL-Class',        year: 2000,   note: 'CL 500 and CL 55 AMG versions are included' },
      { make: 'Mercedes-Benz',  baseModel: 'CLK-GTR',         year: 1998 },
      { make: 'Mercedes-Benz',  baseModel: 'CLS-Class',       year: 2004,   model: 'CLS 55 AMG' },
      { make: 'Mercedes-Benz',  baseModel: 'G-Class',         year: 1990,   note: 'G 500 and G 55 AMG versions are included' },
      { make: 'Mercedes-Benz',  baseModel: 'SL-Class',        year: 2002,   note: 'SL 500 and SL 55 AMG versions are included' },
      { make: 'Mercedes-Benz',  baseModel: 'SLR McLaren',     year: 2003 },
      { make: 'Mitsubishi',     baseModel: 'Eclipse',         year: 2000 },
      { make: 'Mitsubishi',     baseModel: 'Lancer',          year: 2003,   model: 'Lancer Evolution VIII' },
      { make: 'Nissan',         baseModel: '350Z',            year: 2003 },
      { make: 'Nissan',         baseModel: 'Skyline',         year: 1998,   model: 'Skyline GT-R V-spec' },
      { make: 'Nissan',         baseModel: 'Sport Concept',   year: 2005 },
      { make: 'Pagani',         baseModel: 'Zonda',           year: 1999,   model: 'Zonda C12 S' },
      { make: 'Pontiac',        baseModel: 'GTO',             year: 1968,   model: 'GTO "The Judge"' },
      { make: 'Pontiac',        baseModel: 'LeMans',          year: 1968 },
      { make: 'Porsche',        baseModel: 'Cayenne',         year: 2003,   model: 'Gemballa GT 750' },
      { make: 'Porsche',        baseModel: '911',             year: 1999,   model: 'Gemballa Sport Coupe' },
      { make: 'Saleen',         baseModel: 'S7',              year: 2000 },
      { make: 'Saleen',         baseModel: 'SR',              year: 1994 },
      { make: 'Scion',          baseModel: 'tC',              year: 2005 },
      { make: 'Toyota',         baseModel: 'Supra',           year: 1993 },
      { make: 'Volkswagen',     baseModel: 'Golf',            year: 2003,   model: 'Golf R32' },
      { make: 'Volkswagen',     baseModel: 'Jetta',           year: 1999 },
      { make: 'Volkswagen',     baseModel: 'Phaeton',         year: 2003 }
    ];
    this.cars['MCLA'] = [
      { make: 'Aston Martin',   baseModel: 'Vantage',     year: 2005,   model: 'V8 Vantage Roadster' },
      { make: 'Audi',           baseModel: 'R8',          year: 2006,   model: 'R8 4.2 FSI quattro' },
      { make: 'Audi',           baseModel: 'RS4',         year: 2006 },
      { make: 'Buick',          baseModel: 'Regal',       year: 1978,   model: 'Regal GNX' },
      { make: 'Chevrolet',      baseModel: 'Camaro',      year: 1967,   model: 'Camaro SS/RS' },
      { make: 'Chevrolet',      baseModel: 'Camaro',      year: 2010,   model: 'Camaro Concept (2006)' },
      { make: 'Chevrolet',      baseModel: 'Cobalt',      year: 2005,   model: 'Cobalt SS Supercharged' },
      { make: 'Chevrolet',      baseModel: 'Impala',      year: 1994,   model: 'Impala SS' },
      { make: 'Chrysler',       baseModel: '300C',        year: 2005,   model: '300C SRT-8' },
      { make: 'Dodge',          baseModel: 'Challenger',  year: 1970,   model: 'Challenger R/T' },
      { make: 'Dodge',          baseModel: 'Challenger',  year: 2008,   model: 'Challenger Concept' },
      { make: 'Dodge',          baseModel: 'Charger',     year: 2006,   model: 'Charger SRT-8' },
      { make: 'Ford',           baseModel: 'Cobra',       year: 2004,   model: 'Shelby Cobra Concept' },
      { make: 'Ford',           baseModel: 'Focus',       year: 1998,   model: 'Focus SVT' },
      { make: 'Ford',           baseModel: 'GT',          year: 2005 },
      { make: 'Ford',           baseModel: 'Mustang',     year: 1965,   model: 'Mustang Boss 302' },
      { make: 'Ford',           baseModel: 'Mustang',     year: 2005,   model: 'Mustang GT Convertible' },
      { make: 'Lamborghini',    baseModel: 'Gallardo',    year: 2004,   model: 'Gallardo Spyder' },
      { make: 'Lamborghini',    baseModel: 'Murciélago',  year: 2001,   model: 'Murciélago Roadster' },
      { make: 'Mazda',          baseModel: 'RX-7',        year: 1992 },
      { make: 'Mazda',          baseModel: 'RX-8',        year: 2003,   model: 'RX-8 Shinka' },
      { make: 'Mercedes-Benz',  baseModel: 'S-Class',     year: 2006,   model: 'S 600' },
      { make: 'Mercedes-Benz',  baseModel: 'SL-Class',    year: 2002,   model: 'SL 65 AMG' },
      { make: 'Mitsubishi',     baseModel: '3000GT',      year: 1990,   model: '3000GT VR-4' },
      { make: 'Mitsubishi',     baseModel: 'Eclipse',     year: 1995,   model: 'Eclipse GSX' },
      { make: 'Mitsubishi',     baseModel: 'Lancer',      year: 2005,   model: 'Lancer MR Evolution IX' },
      { make: 'Nissan',         baseModel: '240SX',       year: 1995 },
      { make: 'Nissan',         baseModel: '240Z',        year: 1969,   model: '280Z',  note: 'Appears as Datsun 280Z' },
      { make: 'Nissan',         baseModel: '350Z',        year: 2003,   model: '350Z Roadster' },
      { make: 'Nissan',         baseModel: 'Skyline',     year: 1998,   model: 'Skyline GT-R' },
      { make: 'Pontiac',        baseModel: 'Firebird',    year: 1970 },
      { make: 'Pontiac',        baseModel: 'Solstice',    year: 2006 },
      { make: 'Saleen',         baseModel: 'S302',        year: 2007,   model: 'S302 Extreme' },
      { make: 'Saleen',         baseModel: 'S7',          year: 2000,   model: 'S7 Twin Turbo' },
      { make: 'Volkswagen',     baseModel: 'Golf',        year: 1974,   model: 'Golf GTI' },
      { make: 'Volkswagen',     baseModel: 'Golf',        year: 2003,   model: 'Golf GTI' },
      { make: 'Volkswagen',     baseModel: 'Scirocco',    year: 1981 },
    ];
    this.cars['MCLACE'] = [
      { make: 'Aston Martin',   baseModel: 'DB9',         year: 2004 },
      { make: 'Aston Martin',   baseModel: 'Vantage',     year: 2005,   model: 'V8 Vantage Roadster' },
      { make: 'Audi',           baseModel: 'R8',          year: 2006,   model: 'R8 4.2 FSI quattro' },
      { make: 'Audi',           baseModel: 'RS4',         year: 2006 },
      { make: 'Audi',           baseModel: 'S5',          year: 2007 },
      { make: 'Buick',          baseModel: 'Regal',       year: 1978,   model: 'Regal GNX' },
      { make: 'Buick',          baseModel: 'Riviera',     year: 1963 },
      { make: 'Cadillac',       baseModel: 'XLR',         year: 2004,   model: 'XLR-V' },
      { make: 'Chevrolet',      baseModel: 'Bel Air',     year: 1955 },
      { make: 'Chevrolet',      baseModel: 'Camaro',      year: 1967,   model: 'Camaro SS/RS' },
      { make: 'Chevrolet',      baseModel: 'Camaro',      year: 2010,   model: 'Camaro Concept (2006)' },
      { make: 'Chevrolet',      baseModel: 'Chevelle',    year: 1968,   model: 'Chevelle SS 454' },
      { make: 'Chevrolet',      baseModel: 'Cobalt',      year: 2005,   model: 'Cobalt SS Supercharged' },
      { make: 'Chevrolet',      baseModel: 'Impala',      year: 1961,   model: 'Impala SS' },
      { make: 'Chevrolet',      baseModel: 'Impala',      year: 1994,   model: 'Impala SS' },
      { make: 'Chevrolet',      baseModel: 'Malibu',      year: 1968,   model: 'Malibu SS 283' },
      { make: 'Chrysler',       baseModel: '300C',        year: 2005,   model: '300C SRT-8' },
      { make: 'Dodge',          baseModel: 'Challenger',  year: 1970,   model: 'Challenger R/T' },
      { make: 'Dodge',          baseModel: 'Challenger',  year: 2008,   model: 'Challenger Concept' },
      { make: 'Dodge',          baseModel: 'Charger',     year: 2006,   model: 'Charger SRT-8' },
      { make: 'Ford',           baseModel: 'Cobra',       year: 2004,   model: 'Shelby Cobra Concept' },
      { make: 'Ford',           baseModel: 'Focus',       year: 1998,   model: 'Focus SVT' },
      { make: 'Ford',           baseModel: 'GT',          year: 2005 },
      { make: 'Ford',           baseModel: 'Mustang',     year: 1965,   model: 'Mustang Boss 302' },
      { make: 'Ford',           baseModel: 'Mustang',     year: 2005,   model: 'Mustang GT Convertible' },
      { make: 'Lamborghini',    baseModel: 'Gallardo',    year: 2004,   model: 'Gallardo Spyder' },
      { make: 'Lamborghini',    baseModel: 'Murciélago',  year: 2001,   model: 'Murciélago Roadster' },
      { make: 'Land-Rover',     baseModel: 'Range Rover', year: 2002,   note: 'Supercharged and Sport Supercharged versions are included' },
      { make: 'Mazda',          baseModel: 'RX-7',        year: 1992 },
      { make: 'Mazda',          baseModel: 'RX-8',        year: 2003,   model: 'RX-8 Shinka' },
      { make: 'Mercedes-Benz',  baseModel: 'CL-Class',    year: 2007,   model: 'CL 65 AMG' },
      { make: 'Mercedes-Benz',  baseModel: 'CLK-Class',   year: 2002,   model: 'CLK 63 AMG Black Series' },
      { make: 'Mercedes-Benz',  baseModel: 'S-Class',     year: 2006,   model: 'S 600' },
      { make: 'Mercedes-Benz',  baseModel: 'SL-Class',    year: 2002,   model: 'SL 65 AMG' },
      { make: 'Mitsubishi',     baseModel: '3000GT',      year: 1990,   model: '3000GT VR-4' },
      { make: 'Mitsubishi',     baseModel: 'Eclipse',     year: 1995,   model: 'Eclipse GSX' },
      { make: 'Mitsubishi',     baseModel: 'Eclipse',     year: 2006,   model: 'Eclipse Spyder GT' },
      { make: 'Mitsubishi',     baseModel: 'Lancer',      year: 2005,   model: 'Lancer MR Evolution IX' },
      { make: 'Mitsubishi',     baseModel: 'Lancer',      year: 2007,   model: 'Lancer MR Evolution X' },
      { make: 'Nissan',         baseModel: '240SX',       year: 1995 },
      { make: 'Nissan',         baseModel: '240Z',        year: 1969,   model: '280Z',  note: 'Appears as Datsun 280Z' },
      { make: 'Nissan',         baseModel: '350Z',        year: 2003,   model: '350Z Roadster' },
      { make: 'Nissan',         baseModel: 'Skyline',     year: 1998,   model: 'Skyline GT-R' },
      { make: 'Pontiac',        baseModel: 'Firebird',    year: 1970 },
      { make: 'Pontiac',        baseModel: 'GTO',         year: 1964 },
      { make: 'Pontiac',        baseModel: 'Solstice',    year: 2006 },
      { make: 'Saleen',         baseModel: 'S302',        year: 2007,   model: 'S302 Extreme' },
      { make: 'Saleen',         baseModel: 'S7',          year: 2000,   model: 'S7 Twin Turbo' },
      { make: 'Volkswagen',     baseModel: 'Golf',        year: 1983,   model: 'Golf GTI' },
      { make: 'Volkswagen',     baseModel: 'Golf',        year: 2003,   model: 'Golf GTI' },
      { make: 'Volkswagen',     baseModel: 'Scirocco',    year: 1981 },
    ];
    this.cars['NFSU'] = [
      { make: 'Acura',      baseModel: 'Integra',   year: 1994,     model: 'Integra Type R' },
      { make: 'Acura',      baseModel: 'RSX',       year: 2002 },
      { make: 'Dodge',      baseModel: 'Neon',      year: 1995 },
      { make: 'Ford',       baseModel: 'Focus',     year: 1998,     model: 'Focus ZX3' },
      { make: 'Honda',      baseModel: 'Civic',     year: 1996,     model: 'Civic Si' },
      { make: 'Honda',      baseModel: 'S2000',     year: 1999 },
      { make: 'Hyundai',    baseModel: 'Tiburon',   year: 2002,     model: 'Tiburon GT' },
      { make: 'Mazda',      baseModel: 'MX-5',      year: 1998 },
      { make: 'Mazda',      baseModel: 'RX-7',      year: 1992 },
      { make: 'Mitsubishi', baseModel: 'Eclipse',   year: 1995,     model: 'Eclipse GSX' },
      { make: 'Mitsubishi', baseModel: 'Lancer',    year: 2000,     model: 'Lancer ES'},
      { make: 'Nissan',     baseModel: '240SX',     year: 1989 },
      { make: 'Nissan',     baseModel: '350Z',      year: 2003 },
      { make: 'Nissan',     baseModel: 'Sentra',    year: 2000,     model: 'Sentra SE-R Spec V' },
      { make: 'Nissan',     baseModel: 'Skyline',   year: 1998,     model: 'Skyline GT-R' },
      { make: 'Peugeot',    baseModel: '206',       year: 1998,     model: '206 GTi' },
      { make: 'Subaru',     baseModel: 'Impreza',   year: 2000,     model: 'Impreza 2.5 RS',
        note: 'Bug eye version' },
      { make: 'Toyota',     baseModel: 'Celica',    year: 1999,     model: 'Celica GT-S' },
      { make: 'Toyota',     baseModel: 'Supra',     year: 1993 },
      { make: 'Volkswagen', baseModel: 'Golf',      year: 1997,     model: 'Golf GTi' }
    ];
    this.cars['NFSU2'] = [
      { make: 'Acura',      baseModel: 'RSX',       year: 2002,     model: 'RSX Type S',    note: 'North American version only' },
      { make: 'Audi',       baseModel: 'A3',        year: 2003 },
      { make: 'Audi',       baseModel: 'TT',        year: 1998 },
      { make: 'Cadillac',   baseModel: 'Escalade',  year: 2002 },
      { make: 'Ford',       baseModel: 'Focus',     year: 1998,     model: 'Focus ZX3' },
      { make: 'Ford',       baseModel: 'Mustang',   year: 2005,     model: 'Mustang  GT' },
      { make: 'Honda',      baseModel: 'Civic',     year: 1996,     model: 'Civic Si',      note: 'North American version only' },
      { make: 'Hummer',     baseModel: 'H2',        year: 2003 },
      { make: 'Hyundai',    baseModel: 'Tiburon',   year: 2002,     model: 'Tiburon GT' },
      { make: 'Infiniti',   baseModel: 'G35',       year: 2003 },
      { make: 'Lexus',      baseModel: 'IS',        year: 1999,     model: 'IS 300' },
      { make: 'Lincoln',    baseModel: 'Navigator', year: 2002 },
      { make: 'Mazda',      baseModel: 'MX-5',      year: 1998 },
      { make: 'Mazda',      baseModel: 'RX-7',      year: 1992 },
      { make: 'Mazda',      baseModel: 'RX-8',      year: 2003 },
      { make: 'Mitsubishi', baseModel: '3000GT',    year: 1990 },
      { make: 'Mitsubishi', baseModel: 'Eclipse',   year: 1995,     model: 'Eclipse GSX' },
      { make: 'Mitsubishi', baseModel: 'Lancer',    year: 2003,     model: 'Lancer Evolution VIII' },
      { make: 'Nissan',     baseModel: '240SX',     year: 1989 },
      { make: 'Nissan',     baseModel: '350Z',      year: 2003 },
      { make: 'Nissan',     baseModel: 'Sentra',    year: 2000,     model: 'Sentra SE-R Spec V' },
      { make: 'Nissan',     baseModel: 'Skyline',   year: 1998,     model: 'Skyline GT-R' },
      { make: 'Peugeot',    baseModel: '106',       year: 1996,     model: '106 GTi',       note: 'European and Asian version only' },
      { make: 'Peugeot',    baseModel: '206',       year: 1998,     model: '206 GTi' },
      { make: 'Pontiac',    baseModel: 'GTO',       year: 2004 },
      { make: 'Subaru',     baseModel: 'Impreza',   year: 2000,     model: 'Impreza WRX STI',
        note: 'Blob eye version' },
      { make: 'Toyota',     baseModel: 'Celica',    year: 1999,     model: 'Celica GT-S' },
      { make: 'Toyota',     baseModel: 'Corolla',   year: 1984,     model: 'Corolla GT-S' },
      { make: 'Toyota',     baseModel: 'Supra',     year: 1993 },
      { make: 'Vauxhall',   baseModel: 'Corsa',     year: 2000,     model: 'Corsa 1.8 SRi', note: 'European and Asian version only' },
      { make: 'Volkswagen', baseModel: 'Golf',      year: 1997,     model: 'Golf GTi' }
    ];
    this.cars['NFSMW'] = [
      { make: 'Aston Martin',   baseModel: 'DB9',           year: 2004 },
      { make: 'Audi',           baseModel: 'A3',            year: 2003,   model: 'A3 3.2 quattro' },
      { make: 'Audi',           baseModel: 'A4',            year: 2004,   model: 'A3 3.2 FSI quattro' },
      { make: 'Audi',           baseModel: 'TT',            year: 1998,   model: 'TT 3.2 quattro' },
      { make: 'BMW',            baseModel: '3 Series',      year: 1998,   model: 'M3 GTR',
        note: 'Stock model is a Black Edition exclusive' },
      { make: 'Cadillac',       baseModel: 'CTS',           year: 2003 },
      { make: 'Chevrolet',      baseModel: 'Camaro',        year: 1967,   model: 'Camaro SS/RS',  note: 'Black Edition only' },
      { make: 'Chevrolet',      baseModel: 'Cobalt',        year: 2005,   model: 'Cobalt SS' },
      { make: 'Chevrolet',      baseModel: 'Corvette',      year: 2005,   model: 'Corvette C6',
        note: 'C6R version included in Black Edition only' },
      { make: 'Dodge',          baseModel: 'Viper',         year: 2003,   model: 'Viper SRT-10' },
      { make: 'Fiat',           baseModel: 'Grande Punto',  year: 1999 },
      { make: 'Ford',           baseModel: 'GT',            year: 2005 },
      { make: 'Ford',           baseModel: 'Mustang',       year: 2005,   model: 'Mustang  GT' },
      { make: 'Lamborghini',    baseModel: 'Gallardo',      year: 2004 },
      { make: 'Lamborghini',    baseModel: 'Murciélago',    year: 2001 },
      { make: 'Lexus',          baseModel: 'IS',            year: 1999,   model: 'IS 300' },
      { make: 'Lotus',          baseModel: 'Elise',         year: 2001 },
      { make: 'Mazda',          baseModel: 'RX-7',          year: 1992 },
      { make: 'Mazda',          baseModel: 'RX-8',          year: 2003 },
      { make: 'Mercedes-Benz',  baseModel: 'CLK-Class',     year: 2002,   model: 'CLK 500' },
      { make: 'Mercedes-Benz',  baseModel: 'SL-Class',      year: 2002,   note: 'SL 500 and SL 65 AMG versions are included' },
      { make: 'Mercedes-Benz',  baseModel: 'SLR McLaren',   year: 2003 },
      { make: 'Mitsubishi',     baseModel: 'Eclipse',       year: 2006,   model: 'Eclipse' },
      { make: 'Mitsubishi',     baseModel: 'Lancer',        year: 2003,   model: 'Lancer Evolution VIII' },
      { make: 'Pontiac',        baseModel: 'GTO',           year: 2004,   note: 'Also appears as Holden Monaro VXR' },
      { make: 'Porsche',        baseModel: '911',           year: 1999,
        note: '911 Turbo S version is included in the base game and the 911 GT2 version is included in the Black Edition' },
      { make: 'Porsche',        baseModel: '911',           year: 2005,   model: '911 Carrera S' },
      { make: 'Porsche',        baseModel: 'Carrera GT',    year: 2004 },
      { make: 'Porsche',        baseModel: 'Cayman',        year: 2005,   model: 'Cayman S' },
      { make: 'Renault',        baseModel: 'Clio',          year: 2001,   model: 'Clio V6 2' },
      { make: 'Subaru',         baseModel: 'Impreza',       year: 2000,   model: 'Impreza WRX STi',
        note: 'Blob eye version' },
      { make: 'Toyota',         baseModel: 'Supra',         year: 1993 },
      { make: 'Volkswagen',     baseModel: 'Golf',          year: 2003,   model: 'Golf GTI' }
    ];
    this.cars['NFSC'] = [
      { make: 'Alfa Romeo',     baseModel: 'Brera',       year: 2005 },
      { make: 'Aston Martin',   baseModel: 'DB9',         year: 2004 },
      { make: 'Audi',           baseModel: 'R8',          year: 2006,   model: 'Le Mans quattro concept (2003)' },
      { make: 'BMW',            baseModel: 'M3',          year: 2000,   model: 'M3 GTR' },
      { make: 'Chevrolet',      baseModel: 'Camaro',      year: 1967,   model: 'Camaro SS 396' },
      { make: 'Chevrolet',      baseModel: 'Camaro',      year: 2010,   model: 'Camaro Concept (2006)' },
      { make: 'Chevrolet',      baseModel: 'Chevelle',    year: 1968,   model: 'Chevelle SS' },
      { make: 'Chevrolet',      baseModel: 'Corvette',    year: 2005,   model: 'Corvette Z06 C6' },
      { make: 'Chrysler',       baseModel: '300C',        year: 2005,   model: '300C SRT-8' },
      { make: 'Dodge',          baseModel: 'Challenger',  year: 1970,   model: 'Challenger R/T' },
      { make: 'Dodge',          baseModel: 'Challenger',  year: 2008,   model: 'Challenger Concept (2006)' },
      { make: 'Dodge',          baseModel: 'Charger',     year: 1968,   model: 'Charger R/T' },
      { make: 'Dodge',          baseModel: 'Charger',     year: 2006,   model: 'Charger SRT-8' },
      { make: 'Dodge',          baseModel: 'Viper',       year: 2003,   model: 'Viper SRT-10' },
      { make: 'Ford',           baseModel: 'GT',          year: 2005 },
      { make: 'Ford',           baseModel: 'Mustang',     year: 2005,   model: 'Mustang  GT' },
      { make: 'Infiniti',       baseModel: 'G35',         year: 2003 },
      { make: 'Jaguar',         baseModel: 'XK',          year: 2007,   model: 'XK' },
      { make: 'Koenigsegg',     baseModel: 'CCX',         year: 2006 },
      { make: 'Lamborghini',    baseModel: 'Gallardo',    year: 2004 },
      { make: 'Lamborghini',    baseModel: 'Murciélago',  year: 2001,   note: 'Standard and LP 640 versions are included' },
      { make: 'Lexus',          baseModel: 'IS',          year: 1999,   model: 'IS 300' },
      { make: 'Lotus',          baseModel: 'Elise',       year: 2001 },
      { make: 'Lotus',          baseModel: 'Europa',      year: 2006,   model: 'Europa S' },
      { make: 'Mazda',          baseModel: '3',           year: 2003 },
      { make: 'Mazda',          baseModel: 'RX-7',        year: 1992 },
      { make: 'Mazda',          baseModel: 'RX-8',        year: 2003 },
      { make: 'Mercedes-Benz',  baseModel: 'CLK-Class',   year: 2002,   model: 'CLK 500' },
      { make: 'Mercedes-Benz',  baseModel: 'SL-Class',    year: 2002,   model: 'SL 65 AMG' },
      { make: 'Mercedes-Benz',  baseModel: 'SLR McLaren', year: 2003 },
      { make: 'Mitsubishi',     baseModel: 'Eclipse',     year: 1995,   model: 'Eclipse GS-T' },
      { make: 'Mitsubishi',     baseModel: 'Eclipse',     year: 2006,   model: 'Eclipse GT' },
      { make: 'Mitsubishi',     baseModel: 'Lancer',      year: 2005,   model: 'Lancer Evolution IX MR' },
      { make: 'Nissan',         baseModel: '240SX',       year: 1989 },
      { make: 'Nissan',         baseModel: '350Z',        year: 2003 },
      { make: 'Nissan',         baseModel: 'Skyline',     year: 1998,   model: 'Skyline GT-R V-spec' },
      { make: 'Pagani',         baseModel: 'Zonda',       year: 1999,   model: 'Zonda F' },
      { make: 'Plymouth',       baseModel: 'Barracuda',   year: 1970,   model: '\'Cuda' },
      { make: 'Plymouth',       baseModel: 'Road Runner', year: 1968 },
      { make: 'Pontiac',        baseModel: 'GTO',         year: 2004,   note: 'Also appears as Holden Monaro VXR' },
      { make: 'Porsche',        baseModel: '911',         year: 2005,   note: 'GT3 RS and Turbo versions are included' },
      { make: 'Porsche',        baseModel: 'Carrera GT',  year: 2004 },
      { make: 'Porsche',        baseModel: 'Cayman',      year: 2005,   model: 'Cayman S' },
      { make: 'Renault',        baseModel: 'Clio',        year: 2001,   model: 'Clio V6' },
      { make: 'Shelby',         baseModel: 'GT500',       year: 1967 },
      { make: 'Shelby',         baseModel: 'GT500',       year: 2005 },
      { make: 'Subaru',         baseModel: 'Impreza',     year: 2000,   model: 'Impreza WRX STi',
        note: 'Hawk eye version' },
      { make: 'Toyota',         baseModel: 'Corolla',     year: 1984,   model: 'Corolla GT-S' },
      { make: 'Toyota',         baseModel: 'MR2',         year: 1989 },
      { make: 'Toyota',         baseModel: 'Supra',       year: 1993 },
      { make: 'Volkswagen',     baseModel: 'Golf',        year: 2003,   model: 'Golf R32' }
    ];
    this.cars['NFS'] = [
      { make: 'Acura',          baseModel: 'RSX',         year: 2002,   model: 'RSX Type S' },
      { make: 'BMW',            baseModel: '2 Series',    year: 2014,   model: 'M2' },
      { make: 'BMW',            baseModel: '3 Series',    year: 1982,   model: 'M3 Evolution II' },
      { make: 'BMW',            baseModel: '3 Series',    year: 1998,   model: 'M3' },
      { make: 'BMW',            baseModel: '3 Series',    year: 2011,   model: 'M3' },
      { make: 'BMW',            baseModel: '4 Series',    year: 2013,   model: 'M4' },
      { make: 'Chevrolet',      baseModel: 'Camaro',      year: 2010,   model: 'Camaro Z/28' },
      { make: 'Chevrolet',      baseModel: 'Corvette',    year: 2005,   model: 'Corvette Z06' },
      { make: 'Dodge',          baseModel: 'Challenger',  year: 2008,   model: 'Challenger Concept (2006)' },
      { make: 'Dodge',          baseModel: 'Viper',       year: 2013,   model: 'Viper GTS' },
      { make: 'Ferrari',        baseModel: '458',         year: 2010,   model: '458 Italia' },
      { make: 'Ferrari',        baseModel: 'F40',         year: 1987 },
      { make: 'Ford',           baseModel: 'Focus',       year: 2011,   model: 'Focus RS' },
      { make: 'Ford',           baseModel: 'Mustang',     year: 1965,
        note: 'Standard version and 1969 Mustang Boss versions are included' },
      { make: 'Ford',           baseModel: 'Mustang',     year: 1979,   model: 'Mustang GT' },
      { make: 'Ford',           baseModel: 'Mustang',     year: 2015,   model: 'Mustang GT' },
      { make: 'Honda',          baseModel: 'Civic',       year: 1996,   model: 'Civic Type R',
        note: 'Hatch back version' },
      { make: 'Acura',          baseModel: 'NSX',         year: 1990,   model: 'NSX-R' },
      { make: 'Honda',          baseModel: 'S2000',       year: 1999 },
      { make: 'Lamborghini',    baseModel: 'Aventador',   year: 2011,   model: 'Aventador LP 700-4' },
      { make: 'Lamborghini',    baseModel: 'Diablo',      year: 1990,   model: 'Diablo SV' },
      { make: 'Lamborghini',    baseModel: 'Huracán',     year: 2014,   model: 'Huracán LP 610-4' },
      { make: 'Lamborghini',    baseModel: 'Murciélago',  year: 2001,   model: 'Murciélago LP 670-4 SV' },
      { make: 'Lotus',          baseModel: 'Exige',       year: 2004,   model: 'Exige S' },
      { make: 'Mazda',          baseModel: 'MX-5',        year: 1989 },
      { make: 'Mazda',          baseModel: 'MX-5',        year: 2016 },
      { make: 'Mazda',          baseModel: 'RX-7',        year: 1992 },
      { make: 'McLaren',        baseModel: '570S',        year: 2015 },
      { make: 'Mercedes-Benz',  baseModel: 'GT',          year: 2015 },
      { make: 'Mitsubishi',     baseModel: 'Lancer',      year: 2005,   model: 'Lancer Evolution IX MR' },
      { make: 'Nissan',         baseModel: '240SX',       year: 1989,   model: '240SX Type X',
        note: 'Appears as 180SX' },
      { make: 'Nissan',         baseModel: '240Z',        year: 1969,   model: '240ZG' },
      { make: 'Nissan',         baseModel: 'GT-R',        year: 2007,   note: '2015 and 2017 versions are included' },
      { make: 'Nissan',         baseModel: 'Silvia',      year: 1999,   model: 'Spec-R Aero' },
      { make: 'Nissan',         baseModel: 'Skyline',     year: 1969,   model: 'Skyline 2000 GT-R' },
      { make: 'Nissan',         baseModel: 'Skyline',     year: 1989,   model: 'Skyline GT-R V-spec' },
      { make: 'Nissan',         baseModel: 'Skyline',     year: 1998,   model: 'Skyline GT-R V-spec' },
      { make: 'Porsche',        baseModel: '911',         year: 1964,   model: '911 Carrera RSR' },
      { make: 'Porsche',        baseModel: '911',         year: 2011,   note: '911 Carrera S and GT3 RS versions are included' },
      { make: 'Porsche',        baseModel: '911',         year: 1994,   model: '911 Carrera S' },
      { make: 'Porsche',        baseModel: 'Cayman',      year: 2012,   model: 'Cayman GT4' },
      { make: 'Scion',          baseModel: 'FR-S',        year: 2012 },
      { make: 'Subaru',         baseModel: 'BRZ',         year: 2012,   model: 'BRZ Premium' },
      { make: 'Subaru',         baseModel: 'Impreza',     year: 2012,   model: 'Impreza WRX STi' },
      { make: 'Toyota',         baseModel: 'GT86',        year: 2007,   note: 'Hatch version' },
      { make: 'Toyota',         baseModel: 'Corolla',     year: 1984,   model: 'Sprinter Trueno GT-Apex' },
      { make: 'Toyota',         baseModel: 'Supra',       year: 1993,   model: 'Supra SZ-R' },
      { make: 'Volkswagen',     baseModel: 'Golf',        year: 1974,   model: 'Golf GTI' },
      { make: 'Volvo',          baseModel: '242',         year: 1974,   model: '242 DL' }
    ];
    this.cars['SRS'] = [
      { make: 'Lexus',      baseModel: 'IS',        year: 1999,     model: 'IS 300',
        note: '5-Speed and 5-Speed SE versions are included' },
      { make: 'Mazda',      baseModel: 'RX-7',      year: 1992,
        note: 'R1, Type-R Baturst, Spirit-R Type-A, and Spirit-R Type-B versions are included' },
      { make: 'Mazda',      baseModel: 'RX-8',      year: 2003,
        note: 'Standard and Mazdaspeed versions are included' },
      { make: 'Mitsubishi', baseModel: 'Eclipse',   year: 1995,     model: 'Eclipse GS-T' },
      { make: 'Mitsubishi', baseModel: 'Eclipse',   year: 2000,
        note: 'GT, GT-S, GS, and RS versions are included' },
      { make: 'Mitsubishi', baseModel: 'Lancer',    year: 2001,     model: 'Lancer Evolution VII GSR' },
      { make: 'Mitsubishi', baseModel: 'Lancer',    year: 2003,     model: 'Lancer Evolution VIII' },
      { make: 'Nissan',     baseModel: '350Z',      year: 2003,
        note: 'Standard, Enthusiast, Performance, Touring, and Track versions are included' },
      { make: 'Nissan',     baseModel: 'Skyline',   year: 1998,     model: 'Skyline GT-R',
        note: 'Standard, V-spec, V-spec II, V-spec II Nur, M-Spec, and M-Spec Nur versions are included' },
      { make: 'Subaru',     baseModel: 'Impreza',   year: 2000,
        note: '2.5 RS, S202 STi, STi, and WRX versions are included. Bug eye version.' },
      { make: 'Toyota',     baseModel: 'Celica',    year: 1999,
        note: 'GT, GT-S, and GT Action Package versions are included' },
      { make: 'Toyota',     baseModel: 'Corolla',   year: 1984,     model: 'Sprinter Trueno GT-Apex Twin Cam' },
      { make: 'Toyota',     baseModel: 'MR2',       year: 1999,     model: 'MR2 Spyder' },
      { make: 'Toyota',     baseModel: 'Supra',     year: 1993,
        note: 'AE, SR Targa AE, Twin Turbo AE, SZ-R, and RZ versions are included' },
      { make: 'Volkswagen', baseModel: 'Golf',      year: 1997,     model: 'Golf GTI',
        note: 'Standard and VR6 versions are included' },
      { make: 'Volkswagen', baseModel: 'Jetta',     year: 1999,
        note: 'GLI and GLS versions are included' }
    ];
    this.cars['TFATF'] = [
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
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2003,   model: 'Lancer Evolution VIII RS' },
      { make: 'Nissan',     baseModel: '350Z',          year: 2003,   model: '350Z 35th Anniversary Edition' },
      { make: 'Scion',      baseModel: 'tC',            year: 2005 },
      { make: 'Toyota',     baseModel: 'Supra',         year: 1993,   model: 'Supra Twin Turbo' },
      { make: 'Lexus',      baseModel: 'LF-C Concept',  year: 2004 },
      { make: 'Mitsubishi', baseModel: '3000GT',        year: 1990,   model: 'GTO Twin Turbo MR' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2001,   model: 'Lancer Evolution VII GSR' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2003,   model: 'Lancer Evolution VIII GSR' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2003,   model: 'Lancer Evolution VIII MR' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2003,   model: 'Lancer Evolution VIII FQ-400' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2005,   model: 'Lancer Evolution IX GSR' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2005,   model: 'Lancer Evolution IX RS' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2005,   model: 'Lancer Evolution IX MR' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2005,   model: 'Lancer Evolution IX Ralliart' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2007,   model: 'Concept-X (2005)' },
      { make: 'Mitsubishi', baseModel: 'Lancer',        year: 2007,   model: 'Concept-Sportback (2005)' },
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
      { make: 'Mitsubishi', baseModel: 'Lancer',    year: 1998,     model: 'Lancer Evolution V' },
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
    { id: 'MCLACE', title: 'Midnight Club: Los Angeles Complete Edition' },
    { id: 'NFSU',   title: 'Need for Speed: Underground' },
    { id: 'NFSU2',  title: 'Need for Speed: Underground 2' },
    { id: 'NFSMW',  title: 'Need for Speed: Most Wanted' },
    { id: 'NFSC',   title: 'Need for Speed: Carbon' },
    { id: 'NFS',    title: 'Need for Speed' },
    { id: 'SRS',    title: 'Street Racing Syndicate' },
    { id: 'TD2002', title: 'Test Drive (2002)' },
    { id: 'TFATF',  title: 'The Fast and the Furious (2006)' },
    { id: 'TXR',    title: 'Tokyo Xtreme Racer' },
    { id: 'TXR2',   title: 'Tokyo Xtreme Racer 2' },
    { id: 'TXRZ',   title: 'Tokyo Xtreme Racer Zero' },
    { id: 'TXR3',   title: 'Tokyo Xtreme Racer 3' },
    { id: 'ITC',    title: 'Import Tuner Challenge' },
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
