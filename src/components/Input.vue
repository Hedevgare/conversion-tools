<script>
export default {
    props: ['modelValue', 'disabled'],
    emits: ['update:modelValue'],
}
</script>

<template>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :disabled="disabled" autocomplete="off" />
</template>