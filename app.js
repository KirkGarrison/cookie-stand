'use strict'

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let print = console.log
let allStores = [];
let storeFormEl = document.getElementById('addStore');

headerRender();

function generateStore (formSubmission) {
    formSubmission.preventDefault();
    let name = formSubmission.target.storeName.value;
    let min_cus = formSubmission.target.mincus.value;
    let max_cus = formSubmission.target.maxcus.value;
    let average_cook = formSubmission.target.avgcookie.value;
    let newMinCus = parseInt(min_cus);
    let newMaxCus = parseInt(max_cus);
    let newAvgDaily = parseInt(average_cook);

    let storex = new Store(name, newMinCus, newMaxCus, newAvgDaily);
    print(storex)
    storex.averageCookiesPurchased();
    storex.renderTableRow();
    footerRender();
}
storeFormEl.addEventListener('submit', generateStore);

function generateRange(min, max) {
    let range = Math.floor(Math.random() * (max - min) + 1) + min;
    return range;
}

function generateElement(type, parent, value, id) {
    let childEl = document.createElement(type);
    if (id) {
        childEl.id = id;
    }
    childEl.innerText = value;
    parent.appendChild(childEl);
    return parent;
}

function Store(name, min_cus, max_cus, average_cook) {
    this.store_name = name;
    this.min_customers = min_cus;
    this.max_customers = max_cus;
    this.average_cookies = average_cook;
    this.hourly_sales = [];
    this.dailySales = 0;
    allStores.push(this);
}

Store.prototype.averageCookiesPurchased = function () {
    for (let i = 0; i < storeHours.length; i++) {
        let cookieSales = Math.floor(generateRange(this.min_customers, this.max_customers) * this.average_cookies);


        this.hourly_sales.push(cookieSales);
        this.dailySales = this.dailySales + cookieSales;
    }
};

Store.prototype.renderTableRow = function () {
    let parentEl = document.getElementById('sales-data');
    let rowEl = document.createElement('tr');
    generateElement('td', rowEl, this.store_name);

    for (let sale = 0; sale < this.hourly_sales.length; sale++) {
        generateElement('td', rowEl, this.hourly_sales[sale]);
    }
    generateElement('td', rowEl, this.dailySales);
    parentEl.appendChild(rowEl);
};

function footerRender() {
    let parentEl = document.getElementById('footer');
    parentEl.innerHTML = '';
    let rowEl = document.createElement('tr');
    generateElement('td', rowEl, 'Totals')

    let grandTotal = 0;
    for (let hour = 0; hour < storeHours.length; hour++) {
        let dataEl = document.createElement('td');
        let sum = 0;
        for (let store = 0; store < allStores.length; store++) {
            sum = sum + allStores[store].hourly_sales[hour];
            grandTotal = grandTotal + allStores[store].hourly_sales[hour];
        }
        generateElement('td', rowEl, sum);
    }
    generateElement('td', rowEl, grandTotal);
    parentEl.appendChild(rowEl);
}

let store1 = new Store("Seattle", 23, 65, 6.3);
let store2 = new Store("Tokyo", 3, 24, 1.2);
let store3 = new Store("Dubai", 11, 38, 3.7);
let store4 = new Store("Paris", 20, 38, 2.3);
let store5 = new Store("Lima", 2, 16, 4.6);


store1.averageCookiesPurchased();
store1.renderTableRow();

store2.averageCookiesPurchased();
store2.renderTableRow();

store3.averageCookiesPurchased();
store3.renderTableRow();

store4.averageCookiesPurchased();
store4.renderTableRow();

store5.averageCookiesPurchased();
store5.renderTableRow();



function headerRender() {
    let parentEl = document.getElementById('sales-data');
    let rowEl = document.createElement('tr');
    let dataEl = document.createElement('th');
    dataEl.innerText = 'Store Hours: ';
    rowEl.appendChild(dataEl);
        for (let i = 0; i < storeHours.length; i++) {
            dataEl = document.createElement('th');
            dataEl.innerText = storeHours[i];
            rowEl.appendChild(dataEl);
        }
        dataEl = document.createElement('th');
        dataEl.innerText = "Daily total: ";
        rowEl.appendChild(dataEl);
        parentEl.appendChild(rowEl);
    }

Store.prototype.calcRandomCookieSales = function () {
    return (Math.floor(Math.random() * (this.max_customers - this.min_customers + 1) + this.min_customers)) * this.average_cookies;
};




footerRender(); 




