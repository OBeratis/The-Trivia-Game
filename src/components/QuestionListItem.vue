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
        </div>
    </li>
</template>

<style scoped>
.min-w-100 {
    min-width: 100px;
}
</style>