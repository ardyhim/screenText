<script>
  import ScreenText from "./lib/components/screenText.svelte";
  import TextBox from "./lib/components/TextBox.svelte";
  const urlParams = new URLSearchParams(location.search);
  let chat = false;
  if (urlParams.get("chat") == "1") chat = true;
  else chat = false;
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
