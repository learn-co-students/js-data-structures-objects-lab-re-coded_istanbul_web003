// Write your solution in this file!
function updateDriverWithKeyAndValue(driver, key, value) {
    let newDriver = {}
    Object.assign(newDriver, driver)
    newDriver[key] = value
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    let deleteDriver = {}
    Object.assign(deleteDriver, driver)
    delete deleteDriver[key];
    return deleteDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver
}