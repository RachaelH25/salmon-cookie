"use strict";

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

// const seattle = {
//     location: "seattle",
//     minCustPerHour: 23,
//     maxCustPerHour: 65,
//     avgCookies: 6.3,
//     customersPerHour: [],
//     cookiesPerHour: [],
//     totalDailyCookies: 0,
//     calcCustomersPerHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customersPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
//         }
//     },
//     calcCookiesPerHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             const oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookies);
//             this.cookiesPerHour.push(oneHour);
//             this.totalDailyCookies += oneHour;
//         }
//     },
//     render() {
//         this.calcCustomersPerHour();
//         this.calcCookiesPerHour();
//         const unorderedList = document.getElementById("seattle");
//         for (let i = 0; i < hours.length; i++) {
//             const listItem = document.createElement("li");
//             listItem.textContent = hours[i] + ": " + this.cookiesPerHour[i] + " cookies";
//             unorderedList.appendChild(listItem);
//         }
//     },
// };

// seattle.render();

function SalmonCookie(location, minCustPerHour, maxCustPerHour, avgCookies) {
    this.location = location;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookies = avgCookies;
    this.customersPerHour = customersPerHour;
    this.cookiesPerHour = cookiesPerHour;
}

SalmonCookie.prototype.calcCustomersPerHour = function () {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + min);
};

SalmonCookie.prototype.calcCookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        const oneHour = Math.ceil(this.customersPerHour[i] * this.avgCookies);
        this.cookiesPerHour.push(oneHour);
        this.totalDailyCookies += oneHour;
    }
};

SalmonCookie.prototype.render = function () {
    const containerElem = document.getElementId("main-container");
    const articleElem = document.createElement("article");
    containerElem.appendChild(articleElem);
    const headingElem = document.createElement("h2");
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.location;
    const paraElem = document.createElement("p");
    articleElem.appendChild(paraElem);
    paraElem.textContent = `${this.location} ...`;

    const tableElem = document.createElement("table");
    articleElem.appendChild(tableElem);
    const headerRow = document.createElement("tr");
    tableElem.appendChild(headerRow);

    // const sixHeaderCell = document.createElement("th");
    // headerRow.appendChild(sixHeaderCell);
    // sixHeaderCell.textContent = "6am";

    // const sevenHeaderCell = document.createElement("th");
    // headerRow.appendChild(sevenHeaderCell);
    // sevenHeaderCell.textContent = "7am";

    // const eightHeaderCell = document.createElement("th");
    // headerRow.appendChild(eightHeaderCell);
    // eightHeaderCell.textContent = "8am";

    // const nineHeaderCell = document.createElement("th");
    // headerRow.appendChild(nineHeaderCell);
    // nineHeaderCell.textContent = "9am";

    // const tenHeaderCell = document.createElement("th");
    // headerRow.appendChild(tenHeaderCell);
    // tenHeaderCell.textContent = "10am";

    // const elevenHeaderCell = document.createElement("th");
    // headerRow.appendChild(elevenHeaderCell);
    // elevenHeaderCell.textContent = "11am";

    // const twelveHeaderCell = document.createElement("th");
    // headerRow.appendChild(twelveHeaderCell);
    // twelveHeaderCell.textContent = "12pm";

    // const oneHeaderCell = document.createElement("th");
    // headerRow.appendChild(oneHeaderCell);
    // oneHeaderCell.textContent = "1pm";

    // const twoHeaderCell = document.createElement("th");
    // headerRow.appendChild(twoHeaderCell);
    // twoHeaderCell.textContent = "2pm";

    // const threeHeaderCell = document.createElement("th");
    // headerRow.appendChild(threeHeaderCell);
    // threeHeaderCell.textContent = "3pm";

    // const fourHeaderCell = document.createElement("th");
    // headerRow.appendChild(fourHeaderCell);
    // fourHeaderCell.textContent = "4pm";

    // const fiveHeaderCell = document.createElement("th");
    // headerRow.appendChild(fiveHeaderCell);
    // fiveHeaderCell.textContent = "5pm";

    // const sixpmHeaderCell = document.createElement("th");
    // headerRow.appendChild(sixpmHeaderCell);
    // sixpmHeaderCell.textContent = "6pm";

    // const sevenpmHeaderCell = document.createElement("th");
    // headerRow.appendChild(sevenpmHeaderCell);
    // sevenpmHeaderCell.textContent = "7pm";

    const seattleHeaderCell = document.createElement("th");
    headerRow.appendChild(seattleHeaderCell);
    seattleHeaderCell.textContent = "Seattle";

    const tokyoHeaderCell = document.createElement("th");
    headerRow.appendChild(tokyoHeaderCell);
    tokyoHeaderCell.textContent = "Tokyo";

    const dubaiHeaderCell = document.createElement("th");
    headerRow.appendChild(dubaiHeaderCell);
    dubaiHeaderCell.textContent = "Dubai";

    const parisHeaderCell = document.createElement("th");
    headerRow.appendChild(parisHeaderCell);
    parisHeaderCell.textContent = "Paris";

    const limaHeaderCell = document.createElement("th");
    headerRow.appendChild(limaHeaderCell);
    limaHeaderCell.textContent = "Lima";

    const dataRow = document.createElement("tr");
    tableElem.appendChild(dataRow);

    const seattleDataCell = document.createElement("td");
    dataRow.appendChild(seattleDataCell);
    seattleDataCell.textContent = this.cookiesPerHour;

    const tokyoDataCell = document.createElement("td");
    dataRow.appendChild(tokyoDataCell);
    tokyoDataCell.textcontent = this.cookiesPerHour;

    const dubaiDataCell = document.createElement("td");
    dataRow.appendChild(dubaiDataCell);
    dubaiDataCell.textcontent = this.cookiesPerHour;

    const parisDataCell = document.createElement("td");
    dataRow.appendChild(parisDataCell);
    parisDataCell.textcontent = this.cookiesPerHour;

    const limaDataCell = document.createElement("td");
    dataRow.appendChild(limaDataCell);
    limaDataCell.textcontent = this.cookiesPerHour;
};

const seattle = new SalmonCookie("Seattle", 23, 65, 6.3);

const tokyo = new SalmonCookie("Tokyo", 3, 24, 1.2);

const dubai = new SalmonCookie("Dubai", 11, 38, 2.3);

const paris = new SalmonCookie("Paris", 20, 38, 2.3);

const lima = new SalmonCookie("Lima", 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
