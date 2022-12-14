export default function Index() {
  return (
    <div className="justify-center mt-10">
    <div className="flex justify-center">
    <h1 className="text-3xl font-extrabold">Serverless Userpics</h1>
    </div>
    <div className="justify-center flex py-10 font-mono">

    <span className="block text-amber-300">
      <span className="flex">
        <a className="text-blue-300" href="https://github.com/arthtyagi/serverless-userpics">View on GitHub
        </a>
        <svg className="w-5 h-5 ml-2 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
              clipRule="evenodd"
            />
          </svg>
      </span>
      <span className="block"><a href="/api/getpic"> Get a random userpic (Fetch)</a></span>
      <span className="block"><a href="/api/avatar?stream=true"> Get an avatar (Fetch)</a></span>
    </span>

    </div>

    <h2 className="justify-center flex text-2xl font-extrabold">Instructions</h2>
    <div className="justify-center flex py-5">
      <span className="block">
        Please check out the
        <a
        className="text-amber-300 text-xl m-2 uppercase font-extrabold"
        href="https://github.com/devclad-inc/serverless-userpics/blob/main/README.md"
        >
          readme
        </a>
        on GitHub for instructions on how to use this. (It's easy!)
      </span>
    </div>

  <div className="justify-center flex">
  <span className="block">
      <a
          href="https://devclad.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-blue-300"
        >
          Open-sourced by DevClad
        </a>
  </span>
    </div>
  </div>
  );
}
