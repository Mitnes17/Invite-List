export type UserType = {
  email: string;
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type Props = {
  user: UserType;
  onClick: any;
  invitedUser: boolean;
};
