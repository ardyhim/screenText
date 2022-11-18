<script>
  import ScreenText from "./lib/components/screenText.svelte";
  import TextBox from "./lib/components/TextBox.svelte";
  let chat = false;
  if (location.pathname == "/chat") chat = true;
</script>

<div class="app">
  <main class="bg-zinc-900 w-screen h-screen">
    <div class="static h-screen">
      <ScreenText message="hello" />
      {#if chat}
        <TextBox />
      {/if}
    </div>
  </main>
</div>

<style>
</style>
