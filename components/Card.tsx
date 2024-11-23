export default function Card(
  { title, desc, page_url, image },
) {
  return (
    <main>
      <button class="container p-5 rounded-2xl bg-neutral-700 border border-neutral-400/30 hover:bg-neutral-600">
        <a href={page_url}>
          <img src={image} alt="image of a project" />
          <div class="p-5 text-xl font-bold">{title}</div>
          <div class="text-lg">{desc}</div>
        </a>
      </button>
    </main>
  );
}
