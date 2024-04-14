<script>
import Dropdown from '../components/Dropdown.vue';

export default {
  components: {
    'dropdown': Dropdown
  },
  data() {
    return {
      from: "Binary",
      to: "Decimal",
      fromValue: "",
      toValue: ""
    };
  },
  methods: {
    validateInput() {
      let regex;
      if (this.to == "Decimal") {
        regex = new RegExp("^[01]+$", "g");
      } else {
        regex = new RegExp("^[0-9]+$", "g");
      }
      if (!this.fromValue) {
        this.toValue = "";
      } else if (regex.test(this.fromValue)) {
        this.to == "Decimal" ? this.convertBinary() : this.convertDecimal();
      } else {
        this.toValue = "Invalid input!";
      }
    },
    convertBinary() {
      this.toValue = this.fromValue
        .split("")
        .map((n) => parseInt(n))
        .reverse()
        .reduce(
          (total, currentBinary, index) =>
            total + currentBinary * Math.pow(2, index)
        );
    },
    convertOctal() {

    },
    convertDecimal() {
      let decimal = parseInt(this.fromValue);
      this.toValue = "";
      while (decimal >= 0) {
        let binary = decimal % 2;
        decimal = Math.floor(decimal / 2);
        this.toValue = binary + this.toValue;
        if (decimal === 0) break; // Break the loop to prevent infinite loop once the decimal value reaches 0.
      }
    },
    convertHexadecimal() {

    },
    swapUnits() {
      let swapValue = this.fromValue;
      this.fromValue = this.toValue;
      this.toValue = swapValue;
      let swapUnit = this.from;
      this.from = this.to;
      this.to = swapUnit;
    },
    resetValues() {
      this.fromValue = "";
      this.toValue = "";
    },
    log(msg) {
      console.log(msg)
    }
  },
};
</script>

<template>
  <section class="body">
    <h1>Number Converter</h1>
    <div class="flex flex-center convertion-block">
      <div class="relative flex-column">
        <div class="flex unit-label" @click="() => this.$refs.dropdownFrom.toggle()">
          <p class="flex-1">{{ this.from }}</p><i class="dropdown-arrow"></i>
        </div>
        <dropdown ref="dropdownFrom" active="Binary" />
      </div>
      <input v-model="fromValue" @input="validateInput" />
    </div>
    <div class="convertion-block">
      <img src="/swap.svg" title="Swap units" @click="swapUnits" />
      <img src="/reset.svg" title="Reset values" @click="resetValues" />
    </div>
    <div class="flex flex-center convertion-block">
      <div class="relative flex-column">
        <div class="flex unit-label" @click="() => this.$refs.dropdownTo.toggle()">
          <p class="flex-1">{{ this.to }}</p><i class="dropdown-arrow"></i>
        </div>
        <dropdown ref="dropdownTo" active="Decimal" />
      </div>
      <input v-model="toValue" disabled />
    </div>
  </section>
</template>
