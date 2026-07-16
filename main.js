import './style.css'

const photoFiles = [
  'DSCF3866.jpg',
  'DSCF3869.jpg',
  'DSCF3964.jpg',
  'DSCF3978.jpg',
  'DSCF4189.jpg'
];

const galleryContainer = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

photoFiles.forEach(file => {
  const item = document.createElement('div');
  item.className = 'gallery-item';
  
  const img = document.createElement('img');
  img.src = `${import.meta.env.BASE_URL}photos/${file}`;
  img.alt = 'Gallery image';
  img.loading = 'lazy';
  
  item.appendChild(img);
  galleryContainer.appendChild(item);

  item.addEventListener('click', () => {
    openLightbox(`${import.meta.env.BASE_URL}photos/${file}`);
  });
});

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden'; 
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => {
    lightboxImg.src = '';
  }, 300);
}

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    closeLightbox();
  }
});
