<script>
import Dropdown from '../components/Dropdown.vue';
import * as convertions from '../helpers/lengthConvertions';

export default {
	components: {
		'dropdown': Dropdown
	},
	data() {
		return {
			from: "Meters",
			to: "Feet",
			fromValue: "",
			toValue: "",
			units: ["Meters", "Feet"]
		};
	},
	methods: {
		validateInput() {
			let regex = new RegExp("^[0-9.0-9]+$", "g");

			if (!this.fromValue) {
				this.toValue = "";
			} else if (regex.test(this.fromValue)) {
				this.toValue = this.startConvertion();
			} else {
				this.toValue = "Invalid input!";
			}
		},
		startConvertion() {
			if (this.from === "Meters") {
				if (this.to === "Feet") {
					return convertions.metersToFeet(this.fromValue);
				}
			} else if (this.from === "Feet") {
				if (this.to === "Meters") {
					return convertions.feetToMeters(this.fromValue);
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
	}
}
</script>

<template>
	<section class="body">
		<h1 class="title">Length Converter</h1>
		<div class="flex flex-center convertion-block">
			<div class="relative flex-column">
				<div class="flex unit-label" @click="() => this.$refs.dropdownFrom.toggle()">
					<p class="flex-1">{{ this.from }}</p><i class="dropdown-arrow"></i>
				</div>
				<dropdown ref="dropdownFrom" :active="this.from" :units="this.units"
					@set-unit="(unit) => setUnit('from', unit)" />
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
				<dropdown ref="dropdownTo" :active="this.to" :units="this.units"
					@set-unit="(unit) => setUnit('to', unit)" />
			</div>
			<input v-model="toValue" disabled />
		</div>
	</section>
</template>