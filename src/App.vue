<script>
export default {
  data() {
    return {
      binary: "",
      result: "Enter your binary number",
    };
  },
  methods: {
    validateInput() {
      const regex = new RegExp("^[01]+$", "g");
      if (!this.binary) {
        this.result = "Enter your binary number";
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
  },
};
</script>

<template>
  <h1>Bin2Dec</h1>
  <input v-model="binary" @input="validateInput" />
  <p>{{ result }}</p>
</template>

<style scoped>
h1 {
  font-size: 60px;
  margin-bottom: 65px;
}

p {
  font-size: 40px;
}

input {
  border-radius: 5px;
  height: 50px;
  font-size: 35px;
  text-align: center;
}
</style>
