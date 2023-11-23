import Feed from "@src/components/Feed";
import Nav from "@src/components/Nav";

export default function Home() {
  return (
    <main className="w-full flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold text-center">Discover & Share
      <br className="max-md:hidden" />
      <span className="text-2xl text-yellow-500 text-center font-mono font-extrabold">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Pormptopia is an open source for AI prompting tool for modern world to discover, create & share creating prompts
      </p>
      <Feed />
    </main>
  )
}
