<script lang="ts">
	import { onMount } from 'svelte';
	import { auth, googleProvider, db } from '../../firebase';
	import { authState } from 'rxfire/auth';
	let synth: SpeechSynthesis;
	let voices: SpeechSynthesisVoice[];

	let user: any;

	const unsubscribe = authState(auth).subscribe((u) => (user = u));

	function login() {
		auth.signInWithPopup(googleProvider);
	}
	onMount(() => {
		synth = window.speechSynthesis;
		voices = synth.getVoices();
	});

	let message = '';
	let timer: any;

	const debounce = (v: any) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			message = v.target.value;
			db.collection('screen').doc('text').update({ message });
		}, 750);
	};

	function speech() {
		const utterThis = new SpeechSynthesisUtterance(message);
		utterThis.voice = voices[159];
		synth.speak(utterThis);
	}
</script>

<main>
	<div class="absolute bottom-0 p-3 rounded-t-lg bg-zinc-800 w-full h-auto">
		{#if user}
			<div class="flex">
				<div class="grow ">
					<textarea
						class="bg-zinc-600 text-zinc-100 rounded p-2 w-full text-xl"
						on:input={debounce}
					/>
				</div>
				<div class="">
					<button on:click={speech} class="h-auto m-2 p-3 text-center rounded bg-zinc-500">
						TTS
					</button>
				</div>
			</div>
		{:else}
			<div class="">
				<button on:click={login} class="h-auto w-full m-2 p-3 text-center rounded bg-zinc-500">
					LOGIN
				</button>
			</div>
		{/if}
	</div>
</main>

<style>
</style>
