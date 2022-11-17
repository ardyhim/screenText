<script>
	import ScreenText from './components/ScreenText.svelte';
	import TextBox from './components/TextBox.svelte';
</script>

<svelte:head>
	<title>ScreenText</title>
	<meta name="description" content="Screen Text" />
</svelte:head>

<main class="bg-zinc-900 w-screen h-screen">
	<div class="static h-screen">
		<ScreenText message="hello"/>
	  </div>
</main>

<style>
	
</style>
