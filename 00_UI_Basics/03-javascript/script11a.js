
let nums = [12,44,55,66,77,88,99,2,4,3,6,4,7,8,9,101];

//print all the even number of that array
console.log(nums.filter(n => n/2===0 ));

//print the smallest num 
console.log(nums.reduce((n1,n2)=>Math.min(n1,n2)))

//print the squares of each element in the nums array.
console.log(nums.map(n1=>n1*n1));

class Item{
    constructor(id,name,stock,price){
        this.id=id;
        this.name=name;
        this.stock=stock;
        this.price=price;
    }
}

//create an array of 10 itmes
let items = [
    new Item(1,"A4 Sheets Bundle",456,1244),
    new Item(2,"A3 Sheets Bundle",56,2244),
    new Item(3,"Laser Printer Catridge",46,1944),
    new Item(4,"Ink Jet Black Ink Bottle",64,2244),
    new Item(5,"Ink Jet Color Ink Set",56,3244),
    new Item(6,"Stappler Pins Box",69,44),
    new Item(7,"Stick Notes",1456,144),
    new Item(8,"Rulled 200pages Note Book",1056,344),
    new Item(9,"White4 Long Note Book 200 pages",2956,144),
    new Item(10,"Note Pad",4456,244)
];

//print the costlest item
console.log(items.reduce( (a,b) => a.price>b.price?a:b ));

//print the cheapest item
console.log(items.reduce( (a,b) => a.price<b.price?a:b ));

//print list of all the item that are less than 500 in stock
console.log(items.filter( item => item.stock<=500 ));

//print list of all item names
console.log( items.map( item => item.name ));

//print list of all the items whose price ranges from 500 to 2000
console.log(items.filter(item => item.price>=500 && item.price<=2000));

//print all the items after increasing their stock by 50%
items.forEach( item => item.stock=item.stock+items.stock/2 );
console.log(items);

//print the list of those items whose price is not more than a 100.
console.log(items.filter( item => item.parice<=100 ));
