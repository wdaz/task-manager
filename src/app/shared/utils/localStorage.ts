export const getLocalStorage = <T>(key: string): T | null => {
  const value = localStorage.getItem(key);
  if (value !== null) {
    return JSON.parse(value);
  }
  return null;
};

export const setLocalStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStrorage = (...keys: string[]): void => {
  keys.forEach((key) => {
    localStorage.removeItem(key);
  });
};

export const clearLocaStorage = (): void => {
  localStorage.clear();
};
