//1
// let k = +prompt("Введите K");
// let n = +prompt("Введите N");

// for  (i = 0; i < n;  i++){
//     alert(k);
// }

//2
// let a = +prompt("Введите A (A<B)");
// let b = +prompt("Введите B");

// for  (i = a; i <= b;  i++){
//     alert("все целые числа, расположенные между A и B " + i);
//     
// }
//alert(`количество N = ${b-a}`);

//3
// let a = +prompt("Введите A (A<B)");
// let b = +prompt("Введите B");

// for  (i = b-1; i >= a;  i--){
//     alert("убывания все целые числа, расположенные между A и B " + i);
// }
// alert(`количество N = ${b-a}`);

//4
// let a = +prompt("Цена за 1 кг конфет");
// for(i = 1; i <= 10; i++){
//     alert(`Цена ${i} кг = ${a*i}`)
// }

//5
// let a = +prompt("Цена за 1 кг конфет")
// for(i = 0.1; i <= 1.1; i += 0.1){
//     alert(`Цена ${i} кг = ${a*i}`);
// }

//6
// let a = +prompt("Цена за 1 кг конфет")
// for(i = 1; i <= 2.1; i += 0.2){
//     alert(`Цена ${i} кг = ${a*i}`);
// }

//7
// let a = +prompt("Введите A");
// let b = +prompt("Введите B (A<B)");
// let s = 0;
// for(a; a <= b; a++){
//     s+=a;
// }
// alert(`Сумма от A до B = ${s}`);

//8
// let a = +prompt("Введите A");
// let b = +prompt("Введите B (a<b)");
// let s = 1;
// for(a; a<=b; a++){
//     s*=a;
// }
// alert(`Произведение от A до B = ${s}`);

//9
// let a = +prompt("Введите A");
// let b = +prompt("Введите B (a<b)");
// let s = 1;
// for(s; a <= b; a++){
//     s *= a**2;
// }
// alert(`Произведение от A до B = ${s}`);

//10
// let n = +prompt("Введите число n");
// let s = 0;
// for(i = 1; i<=n; i++){
//     s+= 1/i;
// }
// alert(`Сумма = ${s}`);

//11
// let n = +prompt("Введите число n");
// let s = 0;
// for(i = 0; i<=n; i++){
//     s+=(n + i)**2;
// }
// alert(`Сумма = ${s}`);

//12
// let n = +prompt("Введите число n");
// let s = 1;
// let a = 1.1;

// for(i = 1; i<=n; i++){
//     s*=a;
//     a+=0.1;
// }
// alert(`Произведение = ${s}`);

//13
// let n = +prompt("Введите число n");
// let r1 = 1;
// let r2 = 2;
// let m1 = 1;
// let m2 = 1.2;
// let l1 = 0;
// let l2 = 0;

// for(m1; r1 <= n; m1+=0.2){
//     l1+=m1;
//     r1+=2; 
// }
// for(m2; r2 <= n; m2+=0.2){
//     l2-=m2;
//     r2+=2; 
// }
// alert(l1 + l2);

//14
// let n = +prompt("Введите число n")
// let s = 1;
// for(i = 1; i<=n; i++){
//     s=i**2;
//     alert(`Число ${i}^2: ${s}`);
// }

//15
// let a = +prompt("Введите A");
// let n = +prompt("Введите степень");

// for(i = 1; i<=n; i++){
//     r = a**i;
// }
// alert(r);

//16
// let a = +prompt('Введите A');
// let n = +prompt('Введите степень');

// for(i = 1; i<=n; i++){
//     alert(a**i);
// }


//DZ_1
// let n = +prompt("Введите N");
// let s=0;
// for(i = 1; i<=n; i++){
//     s += i;
// }
// alert(`${s}`);

//DZ_2
// let n = +prompt("Введите N");
// let s=0;
// for(i = 1; i<=n; i+=2){
//     s += i;
// }
// alert(`${s}`);

//DZ_3
// let n = +prompt("Какую таблицу? (2-10)");

// for(i=n; i<=n; i++){
//     console.log(`-------------${i}-------------`)
//     for(j=1; j<11; j++){
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }

//DZ_4
// for(i=2; i<=10; i++){
//     console.log(`-------------${i}-------------`)
//     for(j=1; j<=10; j++){
//         console.log(`${i}^${j} = ${i**j}`)
//     }
// }