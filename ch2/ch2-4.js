// promise

const condition = true;
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

promise.
    then((message) => {
        console.log(message);
    }).catch((error) => {
        console.log(error);
    });

promise.
    then((meesage) => {
        return new Promise((resolve, reject) => {
            resolve(message);
        });
    }).then((meesage2) => {
        console.log(meesage2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    }).then((meesage3) => {
        console.log(meesage3);
    }).catch((error) => {
        console.error(error);
    });

// callback hell
function findAndSaveUser(Users){
    Users.findOne({},(err,user)=>{ // 첫번째 콜백
        if(err){
            return console.error(err);
        }
        user.name = 'zero';
        user.save((err)=>{ // 두번째 콜백
            if(err){
                return console.error(err);
            }
            Users.findOne({gender:'m'},(err,user)=>{ // 세번째 콜백
                // 생략
            });   
        })
    })
}