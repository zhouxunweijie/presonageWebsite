<template>
    <div class="seek">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../assets/img/1.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../assets/img/2.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../assets/img/3.jpg" alt=""></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- 如果需要滚动条 -->
            <div class="swiper-scrollbar"></div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import  Swiper from "swiper";
require("../../node_modules/swiper/dist/css/swiper.css");
    export default({
        data(){
            return {
                msg:"parent",
                show:false,
                data:[],
                text:""
            }
        },
        mounted(){
          this.newSwiper()
        },
        methods:{
            newSwiper(){
                var swiper = new Swiper(".swiper-container",{
                    loop:true,
                    autoplay: 3000,
                    // 如果需要分页器
                    pagination: '.swiper-pagination',

                    // 如果需要前进后退按钮
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',

                    // 如果需要滚动条
                    scrollbar: '.swiper-scrollbar',
                })
            }
        }
    })

</script>

<style scoped lang="less">

    .swiper-container{
        width:100%;
        height:535px;
    }
    img{
        width: 100%;
        height:100%;
    }

</style>