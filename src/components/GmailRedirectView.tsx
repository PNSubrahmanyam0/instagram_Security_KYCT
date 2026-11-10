
import React, { useState } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Mail,
  Star,
  Inbox,
  Tag,
  Menu,
} from 'lucide-react';

interface GmailRedirectViewProps {
  email?: string;
  onBackToLogin: () => void;
}

interface SampleEmail {
  id: number;
  sender: string;
  tag: string;
  snippet: string;
  time: string;
  category: 'primary' | 'promotions' | 'social';
}

const sampleEmails: SampleEmail[] = [
  {
    id: 1,
    sender: 'Google',
    tag: 'Security',
    snippet: 'This is a sample email for your frontend demonstration.',
    time: '10:45 AM',
    category: 'primary',
  },
  {
    id: 2,
    sender: 'LinkedIn',
    tag: 'Updates',
    snippet: 'Explore new opportunities and professional updates.',
    time: '9:30 AM',
    category: 'social',
  },
  {
    id: 3,
    sender: 'Amazon',
    tag: 'Shopping',
    snippet: 'Discover the latest offers and deals.',
    time: 'Yesterday',
    category: 'promotions',
  },
  {
    id: 4,
    sender: 'Microsoft',
    tag: 'Updates',
    snippet: 'Your monthly product and technology updates.',
    time: 'Yesterday',
    category: 'primary',
  },
  {
    id: 5,
    sender: 'Instagram',
    tag: 'Social',
    snippet: 'You have new activity in your social network.',
    time: 'Mon',
    category: 'social',
  },
  {
    id: 6,
    sender: 'Flipkart',
    tag: 'Offers',
    snippet: 'Check out the latest offers and discounts.',
    time: 'Mon',
    category: 'promotions',
  },
];

