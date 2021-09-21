let print = console.log

function build_store(name, min_cus, max_cus, average_cook) {
    let hourly_sales = [
        "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"
    ];
    let total=0;


    let array_target = document.getElementById('array_target');
    console.log (array_target);
    let childOfBody = document.createElement('ul');
    array_target.appendChild(childOfBody);
    childOfBody.textContent = name
    for (let i = 0; i < 14; i++ ) {
        let result = Math.round(Math.floor(Math.random() * max_cus) * average_cook);
        let listItem = document.createElement('li')
        hourly_sales[i]= ` ${hourly_sales[i]}:   ${result} `;
        total = result + total; 
        listItem.textContent = hourly_sales[i];
        childOfBody.appendChild(listItem)
    }   
    listItem = document.createElement('li')
    listItem.textContent = 'Total: ' + total;
    childOfBody.appendChild(listItem);
    
    return {
        store_name: name,
        min_customers: min_cus,
        max_customers: max_cus,
        average_cookies: average_cook,
        randomCustomer_cookies: hourly_sales,
        get_average: function () {
            return this.min_customers / this.max_customers;
        },
        set_min_cookies: function (min_customers) {
            this.min_customers = min_customers;

        },
        set_random_customers: function (averageTimesRandom) {
            this.averageTimesRandom = averageTimesRandom;
        },
        print_info: function () {
            print(` ${this.store_name} Minimum hourly customers: ${this.min_customers} Maximum hourly customers: ${this.max_customers} Average cookies per sale: ${this.average_cookies} ${hourly_sales} ${total}  `);
        },
    }
}

let store1 = build_store("Seattle", 23, 65, 6.3);
let store2 = build_store("Tokyo", 3, 24, 1.2);
let store3 = build_store("Dubai", 11, 38, 3.7);
let store4 = build_store("Paris", 20, 38, 2.3);
let store5 = build_store("Lima", 2, 16, 4.6);

store1.print_info();
store2.print_info();
store3.print_info();
store4.print_info();
store5.print_info();

