import React from 'react';
import { Eye, X, SplitSquareVertical, Sliders, Check } from 'lucide-react';

interface ComparisonDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  overlayOpacity: number;
  setOverlayOpacity: (opacity: number) => void;
}

export const ComparisonDrawer: React.FC<ComparisonDrawerProps> = ({
  isOpen,
  onClose,
  overlayOpacity,
  setOverlayOpacity,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#242526] border border-white/10 p-6 text-white shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-[#0866ff]" />
            <h3 className="text-lg font-semibold text-white">
              Original Reference Screenshot vs Live Frontend
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Tools / Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 rounded-2xl bg-[#1e1f22] border border-white/5">
          {/* Opacity slider for superimposed comparison */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-[#b0b3b8]">
              <span className="flex items-center gap-1.5 font-medium text-white">
                <Sliders className="w-3.5 h-3.5 text-[#0866ff]" />
                Ghost Overlay Comparison
              </span>
              <span>{Math.round(overlayOpacity * 100)}% reference blend</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={overlayOpacity}
              onChange={(e) => setOverlayOpacity(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-[#3a3b3c] rounded-lg appearance-none cursor-pointer accent-[#0866ff]"
            />
            <p className="text-[11px] text-[#8a8d91]">
              Slide up to overlay the uploaded screenshot directly over the live interactive app.
            </p>
          </div>

          {/* Profile Avatar indicator */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#242526]">
            <img
              src="/assets/aistudio/profile_avatar.png"
              alt="User uploaded profile avatar"
              className="w-11 h-11 rounded-full object-cover"
            />
            <div>
              <div className="text-xs font-semibold text-white">Active Profile Avatar</div>
              <div className="text-[11px] text-[#8a8d91]">
                Custom user avatar applied to replace the placeholder/alt-text
              </div>
            </div>
          </div>
        </div>

        {/* Side by side display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Reference Image */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-medium text-[#b0b3b8]">
              <span>Original Uploaded Reference</span>
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-neutral-300">image_58c465b5.png</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#18191a] max-h-[500px] flex items-center justify-center p-2">
              <img
                src="/assets/aistudio/image_58c465b5.png"
                alt="Original user uploaded screenshot"
                className="max-h-[480px] w-auto object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Explanation of 100% matched details */}
          <div className="space-y-3 text-sm text-[#b0b3b8]">
            <h4 className="text-white font-semibold text-base flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-400" /> 100% Replicated Details
            </h4>
            <ul className="space-y-2 text-xs leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0866ff] mt-1.5 shrink-0" />
                <span>
                  <strong className="text-white">Headline:</strong> Exact font weight, tracking, and letter spacing for "Log into your Meta Account".
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0866ff] mt-1.5 shrink-0" />
                <span>
                  <strong className="text-white">Subtitle:</strong> Two-line text structure "Log in to use your profiles, including" and "_______t_a_n_u." with exact underscores and trailing period.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0866ff] mt-1.5 shrink-0" />
                <span>
                  <strong className="text-white">Account Card:</strong> Precise dark slate `#242526` rounded surface, Meta infinity logo in Meta blue, and account title/handle hierarchy.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0866ff] mt-1.5 shrink-0" />
                <span>
                  <strong className="text-white">Password Field:</strong> Tall pill-corner input with exact `#3e4042` border, `#8a8d91` placeholder, and reveal/hide password toggle.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0866ff] mt-1.5 shrink-0" />
                <span>
                  <strong className="text-white">Action Buttons:</strong> Full-width pill-shaped "Log in" in `#0866ff` and "Try another way" in dark charcoal `#303134`.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0866ff] mt-1.5 shrink-0" />
                <span>
                  <strong className="text-white">Interactive Additions:</strong> Password verification, alternative login modal (WhatsApp/SMS/Device push), Caps-Lock indicator, account switcher, and footer links.
                </span>
              </li>
            </ul>

            <button
              type="button"
              onClick={onClose}
              className="mt-4 w-full h-11 rounded-xl bg-[#0866ff] hover:bg-[#0055d4] text-white font-medium text-sm transition-colors"
            >
              Back to Interactive App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
