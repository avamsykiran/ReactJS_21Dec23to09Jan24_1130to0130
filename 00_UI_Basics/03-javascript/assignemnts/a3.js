//create a class Consumer having consumerId,fullName,mobile and mailId as fields.
//instantiate and display its objects.

class Consumer{
    constructor(consumerId,fullName,mobile,mailId){
        this.consumerId=consumerId;
        this.fullName=fullName;
        this.mobile=mobile;
        this.mailId=mailId;
    }
}

let consumer1= new Consumer(3377,'Mokshi',90089809,'mahi@gmail.com');
console.log(consumer1);
