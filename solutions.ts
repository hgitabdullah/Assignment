function multiplyValue(value:number,multiplier?:number){
    if(multiplier === undefined){
        return value * 2;
    }else{
        return value * multiplier;
    }
}
multiplyValue(10);
multiplyValue(10, 5);
multiplyValue(7, 0);



function processInput(input: string | number | boolean): string | number | boolean {
    if (typeof input === "string") {
        let value = input.trim();
        return value.toLowerCase();
    } else if (typeof input === "number") {
        return input * 10;
    } else {
        if(input === true){
            return "Active";
        }else{
            return "Inactive";
        }
    }
}

processInput("  TYpescript   ")
processInput(7)              
processInput(true)       
processInput(false)


function formatCoordinate(Location:readonly[latitude:number,longitude:number,locationName:string]){
    

    return `Location: ${Location[2]} (${Location[0]}, ${Location[1]})`;

}
formatCoordinate([23.81, 90.41, "Dhaka"]);
formatCoordinate([22.35, 91.78, "Chittagong"]);
        


function concatenateArrays<Type>(...arrays: [][]):Type[]{
  const combineArray:Type[] = [];

  for (let i of arrays){
    combineArray.push(...i);
  }
  return combineArray;
}

concatenateArrays(["a", "b"], ["c", "d"]);
concatenateArrays([1, 2], [3, 4], [5]);


interface Course{
    title:string;
    students:number;
    isPublished:boolean;
}
const courses:Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

function getPopularCourses (courses:Course[],minStudents:number){
    let popularCourse:Course[] =[];
    for(let i of courses){
        if(i.isPublished === true && i.students >= minStudents){
            popularCourse.push(i);
        }
    }
    return popularCourse;
}

getPopularCourses(courses, 80)

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    let value: T[K][] = [];

    for (let item of items) {
        value.push(item[key]);
    }

    return value;
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

pluckValues(users, "name");
pluckValues(users, "id");




class Employee{
    constructor(
        protected name:string,
        private baseSalary:number,
    ){
        this.name = name;
        this.baseSalary = baseSalary;
    }

    get getDetails(){
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }

}

class Manager extends Employee{
    constructor(
        name:string,
        baseSalary:number,
        private department:string,
        
    ){
     super(name,baseSalary);
    }

    get getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const manager = new Manager("Alice", 50000, "Engineering");
manager.getDetails;
manager.getRoleInfo;


async function validateAgeAsync(age: number):Promise<string> {
    try {
        if(age < 18){
            throw new Error("Access Denied: Must be 18 or older");
        }
        return await new Promise<string>((resolve) => {
            setTimeout(()=>resolve("Access Granted"), 1000);
        });
    }catch(Error) {
        return (Error as Error).message;
    }
}
await validateAgeAsync(20);
await validateAgeAsync(15);

 
 
