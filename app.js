let hello = "Hello World";
// alert(hello);


// 整数を代入する
let int1 = 1;

// 負数を代入する
let int2 = -10;

// 小数点を代入する
let float1 = 3.14;

// 文字列を代入する
let str1 = 'JavaScriptを覚えよう';

// 文字列型があると変数の数値型が型強制される
// alert(int1 + ' ' + int2 + ' ' + float1 + ' ' + str1);

// 文字列型の結合
let str2 = 'Hello';
let str3 = 'World!!';
// alert(str2 + str3);


// 条件分岐
let orange = 100;
let apple = 120;
if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}



// 繰り返し処理
// While文 条件式がtureなら繰り返す
let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// 【補足】do … while文
// 条件式の真偽に関わらず最初の1回だけは必ず処理される
// do{
//   最低1回は行われる処理
// }while(条件式);

// for文 決められた回数の処理を繰り返す
let i;
let num2 = 0;

for(i = 1; i < 11; i++){
  num2 = num2 + i;
}

alert('1から10まで足し算した結果は' + num2 + 'です')
