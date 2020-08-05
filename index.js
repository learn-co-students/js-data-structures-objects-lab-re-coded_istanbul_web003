
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newdriver = Object.assign({}, driver);
    newdriver[key] = value;
    return newdriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const newdriver = Object.assign({}, driver);
    delete newdriver[key];
    return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}