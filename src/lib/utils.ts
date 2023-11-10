import type { User } from "./user";

export const filterUserList = (
  users: User[],
  selectedTeams: string[],
  search: string
) => {
  if (selectedTeams.length === 0 && search.length === 0) return users;

  return users?.filter((user) => {
    const userMatchSearch = user.name
      .toLowerCase()
      .includes(search.toLowerCase());

    if (selectedTeams.length > 0)
      return (
        userMatchSearch &&
        user.groups.some((group) => selectedTeams.includes(group))
      );
    return userMatchSearch;
  });
};
