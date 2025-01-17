import { atom } from "recoil";

export const fetchUsers = atom({
  key: "fetchUsers",
  default: [],
});
console.log(fetchUsers);
export const axiosUsers = atom({
  key: "axiosUsers",
  default: [],
});
console.log(axiosUsers);
