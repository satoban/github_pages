'use strict';
//年月日を取得する
const now = new Date();//Dateオブジェクトを現在日時で初期化
const year = now.getFullYear();//年
const month = now.getMonth();//月
const date = now.getDate();//日付
const hour = now.getHours();//時間
const min = now.getMinutes();//分
//テンプレート文字列で出力
const output = `${year}/${month + 1}/${date} ${hour}:${min}`;
document.getElementById('time').textContent = output;