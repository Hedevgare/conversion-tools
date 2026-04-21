<script>
export default {
    props: ['active', 'units'],
    data() {
        return {
            show: false,
            darkmode: localStorage.darkmode === 'true'
        };
    },
    computed: {
        borderBottom() {
            return {
                'dropdown-container-active': this.show,
                'dark-mode': this.darkmode,
                'light-mode': !this.darkmode
            }
        },
    },
    methods: {
        toggle() {
            this.show = !this.show;
        },
        changeUnit(unit) {
            this.$emit('setUnit', unit);
            this.toggle();
        },
        handleClickOutside(e) {
            if (!this.$el.contains(e.target)) {
                this.show = false;
            }
        }
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
        window.addEventListener('darkmode-toggle', (event) => {
            this.darkmode = event.detail;
        });
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }
}
</script>

<template>
    <div class="dropdown-container" :class="borderBottom">
        <div class="flex unit-label" :class="{ 'dark-mode-text-secondary': darkmode, 'light-mode-text': !darkmode }" @click="toggle">
            <p class="margin-10">{{ this.active.unit }}</p>
            <p class="flex margin-10"><i class="dropdown-arrow margin-left-5"></i></p>
        </div>
        <div v-if="show" class="dropdown" :class="{ 'dark-mode': darkmode, 'light-mode': !darkmode }">
            <p v-for="unit in $props.units" :class="{ 'active-dropdown': $props.active.unit == unit.unit, 'dark-mode-text': darkmode, 'dark-mode-text-secondary': darkmode && $props.active.unit !== unit.unit, 'light-mode-text': !darkmode }"
                @click="changeUnit(unit)">{{ unit.unit }}</p>
        </div>
    </div>
</template>