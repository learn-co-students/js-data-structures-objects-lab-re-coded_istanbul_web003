// Write your solution in this file!
const driver = {
    name: 'Sam',
    address: '11 Broadway'
}
  

function updateDriverWithKeyAndValue(opj, key, value) {
    const newdriver = { ...opj };
   
    newdriver[key] = value;
   
    return newdriver ;
  }
  
  function destructivelyUpdateDriverWithKeyAndValue(opj, key, value) {
    opj[key] = value;
   
    return opj;
  }
  
  function deleteFromDriverByKey(opj,key){
   
    const newdriver = { ...opj };
    delete newdriver[key];
    return newdriver;
      }
  function destructivelyDeleteFromDriverByKey (opj,key){
   
    delete opj[key];
    return opj;
  }