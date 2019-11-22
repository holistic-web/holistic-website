<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
@import './styles/colours';

body {
	margin: 0;
}

#app {
	font-family: 'Fira Code', monospace;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: $colour-white;
	background: $colour-blue;
}
</style>
