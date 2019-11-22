<template>
	<div class="LandingPage">

		<div class="LandingPage__text">
			<h1 class="LandingPage__title">
				> Holistic <span class="LandingPage__title--highlight">Web</span>
			</h1>
			<span class="LandingPage__tagline">
				<span>Design. <span class="LandingPage__tagline--highlight">=></span> Build. <span class="LandingPage__tagline--highlight">=></span> Test. <span class="LandingPage__tagline--highlight">=></span> Repeat.</span>
			</span>
		</div>

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

	&__text {
		padding: 0.5rem 0.5rem;
		border-radius: $theme-border-radius;
		background-color: $colour-blue;
	}

	&__title {
		font-size: 5rem;
		color: $colour-blue-light;
		width: fit-content;
		margin: 0;

		&--highlight {
			color: $colour-orange;
		}
	}

	&__tagline {
		color: $colour-orange-dark;

		&--highlight {
			color: $colour-white;
		}
	}

	&__arrow {
		position: absolute;
		bottom: 3rem;
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
