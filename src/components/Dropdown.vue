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
        }
    }
}
</script>

<template>
    <div v-if="show" class="dropdown">
        <p :class="{'active-dropdown' : $props.active == 'Binary'}" @click="toggle">Binary</p>
        <p :class="{'active-dropdown' : $props.active == 'Octal'}" @click="toggle">Octal</p>
        <p :class="{'active-dropdown' : $props.active == 'Decimal'}" @click="toggle">Decimal</p>
        <p :class="{'active-dropdown' : $props.active == 'Hexadecimal'}" @click="toggle">Hexadecimal</p>
    </div>
</template>