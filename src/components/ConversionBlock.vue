<script>
import Dropdown from '../components/Dropdown.vue';
import Input from './Input.vue';
import Notification from './Notification.vue';
import { startConversion } from "../helpers/conversions";

export default {
    components: {
        'dropdown': Dropdown,
        'icon-input': Input,
        'notification': Notification
    },
    props: ["startFrom", "startTo", "units", "shouldRound"],
    data() {
        return {
            from: this.$props.startFrom,
            to: this.$props.startTo,
            fromValue: "",
            toValue: "",
            showNotification: false,
            timeoutId: null
        };
    },
    watch: {
        startFrom() {
            this.from = this.$props.startFrom;
            this.validateInput();
        },
        startTo() {
            this.to = this.$props.startTo;
            this.validateInput();
        }
    },
    methods: {
        validateInput() {
            if (!this.fromValue) {
                this.toValue = "";
            } else {
                this.from.unit !== this.to.unit ? this.toValue = this.handleConversion() : this.toValue = this.fromValue;
            }
        },
        handleConversion() {
            return startConversion(this.from.unit, this.to.unit, this.fromValue, this.shouldRound ? true : false);
        },
        setUnit(type, unit) {
            type === "from" ? this.from = unit : this.to = unit;
            this.validateInput();
        },
        swapUnits() {
            let swapUnit = this.from;
            this.from = this.to;
            this.to = swapUnit;
            this.validateInput();
        },
        resetValues() {
            this.fromValue = "";
            this.toValue = "";
        },
        openNotification() {
            this.showNotification = true;
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => {
                this.showNotification = false;
            }, 5000)
        },
        closeNotification() {
            this.showNotification = false;
        }
    },
};
</script>

<template>
    <p class="margin-bottom-50">Enter a value below and it will be converted from {{ this.from.unit }} to {{ this.to.unit }}</p>
    <div class="flex flex-center conversion-container">
        <div class="flex flex-center conversion-block">
            <icon-input v-model="fromValue" name="fromValue" @input="validateInput" :shorter="this.from.symbol" />
            <dropdown ref="dropdownFrom" :active="this.from" :units="this.units"
                @set-unit="(unit) => setUnit('from', unit)" />
        </div>
        <div class="flex conversion-block conversion-icons">
            <img class="conversion-icon padding-15" src="/swap.svg" title="Swap units" @click="swapUnits" />
            <img class="conversion-icon padding-15" src="/reset.svg" title="Reset values" @click="resetValues" />
        </div>
        <div class="flex flex-center conversion-block">
            <icon-input v-model="toValue" @open="openNotification" :disabled="true" :shorter="this.to.symbol" />
            <dropdown ref="dropdownTo" :active="this.to" :units="this.units"
                @set-unit="(unit) => setUnit('to', unit)" />
        </div>
        <notification v-if="showNotification" @close="closeNotification" data="Copied to the clipboard!" type="success" />
    </div>
</template>