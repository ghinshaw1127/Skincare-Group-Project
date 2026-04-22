"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

const products: Record<string, Record<string, { name: string; reason: string }>> = {
  oily: {
    cleanser: { name: "CeraVe Foaming Facial Cleanser", reason: "Removes excess oil without over-drying" },
    moisturizer: { name: "Neutrogena Hydro Boost Gel", reason: "Lightweight, non-greasy hydration" },
    spf: { name: "EltaMD UV Clear SPF 46", reason: "Oil-free formula great for oily skin" },
  },
  dry: {
    cleanser: { name: "CeraVe Hydrating Cleanser", reason: "Gentle and moisturizing" },
    moisturizer: { name: "La Roche-Posay Toleriane Double Repair", reason: "Rich hydration for dry skin" },
    spf: { name: "Neutrogena Sheer Zinc SPF 50", reason: "Moisturizing mineral sunscreen" },
  },
  combination: {
    cleanser: { name: "Cetaphil Daily Facial Cleanser", reason: "Balances both oily and dry areas" },
    moisturizer: { name: "Clinique Dramatically Different Moisturizing Gel", reason: "Balances combination skin" },
    spf: { name: "Supergoop Unseen Sunscreen SPF 40", reason: "Weightless formula for all zones" },
  },
  sensitive: {
    cleanser: { name: "Vanicream Gentle Facial Cleanser", reason: "Fragrance free, gentle formula" },
    moisturizer: { name: "First Aid Beauty Ultra Repair Cream", reason: "Soothes and calms sensitive skin" },
    spf: { name: "Blue Lizard Sensitive Mineral Sunscreen SPF 30", reason: "Gentle mineral SPF for reactive skin" },
  },
};

function Results() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const skinType = searchParams.get("skinType") || "";
  const routine = products[skinType];

  if (!routine) {
    return (
      <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-6">
        <p className="text-pink-700 text-lg">No results found.</p>
        <button onClick={() => router.push("/quiz")} className="mt-4 text-pink-500 underline">Go back to quiz</button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-3xl font-bold text-pink-700 mb-2">Your Personalized Routine ✨</h1>
      <p className="text-gray-500 mb-8 capitalize">Skin type: {skinType}</p>
      <div className="flex flex-col gap-6 w-full max-w-md">
        {Object.entries(routine).map(([step, product]) => (
          <div key={step} className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-semibold text-pink-600 capitalize mb-1">{step}</h2>
            <p className="text-gray-800 font-medium">{product.name}</p>
            <p className="text-gray-500 text-sm mt-1">{product.reason}</p>
          </div>
        ))}
      </div>
      <button onClick={() => router.push("/quiz")} className="mt-8 text-pink-500 underline text-sm">Retake the quiz</button>
    </main>
  );
}

export default function ResultsPage() {
  return (
    <Suspense>
      <Results />
    </Suspense>
  );
}