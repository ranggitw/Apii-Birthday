"use client";

import React, { useState } from 'react';

const GreetingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative w-full max-w-lg mx-auto perspective-1000"
      onClick={handleFlip}
      style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)' }}
    >
      <div
        className={`relative w-full h-64 transition-transform duration-700 transform ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div
          className={`absolute w-full bg-gray-800 p-8 rounded-lg shadow-lg text-center ${
            isFlipped ? 'backface-hidden' : ''
          }`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <h1 className="text-4xl font-bold text-pink-400 mb-4">Happy Birthday Cantiikkk!</h1>
          <p className="text-lg text-gray-300 mb-4">
            I want you to know how deeply grateful I am that you are a part of my life. Your presence brings so much joy, warmth, and light into my world. Every moment I spent with you is a treasure, and I cherish every laugh, every conversation, and every shared experience. You have a way of making ordinary days extraordinary, and your presence in my life is a true blessing. I am amazed by your strength that you can make it until today. I also want you to know how much you mean to me. I would love to spend every moment of your birthday celebrating you, making you feel as special and cherished as you make me feel every day. You deserve all the happiness in the world, and I am honored to be by your side to share in the joy of your day. May this year bring you everything your heart desires and more.
          </p>
          <p className="text-lg text-gray-300">
            Happy Birthday sayaanggg, and thank you for being the incredible person.
          </p>
        </div>

        {/* Back Face */}
        <div
          className={`absolute w-full bg-gray-800 p-8 rounded-lg shadow-lg text-center ${
            isFlipped ? '' : 'backface-hidden'
          }`}
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
        >
            <h1 className="text-4xl font-bold text-pink-400 mb-4">I LOVE YOUUUUU~ ♡♡♡</h1>
          <img src="/Apii.png" alt="Birthday Card Back" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default GreetingCard;
