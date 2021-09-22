let print = console.log

function Store(name, min_cus, max_cus, average_cook) {
    this.hourly_sales = [
    ];
    this.total = 0;

    for (let i = 0; i < 14; i++) {
        let seed = Math.random()
        let random_number_of_customers = seed * (max_cus - min_cus) + min_cus;
        let result = Math.floor(random_number_of_customers * average_cook);
        this.hourly_sales.push(result);
        this.total += result;
    }
    this.store_name = name;
    this.min_customers = min_cus;
    this.max_customers = max_cus;
    this.average_cookies = average_cook;
    this.randomCustomer_cookies = this.hourly_sales;
}
Store.prototype.get_average = function () {
    return this.min_customers / this.max_customers;
};
Store.prototype.set_min_cookies = function (min_customers) {
    this.min_customers = min_customers;

};
Store.prototype.set_random_customers = function (averageTimesRandom) {
    this.averageTimesRandom = averageTimesRandom;
};
Store.prototype.print_info = function () {
    print(` ${this.store_name} Minimum hourly customers: ${this.min_customers} Maximum hourly customers: ${this.max_customers} Average cookies per sale: ${this.average_cookies} ${this.hourly_sales} ${this.total}  `);
};
Store.prototype.render = function name(params) {

//     let array_target = document.getElementById('array_target');
//     console.log (array_target);
//     let childOfBody = document.createElement('ul');
//     array_target.appendChild(childOfBody);
//     childOfBody.textContent = name
//         listItem.textContent = hourly_sales[i];
//         childOfBody.appendChild(listItem)
//     }   
//     listItem = document.createElement('li')
//     listItem.textContent = 'Total: ' + total;
//     childOfBody.appendChild(listItem);
}

// function build_store(name, min_cus, max_cus, average_cook) {
//     let hourly_sales = [
//         "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"
//     ];
//     let total=0;


//     let array_target = document.getElementById('array_target');
//     console.log (array_target);
//     let childOfBody = document.createElement('ul');
//     array_target.appendChild(childOfBody);
//     childOfBody.textContent = name
//     for (let i = 0; i < 14; i++ ) {
//         let result = Math.round(Math.floor(Math.random() * max_cus) * average_cook);
//         let listItem = document.createElement('li')
//         hourly_sales[i]= ` ${hourly_sales[i]}:   ${result} `;
//         total = result + total; 
//         listItem.textContent = hourly_sales[i];
//         childOfBody.appendChild(listItem)
//     }   
//     listItem = document.createElement('li')
//     listItem.textContent = 'Total: ' + total;
//     childOfBody.appendChild(listItem);

//     return {
//         store_name: name,
//         min_customers: min_cus,
//         max_customers: max_cus,
//         average_cookies: average_cook,
//         randomCustomer_cookies: hourly_sales,
//         get_average: function () {
//             return this.min_customers / this.max_customers;
//         },
//         set_min_cookies: function (min_customers) {
//             this.min_customers = min_customers;

//         },
//         set_random_customers: function (averageTimesRandom) {
//             this.averageTimesRandom = averageTimesRandom;
//         },
//         print_info: function () {
//             print(` ${this.store_name} Minimum hourly customers: ${this.min_customers} Maximum hourly customers: ${this.max_customers} Average cookies per sale: ${this.average_cookies} ${hourly_sales} ${total}  `);
//         },
//     }
// }
//let Seattle = new build_store("Seattle", 23, 65, 6.3);
let store1 = new Store("Seattle", 23, 65, 6.3);
let store2 = new Store("Tokyo", 3, 24, 1.2);
let store3 = new Store("Dubai", 11, 38, 3.7);
let store4 = new Store("Paris", 20, 38, 2.3);
let store5 = new Store("Lima", 2, 16, 4.6);

let stores = [store1, store2, store3, store4, store5]

let totalSalesByHour = []

for (i = 0; i < stores[0].hourly_sales.length; i++) {
    console.log(i)
    let salesByHour = 0
    for (j = 0; j < stores.length; j++) {
        salesByHour = salesByHour + stores[j].hourly_sales[i]
    }
    totalSalesByHour.push(salesByHour)
}
let grandTotal = 0
for (i = 0; i < totalSalesByHour.length; i++) {
    grandTotal += totalSalesByHour[i]
}

store1.print_info();
store2.print_info();
store3.print_info();
store4.print_info();
store5.print_info();

