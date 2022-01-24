<script setup>
import { useStore } from 'vuex';
import { reactive } from 'vue';
import QuestionAnswerButton from './QuestionAnswerButton.vue';

const store = useStore()

const props = defineProps({
        answerItem: {
            type: String,
            required: true
        }
    })

</script>

<template>
    <!-- <button class="bg-yellow-500 p-2 rounded text-sm max-w-md" @click="onAnswerClickItem">{{props.answerItem}}</button> -->
    <QuestionAnswerButton :answerItem="answerItem"/>
</template>

<style scoped>
</style>