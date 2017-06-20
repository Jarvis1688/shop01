var App = function () {

    // 使用Bootstrap相关工具插件
    function handleBootstrap() {
        /*Bootstrap 轮播插件 carousel，TWEETS消息模块*/
        // $('.carousel').carousel({
        //     interval: 15000,
        //     pause: 'hover'
        // });

        /*点击关注该商品 Bootstrap提示工具插件Tooltips显示提示*/
        $('.tooltips').tooltip();

        /*点击关注该商品 Bootstrap弹出框插件popovers*/
        // $('.popovers').popover();

    }

    // topbar 搜索模块
    function handleSearchV1() {
        $('.search-button').click(function () {
            $('.search-open').slideDown();
        });

        $('.search-close').click(function () {
            $('.search-open').slideUp();
        });

        $(window).scroll(function(){
          if($(this).scrollTop() > 1) $('.search-open').fadeOut('fast');
        });

    }

    // function handleToggle() {
    //     $('.list-toggle').on('click', function() {
    //         $(this).toggleClass('active');
    //     });
    // }

    // function handleBoxed() {
    //     $('.boxed-layout-btn').click(function(){
    //         $(this).addClass("active-switcher-btn");
    //         $(".wide-layout-btn").removeClass("active-switcher-btn");
    //         $("body").addClass("boxed-layout container");
    //     });
    //     $('.wide-layout-btn').click(function(){
    //         $(this).addClass("active-switcher-btn");
    //         $(".boxed-layout-btn").removeClass("active-switcher-btn");
    //         $("body").removeClass("boxed-layout container");
    //     });
    // }


    // 头部模块模块向下滑动116像素的时候，把header变成固定的头部
    function handleHeader() {
         $(window).scroll(function() {
            if ($(window).scrollTop()>116){
                $(".header-fixed .header-static").addClass("header-fixed-shrink");
            }
            else {
                $(".header-fixed .header-static").removeClass("header-fixed-shrink");
            }
        });
    }

    function handleMegaMenu() {
        //通过事件委托，停止子导航冒泡
        $(document).on('click', '.mega-menu .dropdown-menu', function(e) {
            e.stopPropagation()
        })
    }


    // perfectScrollbar 插件自定义滚动条，修改购物车列表的混动条样式
    function handleScrollBar() {
        $(document).ready(function ($) {
            "use strict";
            $('.contentHolder').perfectScrollbar();
        });
    }

    return {
        init: function () {
            handleBootstrap();
            handleSearchV1();
            // handleToggle();
            // handleBoxed();
            handleHeader();
            handleMegaMenu();
            handleScrollBar();
        },

        // counterUp 计算插件
        // initCounter: function () {
        //     $('.counter').counterUp({
        //         delay: 10,
        //         time: 1000
        //     });
        // },

        // initParallaxBg: function () {
        //     $('.parallaxBg').parallax("50%", 0.2);
        //     $('.parallaxBg1').parallax("50%", 0.4);
        // },

        // 鼠标监听事件，监听鼠标移动，选择相应的价格
        //用jQuery noUiSlider 插件设置价格滑块
        initMouseWheel: function () {
            $('.slider-snap').noUiSlider({

                // 滑块默认值范围
                start: [ 120, 420 ],
                snap: true,
                connect: true,

                // 滑块范围
                range: {
                    'min': 0,
                    '5%': 20,
                    '10%': 40,
                    '15%': 80,
                    '20%': 120,
                    '25%': 160,
                    '30%': 200,
                    '35%': 240,
                    '40%': 280,
                    '50%': 300,
                    '60%': 340,
                    '70%': 380,
                    '80%': 420,
                    '90%': 460,
                    'max': 500
                }
            });
            
            //得到价格范围放入指定的容器当中
            $('.slider-snap').Link('lower').to($('.slider-snap-value-lower'));
            $('.slider-snap').Link('upper').to($('.slider-snap-value-upper'));
        },
    };  //Return

}();


