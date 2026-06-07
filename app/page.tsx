import Link from "next/link";

import Calculator from "@/components/calculator/Calculator";

export default function HomePage() {
  return (
    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-100
      to-slate-300
      py-12
      px-4
      "
    >
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-4xl mb-2 font-bold text-center">
          Calculator
        </h1>

        <Calculator />

        <div className="flex justify-center mt-6">
          <Link
            href="/cars"
            className="
            px-8
            py-4

            bg-slate-900
            text-white

            rounded-xl

            font-semibold

            hover:bg-slate-800

            transition
            "
          >
            View Cars →
          </Link>
        </div>
      </div>
    </main>
  );
}