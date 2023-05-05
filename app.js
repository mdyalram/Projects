// 1, 2, 3 ,4 

//ref

//Array(3) => true
//Array (3) => false

const hasDuplicate = arr => new Set(arr).size !== arr.length;

function isVowel(char){
    return "aeious".includes(char);
};

function vowelCount (str){
    const vowelMap = new Map();
    for( let string of str){
        let strL = string.toLowerCase()
        if (isVowel(strL)){
            if (vowelMap.has(strL)){
                vowelMap.set(strL, vowelMap.get(strL) + 1);
            } else {
                vowelMap.set(strL, 1);
            }
        }
    }
    return vowelMap;
};