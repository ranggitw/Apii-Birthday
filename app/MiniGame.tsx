"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const MiniGame = () => {
  const [inputDate, setInputDate] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [showTryAgain, setShowTryAgain] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctDate = '260703';
    if (inputDate === correctDate) {
      router.push('/birthday-card'); // Redirect to the birthday card page
    } else {
      setShowTryAgain(true);
    }
    setIsGameOver(true);
  };

  const handleTryAgain = () => {
    setInputDate('');
    setIsGameOver(false);
    setShowTryAgain(false);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm mx-auto">
      <h1 className="text-3xl font-bold text-pink-300 mb-4">Haloo cantiikkk</h1>
      <h2 className="text-2xl font-bold text-pink-300 mb-4">Masukin tanggal lahirmu dong, kalo bener tak kasih hadiah</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={inputDate}
          onChange={handleChange}
          placeholder="6 digit yaa"
          className="px-4 py-2 rounded-lg text-gray-900 border border-gray-700"
        />
        <br />
        <button
          type="submit"
          disabled={isGameOver}
          className={`px-4 py-2 rounded-lg text-white ${
            isGameOver ? 'bg-gray-600' : 'bg-pink-400 hover:bg-pink-500'
          }`}
        >
          Submit
        </button>
      </form>
      {isGameOver && (
        <div className="mt-4">
          {showTryAgain ? (
            <>
              <p className="text-lg font-bold text-pink-300">Salah kocak, masa ga tau sii sayaang</p>
              <button
                onClick={handleTryAgain}
                className="px-4 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-500 mt-2"
              >
                Coba lagiii
              </button>
            </>
          ) : (
            <p className="text-lg font-bold text-pink-300">Yee benerr!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MiniGame;
