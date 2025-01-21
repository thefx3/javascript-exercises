const sumAll = function(int1,int2) {

    let sum = 0;
    let min = 0;
    let max = 0;


    //Preconditions
    if (!Number.isInteger(int1) || !Number.isInteger(int2)) return "ERROR";
    if (int1 < 0 || int2 < 0) return "ERROR";
    
    if (int1 < int2){
        min = int1;
        max = int2;
    } else if (int1 > int2){
        min = int2;
        max = int1;
    } else if (int1==int2){
        return sum = int1+int2;
    }

    for (;min<max+1;min++){
        sum = sum + min;
    }
    console.log(sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

