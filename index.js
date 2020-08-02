// Write your solution in this file!
const driver = {
        driverName: 'Sam',
        driverAddress: 'New York',
};

function updateDriverWithKeyAndValue(obj, key, value) {
        return Object.assign({}, obj, { [key]: value });
}
const newDriver = updateDriverWithKeyAndValue(driver, driverName, value);

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
        obj[key] = value;
        return obj;
}
const newModifiedDriver = destructivelyUpdateDriverWithKeyAndValue(driver, key, value);

function deleteFromDriverByKey(obj, key) {
        const newObj = Object.assign({}, obj);
        delete newObj[key];
        return newObj;
}
const myDriver = deleteFromDriverByKey(driver, 'driverName');

function destructivelyDeleteFromDriverByKey(obj, key) {
        delete obj[key];
        return obj;
}
const desDriver = destructivelyDeleteFromDriverByKey(driver, driverAddress);
