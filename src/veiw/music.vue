<template>
    <div class="container">
        <div class="col-md-12">
            <div class="song-title col-md-12">
                <span class="col-md-6">歌曲</span>
                <span class="col-md-3">歌手</span>
                <span class="col-md-3">时长</span>
            </div>
            <ul id="song-ul">
                <li class="col-md-12" v-for="(item,el) in datas" @mouseenter.stop="enter" @mouseleave.stop="leave">
                    <div class="col-md-6 song-li-1" >
                        <b>{{el + 1}}</b>
                        <img :src="item.img">
                        <span style="color:#000" v-text="item.name"></span>
                        <span v-text="item.remark" style="font-size: 13px"></span>
                        <span class="icon_play"><a :href="item.url" target="view_window"></a></span>
                    </div>
                    <div class="col-md-3 song-li-2">
                        <span v-text="item.singerName"></span>
                    </div>
                    <div class="col-md-3 song-li-3">
                        <span v-text="item.length"></span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="paging">
            <div>
                <span v-for="(item,index) in getPaging" @click="getAllMusic(index)"><a href="javascript:void(0)">{{item}}</a></span>
            </div>
        </div>
    </div>

</template>

<style lang="less" scoped>

    .song-title{
        width: 100%;
    }
    .song-title span{
        display: inline-block;
        font-size: 14px;
        color: #000;
        height:50px;
        line-height: 50px;
        text-align: left;
        font-weight: 800;
    }
    #song-ul{
        li{
            padding:5px;
            box-sizing: border-box;
        }
        &:before{
            content: "";
            display: block;
            clear:both;
         }
    }
    .song-li-1{
        b{
            display: inline-block;
            font-size:25px;
            color:indianred;
            font-weight: 500;
            padding-right: 20px;
            width:35px;
        }
        img{
            display: inline-block;
            width: 70px;
            height:70px;
            margin-right: 20px;
        }
        span{
            font-size: 14px;
            color:#999;
        }
        .icon_play{
            display: none;
            line-height: 70px;
            width: 36px;
            height:36px;
            margin-left: 10px;
            vertical-align: middle;
            background: url("../../src/assets/img/icon_list_menu.png") no-repeat;
            &:hover{
                background-position: -40px 0;
             }
             a{
                 display: block;
                 width: 100%;
                 height:100%
             }
        }
    }
    .song-li-2 span{
        font-size: 14px;
        line-height: 70px;
        color:#000
    }
    .song-li-3 span{
        font-size: 14px;
        line-height: 70px;
        color:#000
    }
    .paging{
        width: 100%;
        height:40px;
        display:block;
        float:left;
        text-align:center;
        div{
            display: inline-block;
            span{
                width: 30px;
                height: 100%;
                display: inline-block;
                a{
                    font-size: 18px;
                    color:#000;
                    text-align: center;
                    line-height: 40px;
                }
                &:hover{
                    background-color: #b1b1b1;
                }
            }

        }
    }
</style>

<script>
    import axios from "axios";
    import W from "../assets/base";

    export default {
        name:"music",
        mounted:function(){
            this.getAllMusic()
         },
        computed:{
          getPaging:function(){
              return Math.ceil(this.total/this.limit)
          }
        },
        methods: {
             getAllMusic:function(item){
                 this.offset = item * this.limit;
                 var that = this;
                 axios.get(W.API_PATH + "getAllMusic?limit="+that.limit +"&offset="+that.offset).then(function(data){
                     that.total = data.data.result.total
                     that.datas = data.data.result.data
                 }).catch(function(data){
                     alert("请求数据失败请重启浏览器");
                 })
             },
            enter:function(e){
                    e.target.getElementsByClassName("icon_play")[0].style.display = "inline-block";
                    e.target.style.backgroundColor = "gainsboro"
            },
            leave:function(e){
                    e.target.getElementsByClassName("icon_play")[0].style.display = "none";
                    e.target.style.backgroundColor = "#fff"
            }
        },
        data() {
            return {
                limit:10,
                offset:0,
                total:0,
                datas:[],
            }
        }
    }
</script>