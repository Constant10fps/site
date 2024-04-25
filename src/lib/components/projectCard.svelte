<script lang="ts">
    export let url;
    export let title;
    export let image;
    export let description;
</script>

<a
    href={url}
    class="border border-white/30 bg-slate-800 rounded-xl p-5 space-y-1"
>
    <img src={image} alt="logo" class="size-36 mb-5" />
    <div class="text-xl font-bold">{title}</div>
    <div class="text-lg">
        {description}
    </div>
</a>
