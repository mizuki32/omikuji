var username;
var userresult;

username = prompt("お名前を教えて下さい。");//usernameという変数に入力するダイアログを作成

if (username == "") {
   username = "名無し";//入力した名前を画面に表示する
}

document.getElementById("name").innerHTML = username;//入力した名前を画面に表示する   


var rand = Math.floor( Math.random() * 5) ;//randという変数に0〜4の値をランダムで表示
if (rand == 0) {//rand変数に0が入ったら、変数userresultに「大吉」を入れる
    userresult = "大吉";
}
if (rand == 1) {
    userresult = "中吉";
}
if (rand == 2) {
    userresult = "小吉";
}
if (rand == 3) {
    userresult = "吉";
}
if (rand == 4) {
    userresult = "凶";
}
document.getElementById("result").innerHTML = userresult;