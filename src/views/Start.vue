<script setup>
import { ref } from "vue";
import { apiGetUser } from '../api/users'
const username = ref("");

const onSubmit = async () =>{
    console.log(username.value);

    const [ error, user ] = await apiGetUser(username.value)

    console.log("Error", error);
    console.log("User", user);
}
</script>

<template>
  <main class="container mx-auto px-4">
    <h1 class="mb-4 text-2xl">Start</h1>
    <form @submit.prevent="onSubmit">
      <fieldset class="mb-4">
        <label for="username" class="block">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter user name"
          class="border border-slate-400"
          v-model="username"
        />
        <button class="bg-gray-400 text-white p-4">Get User</button>
      </fieldset>

      <button class="bg-gray-400 text-white p-4">Start Playing</button>
    </form>

    <p>{{username}}</p>
  </main>
</template>

<style scoped>
</style>