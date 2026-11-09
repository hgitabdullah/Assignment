Typescript has two ways of data structure type aliases and interface.
Type Alias: its alows user to create create name for any type like unions,objects etc.
example

type User = {
    name:string;
    age:number;
}

interface: it is a rule for clases its uses for defining a class 

example:

interface User{
    name:string;
    age:number;
}

Diffrence:
its support declaration merging ->interface

type aliases can not repend after declearetion

conclusion:

two types are important when it use for its best case