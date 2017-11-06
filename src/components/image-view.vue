<style lang="less" scoped>
    .m-img-view{
        /*样式自己写吧，不是很难*/
        position: fixed;
        top:0;
        left:0;
        z-index: 10000;
        width:100%;
        height:100%;
        background-color: #000;
    }
    .u-img{
        /*中间那块图片部分*/
        height:100%;
        text-align:center;
        span{
            height:100%;
            display: inline-block;
            vertical-align: middle;
        }
        img{
            vertical-align: middle;
        }
    }
</style>
<template id="img_view">
    <div class="m-img-view" @click="eClick">
        <div class="u-img">
            <span></span>
            <img :src="src"/>
        </div>
    </div>
</template>
<script>
//     es6...

     export default {
         name:"image-view",
        props:['src'],
         mounted:function(){
             var mImgView = document.getElementsByClassName("m-img-view")[0];
             mImgView.style.height = (document.documentElement.clientHeight || document.body.clientHeight) + "px";
         },
        methods:{
            eClick(){
                this.$emit('eClick')
            }
        }
     }
//    Vue.component('img-views',{
//        template:'#img_view',
//        props:['src'],
//        methods:{
//            eClick:function(){
//                this.$emit('clickit');
//            }
//        }
//    });
</script>