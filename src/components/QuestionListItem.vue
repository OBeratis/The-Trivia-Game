<script setup>
    defineProps({
        questionItem: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <li class="shadow rounded flex mb-3 overflow-hidden">
        <aside class="mr-3">
            <span class="block text-lg font-bold min-w-100">{{questionItem.category}}</span>    
        </aside>
        <div class="p-4">
            <span class="block text-lg">{{questionItem.question}}</span>
            <div class="grid grid-cols-1 gap-4">
                 <button class="bg-yellow-500 p-2 rounded text-sm max-w-md">{{questionItem.incorrect_answers[0]}}</button>
                 <button class="bg-yellow-500 p-2 rounded text-sm max-w-md">{{questionItem.incorrect_answers[1]}}</button>
                 <button class="bg-yellow-500 p-2 rounded text-sm max-w-md">{{questionItem.incorrect_answers[2]}}</button>
                 <button class="bg-yellow-500 p-2 rounded text-sm max-w-md">{{questionItem.correct_answer}}</button>
            </div>  
            
        </div>
    </li>
</template>

<style scoped>
.min-w-100 {
    min-width: 100px;
}
</style>