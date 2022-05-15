import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const gridPic = galleryItems
  .map(
    element =>
      `<a class="gallery__item" href="${element.original}">
      <img class="gallery__image"
       src="${element.preview}" 
       alt="${element.description}" />
       </a>`,
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', gridPic);
console.log(gridPic);

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
