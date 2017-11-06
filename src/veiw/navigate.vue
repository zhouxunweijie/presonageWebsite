<template lang="html">
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="col-md-12">
                <div class="navbar-header col-md-3">
                    <img src="../../src/assets/img/头像.jpg" alt="" class="img-title">
                    <router-link class="navbar-brand" to="/home">迅伟的小窝</router-link>
                </div>
                    <div id="navbar" class="navbar-collapse collapse col-md-9 text-right" style="float: right">
                        <ul class="nav navbar-nav">
                            <li><router-link to="/home">首页</router-link></li>
                            <li><router-link to="/music">我的音乐</router-link></li>
                            <li><router-link to="/photo">我的相册</router-link></li>
                            <li><router-link to="/note">学习笔记</router-link></li>
                            <li><router-link to="/message">留言板</router-link></li>
                            <li><router-link to="/personalData">个人资料</router-link></li>
                        </ul>
                    </div>
            </div>
        </div>
    </nav>
    </div>

</template>

<script >

    export default({
        data(){
            return {}
        }

    })

</script >

<style lang="less" scoped>
    .img-title{
        display: inline-block;
        width: 50px;
        height:50px;
        border-radius: 50%;
        padding:10px;
        float: left;
    }
</style>