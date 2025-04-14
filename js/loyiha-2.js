const object = [
   {
        id: 1,
        productName: "MacBook Pro 16-inch",
        brand:"Apple",
        basePrice: 30_000_000,
        payInMonths: 6,
        monthlyPayment: 0
    },
    {
        id: 2,
        productName: "iPhone 16 Pro Max",
        brand: "Apple",
        basePrice: 18_000_000,
        payInMonths: 12,
        monthlyPayment: 0
    },
    {
        id: 3,
        productName: "Samsung Galaxy S24 Ultra",
        brand: "Samsung",
        basePrice: 15_000_000,
        payInMonths: 8,
        monthlyPayment: 0
    },
    {
        id: 4,
        productName: "Dell XPS 13",
        brand: "Dell",
        basePrice: 18_000_000,
        payInMonths: 1,
        monthlyPayment: 0
    }
    
]
// Narxni hisob-kitob qilish
function calculateFinalPrice(order) {
    let finalPrice = order.basePrice
    // Apple Maxsulotlariga 10% ustma
    switch (order.brand) {
        case "Apple":
            finalPrice+=(finalPrice*0.1)
            break;
    }
    // Samsung va Dell Maxsulotlariga 10% chegirma
    if (order.brand === "Samsung" || order.brand === "Dell") {
        finalPrice-=(finalPrice*0.1)
    }
    return Math.round(finalPrice)
}
// Oyma-oy to'lash uchun funksiya
function calculateInstallments(finalPrice, payInMonths) {
    // 1-oyga teng bolsa narxni ozi chiqadi
    if (payInMonths === 1) {
        monthlyPayment = finalPrice
    // 1-oydan ko'p bo'lsa narxi ustiha qo'shimcha qo'shiladi
    } else if (payInMonths > 1) {
        let extraPayMonth = 1 + (payInMonths * 0.05)
        finalPrice *= extraPayMonth;
        monthlyPayment=finalPrice/payInMonths
    }
    // narx butunlab ovomiza
    return Math.round(monthlyPayment)
}
function deviceReadyCallback(order) {
    // Buyurtma holatini tekshirvomiza
    console.log(`id: ${order.id}\n${order.productName} \nHolati: Tayyor bo'ldi`);
    if (order.payInMonths > 1) {
        // oyma-oy tolovlarni consulga chiqarvomiza
        console.log(`Har oy to'lash uchun: ${monthlyPayment} so'm\nJami: ${order.payInMonths} oy`);
    } else {
        console.log(`Jami to'lov: ${monthlyPayment} so'm\nBir yo'la tolanadi.`);
    }
    console.log("----------------------------------------");
}
function orderDevice(order, callback) {
    // Buyurtma qabul qilindi va yetkazib berish uchun vaqt
    console.log(`${order.productName} (#${order.id}) buyurtma qilindi. Ombordan yetkazib berilmoqda...`);
    setTimeout(() => {
        // oxirgi narxni ovomiza
        const finalPrice = calculateFinalPrice(order);
        // oxirgi oyma oy uchun narx olinvoti
        const monthlyPayment = calculateInstallments(finalPrice, order.payInMonths);
        order.monthlyPayment - monthlyPayment;
        order.finalPrice = finalPrice;
        callback(order);
    }, 2000);
}
// dastur ishga tushib har bir buyurtma uchun ko'rvomiza
object.forEach(order => orderDevice(order, deviceReadyCallback));