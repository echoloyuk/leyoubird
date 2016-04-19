;(function (window){
    var Leyoubird = function ($target){

        this.$target = $target;

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