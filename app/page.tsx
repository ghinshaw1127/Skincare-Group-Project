import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold text-pink-700 mb-4">✨🫧 Skincare Routine Builder 🫧✨</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Answer a few quick questions and we'll build a personalized skincare routine just for you.
      </p>
      <Link href="/quiz">
        <button className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-pink-600 transition">
          Take the Quiz
        </button>
      </Link>
    </main>
  );
}