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
                    <div class="content-top user-bg">
                        <span class="content-top-phone"></span>
                        <span class="content-top-name">社区小刘</span>
                        <span class="content-top-user-info">25 岁&nbsp;&nbsp;&nbsp;162cm&nbsp;&nbsp;&nbsp;62.0kg</span>
                    </div>
                    <div class="user-list">
                        <div class="user-item">
                            <span><i class="icon-gongyi color1"></i>我的慈善公益</span>
                            <span class="user-detail">></span>
                        </div>
                        <div class="user-item">
                            <span class=""><i class="icon-service color2"></i>我的志愿服务</span>
                            <span class="user-detail">></span>
                        </div>
                        <div class="user-item">
                            <span class=""><i class="icon-cart-total color3"></i>我的积分及兑换</span>
                            <span class="user-detail">></span>
                        </div>
                        <div class="user-item">
                            <span class=""><i class="icon-dingdan color4"></i>我的订单</span>
                            <span class="user-detail">></span>
                        </div>
                        <div class="user-item">
                            <span class=""><i class="icon-qianbao color5"></i>我的账户</span>
                            <span class="user-detail">></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import iScroll from 'iScroll'
    export default {
        data() {
            return {
            }
        },
        mounted(){
            setTimeout(()=>{
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
            },200)
        },
        methods:{

        }
    }
</script>