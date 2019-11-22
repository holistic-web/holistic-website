<template>
	<div class="LandingPage">

		<hero />
		<div class="LandingPage__content">
			We are Holistic Web, a software development and web design collective with offices in London and Los Angeles. As an international team of experienced, enthusiastic developers,
			we aim to satisfy your needs with a quality affordable bespoke software solution.
		</div>


<!-- 		<div class="PrescriptionPortfolio">

		<section class="PrescriptionPortfolio__content">
			<section class="PrescriptionPortfolio__content__text">
				This innovative service was developed to give doctors the ability to care more directly for patients.
				A doctor can create an individual schedule for each patient, issuing prescriptions,
				and questions about the patient's condition and scheduling appointments.
			</section>
		</section>
		<section class="PrescriptionPortfolio__content__prescription-image"/>
		</div> -->

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

.PrescriptionPortfolio {
	min-width: 100%;
	min-height: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;


	&__content {
		height: 50vh;
		padding: $theme-page-padding;

		&__text {
			padding: 10rem 4rem;
			position: absolute;
			left: 0px;
			width: 45%;
			text-align: center;
			color: $colour-blue-light;
			font-size: $theme-font-size-large;
		}
		&__prescription-image {
		position: absolute;
		bottom: -550px;
		right: 10px;
		background-repeat: no-repeat;
		background-size: contain;
		background-image: url('../../assets/prescription-image.png');
		width: 950px;
		height: 50vh;
	}
	}

}
</style>
