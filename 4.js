// Web APIとはバックエンドエンジニアが作成したプログラムコード
// フロントエンジニアはバックエンドエンジニアが作成したAPIを使用してUIを構築する。
// APIをプログラム側から叩いてデータのやりとりを行う。

async function callApi(){
    //APIを叩く処理を書く
    const res = await window.fetch("http://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);
}

callApi();