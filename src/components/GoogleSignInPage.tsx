
import React, { useState, useRef } from 'react';
import { ChevronDown, ArrowLeft, ExternalLink } from 'lucide-react';

interface GoogleSignInPageProps {
  email: string;
  onBackToMeta: () => void;
  onLoginSuccess?: () => void;
}

export const GoogleSignInPage: React.FC<GoogleSignInPageProps> = ({
  email = 'tanubannu27@gmail.com',
  onBackToMeta,
}) => {
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);

  const instagramUrl = 'https://www.instagram.com/______t_a_n_u/';

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage('Please enter your name');
      nameInputRef.current?.focus();
      return;
    }

    setErrorMessage('');
  };

  return (
    <div className="min-h-screen w-full bg-[#202124] text-[#e8eaed] flex flex-col items-center justify-between font-sans selection:bg-[#8ab4f8]/30 selection:text-white px-4 py-6">

      {/* Back Navigation */}
      <div className="w-full max-w-[450px] flex items-center justify-start mb-4">
        <button
          type="button"
          onClick={onBackToMeta}
          className="flex items-center gap-1.5 text-xs text-[#9aa0a6] hover:text-[#e8eaed] transition-colors py-1 px-2 rounded-lg hover:bg-white/5 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Meta Account</span>
        </button>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-[450px] bg-[#28292a] md:border md:border-[#3c4043] rounded-[28px] p-8 md:p-10 shadow-2xl relative overflow-hidden my-auto">

        <div className="text-center">

          {/* Google-style logo for frontend demo */}
          <div className="flex justify-center mb-4">
            <svg viewBox="0 0 48 48" className="w-11 h-11" aria-label="Demo logo">
              <path fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <path fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
              <path fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
              <path fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            </svg>
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-normal text-white mb-2">
              Welcome
            </h1>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#5f6368] max-w-full">
              <span className="text-xs font-medium text-[#e8eaed] truncate max-w-[240px]">
                {email}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-[#9aa0a6] shrink-0" />
            </div>
          </div>

          {/* Name Form */}
          <form onSubmit={handleNext} className="space-y-6">

            <div className="relative">

              <div
                className={`relative w-full rounded-md bg-transparent border transition-all ${
                  errorMessage
                    ? 'border-[#f28b82]'
                    : isFocused
                    ? 'border-[#8ab4f8] ring-1 ring-[#8ab4f8]'
                    : 'border-[#5f6368] hover:border-[#8ab4f8]'
                }`}
              >
                <input
                  ref={nameInputRef}
                  id="demo-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);

                    if (errorMessage) {
                      setErrorMessage('');
                    }
                  }}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Enter Your Password"
                  className="w-full h-14 bg-transparent px-4 text-base text-white placeholder-[#9aa0a6] focus:outline-none"
                  autoComplete="name"
                />
              </div>

              {/* Validation Warning */}
              {errorMessage && (
                <div className="flex items-center gap-1.5 text-xs text-[#f28b82] mt-1.5 px-1">
                  <svg
                    className="w-3.5 h-3.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                  <span>{errorMessage}</span>
                </div>
              )}

            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4">

              <button
                type="button"
                onClick={() => {
                 
                }}
                className="text-sm font-medium text-[#8ab4f8] hover:text-[#a6c8ff] transition-colors cursor-pointer"
              >
                Forgot password?
              </button>

              {name.trim() ? (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 h-10 rounded-full bg-[#8ab4f8] hover:bg-[#a6c8ff] active:bg-[#729ee2] text-[#202124] text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 min-w-[88px] cursor-pointer select-none"
                >
                  <span>Next</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  type="submit"
                  className="px-6 h-10 rounded-full bg-[#8ab4f8]/60 text-[#202124] text-sm font-semibold transition-colors flex items-center justify-center min-w-[88px] cursor-pointer select-none"
                  title="Please enter your password first"
                >
                  <span>Next</span>
                </button>
              )}

            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-[450px] flex items-center justify-between text-xs text-[#9aa0a6] mt-4 pt-2">

        <div className="flex items-center gap-1">
          <span>English (United States)</span>
          <ChevronDown className="w-3 h-3" />
        </div>

        <div className="flex items-center gap-4">
          <a href="#help">Help</a>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>

      </footer>
    </div>
  );
};

export default GoogleSignInPage;
