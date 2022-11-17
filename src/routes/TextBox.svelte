<script lang='ts'>
    import { onMount } from 'svelte';
    let synth:SpeechSynthesis;
    let voices:SpeechSynthesisVoice[];
    onMount(() => {
        synth = window.speechSynthesis;
        voices = synth.getVoices();
    })

    let message = "";
    let timer:any;
  
    const debounce = (v:any) => {
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
    <div class="absolute bottom-0 p-3 rounded-t-lg bg-zinc-800 w-full h-auto">
        <div class="flex">
          <div class="grow ">
            <textarea class="bg-zinc-600 text-zinc-100 rounded p-2 w-full text-xl" on:input={debounce} />
          </div>
          <div class=""><button on:click={speech} class="h-auto m-2 p-3 text-center rounded bg-zinc-500"> TTS </button></div>
        </div>
      </div>
  </main>
  
  <style>
  </style>