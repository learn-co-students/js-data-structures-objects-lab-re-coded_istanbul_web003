// Write your solution in this file!


function updateDriverWithKeyAndValue(obj, key, value){
    return Object.assign({}, obj, { [key]: value });
}

const driver= {
    name: 'Sam'
}
updateDriverWithKeyAndValue(driver, 'address', '11 Broadway');


function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
     obj[key] = value;
     return obj;
}


destructivelyUpdateDriverWithKeyAndValue(driver, 'address', '12 Broadway');


function deleteFromDriverByKey(obj, key){
    const newObj= Object.assign({}, obj);
    delete newObj[key];
    return newObj;
}
let newDriver= deleteFromDriverByKey(driver, 'name');

function destructivelyDeleteFromDriverByKey(obj){
    delete obj.name;
    return obj;
}
 newDriver= destructivelyDeleteFromDriverByKey(driver);