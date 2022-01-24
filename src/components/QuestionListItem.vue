<script setup>
import { useStore } from 'vuex';
import { reactive } from 'vue';
import { onMounted, ref } from "vue";
import AnswerListItem from './AnswerListItem.vue';
import { computed } from "vue";

const store = useStore()

const props = defineProps({
        questionItem: {
            type: Object,
            required: true
        }
    })

const isAnswered = computed(() => store.getters.getIsAnswered)

onMounted(async() => {
    console.log("Question list item...")

    let possibleAnswer = props.questionItem.incorrect_answers
    possibleAnswer.push(props.questionItem.correct_answer)

    props.questionItem = {...props.questionItem, offeredAnswer: possibleAnswer}

    console.log(props.questionItem)
})

const isHidden = ref(false)

const onAnswerEvent = (todo) => {
     isHidden.value = true

     console.log(`Collection Answer ${props.questionItem.question}`)
     console.log(`Collection Answer ${todo}`)

     store.commit("setUserAnwerToQuestion", props.questionItem.question);
     store.commit("setUserAnwerToValue", todo);
     store.commit("setUserAnswerBoth", props.questionItem.question, todo);
}
</script>

<template>
    <li class="shadow rounded flex mb-3 overflow-hidden">
        <aside class="mr-3">
            <span class="block text-lg font-bold min-w-100">{{questionItem.category}}</span>    
        </aside>
        <div class="p-4">
            <header class="flex items-center justify-between">
                <p class="flex items-center">
                    <span class="block text-lg">{{questionItem.question}}</span>
                </p>
            </header>
            <div class="grid grid-cols-1 gap-4">
                <!--<AnswerListItem @AnswerEvent="onAnswerEvent" :hidden="isHidden" v-for="answerItem in props.questionItem.incorrect_answers" :key="answerItem" :answerItem="answerItem"/>-->
                <AnswerListItem @AnswerEvent="onAnswerEvent" :hidden="isHidden" v-for="answerItem in props.questionItem.incorrect_answers" :key="answerItem" :answerItem="answerItem"/>
            </div>  
            <!-- <footer class="flex justify-start p-2">
                <router-link 
                    :to="`/question/${questionItem.question}`"
                    class="border border-blue-400 px-3 rounded text-blue-400">View more
                </router-link>
            </footer> -->
        </div>
    </li>
</template>

<style scoped>
.min-w-100 {
    min-width: 100px;
}
</style>