//图1
// ---- 10.0.0.1:80/xxx?category=recommend&step=1
{   
    //广告列表
    adv:[ 
        {
            imageUrl:'',
            imageTitle:''
        }, {
            imageUrl:'',
            imageTitle:''
        }
        //......
    ],
    //产品列表
    productList:[
        {
            imageUrl:'',
            imageTitle:'',
            productID:''
        },
        {
            imageUrl:'',
            imageTitle:'',
            productID:''
        }
        //......
    ]
}

//图1.1
// ---- 0.0.0.0:80/xxx?category=recommend&step=2&productID=xx
{
    //头部广告列表
    adv:{
        imageUrl:'',
        imageTitle:''
    },
    //产品详情
    productDetail: {
        name: '', //产品名称
        tag:[ //产品标签
            '标签1', '标签2', //...
        ],
        price: { //产品价格
            type: '￥', //币种
            count: 20000, //钱数
            isShowQi: false //是否显示“起”字。比如“￥2000起”中的起是不是显示。
        },
        detail:{ //产品详情
            list:[
                { //每一个数组的元素包含着标签+图标+文字+图片
                    iconNo: 1, //每一个角标的图标样式标号
                    title: 'Day1', //角标旁边的文字
                    content:[
                        {
                            type:'text', //第一段类型，如果是文字，则是text，如果是图片，则是image
                            value: 'xxxxx' //如果type为text, 则value是文本信息
                        }, {
                            type:'image',
                            value: 'xxxxx' //如果type为image，则value是图片路径。
                        }, ...
                    ]
                } ...
            ]
        },
    },
    fareDetail: 'xxx', //费用说明
    noticeDetail: 'yyy',
    otherDetail: 'zzz'
}

//图2
// ---- 10.0.0.1:80/xxx?category=shuttle&step=1
{
    //广告列表
    adv: [
        {
            imageUrl:'',
            imageTitle:''
        }, {
            imageUrl:'',
            imageTitle:''
        }
    ],
    //产品列表
    productList:[
        {
            imageUrl:'',
            imageTitle:'',
            productID:''
        },
        {
            imageUrl:'',
            imageTitle:'',
            productID:''
        }
        //......
    ]
}

//图2.2
// ---- 10.0.0.1:80/xxx?category=shuttle&step=3&serviceType=airport
{
    productList:[ //产品列表
        {
            imageUrl:'',
            name:'',
            price:'',
            productID:1
        }, {
            imageUrl:'',
            name:'',
            price:'',
            productID:1
        }, 
        ...
    ]
}

//图2.1.1
// ---- 10.0.0.1:80/xxx?category=shuttle&step=4&productID=1
{
    //头部广告列表
    adv:{
        imageUrl:'',
        imageTitle:''
    },
    //产品详情
    productDetail: {
        name: '', //产品名称
        tag:[ //产品标签
            '标签1', '标签2', //...
        ],
        price: { //产品价格
            type: '￥', //币种
            count: 20000, //钱数
            isShowQi: false //是否显示“起”字。比如“￥2000起”中的起是不是显示。
        },
        detail:{ //产品详情
            list:[
                { //每一个数组的元素包含着标签+图标+文字+图片
                    iconNo: 1, //每一个角标的图标样式标号
                    title: 'Day1', //角标旁边的文字
                    content:[
                        {
                            type:'text', //第一段类型，如果是文字，则是text，如果是图片，则是image
                            value: 'xxxxx' //如果type为text, 则value是文本信息
                        }, {
                            type:'image',
                            value: 'xxxxx' //如果type为image，则value是图片路径。
                        }, ...
                    ]
                } ...
            ]
        },
    },
    fareDetail: 'xxx', //费用说明
    noticeDetail: 'yyy',
    otherDetail: 'zzz'
}

//图3
// ---- 10.0.0.1:80/xxx?category=custom&step=1
{
    adv:{ //头部图片
        imageUrl:''
    },
    dest:[ //目的地列表
        {
            key:'',
            value:''
        }, {
            key:'',
            value:''
        },
        ...
    ]

}
