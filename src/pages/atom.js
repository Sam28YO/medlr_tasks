import { atom } from "recoil";

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    if (typeof window !== "undefined") {
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };

export const fetchUsers = atom({
  key: "fetchUsers",
  default: [],
});

export const axiosUsers = atom({
  key: "axiosUsers",
  default: [],
});

export const axiosError = atom({
  key: "axiosError",
  default: [],
});

export const a = atom({
  key: "hello-",
  default: "hello",
  effects: [localStorageEffect("hello-")],
});

export const hydration = atom({
  key: "hydration--",
  default: false,
});

const tableData = atom({
  key: "tableData",
  default: [],
});
