<template>
  <main class="col-sm-10">
      <div class="container">
          <ul class="inter-menu">
              <li @click="currentPage = 1">Все записи</li>
              <li @click="currentPage = 2">Параметры</li>
          </ul>
          <section>
            <div v-if="currentPage == 1 && photos.length > 0" class="data">
              <Photo v-for="photo in photos" :key="photo.id" :liked="favItems.findIndex(el => el.id == photo.id) != -1 ? true : false" :image="photo"/>
            </div>
            <Form  @switchPage="currentPage = 1" v-else-if="currentPage == 2"/>
            <div v-else class="alert alert-info">
              Записей не найдено
            </div>
          </section>
      </div>
  </main>
</template>

<script>
import Photo from '@/components/Photo';
import Form from '@/components/Form';

export default {
  async fetch({ store }){
    if (store.getters['photos/photos'].length === 0) {
      await store.dispatch('photos/getPhotos');
    }
  },
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    photos() {
      return this.$store.getters['photos/photos'];
    },
    favItems() {
      return this.$store.getters['favorites/favItems'];
    } 
  },
  components: {
    Photo,
    Form
  }
}
</script>

<style scoped>

.alert {
    font-size: 25px;
    width: 60%;
    margin: 0 auto;
    margin-top: 30vh;
    text-align: center;
}

.container {
  position: relative;
  top: 40px;
  width: 80%;
  height: 90%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, .8);
  overflow: auto
}

.data {
  height: 95%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow: auto
}

.inter-menu {
  list-style: none;
  display: flex;
  margin-bottom: 0;
  border-bottom: 2px solid #8b12fc;
}

.inter-menu > li {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  margin-right: 1.5rem;
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: 500;
  color: #8b12fc;
  cursor: pointer;
}

@media screen and (max-width: 430px) {
  .data {
    grid-template-columns: 1fr;
  }

  .inter-menu {
    padding-left: 0;
    justify-content: center;
  }
}

</style>
