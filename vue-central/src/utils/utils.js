export const utils = {
	dateFormat(dateStr) {
		var _date = new Date(dateStr);
		var _year = _date.getFullYear();
		var _month = _date.getMonth() + 1;
		var _day = _date.getDate();
		var _hours = _date.getHours();
		var _minutes = _date.getMinutes();
		var _seconds = _date.getSeconds();
		var _dateStr = _year + "-" + _month + "-" + _day + " "
			   _hours + ":" + _minutes + ":" + _seconds;
		return _dateStr;
	},
	concat(open,separator,close,datas) {
		var _datas = '',i = 0;
		_datas += open;
		for (; i < datas.length - 1; ++i) {
			_datas += datas[i] + separator;
		}
		_datas += datas[i];
		_datas += close;
		return _datas;
	}
}