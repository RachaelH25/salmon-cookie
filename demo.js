"use strict";

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
const tableElement = document.getElementById("sales-table");

// remove this section once revised the rest of the code.
// const state = {
//     allCookieStands: [],
// };

function SalmonCookie(location, minCustPerHour, maxCustPerHour, avgCookies) {
    this.location = location;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookies = avgCookies;
    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.totalDailyCookies = 0;
}

SalmonCookie.prototype.calcCustomersPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.customersPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
    }
};

SalmonCookie.prototype.calcCookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        const oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookies);
        this.cookiesPerHour.push(oneHour);
        this.totalDailyCookies += oneHour;
    }
};

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

let seattle = new SalmonCookie("Seattle", 23, 65, 6.3);

let tokyo = new SalmonCookie("Tokyo", 3, 24, 1.2);

let dubai = new SalmonCookie("Dubai", 11, 38, 2.3);

let paris = new SalmonCookie("Paris", 20, 38, 2.3);

let lima = new SalmonCookie("Lima", 2, 16, 4.6);

const allCookieStands = [seattle, tokyo, dubai, paris, lima];
// state.allCookieStands.push(seattle, tokyo, dubai, paris, lima);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function makeHeaderRow() {
//     const tableRow = document.createElement("tr");
//     let tableHeader = document.createElement("th");
//     tableHeader.textContent = "Locations";
//     tableRow.appendChild(tableHeader);
//     for (let i = 0; i < hours.length; i++) {
//         tableHeader = document.createElement("th");
//         tableHeader.textContent = hours[i];
//         tableRow.appendChild(tableHeader);
//     }
//     tableHeader = document.createElement("th");
//     tableHeader.textContent = "Location Totals";
//     tableRow.appendChild(tableHeader);
//     tableElement.appendChild(tableRow);
// }
// take makeheaderrow out of function

let tableRow = document.createElement("tr");
let th = document.createElement("th");
th.textContent = "Locations";
tableRow.appendChild(th);

for (let i = 0; i < hours.length; i++) {
    th = document.createElement("th");
    th.textContent = hours[i];
    tableRow.appendChild(th);
}

th = document.createElement("th");
th.textContent = "Totals";
tableRow.appendChild(th);

tableElement.appendChild(tableRow);

for (let i = 0; i < allCookieStands.length; i++) {
    allCookieStands[i].render();
}

// function makeFooterRow() {
//     const tableRow = document.createElement("tr");
//     let tableHeader = document.createElement("th");
//     tableHeader.textContent = "Hourly Totals for All Locations";
//     tableRow.appendChild(tableHeader);
//     let totalOfTotals = 0;
//     for (let i = 0; i < hours.length; i++) {
//         let hourlyTotal = 0;
//         for (let j = 0; j < state.allCookieStands.length; j++) {
//             hourlyTotal += state.allCookieStands[j].cookiesPerHour[i];
//             totalOfTotals += state.allCookieStands[j].cookiesPerHour[i];
//         }
//         tableHeader = document.createElement("th");
//         tableHeader.textContent = hourlyTotal;
//         tableRow.appendChild(tableHeader);
//     }
//     tableHeader = document.createElement("th");
//     tableHeader.textContent = totalOfTotals;
//     tableRow.appendChild(tableHeader);
//     tableElement.appendChild(tableRow);
// }

const totalTR = document.createElement("tr");
function renderTotals() {
    let totalTHHeading = document.createElement("th");

    totalTHHeading.textContent = `Hourly Totals:`;
    totalTR.appendChild(totalTHHeading);

    let total = 0;
    for (let k = 0; k < hours.length; k++) {
        let hourlyTotal = 0;
        for (let i = 0; i < allCookieStands.length; i++) {
            hourlyTotal += allCookieStands[i].cookiesPerHour[k];
        }
        let totalTH = document.createElement("th");
        totalTH.textContent = hourlyTotal;
        totalTR.appendChild(totalTH);
        total += hourlyTotal;
    }
    let finalTotalTH = document.createElement("th");
    finalTotalTH.textContent = total;
    totalTR.appendChild(finalTotalTH);

    tableElement.appendChild(totalTR);
}

// function renderTable() {
//     makeHeaderRow();
//     for (let i = 0; i < state.allCookieStands.length; i++) {
//         state.allCookieStands[i].render();
//     }
//     makeFooterRow();
// }

// renderTable();

renderTotals();

// const myStores = [];
// function CookieStore(storeName, minCust, maxCust, avgCookies) {
//     this.storeName = storeName;
//     this.minCust = minCust;
//     this.maxCust = maxCust;
//     this.avgCookies = avgCookies;
// }

const newStoreForm = document.getElementById("new-store-form");

newStoreForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const storeNameInput = event.target.name.value;
    const minCustInput = event.target.minCust.value;
    const maxCustInput = event.target.maxCust.value;
    const avgCookiesInput = event.target.avgCookies.value;

    const newStore = new SalmonCookie(storeNameInput, minCustInput, maxCustInput, avgCookiesInput);

    totalTR.innerHTML = "";
    newStore.render();
    document.getElementById("new-store-name").value = "";
    document.getElementById("min-cust").value = "";
    document.getElementById("max-xust").value = "";
    document.getElementById("avg-cookies").value = "";
    renderTotals();

    // myStores.push(newStore);
});
