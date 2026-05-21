import { ImageSourcePropType } from "react-native";
const waffleThumbnail = require("./assets/images/image-waffle-thumbnail.jpg");
const waffleMobile = require("./assets/images/image-waffle-mobile.jpg");
const waffleTablet = require("./assets/images/image-waffle-tablet.jpg");
const waffleDesktop = require("./assets/images/image-waffle-desktop.jpg");
const cremeThumbnail = require("./assets/images/image-creme-brulee-thumbnail.jpg");
const cremeMobile = require("./assets/images/image-creme-brulee-mobile.jpg");
const cremeTablet = require("./assets/images/image-creme-brulee-tablet.jpg");
const cremeDesktop = require("./assets/images/image-creme-brulee-desktop.jpg");
const macaronThumbnail = require("./assets/images/image-macaron-thumbnail.jpg");
const macaronMobile = require("./assets/images/image-macaron-mobile.jpg");
const macaronTablet = require("./assets/images/image-macaron-tablet.jpg");
const macaronDesktop = require("./assets/images/image-macaron-desktop.jpg");
const tiramisuThumbnail = require("./assets/images/image-tiramisu-thumbnail.jpg");
const tiramisuMobile = require("./assets/images/image-tiramisu-mobile.jpg");
const tiramisuTablet = require("./assets/images/image-tiramisu-tablet.jpg");
const tiramisuDesktop = require("./assets/images/image-tiramisu-desktop.jpg");
const baklavaThumbnail = require("./assets/images/image-baklava-thumbnail.jpg");
const baklavaMobile = require("./assets/images/image-baklava-mobile.jpg");
const baklavaTablet = require("./assets/images/image-baklava-tablet.jpg");
const baklavaDesktop = require("./assets/images/image-baklava-desktop.jpg");
const meringueThumbnail = require("./assets/images/image-meringue-thumbnail.jpg");
const meringueMobile = require("./assets/images/image-meringue-mobile.jpg");
const meringueTablet = require("./assets/images/image-meringue-tablet.jpg");
const meringueDesktop = require("./assets/images/image-meringue-desktop.jpg");
const cakeThumbnail = require("./assets/images/image-cake-thumbnail.jpg");
const cakeMobile = require("./assets/images/image-cake-mobile.jpg");
const cakeTablet = require("./assets/images/image-cake-tablet.jpg");
const cakeDesktop = require("./assets/images/image-cake-desktop.jpg");
const brownieThumbnail = require("./assets/images/image-brownie-thumbnail.jpg");
const brownieMobile = require("./assets/images/image-brownie-mobile.jpg");
const brownieTablet = require("./assets/images/image-brownie-tablet.jpg");
const brownieDesktop = require("./assets/images/image-brownie-desktop.jpg");
const pannaThumbnail = require("./assets/images/image-panna-cotta-thumbnail.jpg");
const pannaMobile = require("./assets/images/image-panna-cotta-mobile.jpg");
const pannaTablet = require("./assets/images/image-panna-cotta-tablet.jpg");
const pannaDesktop = require("./assets/images/image-panna-cotta-desktop.jpg");

type ImageSet = {
  thumbnail: ImageSourcePropType;
  mobile: ImageSourcePropType;
  tablet: ImageSourcePropType;
  desktop: ImageSourcePropType;
};

type Dessert = {
  id: number;
  image: ImageSet;
  name: string;
  category: string;
  price: number;
};

export const dessertsData: Dessert[] = [
  {
    id: 1,
    image: {
      thumbnail: waffleThumbnail,
      mobile: waffleMobile,
      tablet: waffleTablet,
      desktop: waffleDesktop,
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    id: 2,
    image: {
      thumbnail: cremeThumbnail,
      mobile: cremeMobile,
      tablet: cremeTablet,
      desktop: cremeDesktop,
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    id: 3,
    image: {
      thumbnail: macaronThumbnail,
      mobile: macaronMobile,
      tablet: macaronTablet,
      desktop: macaronDesktop,
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    id: 4,
    image: {
      thumbnail: tiramisuThumbnail,
      mobile: tiramisuMobile,
      tablet: tiramisuTablet,
      desktop: tiramisuDesktop,
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    id: 5,
    image: {
      thumbnail: baklavaThumbnail,
      mobile: baklavaMobile,
      tablet: baklavaTablet,
      desktop: baklavaDesktop,
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    id: 6,
    image: {
      thumbnail: meringueThumbnail,
      mobile: meringueMobile,
      tablet: meringueTablet,
      desktop: meringueDesktop,
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    id: 7,
    image: {
      thumbnail: cakeThumbnail,
      mobile: cakeMobile,
      tablet: cakeTablet,
      desktop: cakeDesktop,
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    id: 8,
    image: {
      thumbnail: brownieThumbnail,
      mobile: brownieMobile,
      tablet: brownieTablet,
      desktop: brownieDesktop,
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    id: 9,
    image: {
      thumbnail: pannaThumbnail,
      mobile: pannaMobile,
      tablet: pannaTablet,
      desktop: pannaDesktop,
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];
