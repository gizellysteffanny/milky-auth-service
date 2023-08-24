import { GroupsAllowed } from "../enums/groups-allowed.enum";

export const groupsAllowedValidator = (groupsAllowed: string): boolean => {
  if (!groupsAllowed) return false;

  const groups = groupsAllowed.split(',');
  for (const group of groups) {
    if (!Object.values(GroupsAllowed).includes(group as GroupsAllowed)) {
      return false;
    }
  }

  return true;
}