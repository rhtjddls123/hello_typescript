// Omit<Type, keys>
type User = { id: number; name: string; age: number };
type OmitedAgeUser = Omit<User, "age">;
type OmitedIdAgeUser = Omit<User, "id" | "age">;

// ex) 다음 UserProfile 타입을 type 또는 interface로 정의하시오.
// type UserProfile = { addr: string } & Omit<User, "age">;
interface UserProfile extends Omit<User, "age"> {
  addr: string;
}
let iUser: UserProfile = { id: 1, name: "Hong", addr: "Seoul" };

// Pick<Type, keys>
type PickIdName = Pick<User, "id" | "name">;
export {};
