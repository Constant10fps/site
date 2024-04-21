<script lang="ts">
    import { Github, Twitter, Send, Slack } from "lucide-svelte";
    export function copyDiscordId() {
        navigator.clipboard.writeText("сonstant0fps");
    }
</script>

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
<div class="grid grid-cols-2"></div>
