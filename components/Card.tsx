export default function Card(
  { title, desc, page_url },
) {
  return (
    <main>
      <button class="container p-5 rounded-2xl bg-neutral-700 border border-neutral-400/30 hover:bg-neutral-600">
        <a href={page_url}>
          <div class="text-xl font-bold">{title}</div>
          <div>{desc}</div>
        </a>
      </button>
    </main>
  );
}
