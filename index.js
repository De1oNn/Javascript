console.log(7001);
7001
function bodlogo7001 (a, b) {
    console.log ((a + b));
}
bodlogo7001 (12, 23);

console.log(7004);
7004
function bodlogo7004 (a) {
    console.log(Math.pow(a, 3));
}
bodlogo7004 (5)
//bodlogo7004 (a = prompt());

console.log(7003);
7003
function bodlogo7003 (a ,b) {
    console.log(a * b, (a + b)*2);
}
bodlogo7003 (6, 4)

console.log(7005);
7005
function bodlogo7005 (a) {
    console.log(y = 3 * a - 5);
}
bodlogo7005 (1)

console.log(7006);
7006
function bodlogo7006 (a) {
    console.log((Math.pow(2, (4 * a))) - 3 * a + 5);
} 
bodlogo7006 (-2)

//6
//let x = -2

//y = (Math.pow(2, (4*x)))- 3*x + 5;
//console.log(y)
//y = Math.pow((x), 2)
//w = y * 4
//console.log(w)
//console.log(y)
//q = w - 3*x + 5
//console.log(q)

console.log(7007);
7007
function bodlogo7007 (a) {
    console.log(a % 10);
}
bodlogo7007 (476)

console.log(7008);
7008
function bodlogo7008 (a) {
    console.log(b= Math.floor(a % 100 / 10));
}
bodlogo7008 (423)


console.log(7009);
7009
function bodlogo7009 (a) {
    let onedigit = parseInt
2
}
bodlogo7009 (27)

console.log(7010);
7010
function bodlogo7010 (a) {
    let str = a.toString();
    let sum = 0;
    for (let i = 0; i <= str.length; i++) {
        sum = sum + parseInt(str.charAt(i));
    }
    return sum;
}
let a = 123
console.log(bodlogo7010(a));

//9
//let c = 123;  

//let suuliintoo = c % 10 
//console.log(suuliintoo)

//let h = c / 100
//console.log(Math.floor(h))

//let l = c % 100
//let p = l / 10 
//console.log(Math.floor(p))
//let all = (suuliintoo * Math.floor(h) * Math.floor(p))
//console.log(Math.floor(all))
console.log(7011);
7011
function bodlogo7011 (a) {
    console.log(Math.floor(a / 60), a % 60);
}
bodlogo7011 (200);

console.log(7012);
7012
function bodlogo7012(a) {
    console.log(Math.floor(a / 3600));
    console.log(Math.floor((a % 3600) / 60 ));
    console.log(a % 3600);

}
bodlogo7012 (3612)

console.log(7013);
7013
function bodlogo7013(a, b) {
    console.log((a * 60) + b);
}
bodlogo7013 (3, 4)

console.log(7014);
7014
function bodlogo7014 (a, b, c) {
    console.log((a * 3600) + (b * 60) + c);
}
bodlogo7014 (1, 2, 3)

console.log(7015);
7015
function bodlogo7015 (a) {
    let honog = Math.floor(a / 24)
    let tsag = a % 24
    console.log(honog, tsag)
}
bodlogo7015 (98)

console.log(7016);
7016
function bodlogo7016 (a, b) {
    console.log((a * 24) + b);
}
bodlogo7016 (4, 6)

console.log(7017);
7017
function bodlogo7017 (a) {
    let sar = a % 12
    let jil = Math.floor(a / 12)
    console.log(jil, sar);
}
bodlogo7017 (27)

console.log(7018);
7018
function bodlogo7018 (a, b) {
    console.log((a * 12) + b);
}
bodlogo7018 (2, 7)

console.log(7101);
7101
function bodlogo7101 (a, b) {
    console.log(Math.max(a, b));
}
bodlogo7101 (14, 16)

console.log(7102);
7102
function bodlogo7102 (a, b) {
    console.log(Math.min(a, b));
}
bodlogo7102 (6, 9)

console.log(7105);
7105
function bodlogo7105 (a, b, c, d) {
    let sum = 0;
    if (a>80){
        sum = sum+a
    }
    if (b>80){
        sum = sum+b
    }
    if (c>80){
        sum = sum+c
    }
    if (d>80){
        sum = sum+d
    }
        console.log(sum);
    }
bodlogo7105 (88, 88, 99, 100)

console.log(7106);
7106
function bodlogo7106 (a, b, c, d) {
    let sum = 1

    if (a>5) {
    sum = sum * a
    }
    if (b>5) {
    sum = sum * b
    }
    if (c>5) {
    sum = sum * c
    }
    if (d>5) {
    sum = sum * d
    }

    console.log(sum);
}
bodlogo7106 (3, 6, 2, 104)

