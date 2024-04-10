<script>
export default {
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
        <p>dropdown1</p>
        <p>dropdown2</p>
        <p>dropdown3</p>
    </div>
</template>