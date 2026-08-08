function openEnvelope() {
  document.querySelector('.envelope').classList.add('open');
  setTimeout(() => {
    document.querySelector('.envelope').style.display = 'none';
    document.querySelector('.message').style.display = 'block';
    document.querySelector('#birthdayVideo').style.display = 'block';
    document.querySelector('.gallery').style.display = 'block';
    document.querySelector('#bgMusic').play();
    for (let i = 0; i < 30; i++) {
      let petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.left = Math.random() * window.innerWidth + 'px';
      petal.style.animationDuration = (3 + Math.random() * 5) + 's';
      document.body.appendChild(petal);
    }
  }, 1000);
}