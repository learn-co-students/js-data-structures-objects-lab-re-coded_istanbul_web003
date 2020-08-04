const driver = {}
function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value});
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver
    //another way to solve it 
    // return Object.assign(driver, {[key]: value});
}
function deleteFromDriverByKey(driver, key) {
    //const obj = Object.assign({}, driver);
    const obj = {...driver}
    delete obj[key];
    return obj
}
function destructivelyDeleteFromDriverByKey(driver, key) {
    Object.assign({}, driver)
    delete driver[key];
    return driver
    // let newdriver = Object.assign({}, key);
    // delete newdriver['key'];
    // return newdriver
}