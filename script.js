function clickst(){
   let d1 = new Date();/*現在の時刻を取得*/
   
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
function clicksp(){
   let d2 = new Date();/*現在の時刻を取得*/

   var YYYY = d2.getFullYear();
   var MM =d2.getMonth();
   var DD = d2.getDate();
   var hh = d2.getHours();
   var mm = d2.getMinutes();
   var ss = d2.getSeconds();

   var spjikan = document.getElementById('b')
   spjikan.innerHTML = YYYY + "年" + MM + "月" + DD + "日" + hh + "時" + mm + "分" + ss + "秒";
}
function clicksm(){
   let d1 = new Date();
   let d2 = new Date();

   let keika = d1.getTime() - d2.getTime();

   document.getElementById('c').textContent = keika
}