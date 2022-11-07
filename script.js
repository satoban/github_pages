/*use strictに設定することでエラーを厳しくチェックする */
'use strict';

/*年月日を取得する*/
const now = new Date();//Dateオブジェクトを現在日時で初期化
const year = now.getFullYear();//年
let month = now.getMonth();//月
let date = now.getDate();//日付
let hour = now.getHours();//時間
let min = now.getMinutes();//分 

/*1桁なら0を足して2桁表示にする*/
//条件3項演算子 --> 条件式 ? Trueの処理 : Falseの処理
month = (month < 10) ? "0" + month : month;
date = (date < 10) ? "0" + date : date;
hour = (hour < 10) ? "0" + hour : hour;
min = (min < 10) ? "0" + min : min;

/*テンプレート文字列で出力*/
let output = `${year}/${month + 1}/${date} ${hour}:${min}`;
document.getElementById('time').textContent = output;//id = "time" に一致する要素に変数outputを渡す