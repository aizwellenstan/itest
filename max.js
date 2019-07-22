var a = 72 ;
var b = 12 ;
var c = 1 ;
while (c!=0) {
    c = a % b ;
    a = b ;
    b = c ;
    console.log(a);
}