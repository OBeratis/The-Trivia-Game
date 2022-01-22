<script setup>
import { useStore } from 'vuex';
import { reactive } from 'vue';

const store = useStore()

const props = defineProps({
        answerItem: {
            type: String,
            required: true
        }
    })

const onAnswerClickItem = () => {
    console.log(props.answerItem);
}
</script>

<template>
    <button class="bg-yellow-500 p-2 rounded text-sm max-w-md" @click="onAnswerClickItem">{{props.answerItem}}</button>
</template>

<style scoped>
</style>