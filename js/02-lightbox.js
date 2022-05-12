import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const makeGallery = createItemsPicture(galleryItems);

function createItemsPicture(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    }).join("");
}

gallery.insertAdjacentHTML("beforeend", makeGallery);

gallery.addEventListener('click', onOpenModal);

function onOpenModal(evt) {
    evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
};

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250
 });

gallery.addEventListener("keydown", closeModal);

function closeModal(evt) {
    if (evt.code === 'Escape') {
        instance.close();
    }
};
console.log(galleryItems);