console.log(7107);
7107
function bodlogo7107 (a, b, c) {
    let sum = 0;

    if (a % 2 == 0) {
    sum = sum + a
    }
    if (b % 2 == 0) {
    sum = sum + b
    }
    if (c % 2 == 0) {
    sum = sum + c
    } 
    console.log(sum);
}
bodlogo7107 (12, 5, 6)

console.log(7108);
7108
function bodlogo7108 (a, b, c) {
    let sum = 1;

    if (a % 2 !== 0) {
    sum = sum * a
    }
    if (b % 2 !== 0) {
    sum = sum * b
    }
    if (c % 2 !== 0) {
    sum = sum * c
    } 
    console.log(sum);
}
bodlogo7108 (11, 5, 6)

console.log(7109);
7109 
function bodlogo7109 (a, b, c) {
    let sum = 0;

    if (5 == 1 * a) {
       sum = sum + 1
    }
    if (5 == 1 * b) {
       sum = sum + 1
    }
    if (5 == 1 * c) {
       sum = sum + 1   
    }
    console.log(sum);
}
bodlogo7109 (1, 5, 5)

console.log(7110);
7110
function bodlogo7110 (a, b, c, d) {
    let sum = 1;

    if (a % 2 !== 0) {
    } sum = sum + 1
    if (b % 2 !== 0) {
    } sum = sum + 1
    if (c % 2 !== 0) {
    } sum = sum + 1
    if (d % 2 !== 0) {
    } sum = sum + 1
    console.log(sum);
}
bodlogo7110 (3, 3, 3, 3)

console.log(7111);
7111
function bodlogo7111 (a, b, c, d) {
    let sum = 0;

if (a % 11 === 0){
    sum != sum + a
} else {
   sum = sum + a
}
if (b % 11 === 0){
    sum != sum + b
} else {
   sum = sum + b
}
if (c % 11 === 0){
    sum != sum + c
} else {
   sum = sum + c
}
if (d % 11 === 0){
    sum != sum + d
} else {
   sum = sum + d
}
console.log(sum);
}
bodlogo7111 (11, 22, 33, 41)

console.log(7112);
7112 
function bodlogo7112 (a) {
    if (a > 10) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}
bodlogo7112(11)

console.log(7113);
7113
function bodlogo7113 (a) {
    if(a < 5){
        console.log("YES")
    }  else {
        console.log("NO")
    }
}
bodlogo7113 (7)

console.log(7114);
7114 
function bodlogo7114 (a, b, c,) {
    if(a % 2 == 0){
        console.log("Yes");
    } else {
        console.log("No")
    }
    if(b % 2 == 0){
        console.log("Yes");
    } else {
        console.log("No")
    }
    if(c % 2 == 0) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}
bodlogo7114 (3, 4, 5)

// teams1

//let a = 2
//let b = 1

//if(a % 2 == 0){
//   console.log("tegsh")
//} else {
//   console.log("sondgoi")
//}
//if (b % 2 == 0){
//   console.log("tegsh");
//} else {
//   console.log("sondgoi")
//}

// teams2

//let a = -1

//if (a < 0){
//   console.log("Negative")
//} else if (a >= 1){
//   console.log("Positive")
//} else {
//   console.log("Zero")
//}

// teams3

//let a = 6
//let b = 3

//if(a % b == 0){
//   console.log("Huvaagddag")
//} else {
//   console.log("huvaagdadgui")
//}

// teams4

//let a = 69;

//if (a >= 90) {
//   console.log("A");
//} else if (90 > a && a >= 80) {
//   console.log("B");
//} else if (80 > a && a >= 70) {
//   console.log("C");
//} else if (70 > a && a >= 60) {
//   console.log("D");
//} else {
//   console.log("F");
//}

// teams5

//let a = 100

//let sum;
//if(sum=(a * 9 / 5) + 32) {
//   console.log(sum)
//}

// teams6

//4 t hugaavddag 400 d huvaagdadgui
console.log(7201);
7201
function bodlogo7201 (a) {
    for (let i = 0; i < a; i++)
        console.log("IOI");
}
bodlogo7201 (1)

console.log(7204);
7204
function bodlogo7204 (n) {
    let sum = 0; 
    for (let i = 1; i <= n; i++) {
        sum = sum + i
    }
    console.log(sum);
}
bodlogo7204 (5)

