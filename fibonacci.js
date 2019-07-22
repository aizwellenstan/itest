var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for(var i = 3; i < 20; i++){

    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];

}

console.log(fibonacci);                                                                                                                             // ,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181