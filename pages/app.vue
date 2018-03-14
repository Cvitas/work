/**
* Created by cx on 2018/2/1.
* Include
* description 
*/
<template>
    <div>
        <div class="flashScreen" :class="appLoaded?'loaded':''"></div>
        <div class="wrap">
            <div class="box">
                <div class="box-scroll" id="boxScroll">
                    <div>
                        <div class="content-top life-bg">
                            <span class="life-title-1"></span>
                            <span class="life-title-2"></span>
                        </div>
                        <div class="content-broadcast">
                            <span class="pl10 red">带你领略别样风光：</span>
                            <div class="swiper-container trip-items trip-items-app">
                                <div class="swiper-wrapper detail-img">
                                    <div class="swiper-slide"><span class="pl10">旅游好攻略，黄泽寺欢迎您!</span></div>
                                    <div class="swiper-slide"><span class="pl10">旅游好攻略，千佛崖风景区欢迎您!</span></div>
                                    <div class="swiper-slide"><span class="pl10">旅游好攻略，广元剑门关欢迎您!</span></div>
                                    <div class="swiper-slide"><span class="pl10">旅游好攻略，明月峡欢迎您!</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="content-list user-content">
                            <div class="content-item half no-left bg-canyu" @click="goMore()">
                                <span class="item-1">则天南路居民参与共建智慧社区</span>
                            </div>
                            <div class="content-item half no-right bg-zhsq">
                                <span class="item-1">智慧社区全新平台上线了邀您参与</span>
                            </div>
                        </div>
                        <div class="content-list list-life">
                            <P class="content-title">政务</P>
                            <div class="content-item  no-left">
                                <i class="icon-base item-icon" style="color:#EC7D34;"></i>
                                <span class="item-name">基本情况</span>
                            </div>
                            <div class="content-item">
                                <i class="icon-zhengzhi item-icon" style="color:#F7B400;"></i>
                                <span class="item-name">政务公开</span>
                            </div>
                            <div class="content-item">
                                <i class="icon-shiwu item-icon" style="color:#44B682;"></i>
                                <span class="item-name">事务公开</span>
                            </div>
                            <div class="content-item no-right">
                                <i class="icon-caiwu item-icon" style="color:#F7B400;"></i>
                                <span class="item-name">财务公开</span>
                            </div>
                            <div class="content-item  no-left">
                                <i class="icon-juwu item-icon" style="color:#827EF1;"></i>
                                <span class="item-name">居务监督</span>
                            </div>
                            <div class="content-item">
                                <i class="icon-jumin item-icon" style="color:#F7B400;"></i>
                                <span class="item-name">居民公约</span>
                            </div>
                            <div class="content-item">
                                <i class="icon-zhinan item-icon" style="color:#4F96EB;"></i>
                                <span class="item-name">办事指南</span>
                            </div>
                            <div class="content-item no-right">
                                <i class="icon-jz item-icon" style="color:red;"></i>
                                <span class="item-name">法律法规</span>
                            </div>
                        </div>
                        <div class="content-list list-life-other">
                            <P class="content-title">其他</P>
                            <div class="content-item  no-left">
                                <i class="icon-dang item-icon" style="color:#EC7D34;"></i>
                                <span class="item-name">党务</span>
                            </div>
                            <div class="content-item">
                                <i class="icon-shangcheng item-icon" style="color:#F7B400;"></i>
                                <span class="item-name">商城</span>
                            </div>
                            <div class="content-item">
                                <i class="icon-share item-icon" style="color:red;"></i>
                                <span class="item-name">春晖共享中心</span>
                            </div>
                            <div class="content-item no-right" @click="goMore()">
                                <i class="icon-wanggehua item-icon" style="color:#3E98FF;"></i>
                                <span class="item-name">共建共治</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <transition :name="transitionName">
            <router-view class="child-view">
            </router-view>
        </transition>
        <footerComponent></footerComponent>
    </div>
</template>
<script>
    import { mapGetters,mapActions} from 'vuex'
    import iScroll from 'iScroll'
    import Swiper from 'swiper'
    import footerComponent from '../components/footer.vue'
    export default {
        components: {
            footerComponent
        },
        data() {
            return {
                appLoaded:false,
            }
        },
        created(){
            setTimeout(()=>{
                this.appLoaded = true;
            },1000);
            setTimeout(()=>{
                this.$el.firstChild.style.display = "none";
            },2000);
        },
        mounted(){
            setTimeout(()=>{
                new Swiper ('.trip-items-app', {
                    direction: 'vertical',
                    loop: true,
                    // 如果需要分页器
                    pagination: '.swiper-pagination',
                    autoplay:3000
                });
                new iScroll('#boxScroll',{
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
            goMore(){
                this.$router.push("page2")
            }
        },
        computed:{
            ...mapGetters({
                transitionName:"transitionName",
            }),
        },
    }
</script>