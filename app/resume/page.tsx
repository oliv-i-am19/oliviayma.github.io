import Link from 'next/link'

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-bold">Resume</h1>

      {/* Embed PDF using object tag */}
      <div className="mb-6 border border-gray-300">
        <object data="/OliviaMa_Resume_2025.pdf" type="application/pdf" width="100%" height="600px">
          <p>
            Your browser does not support PDFs.{' '}
            <a href="/OliviaMa_Resume_2025.pdf" download>
              Download the PDF
            </a>
          </p>
        </object>
      </div>

      {/* Download button */}
      <div className="mt-6">
        <a
          href="/OliviaMa_Resume_2025.pdf"
          download
          className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          Download PDF
        </a>
      </div>
    </main>
  )
}
