const items = [
    { material: "BLACK_DYE", buy: 5.25, sell: 1.32 },
    { material: "BLUE_DYE", buy: 1.05, sell: 0.27 },
    { material: "GREEN_DYE", buy: 0.11, sell: 0.03 },
    { material: "WHITE_DYE", buy: 1.63, sell: 0.41 },
    { material: "POPPY", buy: 1, sell: 0.25 },
    { material: "SUNFLOWER", buy: 1, sell: 0.25 },
    { material: "TORCHFLOWER", buy: 20.75, sell: 5.19 },
    { material: "PITCHER_PLANT", buy: 20.75, sell: 5.19 },
    { material: "APPLE", buy: 10, sell: 2.5 },
    { material: "BREAD", buy: 15.75, sell: 3.94 },
    { material: "CAKE", buy: 79.32, sell: 19.83 },
    { material: "COOKIE", buy: 2.1, sell: 0.53 },
    { material: "GLOW_BERRIES", buy: 1, sell: 0.25 },
    { material: "GOLDEN_CARROT", buy: 12.2, sell: 3.05 },
    { material: "HONEY_BOTTLE", buy: 7.94, sell: 1.99 },
    { material: "BAKED_POTATO", buy: 5.25, sell: 1.32 },
    { material: "BEETROOT_SOUP", buy: 38.72, sell: 9.68 },
    { material: "COOKED_BEEF", buy: 6.3, sell: 1.58 },
    { material: "COOKED_CHICKEN", buy: 6.3, sell: 1.58 },
    { material: "COOKED_MUTTON", buy: 6.3, sell: 1.58 },
    { material: "COOKED_PORKCHOP", buy: 6.3, sell: 1.58 },
    { material: "COOKED_RABBIT", buy: 6.3, sell: 1.58 },
    { material: "BEEF", buy: 6, sell: 1.5 },
    { material: "CHICKEN", buy: 6, sell: 1.5 },
    { material: "MUTTON", buy: 6, sell: 1.5 },
    { material: "PORKCHOP", buy: 6, sell: 1.5 },
    { material: "RABBIT", buy: 6, sell: 1.5 },
];

const list = document.getElementById("item-list");
const search = document.getElementById("search");

function renderItems(filter = "") {
    list.innerHTML = "";

    items
        .filter(item => {
            const base = item.material.toLowerCase();
            return base.includes(filter.toLowerCase());
        })
        .forEach(item => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h3>${item.material}</h3>
                <div class="price">
                    <span class="buy">🟢 Ankauf: ${item.buy}$</span>
                    <span class="sell">🔴 Verkauf: ${item.sell}$</span>
                </div>
            `;

            list.appendChild(card);
        });
}

search.addEventListener("input", e => {
    renderItems(e.target.value);
});

renderItems();
