//Collection Functions (Arrays or Objects)

//myEach(collection, callback)
const myEach = function(collection, callback) {

    const newCollection = Object.values(collection)
    newCollection.forEach(Element => callback(Element))
    return collection

}

//myMap(collection, callback)
const myMap = function(collection, callback) {

    const array = Object.values(collection).map(callback)
    return array
}

//myReduce(collection, callback, acc)
const myReduce = function(collection, callback, acc) {

    let propertyValues = Object.values(collection) 
    if (!acc) {
        acc = propertyValues[0]
        propertyValues = propertyValues.slice(1)
    }
    for (let i = 0; i < propertyValues.length; i++) {
       acc = callback(acc, propertyValues[i], propertyValues)

    }
    return acc 


}   


//myFind(collection, predicate)
const myFind = function(collection, predicate) {
    console.log(collection)
    
    //returns the first one thats truthy (predicate) or undefined if no value is passes
    //if statment needed
    //returns single element
    
}

//myFilter(collection, predicate)

//mySize(collection)

//myFirst(array, [n])

//myLast(array, [n])

//myKeys(object)

//myValues(object)