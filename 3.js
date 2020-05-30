// // 『関数について』
// // オブジェクトのメソッドが関数！

// // ①メソッドの短縮記法について
// // 例：
const foo = {
    // alert: function() {}, 下記に書き換えが可能
    alert() {},
};

// // ②関数の一般的な構文1

function cut(food) {
    //切る処理
    const cutFood = food.slice();
    return cutFood;
}

const cutCarrot = cut(carrot);    //人参
const cutPotato = cut(potato);    //ポテト

// // ②関数の一般的な構文２

function isTweetable(text) {
    //textが140文字以内か判定する関数
    return text.length <= 140;
}

console.log(isTweetable("foo"));

function alertTweetable(text) {
    if (text.length <= 140) {
        alert("you can tweet!");
    }
}
alertTweetable("foo");

// 下記のように書き換えも可能
function alertTweetable(text) {
    if (isTweetable(text)) {
        alert("you can tweet!");
    }
}


//③匿名関数について、関数は値として利用できる(関数式)

function isTweetable(text) {
    return text.length <= 140;
};
//変数にいれる形で書き換え(関数式)　下記の構文の関数名の位置に関数を入れなくても動く為、匿名関数と言われている
const isTweetable = function (関数名) (text) {
    return text.length <= 140;
};



//④コールバック関数
//関数の引数に関数をいれる際の関数をコールバック関数　関数を受け取る関数を高階関数

//構文
function 高階関数(コールバック関数) {
    //処理
    コールバック関数();
}

//例 高階関数を使わなかった場合
function bring(food) {
    if(/*手洗いが終えたら*/) {
        //食材を持ってきてもらう処理
    }
}

function cut(food) {
    if(/*手洗いが終えたら*/) {
        //食材を切ってきてもらう処理
    }
}

function peer(food) {
    if(/*手洗いが終えたら*/) {
        //食材の皮をむいてもらう処理
    }
}

//例 高階関数を使った場合
function washed(fn, food) {
    if(/* 手洗いが終えたら */) {
        fn(food); //コールバック関数の処理
    }
}

function bring(food) {
 //食材を持ってきてもらう処理    
}

function cut(food) {
 //食材を切ってきてもらう処理    
}

function peer(food) {
  //食材の皮をむいてもらう処理
}

washed(bring, "にんじん");


//ツイートをキャンセルしますか？という表示を出させる例文

function unfollow() {
    console.log("フォローを外しました");
  }
  function canselTweet() {
    console.log("ツイートをキャンセルしました");
  }
  →匿名関数に切り替えると
//   const canselTweet = function() {
//     console.log("ツイートをキャンセルしました");
//   }
  
  function confirmed(fn) {
    if (window.confirm("実行しますか?")){
      fn();
    }
  }
  
  confirmed(canselTweet);


  //Gitのキャンセル処理の例

  function confirmed(fn) {
    const input = window.prompt("実行しますか?");
    if (input === "実行") {
      fn();
    }
  }
  
  confirmed(function () {
    console.log("リポジトリを削除する");
  });

  //高階関数例①

  const btn = document.getElementById("button");
  btn.addEventListener("click", function(){
      console.log("フォロー解除");
  });

  
  //高階関数例②　配列処理
  const foods = ["にんじん","じゃがいも","玉ねぎ"];
  
  foods.forEach(function(food) {
    console.log(food);
  });
→コンソールに、にんじん、じゃがいも、玉ねぎと出力させられる
