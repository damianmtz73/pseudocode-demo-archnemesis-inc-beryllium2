 
let currentDayOfWeek= new Date().getDay()
// console.log(currentDayOfWeek)

let employeesName= prompt("Please enter your full name.")
// console.log({employeesName})

let fridayIsHoliday= true
let mondayIsHoliday= true

// if (currentDayOfWeek===1 || currentDayOfWeek=== 5){
    // document.write(`<h2>You did not work hard is week but by law we have to give you a break<br></h2>`)
    // document.write(`<h3>You have a long weekend. Do not enjoy it. Be ready to work after the hoilday. </h3>`)
// }
let hoursWorked= 35

if (hoursWorked>35){
    document.write(`<h4>You have reached the limit of aviable hours to work.</h4>`)
}
let message= ""

if (currentDayOfWeek===0){
    message+= `<h3>Glad you are so excited to work but you can't work on Sunday.</h3>`
} else if(currentDayOfWeek===1){
    message+=`<h3>Let's have a miserable week at Archnemesis, Inc.</h3>`
} else if(currentDayOfWeek===2){
    message+=
    (`<h3>ITS TACO TUESDAY.</h3>
    <h4>One taco per person.</h4>`)
} else if (currentDayOfWeek===3){
    message+=
    `<h3>ITS HUMP DAY</h3>
    <h4>You have better have finish does reports.</h4>`
} else if(currentDayOfWeek===4){
    message+=`<h3>Today is Thursday.</h3><br>We are approaching a new work week.`
} else if(currentDayOfWeek===5){
    message+=`<h4>I guess today is Friday.Be back here early <em>Monday</em> monring.</h4>`
} else if (currentDayOfWeek===6){
    message+=`<h3>It's Saturday were was this energy during the work week. </h3>`
}