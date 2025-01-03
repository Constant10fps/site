import Card from "../components/Card.tsx";
import Twitter from "../components/brands/Twitter.tsx";
import Github from "../components/brands/Gtihub.tsx";
import Send from "../components/brands/Send.tsx";
import Telegram from "../components/brands/Telegram.tsx";
import DiscordButton from "../islands/Discord.tsx";

export default function Home() {
  return (
    <main>
      <div class="container p-5 text-4xl my-20">Develop cringe products.</div>
      {/* Links */}
      <div class="p-5 flex flex-row gap-3 justify-center">
        <a
          target="_blank"
          class="button-link"
          href="mailto:constant0fps@yandex.ru"
        >
          <Send />
        </a>
        <a
          target="_blank"
          class="button-link"
          href="https://t.me/Constant0fps"
        >
          <Telegram />
        </a>
        <a
          target="_blank"
          class="button-link"
          href="https://github.com/Constant10fps"
        >
          <Github />
        </a>
        <DiscordButton />
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
          title={"Duty Bot"}
          desc={"A Telegram bot to manage class duty management. Currently in use."}
          page_url={"https://github.com/Constant10fps/duty-bot"}
        />
        <Card
          title={"My website"}
          desc={"This website you're on! Built with Deno Fresh. In development."}
          page_url={"/"}
        />
        <Card
          title={"Mediane Bot"}
          desc={"A project I work on with mckoda09. Used for canteen management."}
          page_url={"https://github.com/mckoda09/mediane-bot"}
        />
      </div>
    </main>
  );
}
