
function myEach (collection, alert) {
    for(let number in collection) {
        alert(collection[number])
    }
    return collection
}

function myMap (collection, callback) {
    let newArr = [];
    for(let number in collection) {
        newArr.push(callback(collection[number]))
    }
    return newArr
}

function myReduce (collection, callback, acc) {
    let collCopy = collection instanceof Array ? [...collection] : Object.values(collection)
    acc = acc || collCopy.shift();
    for(let accessor in collCopy) {
        acc = callback(acc, collCopy[accessor], collCopy)   
    }
    return acc
}

function myFind (collection, predicate) { //prediate is a callback that returns a boolean
    for (let accessor in collection) {
        let element = collection[accessor];
        if(predicate(element)) {
            return element;
        }
    }
}

function myFilter (collection, predicate) {
    let newArr = [];
    for (let accessor in collection) {
        let element = collection[accessor];
        if (predicate(element)) {
            newArr.push(element)
        }
    }
    return newArr
}

function mySize (collection) {
    return Object.keys(collection).length
}

function myFirst (array, n) {
    if (n) {
        return array.slice(0, n)
    } else {
        return array[0]
    }
}

// [1, 2, 3, 4]

// function myLast (array, n) {
//     if (n) {
//         let i = ((array.length - n) - 1);
//         return array.slice(i)
//     } else {
//         return array.pop()
//     }
// }

function myLast (array, n) {
    if (n) {
        let i = array.length - n;
        return array.slice(i, array.length)
    } else {
        return array[array.length - 1] 
    }
}





// function myLast (array,n) {
//     if (n) {
//         for (let i = 0; i < n; i++) {
//             array.shift()
//         } return array
//     } else {
//         return array.pop()
//     }
    
    
//     for (i = 0, i < n; i++) {
//         array.shift()
//     }
// }
    



function mySortBy (array, callback) {

}

function myFlatten (array, [shallow], newArr=[]) {

}

function myKeys (object) {
    return Object.keys(object)
}

function myValues (object) {
    return Object.values(object)
}

