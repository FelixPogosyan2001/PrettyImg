<template>
    <section :class="theme">
        <span>Условие {{ order }}</span>
        <select v-model="choice" class="form-control" :disabled="order != 1 && active">
            <option disabled>{{ name }}</option>
            <option v-for="(option, i) in options" :key="i">{{ option }}</option>
        </select>
        <span>Выбрано: 
            <span v-if="!answer">{{ choice }}</span>
            <input v-else  @keypress.enter="choice = userInput" v-model="userInput" placeholder="Напишите свой вариант" class="form-control"/>
        </span>
    </section>
</template>

<script>
export default {
    props: ['name', 'theme', 'options', 'order', 'active'],
    data() {
        return {
            choice: 'ничего',
            userInput: null
        }
    },
    computed: {
        answer(){
            return this.choice == 'По своему выбору' ? true : false
        }
    },
    watch: {
        choice(value) {
            if (value == 'Рандом') this.$emit('changeActive');
            else if (value != 'Рандом' && this.active) this.$emit('changeActive');
            this.$emit('setAnswer', value, this.order - 1);
        }
    }
}
</script>

<style scoped>

.cond1 {
    background: #66e364;
    color: white;
}

.cond2 {
    background: #ffbb33;
    color: white;
}

.cond3 {
    background: #30b7ff;
    color: white;
}

.cond4 {
    background: #cc16e0;
    color: white;
}

section {
    display: grid;
    grid-template-columns:1fr 2fr;
    grid-row-gap: 1rem;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 50px;
    padding: 10px;
    border-radius: 8px;
}

section > span:last-child {
    grid-column: 1/3;
}

section > span:last-child > input {
    width: 50%;
    display: inline-block;
    margin-left: 5px;
}
</style>