const reverseString = function(string) {
    const stringlength = string.length;
    let stringreversed = "";


for (let i = stringlength-1;i>=0; i--){
    stringreversed = stringreversed + string.at(i);
}
    return stringreversed;
}

reverseString("Hello");
//reverseString("AbcDefghijklmnopqrstuvWxYZ");

// Do not edit below this line
module.exports = reverseString;
