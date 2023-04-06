"use strict";

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

// state describes the status of the entire program or an individual object. Common tool for co-ordinating code.
const state = {
    allCookieStands: [],
};

function SalmonCookie(location, minCustPerHour, maxCustPerHour, avgCookies) {
    this.location = location;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookies = avgCookies;
    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.totalDailyCookies = 0;
}
// this. refers to objects we are creating. this. keyword allows objects to have properties in constructor functions.
// values for customersPerHour and cookiesPerHour are empty above but will be decided in following functions.

SalmonCookie.prototype.calcCustomersPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.customersPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
    }
};
// JS prototype property allows you to add new properties to object constructors.
// when index is lower than the amount of items in the hours array add one to the number. Customers per hour calculated by random number between the minimum number of customers per hour and the maximum.

SalmonCookie.prototype.calcCookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        const oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookies);
        this.cookiesPerHour.push(oneHour);
        this.totalDailyCookies += oneHour;
    }
};

// oneHour customersPerHour multiplied by average cookies, rounded up via Math.ceil.
// push() adds oneHour to the end of an array.
// += addition assignment operator performs addition on the two operands and assigns the result to the left operand. total cookies + the value of oneHour added back to the total of total cookies. [x += y] [x= x + y]

SalmonCookie.prototype.render = function () {
    this.calcCustomersPerHour();
    this.calcCookiesPerHour();
    const tableRow = document.createElement("tr");
    let tableDataElement = document.createElement("td");
    tableDataElement.textContent = this.location;
    tableRow.appendChild(tableDataElement);
    for (let i = 0; i < hours.length; i++) {
        tableDataElement = document.createElement("td");
        tableDataElement.textContent = this.cookiesPerHour[i];
        tableRow.appendChild(tableDataElement);
    }
    const tableHeader = document.createElement("th");
    tableHeader.textContent = this.totalDailyCookies;
    tableRow.appendChild(tableHeader);
    tableElement.appendChild(tableRow);
};
// calls functions calcCustomersPerHour and calcCookiesPerHour.
// creates and renders the elements for the table. creates table row tr and data element td. Adds location name to the first  element of the table row. Then loops through adding the cookies per hour to each of the data elements for the hours in the original array.

let seattle = new SalmonCookie("Seattle", 23, 65, 6.3);

let tokyo = new SalmonCookie("Tokyo", 3, 24, 1.2);

let dubai = new SalmonCookie("Dubai", 11, 38, 2.3);

let paris = new SalmonCookie("Paris", 20, 38, 2.3);

let lima = new SalmonCookie("Lima", 2, 16, 4.6);
// create new interations of the constructor function for each of the store locations. Values in brackets match the properties in the brackets of the SalmonCookie constructor function at the start of the code.

state.allCookieStands.push(seattle, tokyo, dubai, paris, lima);
// pushes each of the variables for store locations.

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// returns random number between 0 and 0.1 multiplied by the max number minus the minimum plus one then add the minimum number to the total to create the random number.
// This function applies to all instances where 'random' is used to generate a number within the constructor functions.

function makeHeaderRow() {
    const tableRow = document.createElement("tr");
    let tableHeader = document.createElement("th");
    tableHeader.textContent = "Locations";
    tableRow.appendChild(tableHeader);
    for (let i = 0; i < hours.length; i++) {
        tableHeader = document.createElement("th");
        tableHeader.textContent = hours[i];
        tableRow.appendChild(tableHeader);
    }
    tableHeader = document.createElement("th");
    tableHeader.textContent = "Location Totals";
    tableRow.appendChild(tableHeader);
    tableElement.appendChild(tableRow);
}
// NEED TO CONTINUE WITH THE REST OF THE TABLE CODE
