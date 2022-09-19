import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import ImageConverter from "../views/ImageConverter.vue";
import VideoConverter from "../views/VideoConverter.vue";
import AudioConverter from "../views/AudioConverter.vue";
import YoutubeDownloader from "../views/YoutubeDownloader.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/imageconverter',
        name: 'ImageConverter',
        component: ImageConverter
    },
    {
        path: '/videoconverter',
        name: 'VideoConverter',
        component: VideoConverter
    },
    {
        path: '/audioconverter',
        name: 'AudioConverter',
        component: AudioConverter
    },
    {
        path: '/youtubedownloader',
        name: 'YoutubeConverter',
        component: YoutubeDownloader
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
