<script>
export default {
  computed: {
    footer() {
      return `Hedegare - 2024 ${import.meta.env.PROD ? '' : '(DEVELOPMENT)'}`
    }
  }
}
</script>

<template>
  <div class="header">
    <RouterLink class="header-link" to="/">Number Converter</RouterLink>
    <RouterLink class="header-link" to="/length">Length Converter</RouterLink>
  </div>
  <hr />
  <RouterView />
  <div class="footer">
    <p>{{ footer }}</p>
  </div>
</template>