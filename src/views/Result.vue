<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const router = useRouter()
const store = useStore()

const questionsList = computed(() => store.getters.filterQuestionsByCategory)

onMounted(async() => {
  console.log("Result...")
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
        {{ item.question}}
      </li>
    </ul>    
</template>

<style scoped>
 .grid-responsive {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200, 1fr));
    }
</style>