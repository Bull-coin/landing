import React from "react";

export default function BullCoinLanding() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <header className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-400">
          O touro acordou.
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-gray-200">
          A nova era do mercado começou.
        </p>
        <button className="mt-8 px-6 py-3 bg-cyan-400 text-black font-bold rounded-xl hover:bg-cyan-300 transition">
          Investir Agora
        </button>
      </header>

      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Uma chance como poucas.
        </h2>
        <p className="text-gray-300 text-lg">
          Você não precisa mudar tudo. Às vezes, $10 mudam tudo.
          E se hoje fosse o seu momento?
        </p>
      </section>

      <section className="bg-gray-900 py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Tokenomics</h2>
        <div className="text-gray-200 space-y-2">
          <p>Total Supply: 1.000.000.000 BULL</p>
          <p>1% Queima • 2% Marketing • 1% Dev</p>
        </div>
      </section>

      <footer className="py-12 px-4 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Bull Coin - bullcoin.exchange</p>
        <p className="mt-2">management@bullcoin.exchange</p>
      </footer>
    </div>
  );
}
