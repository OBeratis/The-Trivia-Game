<script setup>
    defineProps({
        questionItem: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <li>
        <span>{{questionItem.question}}</span>
    </li>
</template>