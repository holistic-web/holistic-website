<template>
	<div class="Landing">

		<a href="/static/library/Medes/index.html">Medes</a>
		<a href="/static/library/ThisIsSoho/index.html">This is Soho</a>
		<a href="/static/library/Zinnia/index.html">Zinnia</a>


	</div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
@import '../../settings';

.Landing {
	position: relative;
	background-image: url('https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ccfcc13bfcdfca6f54a8e043ffbe075&auto=format&fit=crop&w=1290&q=80');
	background-size: cover;
	background-position: center;
	min-height: calc(100vh);

	&__loader {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

}

</style>

