<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"
import { apiGetUser } from '../api/users'
import { onMounted } from "vue";

const router = useRouter()

const username = ref("");
const displayError = ref("Display Message");
const numberOfQuestions = ref(0)
const selectDifficults = ref("")
const selectCategories = ref("")

const difficultItems = ['Easy', 'Medium', 'Hard'];
const categoryItems = ['General Knowledge', 'Mythology', 'Sports', 'Geography', 'History', 'Politics', 'Art', 'Celebrities', 'Animals'];

onMounted(async() => {
  console.log("Start...")
})


const onSubmit = async () =>{
    const [ error, user ] = await apiGetUser(username.value)
    if (error !== null)
    {
      displayError.value = error 
    }
    else
    {
      console.log(`Success! ${user}`)
    }
}

const onStartPlaying = () => {
  router.push('/Question')
}

</script>

<template>
  <main class="container mx-auto px-4">
    <h1 class="mb-4 text-2xl">Start</h1>
    <form>
      <div class="p-3">
        <label for="username" class="block">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter user name"
          class="border border-slate-400"
          v-model.trim="username"
        />
        <button class="border bg-blue-500 text-white px3 rounded" @click="onSubmit">Get User</button>
      </div>
      <div class="p-3">
        <label class="block">Select Difficulty:</label>
        <select class="border" v-model="selectDifficults">
          <option value>Any Difficulty</option>
          <option v-for="item in difficultItems" :key="item">{{ item }}</option>
        </select>
      </div>
      <div class="p-3">
        <label class="block">Number of Questions:</label>
        <input
          type="number"
          id="numberOfQuestions"
          class="border border-slate-400 w-14"
          v-model.number = "numberOfQuestions"
        />
      </div>
      <div class="p-3">
        <label class="block">Select Category:</label>
        <select class="border" v-model="selectCategories">
          <option>Any Category</option>
          <option v-for="item in categoryItems" :key="item">{{ item }}</option>
        </select>
      </div>

        <button class="border bg-blue-500 text-white px-3 rounded" @click="onStartPlaying">Start Playing</button>  
    </form>

    <div v-if="displayError" class="bg-red-500 text-white">
      <span class="block text-lg mb-2">Error</span>
      <p>{{ username}} - {{numberOfQuestions}} - {{selectDifficults}} - {{selectCategories}}</p>
    </div>
  </main>
</template>

<style scoped>
</style>