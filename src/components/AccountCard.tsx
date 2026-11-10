import React from 'react';
import { MetaInfinitySymbol } from './MetaLogo';
import { InstagramBadge } from './InstagramBadge';

interface AccountCardProps {
  username: string;
  onSelectAccount?: () => void;
}

export const AccountCard: React.FC<AccountCardProps> = ({
  username,
  onSelectAccount,
}) => {

  return (
    <div
      onClick={onSelectAccount}
      role={onSelectAccount ? 'button' : undefined}
      tabIndex={onSelectAccount ? 0 : undefined}
      onKeyDown={(e) => {
        if (onSelectAccount && (e.key === 'Enter' || e.key === ' ')) {
          onSelectAccount();
        }
      }}
      className={`group relative flex items-center justify-between w-full px-5 py-3.5 rounded-[22px] bg-[#242526] hover:bg-[#2a2b2e] border border-white/[0.04] transition-all duration-150 shadow-sm select-none ${
        onSelectAccount ? 'cursor-pointer' : ''
      }`}
    >
      {/* Left side: Meta Icon + Account Info */}
      <div className="flex items-center gap-3.5 min-w-0 pr-2">
        <div className="shrink-0 flex items-center justify-center">
          <MetaInfinitySymbol width={36} height={24} className="text-[#0866FF]" />
        </div>
        <div className="flex flex-col text-left min-w-0">
          <span className="text-[17px] font-semibold text-white leading-tight tracking-[-0.01em]">
            Meta Account
          </span>
          <span className="text-[14px] text-[#9a9da3] font-normal leading-tight mt-1 tracking-normal truncate">
            {username}
          </span>
        </div>
      </div>

      {/* Right side: User Profile Avatar with Instagram or Gmail badge */}
      <div className="relative shrink-0 flex items-center justify-end">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-transparent flex items-center justify-center">
          <img
            src="/assets/aistudio/profile_avatar.png"
            alt={`${username} profile avatar`}
            className="w-full h-full object-cover rounded-full"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Corner badge: Instagram */}
        <div className="absolute -bottom-1 -right-1 ring-2 ring-[#242526] rounded-[6px] overflow-hidden shadow-sm">
          <InstagramBadge size={16} />
        </div>
      </div>
    </div>
  );
};
