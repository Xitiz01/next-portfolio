'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-xl font-bold">Something went wrong!</h2>
      <p className="text-neutral">{error.message}</p>
      <button
        onClick={() => reset()}
        className="rounded-md bg-accent px-4 py-2 text-white">
        Try again
      </button>
    </div>
  )
}