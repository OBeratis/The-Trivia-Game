<script setup>
    import { useStore } from 'vuex';
    import { ref } from "vue";

    const store = useStore()
    const props = defineProps(['answerItem'])

    const isLoading = ref(false)

    const onAnswerClickItem = () => {
        store.dispatch("addQuestionAnswered", props.answerItem);
        isLoading.value = true
    }    
</script>

<template>
    <button :disabled="isLoading" class="bg-yellow-500 p-2 rounded text-sm max-w-md" @click="onAnswerClickItem" v-if="!props.isAnswered">{{props.answerItem}}</button>
</template>

<style scoped>

</style>