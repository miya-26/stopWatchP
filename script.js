let d1
function clickst(){
   d1 = new Date();/*現在の時刻を取得*/
   
   /*テスト用
   console.log(d) //ログに出力
   alert('Javascriptを使ってアラートを表示しています！')
   */
   /*取得そのまま表示
   document.getElementById('st').textContent = d
   */

   //年月日時分秒フォーマット
   var YYYY = d1.getFullYear();
   var MM =d1.getMonth();
   var DD = d1.getDate();
   var hh = d1.getHours();
   var mm = d1.getMinutes();
   var ss = d1.getSeconds();

   var jikan = document.getElementById('a')
   jikan.innerHTML = YYYY + "年" + MM + "月" + DD + "日" + hh + "時" + mm + "分" + ss + "秒";
}
let d2
function clicksp(){
   d2 = new Date();/*現在の時刻を取得*/

   var YYYY = d2.getFullYear();
   var MM =d2.getMonth();
   var DD = d2.getDate();
   var hh = d2.getHours();
   var mm = d2.getMinutes();
   var ss = d2.getSeconds();

   var spjikan = document.getElementById('b')
   spjikan.innerHTML = YYYY + "年" + MM + "月" + DD + "日" + hh + "時" + mm + "分" + ss + "秒";

   let keika = d2.getTime() - d1.getTime(); /*開始から終了までの時間*/
   document.getElementById('c').textContent = Math.floor(keika/1000) + "秒"

}
let d3
function clicksm(){
   
   let keika = d2.getTime() - d1.getTime();

   document.getElementById('c').textContent = Math.floor(keika/1000) + "秒"

   document.getElementById('naka').textContent = "再開" /*idのnakaを再開に変える*/
}


//設定画面(JQueryなし)
const btn = document.getElementById("option") //idは文字列で指定
const menu = document.getElementById("option-photo")

function clickop(){
   btn.classList.toggle('active')
   menu.classList.toggle('menuactive')
}
