<script lang="ts">
	import { db } from '../../firebase';
	const docMessage = db.collection('screen').doc('text');
	docMessage.onSnapshot((d) => {
		message = d.data().message;
        console.log(d.data().message);
	});
	export let message = '';
</script>

<main>
	<div class="absolute text-center content-center h-screen w-screen">
		<div class="absolute bottom-2/4 w-full">
			<h1 class="px-5 text-zinc-100 text-center text-6xl whitespace-pre-wrap">{message}</h1>
		</div>
	</div>
</main>

<style>
</style>
