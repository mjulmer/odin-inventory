// Right now this just contains fake data. It will hit the real database soon.

const categories = {
  0: { id: 0, name: "Trees", desc: "The category is trees." },
  1: { id: 1, name: "Vegetables", desc: "The category is vegetables." },
  2: {
    id: 2,
    name: "Annual flowers",
    desc: "Flowers that only live one season.",
  },
};

const categoryItems = {
  0: {
    0: { id: 0, name: "Meyer lemon", quantity: 3 },
    1: { id: 1, name: "Howard Pippin apple", quantity: 2 },
    2: { id: 2, name: "Moonglow pear", quantity: 5 },
  },
  1: {
    0: { id: 0, name: "Sungold tomato", quantity: 3 },
    1: { id: 1, name: "Ping tung long eggplant", quantity: 2 },
    2: { id: 2, name: "Sparkler corn", quantity: 5 },
  },
  2: {
    0: { id: 0, name: "Sweet sultan", quantity: 3 },
    1: { id: 1, name: "Galaxy bachelor's buttons", quantity: 2 },
    2: { id: 2, name: "Red flax", quantity: 5 },
  },
};

export function getCategoryDetailsAndItems(categoryId: number) {
  return {
    category: categories[categoryId],
    categoryItems: categoryItems[categoryId],
  };
}

// Of course this isn't actually going to return the right item, because item IDs
// are duplicated above and this only gets the trees. But it's not meant to be a
// real implementation of a data layer.
export function getItemDetails(itemId: number) {
  return categoryItems[0][itemId];
}
