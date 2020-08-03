// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver,key,value) {
   const newDriver = Object.assign({}, driver, {name:'Sam', address:'11 Broadway'}); 
   /*newDriver['name'] ='Sam';
   newDriver['address']='11 Broadway';*/
    return newDriver;
};

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value) {
    driver['name'] = 'Sam';
    driver['address']='12 Broadway';
    return driver;
};

function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver);
    delete newDriver['name'];
    return newDriver;
};

function destructivelyDeleteFromDriverByKey(driver,key){
    delete driver['name'];
    return driver;
}
    

  