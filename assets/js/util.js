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

            var t = 120;
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
    };

    var advTimmer;

    window.bingAdvScroller = function ($target){
        var screenWidth = $(window).width();
        var $imgs = $target.find('.img-panel .img');
        var $panel = $target.find('.img-panel');
        $imgs.width(screenWidth);
        $imgs.eq(0).addClass('current');

        var onScroll = function (){
            var $cur = $imgs.filter('.current');
            var $next = $cur.next();
            if (!$next.length){
                $next = $imgs.eq(0);
            }
            $cur.removeClass('current');
            $next.addClass('current');
            var x = $next.position().left;
            $panel.animate({
                left: -x
            }, 500);
            console.log('change adv image');
        }
        if ($imgs.length){
            advTimmer = setInterval(onScroll, 3000);
        }

        //onScroll();
    };
    window.clearAdvTimmer = function (){
        clearInterval(advTimmer);
    }

})(window, $);