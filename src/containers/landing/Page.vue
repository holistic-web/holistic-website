<template>
	<div class="LandingPage">

		<hero />

		<section class="LandingPage__content">
			lorem bacon and ting - wagwan.
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

<style lang="scss" scoped>
@import '../../styles/theme';

.LandingPage {
	display: flex;
	justify-content: center;
	flex-direction: column;

	&__content {
		width: $theme-page-width-desktop;
		padding: $theme-page-padding;
		text-align: left;
	}
}
</style>
