<template>
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <i 
                :style="{color: liked && 'red'}" 
                @click="handlerClick" 
                class="fas fa-heart"
            >
                {{ image.likes + liked }}
            </i>
            <span>author: {{ image.user.name }}</span>
        </div>
        <div class="card-body">
            <div class="photo-item" :style="{ backgroundImage: `url(${image.urls.full})` }" />
            <p class="card-text">{{ image.description ? image.description : image.alt_description }}</p>
        </div>
        <div class="card-footer text-center">
            <a :href="image.links.download" download class="dwnbtn">Download</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['image', 'liked'],
    methods: {
        handlerClick(e) {
            if (getComputedStyle(e.target).color == 'rgb(255, 0, 0)') e.target.style.color = '#fff';
            if (!this.liked) this.$store.dispatch('favorites/addItem', this.image);
            else this.$store.dispatch('favorites/removeItem', this.image.id);
        }
    }
}
</script>

<style scoped>

.card-header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-items: center;
    align-items: center;
}

.card-header > i {
    cursor: pointer;
}

.dwnbtn {
    color: #fff;
    padding: 8px;
    border-radius: 3px;
    background:#8b12fc;
}

i::before {
    margin-right: 10px;
}

.photo-item {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
}

p {
    margin-top: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
</style>