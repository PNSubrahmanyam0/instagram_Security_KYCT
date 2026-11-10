import React, { useState } from 'react';
import { User, Plus, Check, X, Shield } from 'lucide-react';
import { MetaInfinitySymbol } from './MetaLogo';

interface AccountSwitcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUsername: string;
  onSelectUsername: (name: string) => void;
}

export const AccountSwitcherModal: React.FC<AccountSwitcherModalProps> = ({
  isOpen,
  onClose,
  currentUsername,
  onSelectUsername,
}) => {
  const [customInput, setCustomInput] = useState('');
  const savedAccounts = [
    { username: '_______t_a_n_u', label: 'Primary Account (from screenshot)' },
    
  ];

  if (!isOpen) return null;

  const handleApplyCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (customInput.trim()) {
      onSelectUsername(customInput.trim());
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-[420px] rounded-3xl bg-[#242526] border border-white/10 p-6 text-white shadow-2xl relative">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <MetaInfinitySymbol width={28} height={18} className="text-[#0866FF]" />
            <h3 className="text-lg font-semibold text-white">Switch Profile</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-[#b0b3b8] mb-4">
          Select which Meta Account or Instagram profile you'd like to log into:
        </p>

        <div className="space-y-2 mb-5">
          {savedAccounts.map((acc) => {
            const isSelected = acc.username === currentUsername;
            return (
              <button
                key={acc.username}
                type="button"
                onClick={() => {
                  onSelectUsername(acc.username);
                  onClose();
                }}
                className={`w-full flex items-center justify-between p-3.5 rounded-2xl transition-colors text-left ${
                  isSelected ? 'bg-[#0866ff]/20 border border-[#0866ff]' : 'bg-[#303134] hover:bg-[#3a3b3c]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center text-white overflow-hidden shrink-0">
                    {acc.username === '_______t_a_n_u' ? (
                      <img
                        src="/assets/aistudio/profile_avatar.png"
                        alt={acc.username}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <User className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <div className="text-[15px] font-medium text-white">{acc.username}</div>
                    <div className="text-xs text-[#9a9da3]">{acc.label}</div>
                  </div>
                </div>
                {isSelected && <Check className="w-5 h-5 text-[#0866ff]" />}
              </button>
            );
          })}
        </div>

        <form onSubmit={handleApplyCustom} className="space-y-3 pt-3 border-t border-white/10">
          <label className="block text-xs font-medium text-[#b0b3b8]">Or enter custom username</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="e.g. your_instagram_id"
              className="flex-1 h-11 rounded-xl bg-[#18191a] border border-[#3e4042] px-3 text-sm text-white focus:outline-none focus:border-[#0866ff]"
            />
            <button
              type="submit"
              disabled={!customInput.trim()}
              className="px-4 h-11 rounded-xl bg-[#0866ff] hover:bg-[#0055d4] disabled:opacity-40 text-white font-medium text-sm transition-colors"
            >
              Set
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
