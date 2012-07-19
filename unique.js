(function() {
	var protectRollover = false
	, id = id ? id : 1
	, millisOld = 0
	, counter = 0;

	get = function(){
		protectRollover = false;
		// 01 Jan 2010 is the selected epoch. Use
		// 		Date.UTC(2010,0,1)
		// to get this number (1262304000000)
		var millis = new Date().getTime() - 1262304000000;
		if (this.millisOld == millis) {
			this.counter++;
			// Rollover protection
			if (this.counter == 255)
			{
				this.protectRollover = true;
				this.counter = 0;
				setTimeout(function () {
	  				getSync(this.id);
				}, 1);
			}
		} else {
			this.millisOld = millis;
			this.counter = 0;
		}
		if (this.protectRollover == false)
		{
			millis = millis * Math.pow(2, 12);
			var id2 = this.id * Math.pow(2, 8);
			var uid = millis + id2 + this.counter;
			return uid;
		}
	}
})(id,callback);
