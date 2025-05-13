<script>
export default {
    props: ['modelValue', 'disabled', 'shorter'],
    emits: ['update:modelValue', 'open'],
    computed: {
        disabledInput() {
            return {
                'cursor-pointer': this.disabled
            }
        },
        symbolContainer() {
            return {
                'input-symbol-container': true,
                'cursor-pointer': this.disabled
            }
        },
        symbolClasses() {
            return {
                'input-symbol': true,
            }
        }
    },
    methods: {
        copyToClipboard() {
            if (!this.disabled) return; // If the input is disabled, means that's the one that holds the converted value to be copied
            this.$emit("open");
            navigator.clipboard.writeText(this.modelValue)
                .then(() => {
                    this.copied = true;
                    console.log('Copied to clipboard');
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        }
    }
}
</script>

<template>
    <div class="input-container" @click="copyToClipboard">
        <input :class="disabledInput" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :readonly="disabled"
            autocomplete="off"
            placeholder="0" />
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
    background-color: #2e2e3a;
    padding: 20px 0;
    text-align: center;
}

.input-symbol {
    margin: 0;
    line-height: 50px;
    border-left: 1px dashed #a0d2db;
    color: #a0d2db;
}

.cursor-pointer {
    cursor: pointer;
}
</style>