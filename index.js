// Write your solution in this file!
const driver = {
    name: 'Sam',
};

function updateDriverWithKeyAndValue(obj,key,value) {
    const newDriver = Object.assign({},obj,{[key]: value});
    return newDriver;
}
updateDriverWithKeyAndValue(driver,'address','11 Broadway');

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
  }
  destructivelyUpdateDriverWithKeyAndValue(driver,'address','11 Broadway')


  function deleteFromDriverByKey(obj, key) {
    const newDriver = Object.assign({},obj);
    delete newDriver[key];
    return newDriver;
  }

 function destructivelyDeleteFromDriverByKey(obj, key){
    delete obj[key];
    return obj;
 }