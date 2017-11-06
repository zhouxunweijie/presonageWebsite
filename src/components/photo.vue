<template>
    <div>
        <div class="container">
            <div class="title" v-text="title"></div>
            <ul class="photo_ul">
                <li v-for="(item,index) in datas">
                    <div>
                        <img :src="item" alt="" @click="eImgClick($event)">
                    </div>
                </li>
            </ul>
        </div>
        <transition>
            <img-views v-if="isImgViewsShow" :src="imgViewsSrc" @eClick="eImgViewClick"></img-views>
        </transition>
    </div>

</template>

<script>
    import axios from "axios";
    import imgViews from "../components/image-view.vue";
    import W from "../assets/base";
    export default({
        name:"photo",
        props:["title","url"],
        mounted:function(){
            var that = this;
            axios.get(W.API_PATH + this.url).then(function(data){
                console.log(data)
                that.datas = data.data.result.data
            }).catch(function(data){
            })
        },
        data(){
            return {
                datas:[],
                isImgViewsShow : false,
                imgViewsSrc:""
            }
        },
        methods:{
            eImgClick:function(e){
                this.isImgViewsShow=true;
                this.imgViewsSrc=e.currentTarget.src
            },
            eImgViewClick:function(){
                this.isImgViewsShow=false;
            }
        },
        components:{
            imgViews,
        }

    })

</script>

<style lang="less" scoped>
.title{
    font-size: 26px;
}
    .photo_ul{
        li{
            display: inline-block;
            width: 155px;
            padding:10px;
            margin-right:10px;
            background-color:#ecf0f5;
        div{
            height:148px;
            overflow: hidden;
            img{
                width: 100%;
                height:100%;
                }
            }
        }
    }
.ts-enter-active,
.ts-leave-active{
    transition:all .5s;
}
.ts-enter,
.ts-leave-active{
    transform: translate(100%,0);
}
</style>