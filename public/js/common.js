var loading;
//全局ajaxloading配置
//不想loading的请求加：global: false
$(document).bind("ajaxSend", function () {
    loading = layer.load(2, { shade: true });
}).bind("ajaxComplete", function () {
    layer.close(loading);
});

(function ($) {
    $(function () {
        $('.goback').click(function () {
            window.history.go(-1);
        });

        $('#logout').click(function () {
            var id = $(this).attr('data-id');
            layer.confirm('确定退出登录吗？', {
                btn: ['确定', '取消'] //按钮
            }, function () {
                $.post('/server/logout', {}, function (data) {
                    if (data.code == 200) {
                        layer.msg('退出成功', { icon: 1 });
                        setTimeout(function () {
                            window.location.href = '/server/login';
                        }, 2000)
                    } else {
                        layer.msg('服务器错误', { icon: 1 });
                    }

                }, 'json')

            }, function () {

            });

        });

    })

})(jQuery)

