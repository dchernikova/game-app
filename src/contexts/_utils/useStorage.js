export default function useStorage() {
  const getItem = (name) => JSON.parse(window.localStorage.getItem(name));
  const setItem = (name, data) => window.localStorage.setItem(name, JSON.stringify(data));
  const removeItem = (name, itemEmptyValue) => window.localStorage.setItem(name, JSON.stringify(itemEmptyValue));

  return ({
    getItem,
    setItem,
    removeItem,
  });
}
