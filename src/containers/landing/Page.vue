<template>
	<div class="LandingPage">
		<h1 class="LandingPage__title">Holistic <span class="LandingPage__title--highlight">Web</span></h1>
	</div>
</template>

<style lang="scss">
.LandingPage {
	min-width: 100%;
	min-height: 100vh;
	background-image: url('../../assets/road.jpg');
	background-size: cover;
	background-position: center;

	display: flex;
	flex-direction: column;
	justify-content: center;

	&__title {
		font-size: 5rem;
		color: #fff;

		&--highlight {
			color: cyan;
		}
	}
}
</style>
