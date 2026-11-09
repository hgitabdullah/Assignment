there are many special types in Typescript 
like any,unlnown,never

Ant type:

example:
let value: any = "Hello";
value = 100;
value.toUpperCase();


Unknown type :
example :
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
never type:
example:
function throwError(): never {
  throw new Error("Something went wrong!");
}

conclusion:
any use for any type and others use when the are useful