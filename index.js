// 1
function convertCtoF(celsius) {
  let fahrenheit = celsius*(9/5) + 32;
  return fahrenheit;
}

convertCtoF(30);

// 2
function reverseString(str) {
    let arr = str.split('');
    let rev = arr.reverse();
    str = rev.join('');

    return str;
}

reverseString("hello");

//3
function factorialize(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorialize(num - 1)
    }
}

factorialize(5);
// 4
findLongestWordLength("The quick brown fox jumped over the lazy dog");

function findLongestWordLength(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWord){
            longestWord = strSplit[i].length;
        }
    }
    return longestWord;
}

//5

function largestOfFour(arr) {
    let maxarr = [];
    for (let i = 0; i < arr.length; i++) {
        let result = Math.max(...arr[i])
        maxarr.push(result)
    }
    return maxarr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//10
function booWho(bool) {
    if (bool === true) {
        return true
    } else if (bool === false) {
        return true
    } else {
        return false
    }
}

booWho(null);

//9
function findElement(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
            return arr[i]
        }
    }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// 8
function repeatStringNumTimes(str, n) {
    var new_str = '';
    while (n-- > 0) new_str += str;
    return new_str;
}

repeatStringNumTimes("abc", 3);


// 7
function truncateString(str, num) {

    if (str.length <= num) {
        return str
    }
    return str.substr(0, num) + '...';

}