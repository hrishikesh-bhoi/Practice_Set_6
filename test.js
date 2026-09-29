// Question 1

function findEligibilityForScholarship(age, isStudent, familyIncome) {
    if((age <= 25 && isStudent === true && familyIncome <= 50000) || age > 70 && isStudent === false) {
        return "Eligible for Scholarship";
    } 
    return "Not Eligible for Scholarship";
}

 console.log(findEligibilityForScholarship(22, true, 40000));
 console.log(findEligibilityForScholarship(82, false, 40000));

// Question 2

function isEligibleForPromotion(yearsOfService, isManager) {

    if(yearsOfService >= 5 && isManager === true) {
        return true;
    } 
    return false;
}

 console.log(isEligibleForPromotion(7, true));

// A5 Question:
const products = [
  { name: "Smartphone", category: "Electronics", retailSales: 20000, onlineSales: 35000, wholesaleSales: 15000 },
  { name: "T-Shirt", category: "Clothing", retailSales: 8000, onlineSales: 12000, wholesaleSales: 5000 },
  { name: "Sofa", category: "Furniture", retailSales: 25000, onlineSales: 10000, wholesaleSales: 30000 },
  { name: "Laptop", category: "Electronics", retailSales: 40000, onlineSales: 50000, wholesaleSales: 20000 },
  { name: "Jeans", category: "Clothing", retailSales: 10000, onlineSales: 15000, wholesaleSales: 7000 },
  { name: "Bed", category: "Furniture", retailSales: 30000, onlineSales: 12000, wholesaleSales: 20000 },
  { name: "Headphones", category: "Electronics", retailSales: 15000, onlineSales: 18000, wholesaleSales: 9000 },
  { name: "Jacket", category: "Clothing", retailSales: 12000, onlineSales: 17000, wholesaleSales: 6000 }
];

const productWithTotalSales = products.map((product) => ({
    ...product,
    totalSales:
    product.retailSales + product.onlineSales + product.wholesaleSales
}))

 console.log(productWithTotalSales);

const mostProfitableProduct = productWithTotalSales.reduce((acc, curr) => (
    acc.totalSales > curr.totalSales ? acc : curr
));

console.log("====== Sales Report =====");
console.log("Most Profitable Product");
console.log("---------");
console.log("Name: ", mostProfitableProduct.name);
console.log("Category: ", mostProfitableProduct.category);
console.log("Total Sales: ", mostProfitableProduct.totalSales);
console.log()
console.log("Sales Average");
console.log("---------");

const totalSalesOfAllProducts = productWithTotalSales.reduce((acc, curr) =>  curr.totalSales + acc , 0);
console.log("Total Sales of All Products: ", totalSalesOfAllProducts);


const averageSalesOfAllProduct = totalSalesOfAllProducts / productWithTotalSales.length;
console.log("Average Sales of All Products: ", averageSalesOfAllProduct);

const totalRetailSales = productWithTotalSales.reduce((acc, curr) => curr.retailSales + acc ,0)

const averageRetailSales = totalRetailSales / productWithTotalSales.length;
console.log("Average Retail Sales: ", averageRetailSales);

const totalOnlineSales = productWithTotalSales.reduce((acc, curr) => curr.onlineSales + acc ,0)

const averageOnlineSales = totalOnlineSales / productWithTotalSales.length;
console.log("Average Online Sales: ", averageOnlineSales);

const totalWholesaleSales = productWithTotalSales.reduce((acc, curr) => curr.wholesaleSales + acc ,0)

const averageWholesaleSales = totalWholesaleSales / productWithTotalSales.length;
console.log("Average Wholesale Sales: ", averageWholesaleSales);


