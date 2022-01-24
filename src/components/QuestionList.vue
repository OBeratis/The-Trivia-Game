<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { ref } from "vue";

import QuestionListItem from "./QuestionListItem.vue";

const store = useStore()

// const questions = computed(() => store.state.questions)
const questions = computed(() => store.getters.filterQuestionsByCategory)

</script>

<template>
    <!-- <ul class="grid-responsive gap-4"> -->
    <ul>
        <QuestionListItem v-for="questionItem in questions" :key="questionItem" :questionItem="questionItem"/>
    </ul>    
</template>

<style scoped>
    .grid-responsive {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200, 1fr));
    }
</style>