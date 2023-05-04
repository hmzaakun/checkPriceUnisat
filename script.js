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

function checkPrice() {
  const targetElement = document.querySelector('div.trade-item:first-of-type span.usd');
  const targetPrice = 35;
  console.dir(targetElement);
  if (targetElement) {
    const targetValue = parseFloat(targetElement.innerText.replace('$', ''));
    console.dir(targetValue);
    if (targetValue < targetPrice) {
      alert(`the price is less than ${targetPrice}$`);
      const audio = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-02.mp3');
      audio.play().catch(error => {
        console.log('Unable to play sound automatically. ', error);
      });
    }
  }
}

function clickViewOnly() {
  const viewOnlyButton = document.querySelector('.button.border-btn');
  if (viewOnlyButton) {
    viewOnlyButton.click();
    // Wait 1sec before checkPrice
    setTimeout(checkPrice, 1000);
  }
}

// Waiting for the page to load
window.addEventListener('load', () => {
  setTimeout(clickViewOnly, 1000);
});

// Reload the page every 2 minutes
setInterval(() => {
  window.location.reload();
}, 12000);






