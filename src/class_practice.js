function Person(firstName, lastName, age, gender, interests) {
    this.name = `${firstName}, ${lastName}`;
    this.age = age;
    this.gender = gender;
    this.interests = interests;

    this.bio = () => {
        return `${this.name} is ${this.age} years old. They like ${this.interests}`;
    }

    this.greeting = () => `Hi! I'm ${this.name}`;
}

function Teacher(firstName, lastName, age, gender, interests, subject) {
    Person.call(this, firstName, lastName, age, gender, interests);
    this.subject = subject;
    this.greeting = function() {
        return `Hello. My name is ${this.name.split(' ')[0][0]}.${this.name.split(' ')[1]}, and I teach ${this.subject}.`
    }
}

function Student(firstName, lastName, age, gender, interests) {
    Person.call(this, firstName, lastName, age, gender, interests);
    this.bio = () => {
        return `Yo! I'm ${this.firstName}.`
    }
}