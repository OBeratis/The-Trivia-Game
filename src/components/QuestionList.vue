<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import QuestionListItem from "./QuestionListItem.vue";

const store = useStore()

const questions = computed(() => store.state.questions)

</script>

<template>
    <ul class="grid-responsive gap-4">
        <QuestionListItem v-for="questionItem in questions" :key="questionItem.id" :questionItem="questionItem"/>
    </ul>    
</template>

<style scoped>
    .grid-responsive {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200, 1fr));
    }
</style>