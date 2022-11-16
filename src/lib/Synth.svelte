<script>
    const synth = window.speechSynthesis;
    var voiceList = synth.getVoices();
</script>

<ul>
    {#each voiceList as voice}
        <li>{voice.name}</li>
    {/each}
</ul>