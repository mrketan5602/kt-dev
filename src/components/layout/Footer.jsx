export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-12 text-center">

        <h2 className="text-3xl font-bold text-white">
          kt<span className="text-indigo-500">.</span>dev
        </h2>

        <p className="mt-4 text-zinc-400">
          Everything a Computer Science Student Needs.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/mrketan5602"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-indigo-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ketan-jadhav-31a865379"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-indigo-400"
          >
            LinkedIn
          </a>

          <a
            href="mailto:ketanjadhav788@gmail.com"
            className="text-zinc-400 hover:text-indigo-400"
          >
            Email
          </a>
        </div>

        <p className="mt-10 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
          © 2026 <span className="text-white">kt.dev</span> • Built by Ketan
          Jadhav
        </p>

      </div>
    </footer>
  );
}