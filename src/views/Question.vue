<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import QuestionList from "../components/QuestionList.vue";

const router = useRouter()
const store = useStore()

onMounted(async() => {
  console.log("Question...")

  await store.dispatch("fetchQuestionsFromApi")
  
})

const onShowResult = () => {
  router.push('/Result')
}
</script>

<template>
    <main class="container mx-auto px-4">
      <QuestionList />
    </main>

    <button class="border bg-blue-500 text-white px-3 rounded" @click="onShowResult">Show Result</button>  
</template>