function checkVehicle(vehicle) {
    if (vehicle !== 'car'&& vehicle !=='truck'&& vehicle !=='motorbike') {
        return 'allowed';
    }
    else {
        return 'not allowed';

    }
}
console.log(checkVehicle('car'));