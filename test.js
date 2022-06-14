// Задача 1 - время решение 5 минут
let cityes = ['Краснодар','Воронеж','Нижний Новгород','Москва']
const arrCityes = arr =>{
    let str = arr.join(',') + '.'
    return str
}
console.log(arrCityes(cityes))

// Задача 2 - время решение 5-10 минут
let floatNum1 = 13;
let floatNum2 = 17;
let floatNum3 = 19.3;
let floatNum4 = 16.5;
const okrFive = num =>{
    return Math.round(num/5)*5;
}
console.log(okrFive(floatNum1))//15
console.log(okrFive(floatNum2))//15
console.log(okrFive(floatNum3))//20
console.log(okrFive(floatNum4))//15

// Задача 3 - время решение 8-10 минут
let intComp1 = 2;
let intComp2 = 5;
let intComp3 = 41;
let intComp4 = 146;
let intComp5 = 0;
const checkComps = num =>{
    if (+num.toString().slice(-1) === 1){
        return 'Компьютер'
    }else if(+num.toString().slice(-1) > 1 && +num.toString().slice(-1) < 5 ){
        return 'Компьютерa'
    }else{
        return 'Компьютеров'
    }
}
console.log(checkComps(intComp1))
console.log(checkComps(intComp2))
console.log(checkComps(intComp3))
console.log(checkComps(intComp4))
console.log(checkComps(intComp5))

// Задача 4  - время решение 10-12 минут
let numCheck1 = 11;
let numCheck2 = 12;
let numCheck3 = 7;
let numCheck4 = 14;
let numCheck5 = 23;
const checkEasyNum = num =>{
    let chekcEasyBul = true;
    for (let i = 2; i<num; i++){
        if (num % i === 0){
            chekcEasyBul = false
        }
    }
    return chekcEasyBul
}
console.log(checkEasyNum(numCheck1));
console.log(checkEasyNum(numCheck2))
console.log(checkEasyNum(numCheck3))
console.log(checkEasyNum(numCheck4))
console.log(checkEasyNum(numCheck5))

// Задача 5   - время решение 15-20 минут
let arrCheck1 = [2,7,2,11,15,11,78]
let arrCheck2 = [2,7,11,34,56,11]
const checkTwoArr = (arr1,arr2) =>{
    let newArr = [];

    for (let i = 0;i<arr1.length; i++){
        if (arr2.indexOf(arr1[i]) !== -1){
            newArr.push(arr1[i])
            arr1.splice(i,1)
        }
    }
    let retArr = [];
    for (let elem of newArr){
        if (arr1.indexOf(elem) !== -1 && arr2.indexOf(elem) !== -1){
            retArr.push(elem)
        }
    }
    return retArr
}
console.log(checkTwoArr(arrCheck1, arrCheck2));