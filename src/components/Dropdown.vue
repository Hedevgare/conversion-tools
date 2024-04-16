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
        }
    }
}
</script>

<template>
    <div v-if="show" class="dropdown">
        <p v-for="unit in $props.units" :class="{'active-dropdown' : $props.active == unit}" @click="changeUnit(unit)">{{ unit }}</p>
    </div>
</template>