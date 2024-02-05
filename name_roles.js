function canAccess(role, isActive) {
    if ((role === 'admin' || role === 'editor') && isActive === true) {
        return 'true'
    } 
        return 'false'
}

canAccess('admin', true)
