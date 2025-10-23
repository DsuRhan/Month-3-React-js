export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string; // optional
  bio?: string;   // optional
  avatar?: string;
}

export type EditableUserFields = Partial<Pick<User, "bio" | "phone">>;
