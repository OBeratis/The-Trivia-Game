<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";

const router = useRouter()

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
    <!-- <button class="border bg-blue-500 text-white px-3 rounded" @click="onShowStart">Start</button>   -->
    <!-- <button class="border bg-blue-500 text-white px-3 rounded" @click="onShowQuestion">Replay Question</button>   -->
</template>