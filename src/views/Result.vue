<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const router = useRouter()
const store = useStore()

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

    <ul class="grid-responsive gap-4">
      <li v-for="item in questionsList" :key="item" :questionItem="item">
        <div class="p-3">
          <header class="flex items-center">
            <span class="block text-lg">{{ item.question }}</span>   
          </header>
          <span class="block text-2lg">{{ item.user_answer }}</span>
          <footer class="flex justify-start p-2">
                <span class="border border-blue-400 px-3 rounded text-blue-400">
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