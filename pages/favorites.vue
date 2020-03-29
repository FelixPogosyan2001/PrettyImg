<template>
    <main>
        <h2>Favorites - {{ favItems.length }}</h2>
        <div v-if="favItems.length > 0" class="favorites">
            <Photo v-for="photo in favItems" :key="photo.id"  :liked="true" :image="photo"/>
        </div>
        <div v-else class="alert alert-info">
            Извини, но избранное пусто
        </div>
    </main>
</template>

<script>
import Photo from '@/components/Photo';

export default {
    computed: {
        favItems() {
            return this.$store.getters['favorites/favItems'];
        }
    },
    components: {
        Photo
    }
}
</script>

<style scoped>

.alert {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translateX(-50%);
    font-size: 27px
}

.favorites {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: minmax(250px, auto);
}

main {
    padding: 25px;
    padding-top: 50px;
}

main > h2 {
    margin-bottom: 1.5rem;
}

@media screen and (max-width: 430px) {
    .alert {
        font-size: 20px;
        text-align: center;
        top: 70%;
    }
}
</style>