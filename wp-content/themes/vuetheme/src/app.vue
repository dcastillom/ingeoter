<script src="./app.js"></script>

<template>
	<div>
		<RightMenu></RightMenu>
		<Header></Header>  

		<div id="content">
			<Company v-if="activeContent === 'index'"></Company>
			<router-view></router-view>
		</div>

		<Footer></Footer>
	</div>
</template>

