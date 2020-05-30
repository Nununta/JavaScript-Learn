// 変数の学習

const fooWidth = document.getElementById("foo").offsetWidth;
const fooHeight = document.getElementById("foo").offsetHeight;

// 変数の活用後
const foo = document.getElementById("foo");
const fooWidth = foo.offsetWidth;
const fooHeight = foo.offsetHeight;
const fooArea = fooWidth * fooHeight;

// 変数の宣言方法について
// ※変数名の初めは＿か英字のみ
// ※変数名は予約後は使えない if forなど

const foo = 100
      fooWidth = 200            //camelCase こちらが多い
      foo_width = 1000;         //snakeCase
// ※再代入、再定義が出来ない


let bar = 200;
let Number = 300;
console.log(Number);

Number = 400;
console.log(Number);

let Number = 400; //再定義出来ない
console.log(Number);

// ※再代入は出来るが、再定義は出来ない


var baz = 300;
// ※再代入、再定義が出来る


// 現場で使用すべき変数の順位
// const > let > var(使わないよう心がける)

