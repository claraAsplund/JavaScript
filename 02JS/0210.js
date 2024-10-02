const player = {
    name : "Nico",
    age : 98,
};


console.log(player, console);//console was a obj

player.name = "Nicolas";//update an item inside of obj
console.log(player);
player.sexy ="soon";
console.log(player);


/*funcution is the way we can incapsulate some code and replay over and over
it it better outside of wordl people send data. many things to code with the same code
*/
function plus(potato, salad) {//it just placeholder 
    console.log(potato + salad);
//potato and salad defines only inside of func Body
}

plus(5,10);
plus(2, 9898);

function minusFem (a){
    console.log(a - 5);
}
minusFem(10,20,30);
minusFem(55);
minusFem(100);

const calculator = {
    add: function (a,b){
        console.log(a + b);
    }, 
    
    minus: function(a,b){
        console.log(a - b);
    },

    multiple: function(a,b){
        console.log(a * b);
    },

    divide: function(a, b){
        console.log(a / b);
    },
    powerOf: function(a,b){
        console.log(a**b);
    },

};

calculator.add(1,2);
calculator.minus(1,2);
calculator.divide(1,2);
calculator.multiple(1,2);
calculator.powerOf(1,2);

