<script>
export default {
  data() {
    return {
      binary: "",
      result: "",
    };
  },
  methods: {
    validateInput() {
      const regex = new RegExp("^[01]+$", "g");
      if (!this.binary) {
        this.result = "";
      } else if (regex.test(this.binary)) {
        this.convertBinary();
      } else {
        this.result = "Invalid input!";
      }
    },
    convertBinary() {
      this.result = this.binary
        .split("")
        .map((n) => parseInt(n))
        .reverse()
        .reduce(
          (total, currentBinary, index) =>
            total + currentBinary * Math.pow(2, index)
        );
    },
    swapUnits() {
      console.log("Swap pressed.");
    }
  },
};
</script>

<template>
  <h1>Number Converter</h1>
  <div class="flex flex-center convertion-block">
    <p>Binary</p>
    <input v-model="binary" @input="validateInput" />
  </div>
  <div class="convertion-block">
    <img src="swap.svg" @click="swapUnits" />
  </div>
  <div class="flex flex-center convertion-block">
    <p>Decimal</p>
    <input v-model="result" disabled />
  </div>
</template>
