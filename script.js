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

let d3;
let d4;
let clickCount = 0; //ボタンが押された回数の保持

function clicksm(){
   clickCount++;
   
   if(clickCount === 1){  //1度目休憩ボタン
      d3 = new Date();
      var YYYY = d3.getFullYear();
      var MM =d3.getMonth();
      var DD = d3.getDate();
      var hh = d3.getHours();
      var mm = d3.getMinutes();
      var ss = d3.getSeconds();
   
      var smjikan = document.getElementById('breaktime')
      smjikan.innerHTML = YYYY + "年" + MM + "月" + DD + "日" + hh + "時" + mm + "分" + ss + "秒";
      
      document.getElementById('naka').textContent = "再開" /*idのnakaを再開に変える*/
   
   }else if (clickCount === 2){   //2度目再開ボタン
      d4 = new Date();
      var YYYY = d4.getFullYear();
      var MM =d4.getMonth();
      var DD = d4.getDate();
      var hh = d4.getHours();
      var mm = d4.getMinutes();
      var ss = d4.getSeconds();
   
      var saikai = document.getElementById('reStart')
      saikai.innerHTML = YYYY + "年" + MM + "月" + DD + "日" + hh + "時" + mm + "分" + ss + "秒";
      document.getElementById('naka').textContent = "休憩"

      let oyasumi = d4.getTime() - d3.getTime();
      const oyasumiSec = Math.floor(oyasumi/1000) + "秒";
      const oyasumiHrs = Math.floor(oyasumiSec/3600) + "時間";
      const oyasumiMin = Math.floor(oyasumiHrs)
      document.getElementById('rt').textContent
      

      clickCount = 0; //リセット
   }



   
}


//設定画面(JQueryなし)
const btn = document.getElementById("option") //idは文字列で指定
const menu = document.getElementById("option-photo")

function clickop(){
   btn.classList.toggle('active')
   menu.classList.toggle('menuactive')
}
