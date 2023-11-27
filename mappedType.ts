type Animals = "dog" | "cat" | "pig";

type AnimalsCount = {
  [key in Animals]: number;
};

type AnimalsCount2<T extends string> = {
  [key in T]: number;
};

type Ac2 = AnimalsCount2<Animals>;

interface Researcher {
  researchMethod(): void; // method
  researchProperty: () => string; // property
}

type JustProperties<T> = {
  [key in keyof T]: T[key];
};

type ResearcherProperties = JustProperties<Researcher>;
/*
type ResearcherProperties = {
  researchMethod: () => void;
  researchProperty: () => string;
}
mapping된 type은 method와 property를 구분하지 않음 => method를 property로 취급
*/
