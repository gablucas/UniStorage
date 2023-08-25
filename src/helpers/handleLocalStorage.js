export function getStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function saveStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}