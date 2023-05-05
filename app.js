//8, 1846
//1846, 1659
//Your name is Alejandro and you like purple
//Your name is Melissa and you like green
//your name is undefined and you like green


//Array Destructuring
//Maya, Marisa, Chi
//Raindrops on roses, //whiskers on kitten, //"Bright copper kettles","warm woolen mittens, "Brown paper packages tied up with strings
//10, 20, 30

const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

const {a,b} = obj.numbers;


let arr = [1, 2];
[arr[1], arr[0]] = [arr[0], arr[1]]; 

const raceResults = ([first, second, third, ...rest]) => {[first, second, third, rest]}