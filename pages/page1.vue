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
                    <div class="content-top dang-bg">
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
                    <div class="content-list">
                        <div class="content-item half no-left bg-canyu">
                            <span class="item-1">则天南路居民参与共建智慧社区</span>
                        </div>
                        <div class="content-item half no-right bg-zhsq">
                            <span class="item-1">智慧社区全新平台上线了邀您参与</span>
                        </div>
                    </div>
                    <div class="content-list dang-list">
                        <div class="content-item  no-left">
                            <i class="icon-dang item-icon" style="color:#EC7D34;"></i>
                            <span class="item-name">党务公开</span>
                        </div>
                        <div class="content-item">
                            <i class="icon-zhengzhi item-icon" style="color:#F7B400;"></i>
                            <span class="item-name">双报到</span>
                        </div>
                        <div class="content-item">
                            <i class="icon-shiwu item-icon" style="color:#44B682;"></i>
                            <span class="item-name">大讲堂</span>
                        </div>
                        <div class="content-item no-right">
                            <i class="icon-organize item-icon" style="color:#F7B400;"></i>
                            <span class="item-name">两新组织</span>
                        </div>
                        <div class="content-item  no-left">
                            <i class="icon-juwu item-icon" style="color:#827EF1;"></i>
                            <span class="item-name">社区人才</span>
                        </div>
                        <div class="content-item">
                            <i class="icon-jumin item-icon" style="color:#F7B400;"></i>
                            <span class="item-name">党风廉政</span>
                        </div>
                        <div class="content-item">
                            <i class="icon-service item-icon" style="color:#4F96EB;"></i>
                            <span class="item-name">党员志愿服务</span>
                        </div>
                        <div class="content-item no-right">
                            <i class="icon-life item-icon" style="color:red;"></i>
                            <span class="item-name">党员互动</span>
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
                new Swiper ('.trip-items', {
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
        },
    }
</script>