import { ImageSourcePropType } from "react-native";

const ohaWithPonmo = require("./assets/images/oha-with-ponmo.jpg");
const afangSoup = require("./assets/images/afang-soup.jpg");
const yamPorridge = require("./assets/images/yam-porridge.jpg");
const riceAndVeg = require("./assets/images/rice-and-veg.jpg");
const fishSoup = require("./assets/images/fish-soup.jpg");
const efoRiro = require("./assets/images/efo-riro-soup.jpg");
const pepperSoup = require("./assets/images/pepper-soup.jpg");
const friedRice = require("./assets/images/fried-rice.jpg");
const plantainAndSauce = require("./assets/images/plantain-and-sauce.jpg");
const vegetableSoup = require("./assets/images/vegetable-soup.jpg");
const ohaSoup = require("./assets/images/oha-soup.jpg");
const jollofRice = require("./assets/images/jollof-rice.jpg");

type ImageSet = {
  thumbnail: ImageSourcePropType;
  mobile: ImageSourcePropType;
};

type Food = {
  id: number;
  image: ImageSet;
  name: string;
  category: string;
  price: number;
};

export const foodsData: Food[] = [
  {
    id: 1,
    image: {
      thumbnail: friedRice,
      mobile: friedRice,
    },
    name: "Fried Rice",
    category: "Main Course",
    price: 1500,
  },
  {
    id: 2,
    image: {
      thumbnail: efoRiro,
      mobile: efoRiro,
    },
    name: "Efo Riro",
    category: "soup",
    price: 1200,
  },
  {
    id: 3,
    image: {
      thumbnail: ohaWithPonmo,
      mobile: ohaWithPonmo,
    },
    name: "Oha with Ponmo",
    category: "soup",
    price: 1500,
  },

  {
    id: 4,
    image: {
      thumbnail: yamPorridge,
      mobile: yamPorridge,
    },
    name: "Yam Porridge",
    category: "Porridge",
    price: 1000,
  },

  {
    id: 5,
    image: {
      thumbnail: afangSoup,
      mobile: afangSoup,
    },
    name: "Afang Soup",
    category: "soup",
    price: 1200,
  },

  {
    id: 6,
    image: {
      thumbnail: fishSoup,
      mobile: fishSoup,
    },
    name: "Fish Soup",
    category: "soup",
    price: 1300,
  },
  {
    id: 7,
    image: {
      thumbnail: jollofRice,
      mobile: jollofRice,
    },
    name: "Jollof Rice",
    category: "Main Course",
    price: 1200,
  },
  {
    id: 8,
    image: {
      thumbnail: pepperSoup,
      mobile: pepperSoup,
    },
    name: "Pepper Soup",
    category: "soup",
    price: 1200,
  },

  {
    id: 9,
    image: {
      thumbnail: plantainAndSauce,
      mobile: plantainAndSauce,
    },
    name: "Plantain and sauce",
    category: "Main Course",
    price: 1200,
  },
  {
    id: 10,
    image: {
      thumbnail: vegetableSoup,
      mobile: vegetableSoup,
    },
    name: "Vegetable Soup",
    category: "soup",
    price: 1400,
  },
  {
    id: 11,
    image: {
      thumbnail: ohaSoup,
      mobile: ohaSoup,
    },
    name: "Oha soup",
    category: "soup",
    price: 1200,
  },
  {
    id: 12,
    image: {
      thumbnail: riceAndVeg,
      mobile: riceAndVeg,
    },
    name: "Rice and Vegetables",
    category: "Main Course",
    price: 1500,
  },
];
