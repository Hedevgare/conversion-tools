<script>
export default {
    props: ['modelValue', 'disabled', 'shorter'],
    emits: ['update:modelValue'],
    computed: {
        symbolContainer() {
            return {
                'input-symbol-container': true,
                'disabled': this.disabled
            }
        },
        symbolClasses() {
            return {
                'input-symbol': true,
                'disabled': this.disabled
            }
        }
    }
}
</script>

<template>
    <div class="input-container">
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :disabled="disabled"
            autocomplete="off" />
            <div :class="symbolContainer">
                <p :class="symbolClasses">{{ $props.shorter }}</p>
            </div>
    </div>
</template>

<style scoped>
.input-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.input-symbol-container {
    width: 50px;
    background-color: #ffffff;
    padding: 3.5px 0;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    text-align: center;
}

.input-symbol {
    margin: 0;
    border-left: 1px solid #2e2e3a;
    color: #000000;
}

.disabled {
    background-color: #9e9e9e;
}
</style>