console.log(7205);
7205
function bodlogo7205 (n) {
    let sum = 1;
    for (let i = 1; i <= n; i++) {
        sum = sum * i
    }
    console.log(sum);
}
bodlogo7205 (10);

console.log(7206);
7206
function bodlogo7206 (n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum = sum + 100
    }
    console.log(sum);
}
bodlogo7206 (6);

console.log(7207);
7207
function bodlogo7207 (a, b) {
    let sum;
    for (let i = 1; i <= b; i++) {
        sum = a * b
    }
    console.log(sum);
}
bodlogo7207 (50, 6)

console.log(7208);
7208
function bodlogo7208 (a) {
    let sum = 1;

    for(let i = 1; i <= a; i++) {
    sum = sum * 2
    }
    console.log(sum);
}
bodlogo7208 (7);

console.log(7209);
7209
function bodlogo7209 (a, b) {
    let sum = 1;
    for (let i = 1; i <= b; i++) {
    sum = sum * a 
    } 
    console.log(sum);
}
bodlogo7209 (5, 5)

console.log(7215);
7215 
function bodlogo7215 (a) {
    if (a > 3){
        console.log("tentssen")
    } else {
        console.log("tentseegui");
    }
}
bodlogo7215 (5)

console.log(7216);
7216
function bodlogo7216 (a) {
    if (a == 5){
        console.log("onts");
    } else if (a == 4) {
        console.log("sain");
    } else if (a == 3) {
        console.log("dund");
    } else {
        console.log("muu");
    }
}
bodlogo7216 (5)

console.log(7118);
7118
function bodlogo7118 (a) {
    if (a == 1) {
        console.log("Monday");
    } else if (a == 2){
        console.log("Tuesday");
    } else if (a == 3) {
        console.log("Wednesday");
    } else if (a == 4) {
        console.log("Thuesday");
    } else if (a == 5) {
        console.log("Friday");
    } else if (a == 6) {
        console.log("Saturday");
    } else {
        console.log("Sunday")
    }
}
bodlogo7118 (2)

console.log(7210);
7210 
function bodlogo7210 (a) {

    for (let i = 1; i <= 10; i++){
        console.log(`${a}*${i}=${a*i}`);
    }
}
bodlogo7210 (10);

console.log(7211);
7211
function bodlogo7211 (a, b) {
    let sum = 1;
    for(let i = 1; i <= b; i++) {
        sum = sum * a
       console.log(`${a}*${i} = ${sum}`);
    }
}
bodlogo7211 (3, 5)

console.log(7019);
7019 
function bodlogo7019 (b, c, d) {
    let a = b * c - d
    console.log(a);  
}
bodlogo7019(2, 3, 4)

//let B = 2 
//let C = 3
//let D = 4

//let a = B * C - D

//console.log(a);

// 7500

//let a = prompt("too oruulna uu")
//let b = prompt("2doh too oruulna uu")
//let c = prompt("3 dah too oruulna uu")

//let d = a + b;

//console.log(d);

// 7301

//const a = prompt("too oruulnauu")
//const B = a[0]
//console.log(B);


//let a = prompt("too oruulna uu");
//let b = 100;

//let c = a + b
//console.log(c)


//let a = prompt("too oruulna uu")
//if(a > 3){
//    console.log("tetssen");
//}   else {
//    console.log("tentseegui");
//}

//let c = 5
//for (let i = 1; i <= c; i++){
//    console.log(i);
//}

// 7070

//let a = 10 
//let sum = 0;
//for (let i = 1; i <= 10; i++){
//    sum = sum + i
//    console.log(sum);
//}

// 7071

//let a = 5
//let sum = 0;
//for (let i = 1; i <= a; i++) {
//   sum = sum + (i * i)
//    console.log(sum);
//}


// 7072

//let a = 9
//let sum = 0;
//for (let i = 1; i <= a; i++)  {
//    if (i % 2 == 1) {
//        sum = sum + i
//    }
//    console.log(sum);
//}


// 7301 

//let a = 1234
//let b = a[0]
//console.log(b);

// 7400

//let a = 5;
//let sum = '';
//for (let i = 1; i <= a; i++){
//    sum = sum + i
//}
//console.log(sum);


// 7402

//let a = 5;
//let sum = '';

//for (let i = 1; i <= a; i++) {
//    sum += i
//    console.log(sum);
//}

// 7310


//let array = [1, 2, 3, 4];
//function getEven(array) {
//    let even = array.map(n => n % 2 == 0);
//    return even
//}
//console.log(getEven(array));





