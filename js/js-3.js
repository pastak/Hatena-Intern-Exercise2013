// 課題 JS-3 の実装をここに記述してください。
document.getElementById('submit-button').addEventListener('click',function(){
	var logText = document.getElementById('log-input').textContent;
	var targetElm = document.getElementById('access-log-table-container');
	var logArr = parseLTSVLog(logText);
	createLogTable(targetElm,logArr);
})
