<script setup>
import { useStore } from 'vuex';
import { reactive } from 'vue';
import { onMounted } from "vue";
import AnswerListItem from './AnswerListItem.vue';

const store = useStore()

const props = defineProps({
        questionItem: {
            type: Object,
            required: true
        }
    })

const onAnswerClickItem = () => {
    console.log(props.questionItem);
}

// const possibleAnswerList = reactive([])

onMounted(async() => {
    console.log("Question list item...")

    let possibleAnswer = props.questionItem.incorrect_answers
    possibleAnswer.push(props.questionItem.correct_answer)

    // possibleAnswerList.push = {...props.questionItem, offeredAnswer: possibleAnswer}

    props.questionItem = {...props.questionItem, offeredAnswer: possibleAnswer}

    console.log(props.questionItem)
})

</script>

<template>
    <li class="shadow rounded flex mb-3 overflow-hidden">
        <aside class="mr-3">
            <span class="block text-lg font-bold min-w-100">{{questionItem.category}}</span>    
        </aside>
        <div class="p-4">
            <span class="block text-lg">{{questionItem.question}}</span>
            <div class="grid grid-cols-1 gap-4">
                <AnswerListItem v-for="answerItem in props.questionItem.incorrect_answers" :key="answerItem" :answerItem="answerItem"/>
                 <!-- <button class="bg-yellow-500 p-2 rounded text-sm max-w-md" @click="onAnswerClickItem">{{questionItem.incorrect_answers[0]}}</button>
                 <button class="bg-yellow-500 p-2 rounded text-sm max-w-md" @click="onAnswerClickItem">{{questionItem.incorrect_answers[1]}}</button>
                 <button class="bg-yellow-500 p-2 rounded text-sm max-w-md" @click="onAnswerClickItem">{{questionItem.incorrect_answers[2]}}</button>-->
                 <!-- <button class="bg-yellow-500 p-2 rounded text-sm max-w-md" @click="onAnswerClickItem">{{props.questionItem.correct_answer}}</button> -->
            </div>  
            
        </div>
    </li>
</template>

<style scoped>
.min-w-100 {
    min-width: 100px;
}
</style>