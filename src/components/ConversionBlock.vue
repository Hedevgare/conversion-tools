<script>
import Dropdown from '../components/Dropdown.vue';
import Input from './Input.vue';
import { startConvertion } from "../helpers/conversions";

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
            if (!this.fromValue) {
                this.toValue = "";
            } else {
                this.from !== this.to ? this.toValue = this.startConversion() : this.toValue = this.fromValue;
            }
        },
        startConversion() {
            return startConvertion(this.from.unit, this.to.unit, this.fromValue, this.shouldRound ? this.shouldRound : false);
        },
        setUnit(type, unit) {
            type === "from" ? this.from = unit : this.to = unit;
            this.validateInput();
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
            <dropdown ref="dropdownFrom" :active="this.from" :units="this.units"
                @set-unit="(unit) => setUnit('from', unit)" />
            <icon-input v-model="fromValue" name="fromValue" @input="validateInput" :shorter="this.from.symbol" />
        </div>
        <div class="conversion-block conversion-icons">
            <img src="/swap.svg" title="Swap units" @click="swapUnits" />
            <img src="/reset.svg" title="Reset values" @click="resetValues" />
        </div>
        <div class="flex flex-center conversion-block">
            <dropdown ref="dropdownTo" :active="this.to" :units="this.units"
                @set-unit="(unit) => setUnit('to', unit)" />
            <icon-input v-model="toValue" :disabled="true" :shorter="this.to.symbol" />
        </div>
    </div>
</template>