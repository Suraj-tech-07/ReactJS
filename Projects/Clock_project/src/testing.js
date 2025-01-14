// var date = new Date();
// // console.log(time);
// date.getDate();        // Day of the month (1-31)
// date.getMonth();       // Month (0-11)
// date.getFullYear();    // Four-digit year
// date.getHours();       // Hours (0-23)
// date.getMinutes();     // Minutes (0-59)
// date.getSeconds();     // Seconds (0-59)
// date.getMilliseconds();// Milliseconds (0-999)
// let a = date.getMonth();
// // console.log(typeof (a));
// // console.log(a);

// // console.log(date.getMonth());
// // console.log(date.getFullYear());
// console.log(date.getHours());
// // console.log(date.getMinutes());
// // console.log(date.getDate());


const date = new Date();

// Helper function to add a leading zero if needed
function formatWithLeadingZero(value) {
    return String(value).padStart(2, "0");
}

// Extract components of the date and time
const day = formatWithLeadingZero(date.getDate());
const month = formatWithLeadingZero(date.getMonth() + 1); // Months are zero-based
const year = date.getFullYear();

const hour = date.getHours();
const minutes = formatWithLeadingZero(date.getMinutes());
const seconds = formatWithLeadingZero(date.getSeconds());

// Determine AM or PM
const postfix = hour >= 12 ? "PM" : "AM";

// Convert hour to 12-hour format
const formattedHour = formatWithLeadingZero(hour % 12 || 12);

// Display the formatted date and time
console.log(`This is the current time: ${day}/${month}/${year} - ${formattedHour}:${minutes}:${seconds} ${postfix}`);

