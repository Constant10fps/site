<script lang="ts">
    import ProjectCard from "$lib/components/projectCard.svelte";
    import Discord from "$lib/components/discord.svelte";
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
        TS・JS junior-intermediate level <br> C++ enjoyer
    </div>
    <div class="flex gap-3">
        <a
            target="_blank"
            class="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-90 transition-all"
            href="https://t.me/Constant0fps"><Send /></a
        >
        <a
            target="_blank"
            class="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-90 transition-all"
            href="https://github.com/Constant10fps"><Github /></a
        >
        <button
            class="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-90 transition-all"
            on:click={copyDiscordId}><Discord /></button
        >
        <a
            target="_blank"
            class="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-90 transition-all"
            href="https://twitter.com/Konstan91655710"><Twitter /></a
        >
    </div>
</div>
<!--Projects-->
<div class="grid md:grid-cols-2 xl:grid-cols-4 gap-3">
    <ProjectCard
        title="Portfolio Website"
        image="/site.png"
        url="https://github.com/Constant10fps/site"
        description="The website you're currently on. In development"
    />
    <ProjectCard
        title="test"
        image="/site.png"
        url="https://github.com/Constant10fps/site"
        description="test"
    />
</div>
