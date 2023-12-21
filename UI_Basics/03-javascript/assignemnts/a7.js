
const fillIn = (count) => new Promise((resolve,reject)=> {
    let nums = [];
    let addNums = setInterval(() => {
        if (count === 0) {
            clearInterval(addNums);
            resolve(nums);
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

Promise.all([p1,p2])
    .then((data) => { 
        let nums = [...data[0],...data[1]];
        console.log(nums); 
        console.log(nums.length + " numbers filled");
    });