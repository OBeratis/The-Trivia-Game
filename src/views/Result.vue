<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const router = useRouter()
const store = useStore()

const props = defineProps({
        questionItem: {
            type: Object,
            required: true
        }
    })

const questionsList = computed(() => store.getters.filterQuestionsCollections)

onMounted(async() => {
  console.log("Result...")

  console.log(store.state.userQuestionAnswer)
})

const onShowStart = () => {
  router.push('/')
}

const onShowQuestion = () => {
  router.push('/Question')
}

</script>

<template>
    <Navbar :showSearch="false" :showResult="false" :showQuestion="true"/>
    <div class="shadow rounded flex mb-3 overflow-hidden">
      <aside class="mr-3">
            <span class="block text-lg font-bold min-w-100">Score: </span>    
        </aside>
        <div class="mr-4">
          <header class="flex items-start justify-between">
             <span class="block text-lg">10</span>
          </header>
        </div>
    </div>
    <ul class="grid-responsive gap-4">
      <li v-for="item in questionsList" :key="item" :questionItem="item">
        <div class="p-3">
          <header class="flex ustify-start p-2">
            <span class="block text-lg">{{ item.question }}</span>   
          </header>
          <main class="flex justify-start p-2">
            <span>Your answer</span>
            <span class="border border-green-400 px-3 rounded text-black">
              {{ item.user_answer }}
            </span>
          </main>
          <footer class="flex justify-start p-2">
                <span>Correct answer</span>
                <span class="border border-blue-400 px-3 rounded text-black">
                  {{ item.correct_answer }}
                </span>
          </footer>
        </div>
      </li>
    </ul>    
</template>

<style scoped>
 .grid-responsive {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200, 1fr));
    }
</style>