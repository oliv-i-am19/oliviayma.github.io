import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="flex flex-col items-center gap-10 md:flex-row md:items-start">
        {/* Headshot */}
        <div className="shrink-0">
          <Image
            src="/images/banff_headshot.jpg"
            alt="Olivia Ma headshot"
            width={240}
            height={240}
            className="rounded-full shadow-lg"
            priority
          />
        </div>

        {/* Text block */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">Hi, I’m Olivia</h1>

          <p className="text-lg text-gray-500 italic">Robotics • Control • Autonomy</p>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            I’m a robotics engineer interested in autonomy, control systems, and energy-efficient
            robotic platforms. I work across simulation, hardware experimentation, and
            optimization-based control.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            This site showcases my projects, research, and technical writing.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/resume"
              className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Resume
            </Link>

            <Link
              href="/projects"
              className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              Projects
            </Link>

            <a
              href="https://www.linkedin.com/in/oliviayma"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
