import NullComponent from './components/NullComponent.vue';
import ComebackComponent from './components/ComebackComponent.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    { path: '/cbk', component: ComebackComponent },
    { path: '/content', component: NullComponent },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})