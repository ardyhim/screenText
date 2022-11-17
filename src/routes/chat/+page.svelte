<script lang="ts">
	import ScreenText from '../components/ScreenText.svelte';
	import TextBox from '../components/TextBox.svelte';
</script>

<svelte:head>
	<title>Chat</title>
	<meta name="description" content="Chat Dashboard" />
</svelte:head>

<main>
	<div class="bg-zinc-900 w-screen h-screen">
		<ScreenText message="hello"/>
		<TextBox/>
	</div>
</main>

<style>
</style>
