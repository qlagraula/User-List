export type User = {
  createdAt: string;
  name: string;
  avatar: string;
  email: string;
  groups: string[];
  access: string[];
  last_login: number;
  id: number;
};

export function fetchUsers() {
  return fetch("https://6511a930b8c6ce52b394dc63.mockapi.io/api/users/users")
    .then((response) => response.text())
    .then((text) => JSON.parse(text) as User[]);
}
