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

const tokyo = {
    location: "tokyo",
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookies: 1.2,
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
        const unorderedList = document.getElementById("tokyo");
        for (let i = 0; i < hours.length; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = hours[i] + ": " + this.cookiesPerHour[i] + " cookies";
            unorderedList.appendChild(listItem);
        }
    },
};

tokyo.render();

const dubai = {
    location: "dubai",
    minCustPerHour: 11,
    maxCustPerHour: 38,
    avgCookies: 3.7,
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
        const unorderedList = document.getElementById("dubai");
        for (let i = 0; i < hours.length; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = hours[i] + ": " + this.cookiesPerHour[i] + " cookies";
            unorderedList.appendChild(listItem);
        }
    },
};

dubai.render();

const paris = {
    location: "paris",
    minCustPerHour: 20,
    maxCustPerHour: 38,
    avgCookies: 2.3,
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
        const unorderedList = document.getElementById("paris");
        for (let i = 0; i < hours.length; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = hours[i] + ": " + this.cookiesPerHour[i] + " cookies";
            unorderedList.appendChild(listItem);
        }
    },
};

paris.render();

const lima = {
    location: "lima",
    minCustPerHour: 2,
    maxCustPerHour: 16,
    avgCookies: 4.6,
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
        const unorderedList = document.getElementById("lima");
        for (let i = 0; i < hours.length; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = hours[i] + ": " + this.cookiesPerHour[i] + " cookies";
            unorderedList.appendChild(listItem);
        }
    },
};

lima.render();

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
