function calculateDiscount(price, category) {
    let discount
    if (category === 'electronics') {
        discount = price * 0.10
        console.log(discount)
    } else {
        discount = price * 0.05
    }
    return discount
}

console.log('yes')