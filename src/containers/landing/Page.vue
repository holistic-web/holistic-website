<template>
	<div class="LandingPage">

		<h1 class="LandingPage__title">
			> Holistic <span class="LandingPage__title--highlight">Web</span>
		</h1>

		<span class="LandingPage__arrow"/>


	</div>
</template>

<style lang="scss">
@import '../../styles/index';

.LandingPage {
	min-width: 100%;
	min-height: 100vh;
	background-image: url('../../assets/brick-wall.jpg');
	background-size: cover;
	background-position: center;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	&__title {
		font-size: 5rem;
		color: $colour-blue-light;
		background-color: $colour-blue;
		padding: 0 0.5rem;
		border-radius: $theme-border-radius;
		width: fit-content;

		&--highlight {
			color: $colour-orange;
		}
	}

	&__arrow {
		position: absolute;
		bottom: 2rem;
		right: 3rem;
		background-size: contain;
		background-repeat: no-repeat;
		background-image: url('../../assets/arrow-spray.png');
		transform: rotate(90deg);
		width: 10rem;
		height: 5rem;
	}
}

</style>
