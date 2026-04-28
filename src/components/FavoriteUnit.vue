<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isFavorite: JSON.parse(localStorage.getItem("favoriteUnits") || '[]').includes(this.name)
        };
    },
    watch: {
        name(newName) {
            this.isFavorite = JSON.parse(localStorage.getItem("favoriteUnits") || '[]').includes(newName);
        }
    },
    methods: {
        toggleFavorite() {
            this.isFavorite = !this.isFavorite;
            let favorites = JSON.parse(localStorage.getItem("favoriteUnits") || '[]');
            this.isFavorite ? favorites.push(this.name) : favorites.splice(favorites.indexOf(this.name), 1);
            localStorage.setItem("favoriteUnits", JSON.stringify(favorites));
            window.dispatchEvent(new CustomEvent('favoriteUnits-updated', { detail: favorites }));
        }
    }
}
</script>

<template>
    <span @click="toggleFavorite">
        <font-awesome-icon v-if="isFavorite" :icon="['fa', 'heart']" />
        <font-awesome-icon v-else :icon="['far', 'heart']" />
    </span>
</template>

<style scoped>
span {
    cursor: pointer;
}
</style>