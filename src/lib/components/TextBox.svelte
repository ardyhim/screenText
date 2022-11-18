<script lang="ts">
	import { auth, googleProvider, db } from '../../firebase';
	import { authState } from 'rxfire/auth';
	import { getAuth } from 'firebase/auth';
	let synth = window.speechSynthesis;
	let lang;
	let utterThis;
	let message = '';
	let voices;
	setTimeout(() => {
		voices = synth.getVoices().filter((voice) => {
			if (
				voice.lang == 'id-ID' ||
				voice.lang == 'jv-ID' ||
				voice.lang == 'su-ID' ||
				voice.lang == 'en-AU' ||
				voice.lang == 'en-US' ||
				voice.lang == 'en-UK'
			) {
				return voice;
			}
		});
	}, 100);

	let user;
	const unsubscribe = authState(getAuth()).subscribe((u) => (user = u));

	function login() {
		auth.signInWithPopup(googleProvider);
	}

	let timer;
	const debounce = (v) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			message = v.target.value;
			db.collection('screen').doc('text').update({ message });
		}, 750);
	};

	function speech() {
		utterThis = new SpeechSynthesisUtterance(message);
		utterThis.voice = lang;
		synth.speak(utterThis);
	}
</script>

<main>
	<div class="absolute bottom-0 p-3 rounded-t-lg bg-zinc-800 w-full h-32">
		{#if user}
			<div class="flex">
				<div class="grow">
					<textarea
						class="bg-zinc-600 text-zinc-100 rounded p-2 w-full h-auto text-xl"
						on:input={debounce}
					/>
				</div>
				<div class="flex-row">
					<select bind:value={lang} class="rounded bg-zinc-600 p-2 mx-2" id="voice">
						{#each voices as voice}
							<option value={voice} class="bg-zinc-800  text-zinc-500">{voice.name}</option>
						{/each}
					</select>
					<div class="mt-2">
						<button on:click={speech} class="h-auto mx-2 p-3 text-center rounded bg-zinc-500">
							PLAY
						</button>
						<button
							on:click={() => synth.cancel()}
							class="h-auto mx-2 p-3 text-center rounded bg-zinc-500"
						>
							STOP
						</button>
						<button
							on:click={() => synth.pause()}
							class="h-auto mx-2 p-3 text-center rounded bg-zinc-500"
						>
							PAUSE
						</button>
						<button
							on:click={() => synth.resume()}
							class="h-auto mx-2 p-3 text-center rounded bg-zinc-500"
						>
							RESUME
						</button>
					</div>
				</div>
			</div>
		{:else}
			<div class="">
				<button on:click={login} class="h-auto w-full p-3 text-center rounded bg-zinc-500">
					LOGIN
				</button>
			</div>
		{/if}
	</div>
</main>

<style>
</style>
