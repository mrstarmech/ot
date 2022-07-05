<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import ComebackComponent from './components/ComebackComponent.vue';
const once = reactive({state:true});
const show = reactive({state:false});
onMounted(() => {
    history.pushState({
        state: 'cbk',
    }, '', window.location.href);
    window.addEventListener('popstate', (ev) => {
        console.log('pop');
        
        if (once.state) {
            history.pushState({
                state: 'cbk'
            }, '', window.location.href+'cbk');

            show.state = true;
            once.state = false;
        }
    });

    document.addEventListener('mouseout', ()=>{
        if (once.state) {
            show.state = true;
            once.state = false;
        }
    });
})
</script>

<template>
    <HeaderComponent />
    <MainComponent />
    <ComebackComponent v-if="show.state" @close="show.state = false" />
</template>

<style>
@import "@/assets/base.css";
@import 'normalize.css';

* {
    box-sizing: border-box;
}

body {
    background: var(--background);
}
</style>
