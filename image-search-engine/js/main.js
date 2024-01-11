const galleyImages = document.querySelector(".gallery__img");
const loadMoreBtn = document.querySelector(".gallery__load-more");
const searchBoxInput = document.querySelector(".search-box__input");
const lightBox = document.querySelector(".lightbox");
const closeBtn = lightBox.querySelector(".uil-times");
const downloadImageBtn = lightBox.querySelector(".uil-import");

// API KEY, pagination, searchTerm variables
const API_KEY = "HTKI9MYIlY7VlKDJ6ngebcd4iqMN7qvSB45Yxr2FBSRTCLteq6v5c0JV";
const perPage = 15;

let currentPage = 1;
let searchTerm = null;

const downloadImg = (imgURL) => {
    fetch(imgURL).then(res => res.blob()).then(file => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(file);
        a.download = new Date().getTime();
        a.click();
    }).catch(() => alert("Failed to download image"))
}

const showLightBox = (name, img) => {
    lightBox.querySelector("img").src = img;
    lightBox.querySelector("span").innerHTML = name;
    downloadImageBtn.setAttribute("data-img", img);
    lightBox.classList.add("show");
    document.body.style.overflow = "hidden";
}

const closeLightBox = () => {
    lightBox.classList.remove("show");
    document.body.style.overflow = "auto";
}

const generateHTML = (images) => {
  galleyImages.innerHTML += images
    .map(
      (img) =>
        `<li class="card" onclick="showLightBox('${img.photographer}', '${img.src.large2x}')">
            <img src="${img.src.large2x}" alt="img-1" class="card__img">
            <div class="card__details">
                <div class="card__photographer">
                    <i class="card__icon uil uil-camera"></i>
                    <span class="card__photographer-name">${img.photographer}</span>
                </div>
                <button onclick="downloadImg('${img.src.large2x}'); event.stopPropagation()" class="card__button">
                    <i class="card__icon uil uil-import"></i>
                </button>
            </div>
        </li>`
    )
    .join("");
};

const getImages = (apiURL) => {
  loadMoreBtn.innerHTML = "Loading ...";
  loadMoreBtn.classList.add("disabled");
  fetch(apiURL, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => {
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
    getImages(
      `https://api.pexels.com/v1/search?query=${searchTerm}&page=${currentPage}&per_page=${perPage}`
    );
  }
};

getImages(
  `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`
);

loadMoreBtn.addEventListener("click", loadMoreImages);
searchBoxInput.addEventListener("keyup", loadSearchImages);
closeBtn.addEventListener("click", closeLightBox);
downloadImageBtn.addEventListener("click", (e) => downloadImg(e.target.dataset.img));