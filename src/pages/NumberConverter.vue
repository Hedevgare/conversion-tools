<script>
import Dropdown from '../components/Dropdown.vue';
import * as convertions from '../helpers/convertions';

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
      switch (this.from) {
        case "Binary":
          regex = new RegExp("^[01]+$", "g");
          break;
        case "Octal":
          regex = new RegExp("^[0-7]+$", "g");
          break;
        case "Decimal":
          regex = new RegExp("^[0-9]+$", "g");
          break;
        case "Hexadecimal":
          regex = new RegExp("^[0-9A-F]+$", "g");
          break;
      }
      
      if (!this.fromValue) {
        this.toValue = "";
      } else if (regex.test(this.fromValue)) {
        this.toValue = this.startConvertion();
      } else {
        this.toValue = "Invalid input!";
      }
    },
    startConvertion() {
      if (this.from === "Binary") {
        if (this.to === "Octal") {
          return convertions.binaryToOctal(this.fromValue);
        } else if (this.to === "Decimal") {
          return convertions.binaryToDecimal(this.fromValue);
        } else if (this.to === "Hexadecimal") {
          return convertions.binaryToHexadecimal(this.fromValue);
        }
      } else if (this.from === "Octal") {
        if (this.to === "Binary") {
          return convertions.octalToBinary(this.fromValue);
        } else if (this.to === "Decimal") {
          return convertions.octalToDecimal(this.fromValue);
        } else if (this.to === "Hexadecimal") {
          return convertions.octalToHexadecimal(this.fromValue);
        }
      } else if (this.from === "Decimal") {
        if (this.to === "Binary") {
          return convertions.decimalToBinary(this.fromValue);
        } else if (this.to === "Octal") {
          return convertions.decimalToOctal(this.fromValue);
        } else if (this.to === "Hexadecimal") {
          return convertions.decimalToHexadecimal(this.fromValue);
        }
      } else if (this.from === "Hexadecimal") {
        if (this.to === "Binary") {
          return convertions.hexadecimalToBinary(this.fromValue);
        } else if (this.to === "Octal") {
          return convertions.hexadecimalToOctal(this.fromValue);
        } else if (this.to === "Decimal") {
          return convertions.hexadecimalToDecimal(this.fromValue);
        }
      }
    },
    setUnit(type, unit) {
      type === "from" ? this.from = unit : this.to = unit;
      this.resetValues();
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
    }
  },
};
</script>

<template>
  <section class="body">
    <h1 class="title">Number Converter</h1>
    <div class="flex flex-center convertion-block">
      <div class="relative flex-column">
        <div class="flex unit-label" @click="() => this.$refs.dropdownFrom.toggle()">
          <p class="flex-1">{{ this.from }}</p><i class="dropdown-arrow"></i>
        </div>
        <dropdown ref="dropdownFrom" :active="this.from" @set-unit="(unit) => setUnit('from', unit)" />
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
        <dropdown ref="dropdownTo" :active="this.to" @set-unit="(unit) => setUnit('to', unit)" />
      </div>
      <input v-model="toValue" disabled />
    </div>
  </section>
</template>
