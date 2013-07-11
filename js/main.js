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
