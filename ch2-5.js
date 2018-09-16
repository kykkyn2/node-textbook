// async, await
function findAndSaveUser(Users) {
    Users.findOne({}).
        then((user) => {
            user.name = 'zero';
            return user.save();
        }).
        then((user) => {
            return Users.findOne({ gender: 'm' });
        }).
        then((user) => {
            // 생략
        }).catch((err) => {
            console.error(err);
        });
}


async function findAndSaveUser(Users) {
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({ gender: 'm' });
    // 생략
}


async function findAndSaveUser(Users) {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender: 'm' });
        // 생략
    } catch (error) {
        console.error(error);
    }

}

// 화살표 함수도 async 와 같이 사용 가능
const findAndSaveUser = async (Users) => {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender: 'm' });
        // 생략
    } catch (error) {
        console.error(error);
    }
}

// node v10 에서 지원 하는 es2018 문법
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
    for await (promise of [promise1, promise2]) {
        console.log(promise);
    }
})();