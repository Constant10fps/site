import Discord from "../components/brands/Discord.tsx";

export default function DiscordButton() {
  return (
    <button
      class="button-link"
      onClick={async () => await navigator.clipboard.writeText("constant0fps")}
    >
      <Discord />
    </button>
  );
}
