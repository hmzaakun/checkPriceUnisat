// ==UserScript==
// @name         checkPrice Unisat
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       https://github.com/hmzaakun
// @match        https://unisat.io/market?tick=Oshi&tab=1
// @icon         https://www.google.com/s2/favicons?sz=64&domain=unisat.io
// @grant        none
// ==/UserScript==

// Fonction pour vérifier le prix de la première span class "usd" contenue dans le premier élément "div.trade-item"
function checkPrice() {
  const targetElement = document.querySelector('div.trade-item:first-of-type span.usd');
  const targetPrice = 35;
  console.dir(targetElement);
  if (targetElement) {
    const targetValue = parseFloat(targetElement.innerText.replace('$', ''));
    console.dir(targetValue);
    if (targetValue < targetPrice) {
      alert(`Le prix est inférieur à ${targetPrice}$`);
      const audio = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-02.mp3');
      audio.play().catch(error => {
        console.log('Impossible de jouer le son automatiquement. ', error);
      });
    }
  }
}

// Fonction pour cliquer sur le bouton "View Only"
function clickViewOnly() {
  const viewOnlyButton = document.querySelector('.button.border-btn');
  if (viewOnlyButton) {
    viewOnlyButton.click();
    // Attendre 1 secondes avant de vérifier le prix
    setTimeout(checkPrice, 1000);
  }
}

// Attendre que la page soit complètement chargée avant de cliquer sur le bouton "View Only"
window.addEventListener('load', () => {
  setTimeout(clickViewOnly, 1000);
});

// Recharger la page toutes les 2 minutes
setInterval(() => {
  window.location.reload();
}, 12000);






