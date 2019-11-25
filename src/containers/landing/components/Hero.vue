<template>
	<div class="LandingHero">

		<div class="LandingHero__text">
			<h1 class="LandingHero__title">
				<span class="helper-colour-white">></span> Holistic <span class="LandingHero__title--highlight">Web</span>
			</h1>
			<span class="LandingHero__tagline">
				<span>Design. <span class="helper-colour-white">=></span> Build. <span class="helper-colour-white">=></span> Test. <span class="helper-colour-white">=></span> Repeat.</span>
			</span>
		</div>

		<span class="LandingHero__arrow" v-scroll-to="{el: '#scroll'}"/>

	</div>
</template>

<style lang="scss">
@import '../../../styles/helper-classes';
@import '../../../styles/theme';

.LandingHero {
	font-family: $theme-font-title;
	min-width: 250%;
	min-height: 100vh;
	background-image: linear-gradient(to right bottom, rgba(30, 32, 172, 0.7), rgba(50, 185, 219, 0.6)), url(../../../assets/circle.gif);
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	&__text {
		padding: 0.5rem 0.5rem;
		border-radius: $theme-border-radius;
		// background-color: $colour-blue;
	}

	&__title {
		font-size: $theme-font-size-largest;
		color: $colour-blue-light;
		width: fit-content;
		margin: 0;

		&--highlight {
			color: $colour-orange;
		}
	}

	&__tagline {
		color: $colour-orange-dark;
		font-size: $theme-font-size-medium;
	}

	&__arrow {
		position: absolute;
		bottom: 3rem;
		right: 3rem;
		background-size: contain;
		background-repeat: no-repeat;
		background-image: url('../../../assets/arrow-spray.png');
		transform: rotate(90deg);
		width: 10rem;
		height: 5rem;
	}
}

</style>
