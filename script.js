// =======================
// Item-Liste (nur Blöcke)
// =======================
const items = [
    { material: "CALCITE", buy: 2, sell: 0.5 },
    { material: "DRIPSTONE_BLOCK", buy: 1, sell: 0.25 },
    { material: "HAY_BLOCK", buy: 47.25, sell: 11.82 },
    { material: "HONEY_BLOCK", buy: 33.34, sell: 8.34 },
    { material: "MAGMA_BLOCK", buy: 33.63, sell: 8.41 },
    { material: "PACKED_ICE", buy: 13.5, sell: 3.38 },
    { material: "ROOTED_DIRT", buy: 1, sell: 0.25 },
    { material: "SLIME_BLOCK", buy: 47.25, sell: 11.82 },
    { material: "SNOW_BLOCK", buy: 12.6, sell: 3.15 },
    { material: "SOUL_SAND", buy: 10, sell: 2.5 },
    { material: "TNT", buy: 106.58, sell: 26.65 },

    { material: "ANDESITE", buy: 0.72, sell: 0.18 },
    { material: "ANDESITE_SLAB", buy: 0.38, sell: 0.1 },
    { material: "ANDESITE_STAIRS", buy: 0.75, sell: 0.19 },
    { material: "POLISHED_ANDESITE", buy: 0.75, sell: 0.19 },
    { material: "POLISHED_ANDESITE_SLAB", buy: 0.38, sell: 0.1 },
    { material: "POLISHED_ANDESITE_STAIRS", buy: 0.75, sell: 0.19 },

    { material: "BAMBOO_BLOCK", buy: 0.95, sell: 0.24 },
    { material: "BAMBOO_MOSAIC", buy: 0.55, sell: 0.14 },
    { material: "BAMBOO_MOSAIC_SLAB", buy: 0.29, sell: 0.08 },
    { material: "BAMBOO_MOSAIC_STAIRS", buy: 0.79, sell: 0.2 },
    { material: "BAMBOO_PLANKS", buy: 0.5, sell: 0.13 },
    { material: "BAMBOO_SLAB", buy: 0.27, sell: 0.07 },
    { material: "BAMBOO_STAIRS", buy: 0.79, sell: 0.2 },

    { material: "BLACKSTONE", buy: 0.75, sell: 0.19 },
    { material: "BLACKSTONE_SLAB", buy: 0.4, sell: 0.1 },
    { material: "BLACKSTONE_STAIRS", buy: 0.79, sell: 0.2 },
    { material: "POLISHED_BLACKSTONE", buy: 0.79, sell: 0.2 },
    { material: "POLISHED_BLACKSTONE_BRICKS", buy: 0.79, sell: 0.2 },
    { material: "POLISHED_BLACKSTONE_SLAB", buy: 0.4, sell: 0.1 },
    { material: "POLISHED_BLACKSTONE_STAIRS", buy: 0.79, sell: 0.2 },

    { material: "BOOKSHELF", buy: 119.12, sell: 29.78 },
    { material: "CHISELED_BOOKSHELF", buy: 8.77, sell: 2.2 },

    { material: "BRICKS", buy: 92.61, sell: 23.16 },
    { material: "BRICK_SLAB", buy: 48.63, sell: 12.16 },
    { material: "BRICK_STAIRS", buy: 97.25, sell: 24.32 },

    { material: "BASALT", buy: 1.43, sell: 0.92 },
    { material: "COBBLESTONE", buy: 0.68, sell: 0.17 },
    { material: "COBBLESTONE_SLAB", buy: 0.36, sell: 0.09 },
    { material: "COBBLESTONE_STAIRS", buy: 0.72, sell: 0.18 },
    { material: "MOSSY_COBBLESTONE", buy: 7.57, sell: 1.52 },
    { material: "MOSSY_COBBLESTONE_SLAB", buy: 3.74, sell: 0.56 },
    { material: "MOSSY_COBBLESTONE_STAIRS", buy: 7.97, sell: 1.62 },

    { material: "STONE", buy: 0.72, sell: 0.18 },
    { material: "STONE_SLAB", buy: 0.38, sell: 0.1 },
    { material: "STONE_STAIRS", buy: 0.75, sell: 0.19 },
    { material: "STONE_BRICKS", buy: 0.75, sell: 0.19 },

    { material: "GLASS", buy: 6.3, sell: 1.58 },
    { material: "GLASS_PANE", buy: 2.49, sell: 0.63 },
    { material: "TINTED_GLASS", buy: 6.07, sell: 1.52 },

    { material: "SAND", buy: 6, sell: 1.5 },
    { material: "RED_SAND", buy: 8, sell: 2 },
    { material: "SANDSTONE", buy: 12, sell: 3 },
    { material: "SMOOTH_SANDSTONE", buy: 12.6, sell: 3.15 },

    { material: "OBSIDIAN", buy: 31.25, sell: 7.82 },
    { material: "CRYING_OBSIDIAN", buy: 62.5, sell: 15.63 },

    { material: "BLACK_WOOL", buy: 29.4, sell: 7.35 },
    { material: "BLUE_WOOL", buy: 29.4, sell: 7.35 },
    { material: "GREEN_WOOL", buy: 29.4, sell: 7.35 },
    { material: "RED_WOOL", buy: 29.4, sell: 7.35 },
    { material: "WHITE_WOOL", buy: 29.4, sell: 7.35 }
];

// =======================
// DOM-Elemente
// =======================
const list = document.getElementById("item-list");
const search = document.getElementById("search");

// =======================
// Render-Funktion
// =======================
function renderItems(filter = "") {
    list.innerHTML = "";

    items
        .filter(item =>
            item.material.toLowerCase().includes(filter.toLowerCase())
        )
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

// =======================
// Suche
// =======================
search.addEventListener("input", e => {
    renderItems(e.target.value);
});

// =======================
// Initiales Rendern
// =======================
renderItems();
