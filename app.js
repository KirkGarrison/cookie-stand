'use strict'

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let print = console.log

function headerRender() {
    let parentEl = document.getElementById('sales-data');
    let rowEl = document.createElement('tr');
    let dataEl = document.createElement('th');
    dataEl.innerText = 'Store Hours: ';
    rowEl.appendChild(dataEl);
    //dataEl = document.createElement('td');
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
 
    headerRender();


function Store(name, min_cus, max_cus, average_cook) {
    this.store_name = name;
    this.min_customers = min_cus;
    this.max_customers = max_cus;
    this.average_cookies = average_cook;
    this.hourly_sales = [];
    this.dailySales = 0;
    Store.all.push(this);
}
Store.all = [];
Store.prototype.averageCookiesPurchased = function () {
    for (let i = 0; i < storeHours.length; i++) {
        let cookieSales = Math.floor(this.calcRandomCookieSales());
        this.hourly_sales.push(cookieSales);
        this.dailySales = this.dailySales + cookieSales;
        print(this.hourly_sales)
    }
};

Store.prototype.calcRandomCookieSales = function () {
    return (Math.floor(Math.random() * (this.max_customers - this.min_customers + 1) + this.min_customers)) * this.average_cookies;
};

Store.prototype.renderTableRow = function () {
    let parentEl = document.getElementById('sales-data');
    let rowEl = document.createElement('tr');
    let dataEl = document.createElement('td');
    dataEl.innerText = this.store_name;
    rowEl.appendChild(dataEl);

    for (let sale = 0; sale < this.hourly_sales.length; sale++) {
        let dataEl = document.createElement('td');
        dataEl.innerText = this.hourly_sales[sale];
        rowEl.appendChild(dataEl);
    }
    dataEl = document.createElement('td');
    dataEl.innerText = this.dailySales;
    rowEl.appendChild(dataEl);
    parentEl.appendChild(rowEl);
};

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

print(Store.all);

function footerRender() {
    let parentEl = document.getElementById('sales-data');
    let rowEl = document.createElement('tr');
    let dataEl = document.createElement('td');
    dataEl.innerText = 'Totals';
    rowEl.appendChild(dataEl);

    let grandTotal = 0;
    for (let hour = 0; hour < storeHours.length; hour++) {
        let dataEl = document.createElement('td');
        let sum = 0;
        for (let store = 0; store < Store.all.length; store++) {
            sum = sum + Store.all[store].hourly_sales[hour];
            grandTotal = grandTotal + Store.all[store].hourly_sales[hour];
        }
        dataEl.innerText = sum;
        rowEl.appendChild(dataEl);
    }
    dataEl = document.createElement('td');
    dataEl.innerText = grandTotal;
    rowEl.appendChild(dataEl);
    parentEl.appendChild(rowEl);
}

footerRender();





//     for (let i = 0; i < 14; i++) {
//         let seed = Math.random()
//         let random_number_of_customers = seed * (max_cus - min_cus) + min_cus;
//         let result = Math.floor(random_number_of_customers * average_cook);
//         this.hourly_sales.push(result);
//         this.total += result;
//     }

//     this.randomCustomer_cookies = this.hourly_sales;
// }
// Store.prototype.get_average = function () {
//     return this.min_customers / this.max_customers;
// };
// Store.prototype.set_min_cookies = function (min_customers) {
//     this.min_customers = min_customers;

// };
// Store.prototype.set_random_customers = function (averageTimesRandom) {
//     this.averageTimesRandom = averageTimesRandom;
// };
// Store.prototype.print_info = function () {
//     print(` ${this.store_name} Minimum hourly customers: ${this.min_customers} Maximum hourly customers: ${this.max_customers} Average cookies per sale: ${this.average_cookies} ${this.hourly_sales} ${this.total}  `);
// };


// Store.prototype.renderTableRow = function() {
//     let parentEl = document.getElementById('sales_data');
//     let rowEl = document.createElement('tr');
//     let dataEl = document.createElement('td');
//     dataEl.innerText = this.name;
//     rowEl.appendChild(dataEl);

//     for (let sale = 0; sale < this.hourly_sales.length; sale++) {
//         let dataEl = document.createElement('td');
//         dataEl.innerText = this.hourly_sales(sale);
//         rowEl.appendChild(dataEl);
//     }
//     dataEl = document.createElement('td');
//     dataEl.innerText = this.hourly_sales;
//     rowEl.appendChild(dataEl);
//     parentEl.appendChild(rowEl);
// }

// // let salesByHour = 0
// // for (j = 0; j < stores.length; j++) {
// //     salesByHour = salesByHour + stores[j].hourly_sales[i]
// // }
// // totalSalesByHour.push(salesByHour)




// let totalSalesByHour = []
// let grandTotal = 0
// for (i = 0; i < totalSalesByHour.length; i++) {
//     grandTotal += totalSalesByHour[i]
// }

// store1.print_info();
// store2.print_info();
// store3.print_info();
// store4.print_info();
// store5.print_info();

