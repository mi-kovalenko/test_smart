import './src/scss/style.scss'

const stickySections = document.getElementsByClassName('sticky');

function transform(sticky) {
  const offsetTop = sticky.parentElement.offsetTop;
  const scrollSection = sticky.querySelector('.scroll-section')
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
  scrollSection.style.transform = (`translate3d(-${percentage}vw, 0, 0)`);
}

window.addEventListener('scroll', e => {
  for (let i = 0; i < stickySections.length; i++) {
    transform(stickySections[i])
  }
})