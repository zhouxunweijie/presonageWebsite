<template>
    <div id="app">
        <Navigate/>
        <div style="margin-top: 75px">
            <router-view v-cloak></router-view>
        </div>

    </div>
</template>

<script>
    import Navigate from "./veiw/navigate.vue"
    export default {
        name: 'app',
        components:{
            Navigate
        }
    }
</script>

<style>
    [v-cloak] {
        display: none;
    }
    body,html{
        font-size: 25px;
    }
</style>
