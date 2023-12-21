let nums = [];

//fill this array with 100 numbers randomly using
//two asynchronous jobs, each filling 50 numbers.

let flag1=false;
let flag2=false;

const fillIn = (count,iamDone) => {
    let addNums = setInterval(() => {
        if (count === 0) {
            clearInterval(addNums);
            iamDone();
        } else {
            let number = Math.floor(Math.random() * 10);
            console.log(`pushing ${number}`);
            nums.push(number);
            count--;
        }

    }, 100);
}

fillIn(50,() => flag1=true);
fillIn(50,() => flag2=true);

let checkDone = setInterval(()=>{
    if(flag1 && flag2) {
        console.log(nums);
        console.log(nums.length + "numbers done");
        clearInterval(checkDone);
    }
},150);