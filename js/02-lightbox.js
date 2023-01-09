import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const imageMarkup = addImagesMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', imageMarkup);
galleryList.addEventListener('click', onModalOpen);

function addImagesMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
      })
      .join('');
    }


  function onModalOpen(e) {
        e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
      }
    }
    new SimpleLightbox('.gallery a');
    
console.log(galleryItems);
