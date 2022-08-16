interface Human {
  name: string;
  age: number;
  email: string;
  account ?: string | any;
}

type Animal = {
  name : string;
  boss : string | Human;
};

const People : Human = {
  name: 'people',
  age: 20,
  email: 'people@xyz.com',
}

const Dog : Animal = {
  name : 'dogge',
  boss : People,
}

function testGenerics<A, B, C>(var1: A, var2: B, var3: C) : [A, B, C] {
  return [var1, var2, var3];
}

console.log(testGenerics<string, number, Human>('I am Human', 20, People));

// Output:
// [
//  'I am Human',
//  20,
//  { name: 'people', age: 20, email: 'people@xyz.com' }
// ]

let testVar : string | number | undefined;

function family<V1, V2>(v1 : V1, v2 : V2): V1 & V2 {
  return { ...v1, ...v2};
}

console.log(family(People, Dog));
// Output:
// {
//   name: 'dogge',
//   age: 20,
//   email: 'people@xyz.com',
//   boss: { name: 'people', age: 20, email: 'people@xyz.com' }
// }

type HumanOrAnimal = Human | Animal;
