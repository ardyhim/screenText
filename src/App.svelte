<script>
  import Synth from "./lib/Synth.svelte";
  let message ="";

  let timer;

	const debounce = v => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			message = v;
      console.log(v);
		}, 750);
	}
</script>

<main>
  <div class="static h-screen">
    <div class="absolute text-center content-center h-screen w-screen">
      <div class="absolute bottom-2/4 w-full">
        <h1 class="text-center text-6xl whitespace-pre-wrap">{message}</h1>
      </div>
      
    </div>
    <div class="absolute bottom-0 rounded-t-lg bg-zinc-800 w-full h-auto">
      <form on:submit|preventDefault={debounce}>
      <div class="mx-5 my-5 text-center">
        <textarea class="rounded p-2 w-full text-xl" bind:value={message}></textarea>
      </div>
      </form>
    </div>
  </div>
</main>

<style>
  
</style>
