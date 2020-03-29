<template>
    <div class="params">
        <div class="params__title">
            <p>Добавить свои предпочтения по выборке фотографий</p>
        </div>
        <h4 v-if="alert" style="width: 60%; margin: 0 auto 16px auto" class="alert alert-danger text-center">Вы не заполнили все данные</h4>
        <form @submit.prevent="applyParametrs">
            <Condition 
                v-for="{name, id, theme, options} in conditions" 
                @setAnswer="saveAnswer"
                @changeActive="active = !active"
                :key="id" 
                :name="name"
                :theme="theme"
                :options="options"
                :order="id"
                :active="active"
            />
            <button class="btn btn-success" id="formBtn">Сохранить</button>
        </form>
    </div>
</template>

<script>
import Condition from '@/components/Condition';

export default {
    data() {
        return {
            conditions: [
                { id: 1, name: 'Выберити вариант отбора', theme: 'cond1', options: ['Рандом', 'По своему выбору'] },
                { id: 2, name: 'Выберити страну расположения фотографии', theme: 'cond2', options: ['Любые', 'По своему выбору'] },
                { id: 3, name: 'Сортировка фотографий', theme: 'cond3', options: ['Последние публикации', 'Активные(популярные)'] },
                { id: 4, name: 'Формат фотографий', theme: 'cond4', options: ['Landscape', 'Portrait', 'Squarish'] }
            ],
            answers: [],
            alert: null,
            active: false
        }
    },
    components: {
        Condition
    },
    methods: {
        saveAnswer(val, i) {
            switch (val) {
                case 'Любые':
                    val = ' ';
                    break;
                case 'Последние публикации':
                    val = 'latest';
                    break;
                case 'Активные(популярные)':
                    val = 'relevant';
                    break;
                default:
                    break;
            }
            
            const arr = [...this.answers];
            arr[i] = val.toLowerCase();
            this.answers = arr;
        },
        applyParametrs() {
            if (this.answers.length == 4) {
                this.alert = false;
                this.$store.dispatch('photos/getPhotos', this.answers);
                this.$emit('switchPage')
            } else {
                this.alert = true;
            }
        }
    }
}
</script>

<style scoped>
.params__title {
    padding: 1em;
}

.params__title > p {
    color: rgb(206, 206, 206);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
}

form {
    position: relative;
}

#formBtn {
    position: absolute;
    right: 20px;
    background: #8b12fc;
}

@media screen and (max-width: 430px) {
    section {
        width: 100%
    }
}
</style>