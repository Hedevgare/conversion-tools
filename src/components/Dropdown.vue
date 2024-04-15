<script>
export default {
    props: ['active'],
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
        <p :class="{'active-dropdown' : $props.active == 'Binary'}" @click="changeUnit('Binary')">Binary</p>
        <p :class="{'active-dropdown' : $props.active == 'Octal'}" @click="changeUnit('Octal')">Octal</p>
        <p :class="{'active-dropdown' : $props.active == 'Decimal'}" @click="changeUnit('Decimal')">Decimal</p>
        <!-- <p :class="{'active-dropdown' : $props.active == 'Hexadecimal'}" @click="changeUnit('Hexadecimal')">Hexadecimal</p> -->
    </div>
</template>