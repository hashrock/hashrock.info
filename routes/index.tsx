export default function Home() {
  return (
    <div class="mt-16 mx-auto space-y-12 max-w-screen-md">
      <iframe class="w-full h-[360px]" src="https://hashrock.netlify.com/components/editme.html"></iframe>

      <h1 class="text-4xl">@hashrock</h1>
      <ul class="list-circle">
        <li>
          Tokyo based Illustrator / Hacker{" "}
          <a
            class="text-blue-500 hover:text-blue-800 focus:text-blue-800"
            href="https://github.com/denoland/"
          >
            @denoland
          </a>
        </li>
        <li>
          <a
            class="text-blue-500 hover:text-blue-800 focus:text-blue-800"
            href="https://hashrock.studio.site/en"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            class="text-blue-500 hover:text-blue-800 focus:text-blue-800"
            href="https://github.com/hashrock"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            class="text-blue-500 hover:text-blue-800 focus:text-blue-800"
            href="https://twitter.com/hashedrock"
          >
            Twitter
          </a>
        </li>
      </ul>
    </div>
  );
}
