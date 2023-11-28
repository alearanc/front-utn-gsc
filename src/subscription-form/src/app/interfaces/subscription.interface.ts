export interface Subscription {
  id?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  confirmEmail?: string | null;
  phone?: string | null;
  password?: string | null;
  confirmPassword?: string | null;
  notifications?: boolean | null;
}
