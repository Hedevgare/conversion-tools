<script>
export default {
	data() {
		return {
			appVersion: 'v0.5.1',
			isMenuOpen: false,
		}
	},
	computed: {
		footer() {
			return `Hedegare 2024 - ${this.appVersion}${import.meta.env.PROD ? '' : '(DEVELOPMENT)'}`
		}
	},
	methods: {
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen;
		}
	}
}
</script>

<template>
	<div class="header">
		<div class="hamburger-button" :class="{ 'open': isMenuOpen }" @click="toggleMenu">
			<div class="bar-1"></div>
			<div class="bar-2"></div>
			<div class="bar-3"></div>
		</div>
	</div>
	<hr />
	<section class="menu" :class="{ 'open': isMenuOpen }">
		<div class="menu-container">
			<div class="menu-item">
				<RouterLink class="header-link" to="/" @click="toggleMenu">
					<font-awesome-icon :icon="['fa', 'hashtag']" />
					Numbers
				</RouterLink>
			</div>
			<div class="menu-item">
				<RouterLink class="header-link" to="/length" @click="toggleMenu">
					<font-awesome-icon :icon="['fa', 'ruler']" />
					Lengths
				</RouterLink>
			</div>
			<div class="menu-item">
				<RouterLink class="header-link" to="/temperature" @click="toggleMenu">
					<font-awesome-icon :icon="['fa', 'temperature-half']" />
					Temperatures
				</RouterLink>
			</div>
			<div class="menu-item">
				<RouterLink class="header-link" to="/volume" @click="toggleMenu">
					<font-awesome-icon :icon="['fa', 'flask']" />
					Volumes
				</RouterLink>
			</div>
			<div class="menu-item">
				<RouterLink class="header-link" to="/weight" @click="toggleMenu">
					<font-awesome-icon :icon="['fa', 'weight-hanging']" />
					Weights
				</RouterLink>
			</div>
			<div class="menu-item">
				<RouterLink class="header-link" to="/time" @click="toggleMenu">
					<font-awesome-icon :icon="['fa', 'hourglass']" />
					Times
				</RouterLink>
			</div>
			<div class="menu-item">
				<RouterLink class="header-link" to="/" @click="toggleMenu">
					<font-awesome-icon :icon="['fa', 'clone']" />
					Areas
				</RouterLink>
			</div>
		</div>
	</section>
	<RouterView />
	<div class="footer">
		<p>{{ footer }}</p>
	</div>
</template>

<style scoped>
.hamburger-button {
	margin: 10px 30px;
	cursor: pointer;
}

.bar-1,
.bar-2,
.bar-3 {
	width: 35px;
	height: 3px;
	background-color: #a0d2db;
	margin: 6px 0;
	transition: 0.4s;
}

.open>.bar-1 {
	transform: translate(0, 9px) rotate(-45deg);
	transition-duration: (100);
}

.open>.bar-2 {
	opacity: 0;
}

.open>.bar-3 {
	transform: translate(0, -9px) rotate(45deg);
}

.menu {
	display: none;
	z-index: 1;
	width: 100%;
	height: calc(100% - 55px);
	top: 55px;
	position: fixed;
	background-color: #2e2e3a;
}

.menu.open {
	display: block;
	/* flex-wrap: wrap; */
}

.menu-container {
	display: flex;
	flex-wrap: wrap;
	margin: 15px;
}
</style>