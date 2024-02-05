function categorizeDay(temperature, weather) {
    if (temperature >= 25) {
        if (weather === 'sunny') {
            return "Beach day";
        } else {
            return "Park day";
        }
    } else if (temperature < 25) {
        if (weather === 'rainny') {
            return "Museum day";
        } else {
            return "Stay home";
        }
    } else {
        return "Casual day";
    }
}

console.log(categorizeDay(23, 'rainny'));