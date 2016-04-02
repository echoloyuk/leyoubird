(function (window, $){
	window.bindMsgCodeBtn = function ($target){
		$target.on('click', function (){
			var $this = $(this);
			if (($this).hasClass('disabled')){
				return ;
			}
			var url = $this.attr('le-url');
			$this.addClass('disabled');

			try {
				clearInterval(timmer);
			} catch(e){}

			var t = 60;
			$this.text(t);
			var timmer = setInterval(function (){
				t--;
				if (t < 1){
					clearInterval(timmer);
					$this.text('获取验证码').removeClass('disabled');
					return;
				}
				$this.text(t);
			}, 1000);
		});
	}
})(window, $);