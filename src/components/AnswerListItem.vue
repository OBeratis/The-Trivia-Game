<script setup>
import { useStore } from 'vuex';
import { reactive, ref } from 'vue';
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
    <QuestionAnswerButton :answerItem="answerItem"/>
</template>

<style scoped>
</style>