import agueda from "../assets/images/cityList/agueda.png";
import alcobaca from "../assets/images/cityList/alcobaca.png";
import aljustrel from "../assets/images/cityList/aljustrel.png";
import almada from "../assets/images/cityList/almada.png";
import amadora from "../assets/images/cityList/amadora.png";
import amarante from "../assets/images/cityList/amarante.png";
import arcosdeval from "../assets/images/cityList/arcosdeval.png";
import arganil from "../assets/images/cityList/arganil.png";
import aveiro from "../assets/images/cityList/aveiro.png";
import barcelos from "../assets/images/cityList/barcelos.png";
import braga from "../assets/images/cityList/braga.png";
import beja from "../assets/images/cityList/beja.png";
import braganca from "../assets/images/cityList/braganca.png";
import carregaldosal from "../assets/images/cityList/carregaldosal.png";
import cascais from "../assets/images/cityList/cascais.png";
import castelobranco from "../assets/images/cityList/castelobranco.png";
import castelodevide from "../assets/images/cityList/castelodevide.png";
import chaves from "../assets/images/cityList/chaves.png";
import covilha from "../assets/images/cityList/covilha.png";
import cuba from "../assets/images/cityList/cuba.png";
import evora from "../assets/images/cityList/evora.png";

export const showElem = (id) => {
  let foundIndex = citiesData.findIndex((city) => city.id === id);
  if (foundIndex > -1) {
    citiesData[foundIndex].stats["show"] = false;
  }
};

export const hideElem = (id) => {
  let foundIndex = citiesData.findIndex((city) => city.id === id);
  if (foundIndex > -1) {
    citiesData[foundIndex].stats.show = true;
  }
};

export const citiesData = [
  {
    name: "agueda",
    id: 1,
    img: agueda,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "alcobaca",
    id: 2,
    img: alcobaca,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: false,
    },
    country: "Portugal",
  },
  {
    name: "aljustrel",
    id: 3,
    img: aljustrel,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "almada",
    id: 4,
    img: almada,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "amadora",
    id: 5,
    img: amadora,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "amarante",
    id: 6,
    img: amarante,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "Arcos de Valdevez",
    id: 7,
    img: arcosdeval,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "Arganil",
    id: 8,
    img: arganil,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "Aveiro",
    id: 9,
    img: aveiro,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "Barcelos",
    id: 10,
    img: barcelos,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "Beja",
    id: 11,
    img: beja,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "Braga",
    id: 12,
    img: braga,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "Bragança",
    id: 13,
    img: braganca,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "Carregal do Sal",
    id: 14,
    img: carregaldosal,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "Cascais",
    id: 15,
    img: cascais,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "Castelo Branco",
    id: 16,
    img: castelobranco,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "Castelo de Vide",
    id: 17,
    img: castelodevide,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "Chaves",
    id: 18,
    img: chaves,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "Covilhã",
    id: 19,
    img: covilha,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "Cuba",
    id: 20,
    img: cuba,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "Évora",
    id: 21,
    img: evora,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Portugal",
  },
  {
    name: "Testing the Mike",
    id: 22,
    img: evora,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Spain",
  },
  {
    name: "Testing the Mike",
    id: 23,
    img: evora,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Romania",
  },
  {
    name: "Testing the Mike",
    id: 24,
    img: evora,
    stats: {
      overall: Math.floor(Math.random() * 70) + 31,
      cost: Math.floor(Math.random() * 70) + 31,
      internet: Math.floor(Math.random() * 70) + 31,
      fun: Math.floor(Math.random() * 70) + 31,
      safety: Math.floor(Math.random() * 70) + 31,
      show: true,
    },
    country: "Spain",
  },
];
