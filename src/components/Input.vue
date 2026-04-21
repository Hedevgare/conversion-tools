<script>
export default {
    props: ['modelValue', 'disabled', 'shorter'],
    emits: ['update:modelValue', 'open'],
    data() {
        return {
            darkmode: localStorage.darkmode === 'true'
        }
    },
    computed: {
        disabledInput() {
            return {
                'cursor-pointer': this.disabled,
                'dark-mode': this.darkmode,
                'light-mode': !this.darkmode,
                'dark-mode-text-secondary': this.darkmode,
                'light-mode-text': !this.darkmode
            }
        },
        symbolContainer() {
            return {
                'input-symbol-container': true,
                'cursor-pointer': this.disabled,
                'dark-mode': this.darkmode,
                'light-mode': !this.darkmode
            }
        },
        symbolClasses() {
            return {
                'input-symbol': true,
                'dark-mode': this.darkmode,
                'light-mode': !this.darkmode
            }
        }
    },
    mounted() {
        window.addEventListener('darkmode-toggle', (event) => {
            this.darkmode = event.detail;
        });
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