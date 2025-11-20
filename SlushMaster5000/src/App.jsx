import React, { useState } from 'react';
import Slushometer from './components/Slushometer';
import { recipes } from './data/recipes';

function App() {
  const [view, setView] = useState('home'); // home, calculator, recipes

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white font-sans selection:bg-pink-500 selection:text-white">

      {/* Header */}
      <header className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setView('home')}>
          <span className="text-4xl">🍧</span>
          <h1 className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
            SlushMaster<span className="font-light text-white/50">5000</span>
          </h1>
        </div>
        <nav className="space-x-6 hidden md:block">
          <button onClick={() => setView('calculator')} className={`hover:text-pink-400 transition ${view === 'calculator' ? 'text-pink-400 font-bold' : 'text-white/70'}`}>Slushometer</button>
          <button onClick={() => setView('recipes')} className={`hover:text-pink-400 transition ${view === 'recipes' ? 'text-pink-400 font-bold' : 'text-white/70'}`}>Recipes</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">

        {view === 'home' && (
          <div className="text-center py-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Master the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Perfect Slush</span>
            </h2>
            <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
              Stop guessing. Start slushing. Calculate the perfect sugar ratios and discover recipes that won't break your machine.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button
                onClick={() => setView('calculator')}
                className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white rounded-full font-bold text-lg transition shadow-lg shadow-blue-500/30"
              >
                Launch Slushometer 🚀
              </button>
              <button
                onClick={() => setView('recipes')}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold text-lg transition backdrop-blur-sm border border-white/10"
              >
                Browse Recipes 📜
              </button>
            </div>
          </div>
        )}

        {view === 'calculator' && (
          <div className="animate-fade-in">
            <Slushometer />
          </div>
        )}

        {view === 'recipes' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center">Community Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map(recipe => (
                <div key={recipe.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition group">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {recipe.category}
                    </span>
                    <span className="text-2xl group-hover:scale-110 transition duration-300">
                      {recipe.category === 'Spiked' ? '🍸' : recipe.category === 'Creamy' ? '🍦' : '🥤'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{recipe.name}</h3>
                  <p className="text-sm text-white/60 mb-4">{recipe.description}</p>

                  <div className="space-y-2 mb-4">
                    {recipe.ingredients.map((ing, i) => (
                      <div key={i} className="flex justify-between text-sm border-b border-white/5 pb-1">
                        <span className="text-white/80">{ing.name}</span>
                        <span className="text-white/50">{ing.amount}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-center bg-black/20 rounded py-2 text-white/50">
                    Setting: <span className="text-white font-mono">{recipe.machineSetting}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;
