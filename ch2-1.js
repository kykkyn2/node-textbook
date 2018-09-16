// ES5 는 var 로 사용 했으나 ES6 부터는 const, let 사용 권장
if (true) {
    var x = 3;
}
console.log(x);

if (true) {
    const y = 3;
}
console.log(y);

// const 는 불변 상수값, 초기화 안하면 에러
const a = 0;
a = 1;

let b = 0;
b = 1;

const c;

// ES5 문법 vs ES6 문법
var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + ' 더하기 ' + num2 + ' 는 \'' + result + '\'';
console.log(string1);

const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4} 는 '${result2}'`;
console.log(string2);

// ES5 객체 리터럴
var sayNode = function () {
    console.log('Node');
};

var es = 'ES';
var oldObject = {
    sayJS: function () {
        console.log('JS');
    },
    sayNode: sayNode
};

oldObject[es + 6] = 'Fantastic';

oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

// ES6 객체 리터럴
const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantastic'
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);