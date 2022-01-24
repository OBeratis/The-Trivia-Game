<script setup>
    import { useStore } from 'vuex';
    import { ref } from "vue";
 
    const store = useStore()

    const props = defineProps(['answerItem'])

    const isLoading = ref(false)

    const emit = defineEmits(['AnswerEvent'])

    const onAnswerClickItem = () => {
        console.log('QuestionAnswerButton...')
        store.dispatch("addQuestionAnswered", props.answerItem);
        isLoading.value = true
        emit('AnswerEvent', props.answerItem)
    }    
</script>

<template>
    <button :hidden="isLoading" class="bg-yellow-500 p-2 rounded text-sm max-w-md" @click="onAnswerClickItem" v-if="!props.isAnswered">{{answerItem}}</button>
</template>

<style scoped>

</style>