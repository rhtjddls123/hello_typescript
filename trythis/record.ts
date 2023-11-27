type R = Record<string, number>;
// type Record<K extends string | number | symbol, T> = { [P in K]: T };
// ex) 다음 객체들을 하나로 합쳐(extend) 보세요.
let users = [{ name: "Hong" }, { age: 23 }, { id: 1, addr: "Seoul" }];

type UserProfile = Record<string, string | number>;
const userProfile: UserProfile = users.reduce(
  (acc, user) => ({ ...acc, ...user }),
  {}
);

console.log(userProfile);
