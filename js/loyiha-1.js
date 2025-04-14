const pizzaOrders = [
    { id: 1, type: 'pishloqli', size: 'large' },
    { id: 2, type: 'pishloqsiz', size: 'medium'},
    { id: 3, type: 'tovuqli', size: 'small' },
    { id: 4, type: 'qazili', size: 'medium' }
]
// Narxini hisoblash funksiyasi
function calculatePrice(order) {
    // Oddiy Pizza narxini ovoldik!
    let price = 10_000

    // Typiga qarab narx qoshdik!
    if (order.type === 'pishloqli') {
        price += 8_000;
    } else if (order.type === 'pishloqsiz') {
        price += 0;
    } else if (order.type === 'tovuqli') {
        price += 10_000;
    } else if (order.type === 'qazili') {
        price += 20_000;
    }
    // Size ga qarab narx qoshdik!
    switch (order.size) {
        case 'large':
            price += 15_000;
            break;
        case 'medium':
            price += 10_000;
            break;
        case 'small':
            price += 5_000;
            break;
    }
    // Umumiy narx return qilib yubordik
    return price;
}
// Buyurtma qabul qilish funksiyasi
function pizzaReadyCallback(order, totalPrice) {
    // Buyurtma tayyor bolgan holatini korsatiladi
    console.log(`Pizza\nid: ${order.id}\nType: ${order.type}\nSize: ${order.size} \nHolati:Tayyor\nNarx: ${totalPrice}`);
}
// Bu funksiya typga qarab vaqt olish funksiya
function orderPizza(order, callback) {
    // Buyurtma pishirish jarayonida
    console.log(`id: ${order.id}\nType: ${order.type}\nSize: ${order.size}\n Holati: Pishirish boshlandi...`);

    // Buyurtma qancha vaqt olish
    let cookingTime = 2_000
    
    // Typiga qarab qoshimcha vaqt olishi
    switch (order.type) {
        case 'qazili':
            cookingTime=5_000
            break;
        case 'pishloqli':
            cookingTime = 4_000
            break;
        case 'tovuqli':
            cookingTime = 3_000
            break;
    }
    // Kodni ishga tushirish vaqti
    setTimeout(() => {
        const total = calculatePrice(order);
        callback(order,total)
    }, cookingTime);
}

// Buyurmarni ishga tushirish function siyasi
pizzaOrders.forEach(function (order) {
    orderPizza(order, pizzaReadyCallback);
});