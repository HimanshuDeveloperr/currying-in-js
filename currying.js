

// function currying using bind method

let multiply= function(x,y){
    console.log(x*y)
}

let multiplyByTwo= multiply.bind(this,2)// it is copying the multiply function with setting 2 as x value/ first argument as 2 using this.

multiplyByTwo(5);//giving second argument as 5 and invoking the copy function of multiply.

let multiplyByThree= multiply.bind(this,3)
multiplyByThree(5);

//so by copying the original fuction using bind and creating new function through it is known as currying with bind method.


//currying using closures...


let addition= function(a)
{
    return function (b){
        console.log(a+b)
    }
}

var additionByTwo= addition(2) //function(2) which will return |            
additionByTwo(5)                                                



// return function (5){
   // console.log(a+b)
//}