export function ravioli(element) {
  element.innerHTML = `
      <h2 class="ravioli-title">Quel Ravioli vous faut‑il ?</h2>
      <div class="ravioli-grid">
        <div class="ravioli-item">
            <img class="image-ravioli" src="/img/ravioli-s.png" alt="ravioli s">
            <p class="ravioli-new">Nouveau</p>
            <p class="ravioli-name">Ravioli S</p>
            <p class="ravioli-description">Toujours aussi bon.</p>
            <p class="ravioli-price">À partir de 9 $</p>
            <button class="ravioli-btn" id="ravioli-btn">Acheter</button>
        </div>
        <div class="ravioli-item">
            <img class="image-ravioli" src="/img/ravioli.png" alt="ravioli s">
            <p class="ravioli-new">Nouveau</p>
            <p class="ravioli-name">Ravioli</p>
            <p class="ravioli-description">Super. Puissant.</p>
            <p class="ravioli-price">À partir de 19 $</p>
            <button class="ravioli-btn" id="ravioli-btn">Acheter</button>
        </div>
        <div class="ravioli-item">
            <img class="image-ravioli" src="/img/ravioli-max.png" alt="ravioli s">
            <p class="ravioli-new">Nouveau</p>
            <p class="ravioli-name">Ravioli Max</p>
            <p class="ravioli-description">Le Ravioli ultime.</p>
            <p class="ravioli-price">À partir de 29 $</p>
            <button class="ravioli-btn" id="ravioli-btn">Acheter</button>
        </div>
      </div>
        `
}
