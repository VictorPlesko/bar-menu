// Данные коктейлей (источник: inshaker.com)
const COCKTAILS = {
  "daiquiri": {
    name: "Дайкири",
    latin: "Daiquiri",
    img: "assets/img/daiquiri.jpg",
    desc: "Кислый коктейль на основе рома с лаймовым соком и сахарным сиропом. Дайкири придумал американец, посетивший Кубу, поэтому этот классический коктейль встречается на страницах многих произведений американской литературы ХХ века.",
    ingredients: [
      ["Белый ром", "60 мл"],
      ["Лаймовый сок", "30 мл"],
      ["Сахарный сироп", "15 мл"],
      ["Лёд в кубиках", "200 г"],
    ],
  },
  "mojito": {
    name: "Мохито",
    latin: "Mojito",
    img: "assets/img/mojito.jpg",
    desc: "Освежающий сладкий лонг на основе рома с большим количеством мяты и лайма. Когда-то их добавляли, чтобы перебить вкус плохого рома, но сегодня этого можно не бояться.",
    ingredients: [
      ["Белый ром", "50 мл"],
      ["Сахарный сироп", "15 мл"],
      ["Содовая", "100 мл"],
      ["Лайм", "80 г (3 дольки)"],
      ["Мята", "10 листиков"],
      ["Дроблёный лёд", "200 г"],
    ],
  },
  "tequila-sunrise": {
    name: "Текила санрайз",
    latin: "Tequila Sunrise",
    img: "assets/img/tequila-sunrise.jpg",
    desc: "Слабоалкогольный цитрусовый лонг на основе текилы с гренадином и апельсиновым соком. Простой, но очень вкусный и красивый: переходящий в оранжевый цвет красный гренадин действительно напоминает восходящее солнце.",
    ingredients: [
      ["Серебряная текила", "50 мл"],
      ["Гренадин", "10 мл"],
      ["Апельсиновый сок", "150 мл"],
      ["Апельсин", "30 г"],
      ["Лёд в кубиках", "180 г"],
    ],
  },
  "whiskey-cola": {
    name: "Виски кола",
    latin: "Whisky Cola",
    img: "assets/img/whiskey-cola.jpg",
    desc: "Один из самых любимых лонгов в мире, в составе которого всего два ингредиента — виски и кола. От «Куба либре» отличается отсутствием лаймового сока, поэтому получается сладким и слабоалкогольным.",
    ingredients: [
      ["Американский виски", "50 мл"],
      ["Кола", "150 мл"],
      ["Лёд в кубиках", "180 г"],
    ],
  },
};

const stage = document.getElementById("stage");

function render(key) {
  const c = COCKTAILS[key];
  if (!c) return;

  const ingredients = c.ingredients
    .map(([n, a]) => `<li><span class="ing">${n}</span><span class="dots"></span><span class="amount">${a}</span></li>`)
    .join("");

  stage.innerHTML = `
    <article class="card">
      <div class="card__media">
        <img src="${c.img}" alt="${c.name}" loading="lazy" />
      </div>
      <div class="card__body">
        <h2 class="card__name">${c.name}</h2>
        <p class="card__lat">${c.latin}</p>
        <p class="card__desc">${c.desc}</p>

        <h3 class="card__h">Состав</h3>
        <ul class="ingredients">${ingredients}</ul>
      </div>
    </article>`;
}

document.querySelector(".picker").addEventListener("click", (e) => {
  const btn = e.target.closest(".picker__btn");
  if (!btn) return;
  document.querySelectorAll(".picker__btn").forEach((b) => b.classList.remove("is-active"));
  btn.classList.add("is-active");
  render(btn.dataset.target);
});

// Стартовый коктейль
render("daiquiri");
