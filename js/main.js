// 課題 JS-1: 関数 `parseLTSVLog` を記述してください

function parseLTSVLog(ltsv){
	var line,feilds,field,ftmp,key,value;
	var re_arr = [];
	var log_lines = ltsv.split(/\n/);
	for(var i = 0;i < log_lines.length;i++){
		line = log_lines[i];
		if(line === ''){
				//空行なら飛ばす
				continue;
		};
		re_arr[i] = {
			path : '',
			reqtime_microsec : 0
		};
		feilds = line.split(/\t/);
		for(var j = 0;j < feilds.length;j++){
			feild = feilds[j];
			ftmp = feild.split(/:/);
			key = ftmp[0];
			value = ftmp[1];
			if(key === 'path'){
				re_arr[i].path = value;
			}else if(key === 'reqtime_microsec'){
				re_arr[i].reqtime_microsec = value-0;
			}else{
				
			}
		}
	}
	return re_arr;
}

// 課題 JS-2: 関数 `createLogTable` を記述してください
function createLogTable(divElm,logArr){
	var table = document.createElement('table');
	//テーブルのヘッダー関係の要素を生成
	var thead = document.createElement('thead');
	var thead_tr = document.createElement('tr');
	var thead_th1 = document.createElement('th');
	thead_th1.textContent = 'path';
	var thead_th2 = document.createElement('th');
	thead_th2.textContent = 'reqtime_microsec';
	//theadに追加する
	thead_tr.appendChild(thead_th1);
	thead_tr.appendChild(thead_th2);
	thead.appendChild(thead_tr);
	table.appendChild(thead);
	//テーブルの本体に入れる要素を生成
	var tbody = document.createElement('tbody');
	var tr,td1,td2;
	for(var i = 0;i < logArr.length;i++){
		tr = document.createElement('tr');
		td1 = document.createElement('td');
		td1.textContent = logArr[i].path;
		td2 = document.createElement('td');
		td2.textContent = logArr[i].reqtime_microsec;
		tr.appendChild(td1);
		tr.appendChild(td2);
		tbody.appendChild(tr);
	}
	table.appendChild(tbody);
	console.log(table);
	divElm.appendChild(table);
}
