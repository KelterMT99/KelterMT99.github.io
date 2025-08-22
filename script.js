// === Partículas ===
particlesJS('particles-js', {
  particles: {
    number:{ value:100, density:{ enable:true, value_area:800 } },
    color:{ value:['#00c2ff','#6f42c1','#7dd3fc'] },
    shape:{ type:'circle' },
    opacity:{ value:0.7, random:true },
    size:{ value:3, random:true },
    line_linked:{ enable:true, distance:140, color:'#6f42c1', opacity:0.4, width:1 },
    move:{ enable:true, speed:1.5, out_mode:'out' }
  },
  interactivity:{
    detect_on:'canvas',
    events:{ onhover:{ enable:true, mode:'repulse' }, onclick:{ enable:true, mode:'push' } },
    modes:{ repulse:{ distance:120 }, push:{ particles_nb:3 } }
  },
  retina_detect:true
});

// === Reveal on scroll ===
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
    }
  });
},{ threshold:0.15 });
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// === Swiper init ===
document.querySelectorAll('.mySwiper').forEach((container)=>{
  new Swiper(container, {
    loop:true, grabCursor:true, spaceBetween:24,
    centeredSlides:true, slidesPerView:1,
    autoplay:{ delay:3000, disableOnInteraction:false },
    pagination:{ el:container.querySelector('.swiper-pagination'), clickable:true },
    navigation:{
      nextEl: container.querySelector('.swiper-button-next'),
      prevEl: container.querySelector('.swiper-button-prev')
    },
    breakpoints:{ 768:{ slidesPerView:2 }, 1024:{ slidesPerView:3 } },
    effect:'coverflow',
    coverflowEffect:{ rotate:25, depth:150, slideShadows:true }
  });
});

// === Lightbox ===
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-img');
document.querySelectorAll('.gallery img, .swiper-slide img').forEach(img=>{
  img.addEventListener('click', ()=>{
    lightboxImg.src = img.src;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
  });
});
lightbox.querySelector('.lightbox-close').addEventListener('click', ()=>{
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
});
lightbox.addEventListener('click',(e)=>{
  if(e.target===lightbox){
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden','true');
  }
});
document.addEventListener('keydown',(e)=>{
  if(e.key==='Escape'){
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden','true');
  }
});

// === Form demo ===
document.getElementById('contact-form')?.addEventListener('submit',(e)=>{
  e.preventDefault();
  alert('¡Gracias! Tu mensaje ha sido enviado (demo).');
});

