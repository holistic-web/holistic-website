<template>
	<div class="LandingPage">

		<hero />
		<div class="LandingPage__content">
			We are Holistic Web, a software development and web design collective with offices in London and Los Angeles. As an international team of experienced, enthusiastic developers,
			we aim to satisfy your needs with a quality affordable bespoke software solution.
		</div>

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

<style lang="scss" scoped>
@import '../../styles/theme';
@import '../../styles/colours';

.LandingPage {
	display: flex;
	justify-content: center;
	flex-direction: column;

	&__content {
		padding: $theme-page-padding;
		color: $colour-blue-light;
		font-size: $theme-font-size-large;
		text-align: center;
	}
}


</style>
