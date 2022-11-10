export type UserType = {
  email: string;
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type Props = {
  user: UserType;
  key: React.Key;
};
