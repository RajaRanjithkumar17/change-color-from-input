var mail = "ranjith23432@gmail.com";
var number = mail.match(/[0-9]+/g);
while(number>0){
    var rem = number%10;

    if(rem%2==1){
        console.log(rem);
    }
    number = Math.floor(number/10)
}