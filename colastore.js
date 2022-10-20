
// the company requires a means of sorting their stock by different values of their product

var products = [ {name: "Grapefruit", calories: 170, color: "red", sold: 8200},
                 {name: "Orange", calories: 160, color: "orange", sold: 12101},
                 {name: "Cola", calories: 210, color: "caramel", sold: 25412},
                 {name: "Diet Cola", calories: 0, color: "caramel", sold: 43922},
                 {name: "lemon", calories: 200, color: "clear", sold: 14983},
                 {name: "Raspberry", calories: 180, color: "pink", sold: 9427},
                 {name: "Root Beer", calories: 200, color: "caramel", sold: 9909},
                 {name: "Water", calories: 0, color: "clear", sold: 62123}
];


// start with items sold in ascending order
// compare function will be passed to objects not numbers

function compareSold (colaA, colaB) {
    if (colaA.sold > colaB.sold) {
        return 1;
    } else if (colaA.sold == colaB.sold) {
        return 0;
    } else {
        return -1;
    }
    }
//products.sort(compareSold)
// test: ran test in browser, output is as expected 
// next add function to print to console

function printProducts(products) {
    for (var i = 0; i < products.length; i++) {
        console.log("Name: " + products[i].name + ", Calories: " + products[i].calories + 
        ", Color: " + products[i].color + ", Sold: " + products[i].sold);
    }
}

// test: 

// products.sort(compareSold); (clear)
// printProducts(products); (clear)