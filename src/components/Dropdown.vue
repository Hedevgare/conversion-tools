<script>
export default {
    props: ['active', 'units'],
    data() {
        return {
            show: false
        };
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
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }
}
</script>

<template>
    <div class="relative">
        <div class="flex unit-label" @click="toggle">
            <p class="flex-1">{{ this.active.unit }}</p>
            <i class="dropdown-arrow margin-left-5"></i>
        </div>
        <div v-if="show" class="dropdown">
            <p v-for="unit in $props.units" :class="{ 'active-dropdown': $props.active == unit.unit }"
                @click="changeUnit(unit)">{{ unit.unit }}</p>
        </div>
    </div>
</template>