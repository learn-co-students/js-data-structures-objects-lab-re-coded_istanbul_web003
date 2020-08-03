// Write your solution in this file!

const driver = {name:'Sam', address:'11 Broadway'};

function updateDriverWithKeyAndValue(obj,key,value) {
   return Object.assign({}, obj, {[key]:value}); 
};
updateDriverWithKeyAndValue(driver, 'name', 'Sam');

function destructivelyUpdateDriverWithKeyAndValue(obj,key,value) {
    obj[key] = value;
    return obj;
};
destructivelyUpdateDriverWithKeyAndValue(driver, 'address', '12 Broadway');

function deleteFromDriverByKey(obj, key) {
    const newObj = Object.assign({}, obj);
    delete newObj[key];
    return newObj;
};
deleteFromDriverByKey(driver,'name');

function destructivelyDeleteFromDriverByKey(obj,key){
    delete obj[key];
    return obj;
}
destructivelyDeleteFromDriverByKey(driver, 'name');    

  