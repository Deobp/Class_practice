class Person {
    constructor(firstName, lastName, age, gender, interests) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.interests = interests;

    }
    greeting() {
        console.log(`Hi! I'm ${this.name}`);
    }
    info() {
        console.log(`Name: ${this.firstName}, ${this.lastName}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Interests: ${this.interests}`);
        console.log(
            `Bio:  ${this.firstName}, ${this.lastName} is ${this.age} years old. They like ${this.interests}.`
        );
        console.log(this.greeting());
    }
}

class Teacher extends Person {
    constructor(subject) {
        this.subject = subject;
    }

    greeting() {
        console.log(`Hello. My name is ${firstName[0]} ${lastName}.`);
    }

    info() {
        console.log(`Name: ${this.firstName}, ${this.lastName}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Interests: ${this.interests}`);
        console.log(
            `Bio:  ${this.firstName}, ${this.lastName} is ${this.age} years old. They like ${this.interests}.`
        );
        console.log(this.subject);
        console.log(this.greeting());
    }
}

class Student extends Person {
    constructor() {}

    greeting() {
        console.log(`Yo! I'm ${this.firstName}.`);
    }
}