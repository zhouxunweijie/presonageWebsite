import Vue from "vue";
import Router from "vue-router"
import Home from "../veiw/home.vue"
import Music from "../veiw/music.vue"
import Photo from "../veiw/photo.vue"
import Note from "../veiw/note.vue"
import PersonalData from "../veiw/personalData.vue"
import Message from "../veiw/message.vue"


Vue.use(Router);

const routes = [{
        path: '*',
        component: Home,
    },
    {
        path: '/home',
        component: Home,
        name: 'home'
    },
    {
        path: '/music',
        component: Music,
        name: 'music'
    },
    {
        path:"/photo",
        component:Photo,
        name:"photo"
    },
    {
        path:"/note",
        component:Note,
        name:"note"
    },
    {
        path:"/personalData",
        component:PersonalData,
        name:"personalData"
    },
    {
        path:"/message",
        component:Message,
        name:"message"
    }
];


const router = new Router({
    routes
})

export default router