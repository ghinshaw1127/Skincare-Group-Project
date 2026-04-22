"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Quiz() {
  const [skinType, setSkinType] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!skinType) return alert("Please select a skin type!");
    router.push(`/results?skinType=${skinType}`);
  };

  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold text-pink-700 mb-8">What is your skin type?</h1>
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {["oily", "dry", "combination", "sensitive"].map((type) => (
          <button
            key={type}
            onClick={() => setSkinType(type)}
            className={`py-3 rounded-full text-lg font-medium border-2 capitalize transition ${
              skinType === type
                ? "bg-pink-500 text-white border-pink-500"
                : "bg-white text-pink-600 border-pink-300 hover:bg-pink-100"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-8 bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-pink-600 transition"
      >
        Build My Routine →
      </button>
    </main>
  );
}