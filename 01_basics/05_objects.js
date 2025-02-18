const course = {
    coursename : "Javascript",
    price : "499",
    courseInstructor : "Kartik"
}
//course.courseInstructor

const{courseInstructor:Instructor} = course // we can change the name by using this method  
console.log(Instructor)

//****************API*******************************//

//this is not object it is treated as JSON

// this syntax is correct in JSON 

// {
//     "name": "hitesh",
//     "coursename": "Javascript", 
//     "price": "free"
// }
