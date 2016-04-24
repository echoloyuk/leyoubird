;(function (window){
    var Leyoubird = function ($target){

        this.$target = $target;
        this.requestList = {
            'id' : {
                url: '',
                type:'get',
                data: function (){ // including beforeData
                    return {} || false;
                },
                onFinish: function (){

                },
                formData:{}
            }
        },

        this.toPage = function (id){
            if (!this.requestList[id]){
                console.log('id error');
                return;
            }
            var cur = this.requestList[id];
            var url = cur.url;
            var type = cur.type;
            var data;
            var _this = this;
            if (typeof cur.data === 'function'){
                data = cur.data.call();
            } else if (typeof cur.data === 'object'){
                data = cur.data;
            } else {
                data = false;
            }
            if (!data){
                return;
            }
            
            _this.$target.empty();
            this.showLoading();

            //ajax on finish
            var onFinish = function (data){
                var source = $('#' + id).html();
                var template = Handlebars.compile(source);
                data = $.extend({}, data, (this.formData || {}), {title:'machi'});
                var html = template(data);

                _this.hideLoading();

                _this.$target.empty().append(html).trigger('create');

                if (typeof cur.onFinish === 'function'){
                    cur.onFinish.call();
                }
            }

            
            if (!url){
                onFinish();
            } else {
                $.ajax({
                    url: url,
                    type: type,
                    data: data,
                    success: function (res){
                        onFinish();
                    }
                });
            }
            
        }

        //显示读取
        this.showLoading = function (){
            var $loading = $('#leLoading');
            $loading.show();
        },

        //隐藏读取
        this.hideLoading = function (){
            var $loading = $('#leLoading');
            $loading.hide();
        }

        //下一页
        this.changePage = function (id, url, data, callback){
            var source = $('#' + id).html();
            var template = Handlebars.compile(source);
            var html = template({});

            $target.empty().append(html).trigger('create');

            if (typeof callback === 'function'){
                callback.call($target);
            }
        };
    }

    window.Leyoubird = Leyoubird;
})(window);