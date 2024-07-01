export default function groceriesList() {
  const fnalMap = new Map();
  const objct = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  const list = Array.from(Object.keys(objct));

  list.map((item) => fnalMap.set(item, objct[item]));
  return fnalMap;
}
