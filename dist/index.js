"use strict";
class User {
    constructor(name, email) {
        this._courseCount = 1;
        this.city = "Banglore";
        this.name = name;
        this.email = email;
    }
    get emailID() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course should be more than one");
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("Token deleted... !");
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const contact = new User("Hitesh", "hitesh.c@wd.com", "#1234");
console.log("=========Please Find My Contact Details=========");
console.log(`Name: ${contact.name}`);
console.log(`Email: ${contact.email}`);
