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
name: "Jackson",
age: 21,
hasworkpermit: true,
languages: ["English", "Yoruba"]
}



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

Student1 (name, age, language,hasworkpermit){
this.name = Dan;
this. age = 21; 
this.hasworkpermit = true;
this.language = English;
}
let student1 =new student(dan, 21, English, hasworkpermit)





// =====================================================
// PART 3: Methods
// =====================================================
// Add a method to your Student constructor function so
// every student object created from it can perform some
// action relevant to being a student. Decide what the
// method should do and what it should output.
// Call this method on at least two of your student
// objects.

student1( name , age, hasworkpermit, language) {
this. name = Dan; 
this. Age =  21;
this.hasworkpermit = hasworkpermit;
this. Language  = English;

student1 = new  student ("dan", "21", "true", "English");
student2 = new student ("Dammy", "20",  "false", "Yoruba");
}



// =====================================================
// REFLECTION
// =====================================================
// In a comment, explain in your own words why a
// constructor function is more useful than writing out
// three separate object literals by hand, once you need
// more than a handful of similar objects.


// Using a constructor function is much more efficient than writing individual object literals for three main reasons:
// 
// 1. Code Reusability: It acts as a single blueprint. Instead of rewriting the same property keys and methods 
//    manually for every object, you write the structure once and instantiate new copies with a single line of code.
// 2. Consistency: It enforces a strict, identical schema across all instances. This eliminates typos in property