var OwlCarousel = function () {

    return {
        
        //Owl Carousel 插件
        initOwlCarousel: function () {
		    $(document).ready(function() {
		        //Owl Slider
		        $(document).ready(function() {

                //首页Illustration v2 模块幻灯片
		        var owl = $(".owl-slider");
		            owl.owlCarousel({
                        // 幻灯片可见数
		            	items: [4],


                        // 响应式设计
                        //itemsDesktop 第一个参数为幻灯片宽度，第二个参数为显示可见幻灯片数量
		                itemsDesktop : [1000,3], 
		                itemsDesktopSmall : [979,2], 
		                itemsTablet: [600,1], 

                        // 幻灯片切换速度
		                slideSpeed: 1000,

                        // navigation: true,
                        // navigationText: ["上一个","下一个"]
		            });


		            // 触发播放事件, 自定义切换按钮
                    // 下一张
		            $(".next").click(function(){
		                owl.trigger('owl.next');
		            })
                    // 上一张
		            $(".prev").click(function(){
		                owl.trigger('owl.prev');
		            })
		        });
		    });

		    //Owl Slider v2
	        // $(document).ready(function() {
	        // var owl = $(".owl-slider-v2");
	        //     owl.owlCarousel({
	        //         items:5,
	        //         itemsDesktop : [1000,4], //4 items between 1000px and 901px
		    //         itemsDesktopSmall : [979,3], //3 items between 901px
	        //         itemsTablet: [600,2], //2 items between 600 and 0;
	        //     });
		    // });

		    //Owl Slider v3
	        // $(document).ready(function() {
	        // var owl = $(".owl-slider-v3");
	        //     owl.owlCarousel({
	        //         items:1,
	        //         itemsDesktop : [1000,1], //1 items between 1000px and 901px
		    //         itemsDesktopSmall : [979,1], //1 items between 901px
	        //         itemsTablet: [600,1], //1 items between 600 and 0;
	        //         itemsMobile : [479,1] //1 itemsMobile disabled - inherit from itemsTablet option
	        //     });
		    // });


            // 产品页商品推荐模块
		    $(document).ready(function() {

		        $(document).ready(function() {
		        var owl = $(".owl-slider-v4");
		            owl.owlCarousel({
		            	items: [5],
		                itemsDesktop : [1000,4], 
		                itemsTablet: [600,2], 
		                itemsMobile : [479,2], 
		                slideSpeed: 1000
		            });

		            $(".next").click(function(){
		                owl.trigger('owl.next');
		            })
		            $(".prev").click(function(){
		                owl.trigger('owl.prev');
		            })
		        });
		    });

		    // $(document).ready(function() {
		    //     //Owl Slider
		    //     $(document).ready(function() {
		    //     var owl = $(".owl-twitter");
		    //         owl.owlCarousel({
		    //         	items: [1]
		    //         });

		    //         // Custom Navigation Events
		    //         $(".next-v2").click(function(){
		    //             owl.trigger('owl.next');
		    //         })
		    //         $(".prev-v3").click(function(){
		    //             owl.trigger('owl.prev');
		    //         })
		    //     });
		    // });
		}
    };
    
}();


// 主页主banner轮播模块
// Jquery 轮播图插件RevolutionSlider
var RevolutionSlider = function () {

    return {
        
        //Revolution Slider - Full Width
        initRSfullWidth: function () {
		    var revapi;
	        $(document).ready(function() {
	            revapi = $('.tp-banner').revolution(
	            {
	                delay:9000,    //滑动内容停留事件
	                startwidth:1170,   //滑动内容宽度
	                startheight:500,   //滑动内容高度
	                hideThumbs:10,     //隐藏缩略图延迟时间
					navigationStyle:"preview4",   //列表导航样式
                    
	            });
	        });
        },

        //Revolution Slider - Full Screen Offset Container
        initRSfullScreenOffset: function () {
		    var revapi;
	        $(document).ready(function() {
	           revapi = $('.tp-banner').revolution(
	            {
	                delay:15000,
	                startwidth:1170,
	                startheight:500,
	                hideThumbs:10,
	                fullWidth:"off",    //关闭全屏展示图片内容
	                fullScreen:"on",
	                hideCaptionAtLimit: "",
	                dottedOverlay:"twoxtwo",
	                navigationStyle:"preview4",
	                fullScreenOffsetContainer: ".header"
	            });
	        });
        }        

    };
}();        