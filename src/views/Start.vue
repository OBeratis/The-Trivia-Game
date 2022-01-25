<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router"
import { apiGetUser } from '../api/users'
import { onMounted } from "vue";
import { useStore } from "vuex";

// Variables
const router = useRouter()
const store = useStore()

const questioncollection = computed(() => store.state.questionCollection)

const username = ref("");
const displayError = ref("Display Message");
const numberOfQuestions = ref(0)
const selectDifficults = ref("")
const selectCategories = ref("")

// Table of Categories, difficulty and Type of questions
const difficultItems = ['Easy', 'Medium', 'Hard'];

const categoryItems = ['General Knowledge', 'Mythology', 'Sports', 'Geography', 'History', 'Politics', 'Art', 'Celebrities', 'Animals'];
const dropdownCategoryItems = [
  { id: 0, text: 'Any Category'},
  { id: 9, text: 'General Knowledge'}, 
  { id: 10, text: 'Entertainment: Books' },
  { id: 17, text: 'Science & Nature' },  
  { id: 18, text: 'Science: Computers' },
  { id: 19, text: 'Science: Mathematics' },
  { id: 20, text: 'Mythology' },
  { id: 21, text: 'Sports' },
  { id: 22, text: 'Geography' },
  { id: 23, text: 'History' },
  { id: 24, text: 'Politics' },
  { id: 25, text: 'Art'},
  { id: 26, text: 'Celebrities' },
  { id: 27, text: 'Animals' },
  { id: 28, text: 'Vehicels' }
];
const dropdownDifficultItems = [
  { id: 0, text: 'Any Difficulty'},
  { id: 1, text: 'Easy'},
  { id: 2, text: 'Medium'},
  { id: 3, text: 'Hard'}
];
const dropdownTypeItems = [
  { id: 0, text: 'Any Type'},
  { id: 1, text: 'Multiple Choice'},
  { id: 2, text: 'True / False'}
];


onMounted(async() => {
  console.log("Start...")
})

// Events
const onKeyUpUsername = (event) => {
  store.commit("setUsername", event.target.value.trim())
}

const onChangeCategory = (event) => {
  store.commit("setCategory", event.target.value)
}

const onChangeDifficult = (event) => {
  store.commit("setDifficult", event.target.value)
}

const onChangeType = (event) => {
  store.commit("setType", event.target.value)
}

const onKeyUpNoQuestions = (event) => {
  store.commit("setNoQuestions", event.target.value)  

}

// Submit - not used
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

// click start playing button
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
          @keyup="onKeyUpUsername"
        />
        <button class="border bg-blue-500 text-white px3 rounded" @click="onSubmit">Get User</button>
      </div>
      <div class="p-3">
        <label class="block">Select Difficulty:</label>
        <select class="border" @change="onChangeDifficult($event)">
          <option v-for="item in dropdownDifficultItems" v-bind:value="item.id" :key="item.id">{{ item.text }}</option>
        </select>
      </div>      
      <div class="p-3">
        <label class="block">Number of Questions:</label>
        <input
          type="number"
          id="numberOfQuestions"
          class="border border-slate-400 w-14"
          v-model.number = "numberOfQuestions"
          @keyup="onKeyUpNoQuestions"
        />
      </div>
      <div class="p-3">
        <label class="block">Select Category:</label>
        <select class="border" @change="onChangeCategory($event)">
          <option v-for="item in dropdownCategoryItems" v-bind:value="item.id" :key="item.id">{{ item.text }}</option>
        </select>
      </div>
      <div class="p-3">
        <label class="block">Select Type:</label>
        <select class="border" @change="onChangeType($event)">
          <option v-for="item in dropdownTypeItems" v-bind:value="item.id" :key="item.id">{{ item.text }}</option>
        </select>
      </div>      
      <button class="border bg-blue-500 text-white px-3 rounded" @click="onStartPlaying">Start Playing</button>  
    </form>

    <!-- <div v-if="displayError" class="bg-red-500 text-white">
      <span class="block text-lg mb-2">Error</span>
      <p>{{ username}} - {{numberOfQuestions}} - {{selectDifficults}} - {{selectCategories}}</p>
    </div> -->
  </main>
</template>

<style scoped>

</style>