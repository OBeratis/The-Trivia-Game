<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { ref } from "vue";

import QuestionListItem from "./QuestionListItem.vue";

const store = useStore()

const props = defineProps({
        questionItem: {
            type: Object,
            required: true
        }
    })
    
const questions = computed(() => store.getters.filterQuestionsByCategory)

</script>

<template>
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