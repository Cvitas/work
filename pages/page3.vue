/**
* Created by cx on 2018/2/1.
* Include
* description 
*/
<template>
    <div class="wrap">
        <div class="box">
            <div class="box-scroll" id="boxScrollChild">
                <div>
                    <div class="content-top shangchao-bg">
                        <span class="shangchao-title-1"></span>
                        <span class="shangchao-title-2"></span>
                    </div>
                    <div class="content-broadcast">
                        <span class="pl10 red">带你领略别样风光：</span>
                        <div class="swiper-container trip-items">
                            <div class="swiper-wrapper detail-img">
                                <div class="swiper-slide"><span class="pl10">旅游好攻略，黄泽寺欢迎您!</span></div>
                                <div class="swiper-slide"><span class="pl10">旅游好攻略，千佛崖风景区欢迎您!</span></div>
                                <div class="swiper-slide"><span class="pl10">旅游好攻略，广元剑门关欢迎您!</span></div>
                                <div class="swiper-slide"><span class="pl10">旅游好攻略，明月峡欢迎您!</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="content-list shangchao-list" >
                        <div class="content-item half no-left bg-canyu">
                            <span class="item-1">则天南路居民参与共建智慧社区</span>
                        </div>
                        <div class="content-item half no-right bg-zhsq">
                            <span class="item-1">智慧社区全新平台上线了邀您参与</span>
                        </div>
                        <div class="content-item  no-left">
                            <i class="icon-huodong item-icon" style="color:rgb(131, 203, 245);"></i>
                            <span class="item-name">小组活动</span>
                        </div>
                        <div class="content-item">
                            <i class="icon-organize item-icon" style="color:rgb(114, 224, 230);"></i>
                            <span class="item-name">社会组织</span>
                        </div>
                        <div class="content-item">
                            <i class="icon-market item-icon" style="color:rgb(157, 206, 181);"></i>
                            <span class="item-name">物业管理</span>
                        </div>
                        <div class="content-item no-right">
                            <i class="icon-help item-icon" style="color:rgb(177, 183, 132);"></i>
                            <span class="item-name">代办代购</span>
                        </div>
                        <div class="content-item half no-left">
                            <span class="item-2">公益慈善</span>
                            <i class="icon-help item-icon item-half" style="color:rgb(127, 224, 162);"></i>
                        </div>
                        <div class="content-item half no-right">
                            <span class="item-2">积分商城</span>
                            <i class="icon-cart-total item-icon item-half" style="color:rgb(84, 186, 182);"></i>
                        </div>
                        <div class="content-item half no-left">
                            <span class="item-2">志愿服务</span>
                            <i class="icon-service item-icon item-half" style="color:rgb(162, 197, 136);"></i>
                        </div>
                        <div class="content-item half no-right">
                            <span class="item-2">便民热线</span>
                            <i class="icon-phone item-icon item-half" style="color:rgb(162, 197, 136);"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import iScroll from 'iScroll'
    import Swiper from 'swiper'
    export default {
        data() {
            return {
            }
        },
        mounted(){
            setTimeout(()=>{
                var mySwiper = new Swiper ('.trip-items', {
                    direction: 'vertical',
                    loop: true,
                    // 如果需要分页器
                    pagination: '.swiper-pagination',
                    autoplay:3000
                });
                new iScroll('#boxScrollChild',{
                    probeType:2,
                    bounceTime: 250,
                    bounceEasing: 'quadratic',
                    mouseWheel:false,
                    scrollbars:false,
                    fadeScrollbars:true,
                    interactiveScrollbars:false,
                    preventDefault:false
                });
            },100)
        },
        methods:{

        }
    }
</script>