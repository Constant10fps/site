<script lang="ts">
	import { Github, Twitter, Send, Slack } from "lucide-svelte";
	export function copyDiscordId() {
		navigator.clipboard.writeText("сonstant0fps");
	}
</script>

<!--@me and contacts menu-->
<div class="flex flex-col items-center gap-3 py-12">
	<img src="/favicon.png" alt="avatar" class="rounded-full aspect-square" />
	<div class="text-2xl font-extrabold">Constant0fps</div>
	<div class="align-center">
		Pythonista, 2 years of experience/ TS | JS junior-intermediate level
	</div>
	<div class="flex gap-3">
		<a
			class="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-90 transition-all"
			href="https://t.me/Constant0fps"><Send /></a
		>
		<a
			class="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-90 transition-all"
			href="https://github.com/Constant10fps"><Github /></a
		>
		<button
			class="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-90 transition-all"
			on:click={copyDiscordId}><Slack /></button
		>
		<a
			class="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-90 transition-all"
			href="https://twitter.com/Konstan91655710"><Twitter /></a
		>
	</div>
</div>
<!--Projects-->
<div class="grid grid-cols-2 gap-4">
	<a
		class="flex flex-row items-center gap-3 p-3 bg-left-top bg-slate-700 rounded-2xl hover:bg-slate-600 active:scale-95 transition-all"
		href="https://github.com/Constant10fps/shooter"
	>
		<img
			src="/pythonlogo.png"
			alt="logo"
			class="rounded-2xl aspect-square size-36"
		/>
		<div class="flex flex-col items-start">
			<div class="text-xl font-bold">Python Project Example</div>
			<div class="text-base font-medium text-left">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh arcu,
				sollicitudin eget neque et, viverra maximus ex. Sed varius nibh non
				egestas sodales. Pellentesque sodales sagittis orci vitae rutrum. Nunc
				laoreet volutpat massa, sit.
			</div>
		</div>
	</a>
	<a
		class="flex flex-row items-center gap-3 p-3 bg-left-top bg-slate-700 rounded-2xl hover:bg-slate-600 active:scale-95 transition-all"
		href="https://github.com/Constant10fps/site"
	>
		<img
			src="/tslogo.png"
			alt="logo"
			class="rounded-2xl aspect-square size-36"
		/>
		<div class="flex flex-col items-start">
			<div class="text-xl font-bold">TypeScript Project Example</div>
			<div class="text-base font-medium text-left">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh arcu,
				sollicitudin eget neque et, viverra maximus ex. Sed varius nibh non
				egestas sodales. Pellentesque sodales sagittis orci vitae rutrum. Nunc
				laoreet volutpat massa, sit.
			</div>
		</div>
	</a>
</div>
