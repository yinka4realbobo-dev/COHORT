//
// PROJECT: Techpro Cohort Manager
// STUDENT COPY — no answer key included
// =====================================================
// This project combines everything from both Objects
// lessons: object literals, dot notation, constructor
// functions, and methods.
//
// Guidance below is intentionally light. Plan your own
// approach before writing code.

// CONTEXT:
// Techpro needs a simple way to represent students in a
// cohort using JavaScript objects.


// =====================================================
// PART 1: Object Literal
// =====================================================
// Create a single object literal called student1
// representing one student. Decide for yourself which
// properties are relevant. Include at least one property
// whose value is an array.
//
// Then use dot notation to log a sentence introducing
// that student using at least two of its properties.

let student1 = {
    name: "Olayemi",
    stateOfOrigin: "Ogun",
    age: 21,
    courseOfStudy: ",Design",
    courseDuration: 4 +"months",
    nextOfKin: "Miss Sayo",
    nextofKinContact: "07013885300",
    languages: ["English","Yoruba","Hausa"]
}


console.log("Hi, my name is"+" "+ student1.name +" and"+ " "+ "I am a student of"+" "+ student1.courseOfStudy);




// =====================================================
// PART 2: Constructor Function
// =====================================================
// You now need many students, not just one. Refactor your
// approach: create a constructor function called Student
// that can produce new student objects on demand, using
// the same properties you decided on in Part 1.
//
// Use it to create at least three different student
// objects.


function Student (name, age, stateOfOrigin, courseOfStudy, courseDuration, nextOfKin, nextofKinContact, languages){
    this.name = name;
    this. age = age;
    this. stateOfOrigin = stateOfOrigin;
    this. courseOfStudy = courseOfStudy;
    this. courseDuration = courseDuration;
    this. nextOfKin = nextOfKin;
    this. nextofKinContact = nextofKinContact;
    this. languages = languages;
}
let student1 = new Student("Seun",18,"Imo", "Graphic"+" "+ "Development", 3+ "months", "john","070300212323", ["Igbo", "English"]);

let student2 = new Student("Jas",22,"Ogun", "Data"+" "+ "Analysis", 3+ "months", "favour","070300212323", ["Yoruba", "English"]);

let student3 = new Student("Sani",25,"Benue", "Product"+" "+ "Management", 3+ "months", "yomi","070300210100", ["Idoma", "English"]);



console.log(student2.courseOfStudy);
console.log(student1);
console.log(student3);



// =====================================================
// PART 3: Methods
// =====================================================
// Add a method to your Student constructor function so
// every student object created from it can perform some
// action relevant to being a student. Decide what the
// method should do and what it should output.
// Call this method on at least two of your student
// objects.



function Student (name, age, stateOfOrigin, courseOfStudy, courseDuration, nextOfKin, nextofKinContact, languages){
    this.name = name;
    this. age = age;
    this. stateOfOrigin = stateOfOrigin;
    this. courseOfStudy = courseOfStudy;
    this. courseDuration = courseDuration;
    this. nextOfKin = nextOfKin;
    this. nextofKinContact = nextofKinContact;
    this. languages = languages;
    this. resumeToClass = function () { alert("Resume to class at exactly 10:00am")};
    this. participateInClass = function () {alert("Be active in class")};
    this. leaveSchool = function() {alert("leave class by 3pm")};
}
// two student
const student1 = new Student("Joba", 20, "Osun", "UI/UX", "4 months", "Mr Josh", "08012345678", ["English", "Yoruba"]);
const student2 = new Student("Amechi", 24, "Owerri", "Product Management", "3 months", "Mr Agbo", "08102345673", ["English", "Yoruba", "Igbo"]);

// calling the method
student1.resumeToClass();
student1.leaveSchool();
student1.participateInClass();


student2.resumeToClass();
student2.leaveSchool();
student2.participateInClass();


// =====================================================
// REFLECTION
// =====================================================
// In a comment, explain in your own words why a
// constructor function is more useful than writing out
// three separate object literals by hand, once you need
// more than a handful of similar objects.


//  A constructor function is more useful than writing separate object
// literals because it removes repetition and reduces the chance of
// mistakes. With object literals, I'd have to retype the same property
// names for every student, and if I misspell one or forget a property,
// that object won't match the others. A constructor guarantees every
// student object has the same shape, since the properties are only
// defined once inside the function.
