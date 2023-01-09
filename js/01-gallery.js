import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const imageMarkup = addImagesMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', imageMarkup);
galleryList.addEventListener('click', onModalOpen);

// function addImagesMarkup(galleryItems) {
//     return galleryItems
//       .map(({ preview, original, description }) => {
//         return `
//         <div class="gallery__item">
//           <a class="gallery__link" href="${original}">
//             <img class="gallery__image"
//               src="${preview}"
//               data-source="${original}"
//               alt="${description}"
//               />
//           </a>
//       </div>`
//       })
//       .join('');
//     }

function addImagesMarkup(galleryItems) {
    return galleryItems
      .reduce((acc, { preview, original, description }) => acc +
         `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
              />
          </a>
      </div>`, ''
      );
    }

function onModalOpen(e) {
    e.preventDefault();
if (e.target.nodeName !== 'IMG') {
    return
  }
    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${e.target.dataset.source}">
    </div>`,
    {
        onShow: (instance) => {
            window.addEventListener('keydown', onEscKeyPress);
          },
          onClose: (instance) => {
            window.removeEventListener('keydown', onEscKeyPress);
        },
    }
);

function onEscKeyPress(e) {
    if(e.code === "Escape") {
      instance.close();
    }
  }
instance.show()
};

console.log(galleryItems);
