import galleryListItem from '../js/gallery-items.js';
{
  /* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>  */
}

const refs = {
  galleryContainer: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxOverlay: document.querySelector('.lightbox__overlay'),
  btnCLoseModal: document.querySelector('[data-action="close-lightbox"]'),
  imgModal: document.querySelector('.lightbox__image'),
};

const makeGalleryListMarkup = imageItem => {
  const { preview, original, description } = imageItem;

  return `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> 
  `;
};

const galleryListMarkup = galleryListItem.map(makeGalleryListMarkup).join('');
refs.galleryContainer.innerHTML += galleryListMarkup;

refs.galleryContainer.addEventListener('click', onOpenGalleryClick);
refs.btnCLoseModal.addEventListener('click', onCloseGalleryModal);
refs.lightboxOverlay.addEventListener('click', onBackdropClick);

// console.log();

function onOpenGalleryClick(evt) {
  window.addEventListener('keydown', onEscKeyPress);
  window.addEventListener('keydown', onRightGallery);
  window.addEventListener('keydown', onLeftGallery);

  console.log('Привіт я тут');

  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const target = evt.target;
  const getUrlBigImg = target.dataset.source;

  refs.lightbox.classList.add('is-open');
  refs.imgModal.src = getUrlBigImg;
  refs.imgModal.alt = evt.target.alt;

  console.log('event target: ', target);
  console.log(getUrlBigImg);

  onRightGallery();
  onLeftGallery();
}

function onCloseGalleryModal() {
  window.removeEventListener('keydown', onEscKeyPress);

  refs.lightbox.classList.remove('is-open');
  refs.imgModal.src = '';
  refs.imgModal.alt = '';
}

function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onCloseGalleryModal();
  }
}

function onEscKeyPress(evt) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = evt.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseGalleryModal();
  }

  console.log('я вже не тут');
}

function onRightGallery(evt) {
  const ARROW_RIGHT_KEY_CODE = 'ArrowRight';
  const isArRightKey = evt.code === ARROW_RIGHT_KEY_CODE;

  console.log(isArRightKey);
}

function onLeftGallery(evt) {
  const ARROW_LEFT_KEY_CODE = 'ArrowLeft';
  const isArLeftKey = evt.code === ARROW_LEFT_KEY_CODE;
}
