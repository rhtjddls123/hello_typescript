interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

type Change<T, K extends keyof T, t> = {
  [x in keyof T]: x extends K ? t : T[x];
};
type DeptCaptain = Change<IDept, "captain", IUser>;
type Err = Change<IDept, "somekey", IUser>; // Error!!!

type Combine<T, U> = {
  [x in keyof (T & U)]: x extends keyof T
    ? x extends keyof U
      ? T[x] | U[x]
      : T[x]
    : x extends keyof U
    ? U[x]
    : never;
};
type ICombined = Combine<IUser, IDept>;

type Change2<T, K extends keyof T, t> = Omit<T, K> & {
  [x in K]: t;
};

type DeptCaptain2 = Change2<IDept, "captain", IUser>;
type Err2 = Change2<IDept, "somekey", IUser>; // Error!!!

/*
type DeptCaptain {
  id: number;
  age: string;
  dname: string;
  captain: IUser;
}

type ICombined {
  id: number;
  age: string | number;
  name: string;
  dname: string;
  captain: string;
}
*/
