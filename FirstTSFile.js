console.log("This is my first TS code...");
var NumVar = 23.87;
console.log("Number variable value is:", NumVar);
// NumVar = "defsfs";
var boolVar = true;
console.log(boolVar);
var str = "This is a string variable";
console.log(str);
nm: function addno(x, y) {
    return x + y;
}
console.log(addno(10, 20));
var n = addno(20, 30);
console.log(n);
var l = [2, 3, 4, 5, 6, 7];
console.log(l);
var myList = [true, true, false, false];
console.log(myList);
var dataPkt = ["127.0.0.1", 34, "192.0.0.1", true];
dataPkt = ["fasfsa", 77, "frff", false];
console.log(dataPkt);
var month;
(function (month) {
    month[month["jan"] = 1] = "jan";
    month[month["feb"] = 2] = "feb";
    month[month["mar"] = 3] = "mar";
    month[month["apr"] = 4] = "apr";
    month[month["may"] = 5] = "may";
    month[month["jun"] = 6] = "jun";
    month[month["jul"] = 7] = "jul";
    month[month["aug"] = 8] = "aug";
    month[month["sep"] = 9] = "sep";
    month[month["oct"] = 10] = "oct";
    month[month["nov"] = 11] = "nov";
    month[month["dec"] = 12] = "dec";
})(month || (month = {}));
;
var m = month.aug;
console.log(m);
var myAnyVar = 78;
console.log(myAnyVar);
myAnyVar = "xlx;axksa";
console.log(myAnyVar);
