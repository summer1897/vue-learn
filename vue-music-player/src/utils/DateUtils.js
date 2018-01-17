export default {
	formatTime: function(time) {
		let _formatTimeStr = '';
		if (time > 0) {
			let _currentTime = Math.round(time);
			let _hour = 0,_minute = 0,_second = 0;
			//计算小时时间
			_hour = Math.round(_currentTime / (60 * 60));
			//计算分钟时间，如果时间已经到达小时级别，则先去除掉小时的时间
			let m = _currentTime % (60 * 60);
			_minute = Math.round(m / 60);
			//计算秒时间
			_second = _currentTime - Math.floor(_currentTime / (60 * 60)) * 60 * 60 - Math.floor(_currentTime / 60) * 60;
			// console.log("_currentTime",_currentTime);
			// console.log('second',second);
			if (_hour > 0 && _hour < 10) {
				_formatTimeStr += '0' + _hour;
			} else if (_hour >= 10 && _hour < 24) {
				_formatTimeStr += _hour;
			} else if (_hour == 0 || 24 == _hour) {
				_formatTimeStr += '00';
			}
			_formatTimeStr += ':';
			if (_minute > 0 && _minute < 10) {
				_formatTimeStr += '0' + _minute;
			} else if (_minute >= 10 && _minute < 60) {
				_formatTimeStr += _minute;
			} else if (0 == _minute || 60 == _minute) {
				_formatTimeStr += '00';
			}
			_formatTimeStr += ':';
			if (_second > 0 && _second < 10) {
				_formatTimeStr += '0' + _second;
			} else if (_second >= 10 && _second < 60) {
				_formatTimeStr += _second;
			} else if (0 == _second || 60 == _second) {
				_formatTimeStr += '00';
			}

		}
		return _formatTimeStr;
	}
}