<template>
	<div class="LandingPage">

		<hero />

		<section class="LandingPage__content">
			<h3 class="LandingPage__aboutUs__title">About Us</h3>
			<p class="LandingPage__aboutUs">
				We are Holistic Web, a software development and web design collective with offices in London and Los Angeles. As an international team of experienced, enthusiastic developers,
				we aim to satisfy your needs with a quality affordable bespoke software solution.
			</p>
			<h3 class="LandingPage__aboutUs__title">Our work</h3>
			<p class="LandingPage__aboutUs">
				We love web development and understand the value of a modern, innovative and polished website in this digital age.
				We cater to businesses or individuals and specialize at producing a professional brand-enhancing product for a variety of budgets. Take a look at some of our projects:
			</p>
		</section>

	</div>
</template>

<script>
import Hero from './components/Hero.vue';

export default {
	components: {
		Hero
	}
};
</script>

<style lang="scss">
@import '../../styles/theme';
@import '../../styles/colours';

.LandingPage {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	&__content {
		margin-top: 3rem;
	}

	&__aboutUs {
		width: $theme-page-width-desktop;
		color: $colour-white;
		font-size: $theme-font-size-large;
		text-align: left;
		margin-top: 0.5rem;
		float: right;

		&__title {
			font-family: $theme-font-title;
			text-align: left;
			margin: 0;
			margin-bottom: 1.5rem;
			font-size: $theme-font-size-large;
			text-transform: uppercase;
			letter-spacing: 0.1rem;
			color: $colour-blue-light;
		}
	}

}


</style>
