export const loadState = (key, initialValue) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return initialValue;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return initialValue;
  }
};

export const saveState = (nameKey, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(nameKey, serializedState);
  } catch (err) {
    // ignore
  }
};
