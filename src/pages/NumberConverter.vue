<script>
import Dropdown from '../components/Dropdown.vue';
import { convertions } from "../helpers/convertions";

export default {
	components: {
		'dropdown': Dropdown
	},
	data() {
		return {
			from: "Binary",
			to: "Decimal",
			fromValue: "",
			toValue: "",
			units: ["Binary", "Octal", "Decimal", "Hexadecimal"]
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
			return convertions[this.from][this.to](this.fromValue);
		},
		setUnit(type, unit) {
			type === "from" ? this.from = unit : this.to = unit;
			this.toValue = this.startConvertion(this.fromValue);
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
				<dropdown ref="dropdownFrom" :active="this.from" :units="this.units" @set-unit="(unit) => setUnit('from', unit)" />
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
				<dropdown ref="dropdownTo" :active="this.to" :units="this.units" @set-unit="(unit) => setUnit('to', unit)" />
			</div>
			<input v-model="toValue" disabled />
		</div>
	</section>
</template>
