// DZ 4
// function revr (str) {
//     if (str === '')
//         return ''
//     else return revr (str.substr(1)) + str.charAt(0)
// }
// console.log(revr('dattebase'));


// var INN = "12505200011524";
// var symvol = INN[0];


// if ((symvol === "0" || symvol === "1" || symvol === "2") && 
//     (INN.length === 14)) {
//         console.log("INN validattion ");
//     }
//     else{
//         console.warn("noo");
//     }

// function average ( first , second) {
//     return (first+second)/2;
// }
// console.log(average(6,8));

// let array = [12, 5, 7, 29, 50, 8, 17, 19, 18, 4, 1];
// let Newarray = array.filter(function (elem){
//     return elem > 5;
// }) 
// console.log(Newarray);


// DZ 6


document.forms.form1.onsubmit = function () {
    let login = this.text1.value
    let password = this.text2.value

    if (login === '[я ждал' && password === '1234') {
        alert('ты прошел этот тест' + login + password);
    }
    else {
        alert('попробуй снова')
        return false;
    }
};







let count = 0

const Count = () => {
    const countTag = document.getElementById('count');
    countTag.innerText = count
}

Count()

const plusCount = () => {
    count++
    Count()
}

plusCount()

const minusCount = () => {
    count--
    Count()
}

minusCount()
