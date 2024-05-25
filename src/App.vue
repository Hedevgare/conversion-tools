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
    <RouterLink class="header-link" to="/temperature">Temperature Converter</RouterLink>
    <RouterLink class="header-link" to="/currency">Currency Converter</RouterLink>
  </div>
  <hr />
  <RouterView />
  <div class="footer">
    <p>{{ footer }}</p>
  </div>
</template>