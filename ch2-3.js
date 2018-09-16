// 비구조화 할당
var candyMachine = {
    status: {
        name: 'node',
        count: 5
    },
    getCandy: function () {
        this.status.count--;
        return this.status.count;
    }
};

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

const candyMachine = {
    status: {
        name: 'node',
        count: 5
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
};

const { getCandy, status: { count } } = candyMachine;

// 배열 비구조화 할당
var array = ['nodejs', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[array.length - 1];

const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;
