// تعریف شیء orders
let orders = {
    book: { name: "JavaScript Guide", model: "Edition 2025", price: 100, count: 2 },
    pen: { name: "Pilot Pen", model: "Blue Ink", price: 20, count: 5 },
    laptop: { name: "Dell XPS", model: "15-inch", price: 1500, count: 1 }
};

// افزایش قیمت هر محصول به مقدار 10 واحد
for (let item in orders) {
    orders[item].price += 10;
}

// محاسبه مبلغ کل خرید
let totalCost = 0;
for (let item in orders) {
    totalCost += orders[item].price * orders[item].count;
}

console.log("مبلغ کل خرید:", totalCost);
