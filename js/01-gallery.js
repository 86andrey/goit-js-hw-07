import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

const makeGallery = createItemsPicture(galleryItems);

function createItemsPicture(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join("");
}

gallery.insertAdjacentHTML("beforeend", makeGallery);

gallery.addEventListener('click', onOpenModal);

function onOpenModal(evt) {
    evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }    
    instance.element().querySelector('.modal').src = evt.target.dataset.source;
    instance.show();
};
const instance = basicLightbox.create(`
    <img src="" class = "modal">
`);

gallery.addEventListener("keydown", closeModal);

function closeModal(evt) {
    if (evt.code === 'Escape') {
        instance.close();
    }
};