export const GmailRedirectView: React.FC<GmailRedirectViewProps> = ({
  email = 'demo@example.com',
  onBackToLogin,
}) => {
  const [activeTab, setActiveTab] = useState<
    'primary' | 'promotions' | 'social'
  >('primary');

  const [starred, setStarred] = useState<Record<number, boolean>>({});

  const toggleStar = (
    id: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    setStarred((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openGmail = () => {
    window.location.assign(
      'https://mail.google.com/mail/u/0/#inbox'
    );
  };

  const filteredEmails = sampleEmails.filter(
    (item) => item.category === activeTab
  );

  return (
    <div className="min-h-screen w-full bg-[#18191a] text-[#e3e3e3] flex flex-col items-center justify-start font-sans selection:bg-[#c2e7ff]/30 selection:text-white p-0 sm:p-4">

      <div className="w-full max-w-[500px] bg-[#18191a] sm:border sm:border-white/10 sm:rounded-[28px] overflow-hidden shadow-2xl flex flex-col min-h-[92vh] sm:my-auto">

        {/* Top Control Bar */}
        <div className="w-full bg-[#18191a] border-b border-white/[0.08] px-4 py-3 flex items-center justify-between text-xs">

          <button
            type="button"
            onClick={onBackToLogin}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group text-left cursor-pointer"
            title="Back to login"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />

            <div className="flex flex-col text-[12px] leading-[1.15]">
              <span>Back</span>
              <span>to</span>
              <span>Login</span>
            </div>
          </button>

          
          {/* Official Gmail Redirect */}
          <button
            type="button"
            onClick={openGmail}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1b6ef3] hover:bg-[#1a5ec4] active:bg-[#154fb0] text-white font-medium text-xs transition-colors shadow-sm shrink-0"
          >
            <span className="text-[12px]">
              Open Gmail
            </span>

            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        
        {/* Gmail Header */}
        <header className="px-4 py-3.5 border-b border-white/[0.08] flex items-center justify-between">

          <div className="flex items-center gap-4">

            <button
              type="button"
              className="p-1 -ml-1 text-neutral-300 hover:text-white rounded-full hover:bg-white/5 transition-colors"
              aria-label="Navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Gmail-style Logo */}
            <div className="flex items-center gap-3">

              <div className="w-6 h-5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path
                    fill="#EA4335"
                    d="M2 5.5V18.5C2 19.33 2.67 20 3.5 20H6V11.5L12 16L18 11.5V20H20.5C21.33 20 22 19.33 22 18.5V5.5C22 4.4 20.73 3.8 19.86 4.45L12 10.34L4.14 4.45C3.27 3.8 2 4.4 2 5.5Z"
                  />

                  <path
                    fill="#FBBC05"
                    d="M20.5 4H18L12 8.5L6 4H3.5C2.67 4 2 4.67 2 5.5V8.5L12 16L22 8.5V5.5C22 4.67 21.33 4 20.5 4Z"
                  />

                  <path
                    fill="#4285F4"
                    d="M2 18.5C2 19.33 2.67 20 3.5 20H6V11.5L2 8.5V18.5Z"
                  />

                  <path
                    fill="#34A853"
                    d="M18 11.5V20H20.5C21.33 20 22 19.33 22 18.5V8.5L18 11.5Z"
                  />
                </svg>
              </div>

              <span className="text-[22px] font-normal text-white tracking-tight">
                Gmail
              </span>
            </div>
          </div>
        </header>

        {/* Category Tabs */}
        <div className="flex items-center border-b border-white/[0.08] px-2 text-sm font-medium">

          {/* Primary */}
          <button
            type="button"
            onClick={() => setActiveTab('primary')}
            className={`flex items-center gap-2 py-3.5 px-3 relative transition-colors ${
              activeTab === 'primary'
                ? 'text-[#8ab4f8]'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Inbox className="w-5 h-5" />

            <span className="text-[13px]">
              Primary
            </span>

            {activeTab === 'primary' && (
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#8ab4f8] rounded-t-full" />
            )}
          </button>

          {/* Promotions */}
          <button
            type="button"
            onClick={() => setActiveTab('promotions')}
            className={`flex items-center gap-2 py-3.5 px-3 relative transition-colors ${
              activeTab === 'promotions'
                ? 'text-[#8ab4f8]'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Tag className="w-5 h-5" />

            <span className="text-[13px]">
              Promotions
            </span>

            {activeTab === 'promotions' && (
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#8ab4f8] rounded-t-full" />
            )}
          </button>

          {/* Social */}
          <button
            type="button"
            onClick={() => setActiveTab('social')}
            className={`flex items-center gap-2 py-3.5 px-3 relative transition-colors ${
              activeTab === 'social'
                ? 'text-[#8ab4f8]'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Mail className="w-5 h-5" />

            <span className="text-[13px]">
              Social
            </span>

            {activeTab === 'social' && (
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#8ab4f8] rounded-t-full" />
            )}
          </button>
        </div>

        {/* Email List */}
        <div className="flex-1 overflow-y-auto divide-y divide-white/[0.04]">

          {filteredEmails.length > 0 ? (
            filteredEmails.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between px-4 py-3.5 hover:bg-[#242526] transition-colors group"
              >

                <div className="flex items-center gap-3 min-w-0 pr-2">

                  {/* Star */}
                  <button
                    type="button"
                    onClick={(e) => toggleStar(item.id, e)}
                    className="p-1 -ml-1 text-neutral-400 hover:text-amber-400 transition-colors shrink-0"
                    aria-label="Star message"
                  >
                    <Star
                      className={`w-5 h-5 ${
                        starred[item.id]
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-neutral-400'
                      }`}
                    />
                  </button>

                  {/* Sender */}
                  <span className="text-[14px] font-normal text-white truncate w-24 sm:w-32 shrink-0">
                    {item.sender}
                  </span>

                  {/* Category */}
                  <span className="text-[11px] font-medium text-[#8ab4f8] bg-[#0b57d0]/30 border border-[#0b57d0]/50 px-2 py-0.5 rounded-[6px] shrink-0">
                    {item.tag}
                  </span>

                  {/* Snippet */}
                  <span className="text-[12px] truncate text-neutral-400">
                    {item.snippet}
                  </span>
                </div>

                {/* Time */}
                <span className="text-[12px] text-neutral-400 shrink-0 font-normal">
                  {item.time}
                </span>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-neutral-400">
              <Mail className="w-10 h-10 mb-3 opacity-50" />

              <p className="text-sm">
                No sample emails in this category.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="p-4 flex flex-col gap-3 text-xs text-neutral-400 border-t border-white/[0.06] bg-[#18191a]">
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onBackToLogin}
              className="text-[#8ab4f8] hover:underline text-left cursor-pointer"
            >
              ← Return to previous page
            </button>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default GmailRedirectView;
