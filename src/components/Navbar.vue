<script setup>
import { useStore } from "vuex";

defineProps({
    showSearch: Boolean,
    showQuestion: Boolean,
    showResult: Boolean 
})

const store = useStore()

const onKeyUp = (event) => {
    store.commit("setSearchCategory", event.target.value.trim())
}
</script>

<template>
    <nav class="sticky top-0 bg-yellow-500 p-4 mb-4 flex justify-between items-center">
        <router-link to="/" class="text-xl font-bold">Start</router-link>
        <div>
            <input v-if="showSearch" class="rounded px-4 py-1 mr-4" type="text" placeholder="Search a category..." @keyup="onKeyUp"/>
            <router-link v-if="showQuestion" to="/Question" class="rounded border border-black text-xl font-bold">Question</router-link>
            <router-link v-if="showResult" to="/Result" class="rounded border border-black text-xl font-bold">Results</router-link>
        </div>
    </nav>
</template>