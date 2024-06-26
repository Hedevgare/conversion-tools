<script>
import Dropdown from '../components/Dropdown.vue';
import Input from './Input.vue';
import { conversions } from "../helpers/conversions";
import { regexValidation } from "../helpers/validations";

export default {
    components: {
        'dropdown': Dropdown,
        'icon-input': Input
    },
    props: ["startFrom", "startTo", "units", "shouldRound"],
    data() {
        return {
            from: this.$props.startFrom,
            to: this.$props.startTo,
            fromValue: "",
            toValue: ""
        };
    },
    methods: {
        validateInput() {
            const regex = regexValidation(this.from);

            if (!this.fromValue) {
                this.toValue = "";
            } else if (regex.test(this.fromValue)) {
                this.from !== this.to ? this.toValue = this.startConversion() : this.toValue = this.fromValue;
            } else {
                this.toValue = "Invalid input!";
            }
        },
        startConversion() {
            let conversion = conversions[this.from][this.to](this.fromValue);
            if (this.shouldRound) {
                // Tests if the number converted has decimal part; if it has limits that part to 10 digits
                conversion % 1 === 0 ? conversion : conversion = parseFloat(conversion.toFixed(10));
            }
            return conversion;
        },
        setUnit(type, unit) {
            type === "from" ? this.from = unit : this.to = unit;
            if (this.from !== this.to) {
                this.toValue = this.startConversion(this.fromValue);
            }
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
    <div class="">
        <div class="flex flex-center conversion-block">
            <div class="relative">
                <div class="flex unit-label" @click="() => this.$refs.dropdownFrom.toggle()">
                    <p class="flex-1">{{ this.from }}</p>
                    <i class="dropdown-arrow margin-left-5"></i>
                </div>
                <dropdown ref="dropdownFrom" :active="this.from" :units="this.units"
                    @set-unit="(unit) => setUnit('from', unit)" />
            </div>
            <icon-input v-model="fromValue" name="fromValue" @input="validateInput" />
        </div>
        <div class="conversion-block conversion-icons">
            <img src="/swap.svg" title="Swap units" @click="swapUnits" />
            <img src="/reset.svg" title="Reset values" @click="resetValues" />
        </div>
        <div class="flex flex-center conversion-block">
            <div class="relative">
                <div class="flex unit-label" @click="() => this.$refs.dropdownTo.toggle()">
                    <p class="flex-1">{{ this.to }}</p>
                    <i class="dropdown-arrow margin-left-5"></i>
                </div>
                <dropdown ref="dropdownTo" :active="this.to" :units="this.units"
                    @set-unit="(unit) => setUnit('to', unit)" />
            </div>
            <icon-input v-model="toValue" :disabled="true" />
        </div>
    </div>
</template>