

const driver = {};




function updateDriverWithKeyAndValue(driver, key, value){
    const newDriver = {};
    for (const [k,v] of Object.entries(driver)){
        newDriver[k] = (k === key ? value : v);
    }
    newDriver[key] = value;
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key){
    const newDriver = {};
    for (const [k] of Object.entries(driver)){
        newDriver[k] = (k === key);
    }
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}
