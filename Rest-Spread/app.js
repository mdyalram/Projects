// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...args) => args.filter (num = num % 2 ===0);

const findMin = (...args) => Math.min(...args);

const mergeObjects =  (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...args) => [...arr, args.map(v => v*2)];

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slive(0,idx), ...items.slice(idx+1)];
};


const newArray = (array1, array2) => {
    return [...array1, ...array2]; 
};


const addKey = (obj, key, val) =>{
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
};

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
};

let hi = {a:1, b:2};


const combine = (obj1, obj2) => {
    return {...obj1, ...obj2}
}

const newObj = (obj, key, val) =>{
    let newObj = {...obj};
    newObj[key] = val;
    return newObj
}