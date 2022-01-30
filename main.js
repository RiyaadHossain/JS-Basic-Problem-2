/* প্রাকটিস চ্যালেঞ্জ-৩ টা: 

১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

 

২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

 

৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। */



// ============= Solution =============

// ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ 2023 কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

function checkLeapYear(year){
    if(year % 4 == 0 && year % 100 == 0 && year % 400 == 0){
        console.log(`Result: ${year} is Leap Year.`);
    }
    else if(year % 4 === 0 && year % 100 !== 0){
        console.log(`Result: ${year} is Leap Year.`);
    }
    else{
        console.log(`Result: ${year} is not Leap Year.`);
    }
}


console.log(checkLeapYear(1900));




// ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।


function oddOrEven(digit){
    if(digit % 2 === 0){
        console.log(`Result: The Number ${digit} is Even.`);
        // return true;
    } else{
        console.log(`Result: The Number ${digit} is Odd.`);
    }
}

console.log(oddOrEven(343));




// ৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 

function hourToMinute(hour){
    var min = hour * 60;
    return min;
}

let day = 24;
let minOfDay = hourToMinute(day);

console.log(minOfDay);




// 4. Write a fuction which takes a number and show the factorial of the number. 

function getFactorial(num){
     
    let fac = 1;
    for(let i = 1; i <= num; i++){
        fac = fac * i;
        console.log(`${num} * ${i} = ${fac}`);
    }
    return `Total Sum is: ${fac}`;
}

console.log(getFactorial(7));




// 5. Write a function which will convert Inch to Feet

function inchToFeet(inch){
    return feet = inch / 12;
}

console.log(inchToFeet(12));