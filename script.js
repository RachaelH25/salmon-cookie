"use strict";

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

const seattle = {
    location: "seattle",
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookies: 6.3,
    customersPerHour: [],
    cookiesPerHour: [],
    totalDailyCookies: 0,
    calcCustomersPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
        }
    },
    calcCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            const oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookies);
            this.cookiesPerHour.push(oneHour);
            this.totalDailyCookies += oneHour;
        }
    },
    render() {
        this.calcCustomersPerHour();
        this.calcCookiesPerHour();
        const unorderedList = document.getElementById("seattle");
        for (let i = 0; i < hours.length; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = hours[i] + ": " + this.cookiesPerHour[i] + " cookies";
            unorderedList.appendChild(listItem);
        }
    },
};

seattle.render();

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// seattle.render();

// console.log(seattle.hourlyCustom);

// const tokyo = {
//   location: "tokyo",
//   avCookies: 1.2,
//   hourlyCustom: 0,
//   getHourlyCustom: function () {
//     this.hourlyCustom = randomNum(3, 24) + " customers.";
//   },
// };

// tokyo.getHourlyCustom();

// console.log(tokyo.hourlyCustom);

// const dubai = {
//   location: "dubai",
//   avCookies: 3.7,
//   hourlyCustom: 0,
//   getHourlyCustom: function () {
//     this.hourlyCustom = randomNum(11, 38) + " customers.";
//   },
// };

// dubai.getHourlyCustom();

// console.log(dubai.hourlyCustom);

// const paris = {
//   location: "paris",
//   avCookies: 2.3,
//   hourlyCustom: 0,
//   getHourlyCustom: function () {
//     this.hourlyCustom = randomNum(20, 38) + " customers.";
//   },
// };

// paris.getHourlyCustom();

// console.log(paris.hourlyCustom);

// const lima = {
//   location: "lima",
//   avCookies: 4.6,
//   hourlyCustom: 0,
//   getHourlyCustom: function () {
//     this.hourlyCustom = randomNum(2, 16) + " customers.";
//   },
// };

// lima.getHourlyCustom();

// console.log(lima.hourlyCustom);
