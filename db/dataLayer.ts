// Right now this just contains fake data. It will hit the real database soon.

const categories = {
  0: { name: "Trees", desc: "The category is trees." },
  1: { name: "Vegetables", desc: "The category is vegetables." },
  2: { name: "Annual flowers", desc: "Flowers that only live one season." },
};

const categoryItems = {
  0: {
    0: { name: "Meyer lemon", quantity: 3 },
    1: { name: "Howard Pippin apple", quantity: 2 },
    2: { name: "Moonglow pear", quantity: 5 },
  },
  1: {
    0: { name: "Sungold tomato", quantity: 3 },
    1: { name: "Ping tung long eggplant", quantity: 2 },
    2: { name: "Sparkler corn", quantity: 5 },
  },
  2: {
    0: { name: "Sweet sultan", quantity: 3 },
    1: { name: "Galaxy bachelor's buttons", quantity: 2 },
    2: { name: "Red flax", quantity: 5 },
  },
};

export function getCategoryDetailsAndItems(categoryId: number) {
  return {
    category: categories[categoryId],
    categoryItems: categoryItems[categoryId],
  };
}
