const API_KEY = "HTKI9MYIlY7VlKDJ6ngebcd4iqMN7qvSB45Yxr2FBSRTCLteq6v5c0JV";
const perPage = 15;
let currentPage = 1;
let searchTerm = null;

const galleyImages = document.querySelector(".gallery__img");
const loadMoreBtn = document.querySelector(".gallery__load-more");
const searchBoxInput = document.querySelector(".search-box__input");
const lightBox = document.querySelector(".lightbox");
const closeBtn = lightBox.querySelector(".uil-times");
const downloadImageBtn = lightBox.querySelector(".uil-import");

const createElement = (tagName, attributes, children) => {
  const element = document.createElement(tagName);

  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  if (children && children.length > 0) {
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });
  }

  return element;
};

const downloadImg = async (imgURL) => {
  try {
    const res = await fetch(imgURL);
    const file = await res.blob();

    const a = createElement("a", { href: URL.createObjectURL(file), download: new Date().getTime() });
    a.click();
  } catch (error) {
    alert("Failed to download image");
  }
};

const showLightBox = (name, img) => {
  const imgElement = lightBox.querySelector("img");
  const nameElement = lightBox.querySelector("span");

  imgElement.src = img;
  nameElement.innerHTML = name;

  downloadImageBtn.setAttribute("data-img", img);

  lightBox.classList.add("show");
  document.body.style.overflow = "hidden";
};

const closeLightBox = () => {
  lightBox.classList.remove("show");
  document.body.style.overflow = "auto";
};

const generateCardHTML = (img) => {
  const card = createElement('li', { class: 'card' }, [
    createElement('img', { src: img.src.large2x, alt: 'img-1', class: 'card__img' }),
    createElement('div', { class: 'card__details' }, [
      createElement('div', { class: 'card__photographer' }, [
        createElement('i', { class: 'card__icon uil uil-camera' }),
        createElement('span', { class: 'card__photographer-name' }, img.photographer)
      ]),
      createElement('button', {
        onclick: () => downloadImg(img.src.large2x),
        class: 'card__button'
      }, [
        createElement('i', { class: 'card__icon uil uil-import' })
      ])
    ])
  ]);

  card.addEventListener('click', () => showLightBox(img.photographer, img.src.large2x));

  return card;
};

const generateHTML = (images) => {
  const cards = images.map(img => generateCardHTML(img));
  galleyImages.append(...cards);
};

const getImages = (apiURL) => {
  loadMoreBtn.innerHTML = "Loading ...";
  loadMoreBtn.classList.add("disabled");

  fetch(apiURL, {
    headers: { Authorization: API_KEY }
  })
  .then(res => res.json())
  .then(data => {
    generateHTML(data.photos);
    loadMoreBtn.innerHTML = "Load More";
    loadMoreBtn.classList.remove("disabled");
  })
  .catch(() => alert("Failed to load photos!"));
};

const loadMoreImages = () => {
  currentPage++;
  let apiUrl = `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`;
  apiUrl = searchTerm
    ? `https://api.pexels.com/v1/search?query=${searchTerm}&page=${currentPage}&per_page=${perPage}`
    : apiUrl;
  getImages(apiUrl);
};

const loadSearchImages = (e) => {
  if (e.target.value === "")  {
    return searchTerm = null;
  }

  if (e.key === "Enter") {
    currentPage = 1;
    searchTerm = e.target.value;
    galleyImages.innerHTML = "";
    getImages(`https://api.pexels.com/v1/search?query=${searchTerm}&page=${currentPage}&per_page=${perPage}`);
  }
};

getImages(`https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`);

loadMoreBtn.addEventListener("click", loadMoreImages);
searchBoxInput.addEventListener("keyup", loadSearchImages);
closeBtn.addEventListener("click", closeLightBox);
downloadImageBtn.addEventListener("click", (e) => downloadImg(e.target.dataset.img));