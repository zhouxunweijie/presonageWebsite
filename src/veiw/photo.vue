<template>
    <div>
        <Photo v-bind:title="title" v-bind:url="url"></Photo>
        <Photo v-bind:title="title1" v-bind:url="url1"></Photo>
    </div>
</template>

<script>
import Photo from "../components/photo.vue";
    export default({
        name:"photo",
        data(){
            return {
                msg:"",
                title:"你的名字",
                url:"getPhotos?id=1",
                title1:"火影忍者",
                url1:"getPhotos?id=2"
            }
        },
        components:{
            Photo
        }
    })

</script>

<style>

</style>