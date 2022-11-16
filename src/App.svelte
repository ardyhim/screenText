<script>
  import Synth from "./lib/Synth.svelte";
  let message = "";

  let timer;
  const synth = window.speechSynthesis;

  let voices = synth.getVoices();

  const debounce = (v) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(v);
      message = v.target.value;
    }, 750);
  };

  function speech(){
    console.log("speech")
    const utterThis = new SpeechSynthesisUtterance(message);
    console.log(voices[1]);
    utterThis.voice = voices[159];
    synth.speak(utterThis);
  }
</script>

<main>
  <div class="static h-screen">
    <div class="absolute text-center content-center h-screen w-screen">
      <div class="absolute bottom-2/4 w-full">
        <h1 class="text-center text-6xl whitespace-pre-wrap">{message}</h1>
      </div>
    </div>
    <div class="absolute bottom-0 p-3 rounded-t-lg bg-zinc-800 w-full h-auto">
      <div class="flex">
        <div class="grow ">
          <textarea class="rounded p-2 w-full text-xl" on:input={debounce} />
        </div>
        <div class=""><button on:click={speech} class="h-auto m-2 p-3 text-center rounded bg-zinc-500"> TTS </button></div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
