<script lang="ts">
	import ProjectCard from "$lib/components/projectCard.svelte";
	import { Github, Twitter, Send, Slack } from "lucide-svelte";
	export function copyDiscordId() {
		navigator.clipboard.writeText("сonstant0fps");
	}
</script>

<!--@me and contacts menu-->
<div class="flex flex-col items-center gap-3 py-12">
	<img src="/favicon.png" alt="avatar" class="rounded-full aspect-square" />
	<div class="text-3xl font-extrabold">Constant0fps</div>
	<div class="align-center text-center text-lg">
		Pythonista, 2 years of experience <br /> TS・JS junior-intermediate level
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
		<!--<button
			class="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-90 transition-all"
			on:click={copyDiscordId}><Slack /></button
		>-->
		<a
			class="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-90 transition-all"
			href="https://twitter.com/Konstan91655710"><Twitter /></a
		>
	</div>
</div>
<!--Projects-->
<div class="grid md:grid-cols-2 xl:grid-cols-4 gap-3">
	<ProjectCard
		title="Python Project Example"
		image="/pythonlogo.png"
		url="https://github.com/Constant10fps/shooter"
		description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam enim, euismod ultricies volutpat in. "
	/>
	<ProjectCard
		title="TS Project Example"
		image="/tslogo.png"
		url="https://github.com/Constant10fps/site"
		description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam enim, euismod ultricies volutpat in. "
	/>
</div>
