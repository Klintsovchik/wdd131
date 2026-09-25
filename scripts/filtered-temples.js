const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");


menuButton.addEventListener("click", () => {

  navigation.classList.toggle("open");

  menuButton.classList.toggle("open");

});


const currentYear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");


currentYear.textContent = new Date().getFullYear();


lastModified.textContent =
  `Last Modification: ${document.lastModified}`;


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Zollikofen, Switzerland",
    dedicated: "1955, September, 11",
    area: 35546,
    imageUrl: "images/bern-switzerland-temple.jpg"
  },
  {
    templeName: "Apia Samoa",
    location: "Apia, Samoa",
    dedicated: "1983, August, 5",
    area: 18691,
    imageUrl: "images/apia-samoa-temple.jpg"
  },
  {
    templeName: "Gilbert Arizona",
    location: "Gilbert, Arizona, United States",
    dedicated: "2014, March, 2",
    area: 85326,
    imageUrl: "images/gilbert-arizona-temple.jpg"
  },
];


const templeCards = document.querySelector("#temple-cards");

const pageTitle = document.querySelector("#page-title");


function getDedicatedYear(temple) {

  return parseInt(temple.dedicated.split(",")[0]);

}


function createTempleCards(filteredTemples) {

  templeCards.innerHTML = "";

  filteredTemples.forEach((temple) => {

    const card = document.createElement("figure");

    card.innerHTML = `
      <figcaption>${temple.templeName}</figcaption>
      <p><span class="label">Location:</span> ${temple.location}</p>
      <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
      <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
      <img
        src="${temple.imageUrl}"
        alt="${temple.templeName} Temple"
        loading="lazy"
        width="400"
        height="250"
      >
    `;

    templeCards.appendChild(card);

  });

}


const filters = {
  home: {
    title: "Home",
    test: () => true
  },
  old: {
    title: "Old Temples",
    test: (temple) => getDedicatedYear(temple) < 1900
  },
  new: {
    title: "New Temples",
    test: (temple) => getDedicatedYear(temple) > 2000
  },
  large: {
    title: "Large Temples",
    test: (temple) => temple.area > 90000
  },
  small: {
    title: "Small Temples",
    test: (temple) => temple.area < 10000
  }
};


navigation.querySelectorAll("a").forEach((link) => {

  link.addEventListener("click", (event) => {

    event.preventDefault();

    const filter = filters[link.id];

    navigation.querySelector(".active").classList.remove("active");

    link.classList.add("active");

    pageTitle.textContent = filter.title;

    createTempleCards(temples.filter(filter.test));

  });

});


createTempleCards(temples);
