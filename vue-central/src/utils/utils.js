import store from '@/store/store'
import {constants} from '@/constant/constant'

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
	},
	/*
	* 为URL添加路径参数
	*/
	resolvePathParams(url,...params) {
		var _length = params.length;
		var _url = url;
		if (_length > 0) {
			for(var i = 0; i < _length; ++i) {
				_url += '/' + params[i];
			}
		}
		return _url;
	},
	/*
	* 为URL添加查询参数
	*/
	resolveQueryParams(url,...params) {
		var _length = params.length;
		var _url = url;
		if (_length > 0) {
			_url += '?' + params[0];
			if (_length > 1) {
				for (var i = 1; i < _length; i++) {
					_url += '&' + params[i];
				}
			}
		}
		return _url;
	},
	/*
	* 问访问URL授权
	*/
	authorize(url) {
		var _url = url;
		if ('' !== _url && undefined !== _url && _url.length > 0) {
			_url += '?' + constants.ACCESS_TOKEN + '=' + store.state.token;
		}
		return _url;
	},
	/*
	* javascript对象查询
	*/
	indexOf(source,target) {
		if (source && source instanceof Array) {
			for (var i = 0; i < source.length; ++i) {
				let _data = JSON.stringify(source[i]);
				let _target = JSON.stringify(target);
				if (_data === _target) {
					return i;
				}
			}
		}
		return -1;
	},
	/*
	* 复制
	*/
	copy(data) {
		let _copier = null;
		if (data) {
			_copier = JSON.parse(JSON.stringify(data));
		}
		return _copier;
	}
}