<script>
import NumberConverter from "./components/NumberConverter.vue";
import LengthConverter from "./components/LengthConverter.vue"

export default {
  components: {
    NumberConverter,
    LengthConverter
  },
  data() {
    return {
      type: "number"
    };
  },
  methods: {
    changeType(type) {
      this.type = type;
    }
  }
}
</script>

<template>
  <div class="header">
    <p class="header-link" @click="changeType('number')">Number Converter</p>
    <p class="header-link" @click="changeType('length')">Length Converter</p>
  </div>
  <hr />
  <NumberConverter v-if="type == 'number'" />
  <LengthConverter v-if="type == 'length'" />
</template>
