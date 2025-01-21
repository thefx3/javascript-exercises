const removeFromArray = function(array, ...args) {


//     let position = thearray.indexOf(num);
//     let sliced = thearray.toSpliced(position,1);

//     while (sliced.includes(num)==true){
//       position = sliced.indexOf(num);
//       sliced = sliced.toSpliced(position,1);
//    } 

//     console.log(sliced);
//     return sliced;

    const newArray = [];
    array.forEach((item) => {  // `item` is a parameter here
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    return newArray;
  };

// Do not edit below this line
module.exports = removeFromArray;
