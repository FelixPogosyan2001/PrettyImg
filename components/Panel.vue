<template>
    <aside class="col-sm-2 panel">
        <div 
            @click="changeLocation(item.url, index)" 
            class="panel__item"  
            :class="selected == index && 'selected'"
            v-for="(item,index) of items" 
            :key="item.id"
        >
            <i :class="item.icon"></i>
            <span>{{ item.text }}</span>
        </div>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { id: 1, icon: 'fas fa-globe-asia', text: 'Фотографии', url: '/' },
                { id: 2, icon: 'fas fa-star', text: 'Избранное', url: '/favorites' },
                { id: 3, icon: 'fas fa-file-signature', text: 'Информация', url: '/info' }
            ],
            selected: 0
        }
    },
    methods: {
        changeLocation(url, i) {
            this.selected = i;
            this.$nuxt.$router.replace({ path: url });
        }
    }   
}
</script>

<style>

.selected {
    background: #8b12fc !important;
    color: #fff;
}

.panel {
    height: 100vh;
    background: #fff;
    border-right: 1.5px solid rgba(214, 214, 214, 0.6);
}

.panel__item {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: calc(60vh / 4);
    margin-top: 1.5em;
    background: rgb(240, 240, 240);
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
}

.panel__item > i {
    display: block;
    font-size: 40px;
}

.panel__item > span {
    font-size: 20px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

@media screen and (max-width: 420px) {
    .panel {
        height: 80vh;
    }
}
</style>