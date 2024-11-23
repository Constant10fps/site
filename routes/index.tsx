import Card from "../components/Card.tsx";
import Discord from "../components/brands/Discord.tsx";
import Twitter from "../components/brands/Twitter.tsx";
import Github from "../components/brands/Gtihub.tsx";
import Send from "../components/brands/Send.tsx";
export default function Home() {
  return (
    <main>
      <div class="bg-gradient-to-t from-neutral-800 to-teal-600 p-28 max-sm:p-10">
        <div class="container p-5 text-4xl">Develop cringe products.</div>
      </div>
      {/* Links */}
      <div class="pt-5 flex flex-row gap-3 justify-center">
        <a
          target="_blank"
          class="button-link"
          href="https://t.me/Constant0fps"
        >
          <Send />
        </a>
        <a
          target="_blank"
          class="button-link"
          href="https://github.com/Constant10fps"
        >
          <Github />
        </a>
        <button class="button-link">
          <Discord />
        </button>
        <a
          target="_blank"
          class="button-link"
          href="https://twitter.com/Konstan91655710"
        >
          <Twitter />
        </a>
      </div>
      <div class="container p-5">
        Hi, Im Constant0fps{" "}
        <i>(c0fps, constant, etc.)</i>, and I dont take things seriously
      </div>
      {/* Projects */}
      <div class="container p-5 grid grid-cols-3 gap-3 max-sm:grid-cols-1">
        <Card
          title={"project"}
          desc={"a project"}
          page_url={"https://github.com"}
          image={"/tslogo.svg"}
        />
      </div>
    </main>
  );
}
