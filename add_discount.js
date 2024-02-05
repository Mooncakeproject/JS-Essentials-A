function addDiscount(price, discount) {
    if (typeof price == 'number' && typeof discount == 'number') {
        const discountedPrice = price - (price * discount);
        return discountedPrice;
    } else {
        return "Error: Invalid input";
    }
}