//Задание 1
for (let a = 1; a <= 50; a++){
    console.log(a);
}

for (let b = 35; b >=8; b--) {
    console.log(b);
}

//Задание 2
let  i = 90;
while(i > 11) {
i--;//document.write(i + '<br/>');
}

//Задание 3
let v = 100;
let sum = 0;
for (let b = 1; b <= v; b++) {
    sum += b;
}
    console.log(sum);

//Задание 4
let n = 5;
let s = 0;
for (let h = 1; h <= n; h++) {
    s = 0;
    for (let y = 1; y <= h; y++){
        s += y;
    } console.log(s);
}


//Задание 5
for (let k = 8; k <= 56; k++) {
    if(k % 2 !== 0) continue; {
    console.log(k);
    } 
}

let r = 8;
while (r <= 56) {
    console.log(r);
    r = r + 2;
}


//Задание 6
let q = 0;
let w = 0;
for (let q = 1; q <= 10; q++) {
    for (let p = 1; p <= 10; p++) {
        w = p * q;
     document.write(p + " " + "x " + q + '= ' + w + '<br/>');
}
}
