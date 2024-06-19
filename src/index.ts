//Define a class named 'User'
class User {
    // Declare two properties: 'name' and 'email', both of type string
    protected _courseCount = 1;
    name: string;
    email: string;
    private readonly city: string = "Banglore"
    // Define the constructor which initializes the 'name' and 'email' properties
    constructor(name: string, email: string) {
        this.name = name; // Assign the 'name' parameter to the 'name' property
        this.email = email; // Assign the 'email' parameter to the 'email' property
    }

    get emailID(): string{
        return `apple${this.email}`
    }

    get courseCount() : number {
        return this._courseCount;
    }

    set courseCount(courseNum) {
        if(courseNum <= 1){
            throw new Error("Course should be more than one")
        }
        this._courseCount = courseNum;
    }
    private deleteToken(){
        console.log("Token deleted... !");
    }
}

class SubUser extends User {
    isFamily : boolean = true;
    changeCourseCount(){
        this._courseCount = 4;
    }
}

// //Alternative Apprach of creating class and constructor
// class User {
//     // Declare two properties: 'name' and 'email', both of type string
//     private readonly city: string = "Banglore"

//     // Define the constructor which initializes the 'name' and 'email' properties
//     constructor(public name: string, public email: string, private userID : string) {}
// }

// Create a new instance of the 'User' class with the name "Hitesh" and email "hitesh.c@wd.com"
const contact = new User("Hitesh", "hitesh.c@wd.com", "#1234");

console.log("=========Please Find My Contact Details=========");
console.log(`Name: ${contact.name}`);
console.log(`Email: ${contact.email}`); 
//console.log(`City: ${contact.city}`);

