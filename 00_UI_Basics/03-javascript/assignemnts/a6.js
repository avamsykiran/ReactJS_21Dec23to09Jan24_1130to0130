let nums = [];

//fill this array with 100 numbers randomly using
//two asynchronous jobs, each filling 50 numbers.

const fillIn = (count) => new Promise((resolve,reject)=> {
    let addNums = setInterval(() => {
        if (count === 0) {
            clearInterval(addNums);
            resolve();
        } else {
            let number = Math.floor(Math.random() * 10);
            console.log(`pushing ${number}`);
            nums.push(number);
            count--;
        }

    }, 100);
});

let p1 = fillIn(50);
let p2 = fillIn(50);

Promise.all([p1,p2]).then(() => { console.log(nums); console.log(nums.length + " numbers filled");});