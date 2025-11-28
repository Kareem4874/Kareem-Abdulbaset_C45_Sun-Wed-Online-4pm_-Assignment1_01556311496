/*==================== Assignment 1 ==================== */

// Part 1 

/* ========================== */


//1. Convert the string "123" to a number and add 7. (0.5 Grade)
// • Output Example: 130


var StringNum = "123";
console.log(Number(StringNum) + 7);






// 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
// • Input Example: 0
// • Output Example: "Invalid"

const num = 0;
if (!num) {
    console.log('Invalid');
}






// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
// • Output Example:1, 3, 5, 7, 9

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}





// 4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
// • Input Example: [1, 2, 3, 4, 5]
// • Output Example: [2,4]

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);






// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
// • Input Example: [1, 2, 3], [4, 5, 6]
// • Output Example: [1, 2, 3, 4, 5, 6]

var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var mergedArray = [...array1, ...array2];
console.log(mergedArray);







// 6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
// • Input Example: 2
// • Output Example: “Monday”

var day = 2; // => ممكن نغير الرقم عادي لحد 7 و هيطلع اليوم بتاعة غير كدة مش هيطلع حاجة 
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}





// 7. Create an array of strings and return their lengths using map method (0.5 Grade)
// • Input: ["a", "ab", "abc"]
// • Output Example: [1, 2, 3]

var strings = ["a", "ab", "abc" , "abcd"];
var lengths = strings.map(string => string.length);
console.log(lengths);






// 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
// • Input Example: 15
// • Output Example: “Divisible by both”


//المنطق بتاعها هنعمل دالة و نباص براميتر ليها و نشيك اذا كان يقبل القسمة علي 5 و 3 ولا لا 
function isDivisibleByBoth(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both";
    } else {
        return "Not divisible by both";
    }
}
console.log(isDivisibleByBoth(15));




// 9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
// • Input Example: 5
// • Output Example: 25

var square = (num) => {
  return num * num;
};

console.log(square(5)); // 25





// 10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
// • Input Example: const person = {name: 'John', age: 25}
// • Output Example: 'John is 25 years old'

var formatPerson = ({ name, age }) => {
  return `${name} is ${age} years old`;
};

const person = {
  name: 'John',
  age: 25
};
console.log(formatPerson(person)); 






// 11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
// • Input Example: 1, 2, 3, 4, 5
// • Output Example: 15

var sumAll = (...numbers) => {
  var sum = 0;
  for (var num of numbers) {
    sum += num;
  }
  return sum;
};

console.log(`The sum of all numbers is ${sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9)}`); 





// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
// • Output Example: “Success”


function promisefunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);  
  });
}

promisefunction().then((message) => {
  console.log(message);
});






// 13. Write a function to find the largest number in an array. (0.5 Grade)
// • Input Example: [1, 3, 7, 2, 4]
// • Output Example: 7

function findLargestNumber(arr) {
  return Math.max(...arr);
}

console.log(findLargestNumber([1, 3, 7, 2, 4, 9]));




// 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
// • Input Example: name: "John", age: 30}
// • Output Example: ["name", "age"]

function getKeys(obj) {
  return Object.keys(obj);
}

console.log(getKeys({ name: "kareem", age: 26 }));





// 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
// • Input: "The quick brown fox"
// • Output: ["The", "quick", "brown", "fox"]

function splitString(str) {
  return str.split(" ");
}

console.log(splitString("My Name is Kareem"));




//===================================================================================//


//======================= B. Part 2: Essay Questions (2.5 Grade): =====================//


// 1. What is the difference between forEach and for...of? When would you use each? (0.5 Grade)
// For Each دي نوع من اللوب الي بنستخدما لما نمر علي الفانكشن علشان عايزين نعمل تعديل في اندكس معين فيها او عملية معينة 
// For of هي شبة بتاخد نخسة من الاراي و بتمشي عليها تكررها لحد ما تخلصها .... طيب هي مفيدة في اي ؟؟ مفيدة في ال بروميس و ال API 




// 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)
// الهوستينج تعرفيها ببساطة هي اننا بنعرف المتغير و بنرفعة لفوق الاسكوب قبل ما نطبعة 
// طيب هل دة بيسري علي كلة ؟؟؟ بيسري علي الفار اه عادي ممكن نعمل هوستينج عليها بس اللت و الكونست مينفعش نطبعتها قبل ما نعرفها




// 3. What are the main differences between == and ===? (0.5 Grade)
// == القيمه نفس  بس
// === نفس القيمة و النوع 




// 4. Explain how try-catch works and why it is important in async operations. (0.5 Grade)
// Try و Catch مهمين جداا في التعامل مع الداتا الي راجعة من الداتابيز و الكاش ميموري و غيرهم .... 
// طيب هي لية مهمة ؟؟؟ في الطبيعي لما نعمل فانكشن من نوع ايسنكرونس و نجيب داتا من لينك اي بي اي لو جينا نندة الفانكشن دي كدة لوحدها مش هينفع لان وارد جدا يححصل  خطاء او عطل في الداتا بيز ساعتها الفانكشن مش هتشتغل و لو الفانكشن مشتغلتش يبقي مفيش حاجة هتتعرض علي الشاشة و ساعتها العميل هسبلنا  
// ف هي بقي مهمة انني بنحط الكود نفسة في التراي يعني كاني بقولة اشتغل حاجة خالص لكن لو لقدر الله حصل خطاء يمنعك تجيب الداتا و ارمي خطاء او اعمل حاجة تانية بحيث البرنامج ميضربش مننا  



// 5. What’s the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)
// Type Conversion معناه انك بتحول الداتا بشكل يدوي 
// Type Coercion معناه انك بتحول الداتا بشكل تلقائي
//  في ملحظوظة بقي : الداتا لما بتتحول بشكل تلقائي في الجافا اسكريبت بيبقي فيها خطورة شوية علي نوع المتغير ممكن عادي جدا يحولك استرينج مع دوبل و غيرهم و دة بيبقي وارد انة يعمل مشاكل عكس لفات تانية زي ال سي بلس بلس بيعمل الكلام دة بس بشكل صارم جدا يعني ميروحش يحطلك
// استرينج مع دوبل مثلا ساعتها هيديك ايرور علي طول و دة افضل علشان بيقلل خطورة تضارب انواع المتغيرات 


//  ال سي بلس بلس دي ام اللغات وعهد الله المبــــــــــرمج الصــــــــــــــــح هو الي يحبهــــــــــــــــا علشان مش اوتوماتك يعني بترمي كل الحمل عليك انت و دة عظمــــة في التاسيس 




// ======================================================================================================================================================================= // 



// سؤال البونص في ملف bonus.js 



// اللهم لك الحمد كدة خلصت الاسامينت 
// الـــــواحد عمال يتعلم اهو و يجتهــــــــــــد يكش نشتغل بقي و نقبض بالدولار و نســـــافر 


//  بهزر يا هندسة :D 
// مفيش الكلام دة طبعا 

// وربنا انا دارس فرونت اند و شغال نيكست جي اسي و رياكت و عامل فوق ال 7 مشاريع ايشي متجر الكتروني و ايشي داش برود و غيرهم وربنا مالاقي حتي فرصة تدريب 