function monthlyBookings(bookingDays) {
    if (bookingDays <= 30) {
        return 'Your booking is being processed';
    } else {
        return 'Please contact us for monthly bookings';
    }
}

// Example usage
console.log(monthlyBookings(31));