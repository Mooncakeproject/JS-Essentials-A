function checkRole(role) {
    if (role === 'admin' || role === 'editor') {
        return 'granted';
    } else {
        return 'denied';
    }
}
    //Example Usage
console.log(checkRole('barista'));