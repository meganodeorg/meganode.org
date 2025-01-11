export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-sky-200 rounded-full animate-spin">
          <div className="absolute top-0 right-0 w-4 h-4 bg-sky-500 rounded-full" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
} 