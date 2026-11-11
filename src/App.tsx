import React, { useState } from "react";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { recordDemoEvent } from "./lib/demoAnalytics";

export default function App() {
  const [demoName, setDemoName] = useState("");
  const [notice, setNotice] = useState("");

  const continueToInstagram = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Open the official site directly. No form values are read or transmitted.
    window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
    await recordDemoEvent("demo_login_click");
    setNotice("Demo event recorded. No password or form value was saved.");
  };

  return (
    <main className="min-h-screen bg-[#111827] text-white flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-md rounded-3xl border border-white/10 bg-[#1f2937] p-7 sm:p-9 shadow-2xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-sky-500/15 p-3 text-sky-300"><ShieldCheck size={26} /></div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-sky-300">Independent learning project</p>
            <h1 className="text-2xl font-semibold">Login flow demo</h1>
          </div>
        </div>
        <div className="mb-6 rounded-xl border border-amber-300/30 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">
          Educational simulation only. This page is not affiliated with Instagram or Meta.
          Do not enter a real password. The demo password field is never read, saved, or sent.
        </div>
        <form onSubmit={continueToInstagram} className="space-y-4">
          <label className="block text-sm text-slate-200">
            Demo name (optional)
            <input value={demoName} onChange={(event) => setDemoName(event.target.value)}
              type="text" autoComplete="off" placeholder="Enter a test name"
              className="mt-2 h-12 w-full rounded-xl border border-slate-600 bg-slate-900 px-4 text-white outline-none transition focus:border-sky-400" />
          </label>
          <label className="block text-sm text-slate-200">
            Dummy password field
            <input type="password" autoComplete="off" placeholder="Demo only — do not enter a real password"
              className="mt-2 h-12 w-full rounded-xl border border-slate-600 bg-slate-900 px-4 text-white outline-none transition focus:border-sky-400" />
          </label>
          <button type="submit" className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-sky-500 font-semibold text-white transition hover:bg-sky-400">
            Continue to Instagram <ExternalLink size={17} />
          </button>
        </form>
        {notice && <p role="status" className="mt-4 rounded-lg bg-emerald-500/10 p-3 text-sm text-emerald-200">{notice}</p>}
        <p className="mt-6 text-center text-xs leading-5 text-slate-400">
          Analytics records only a generic button event, device category, browser family,
          anonymous session ID, and timestamp. The demo name and password are not stored.
        </p>
      </section>
    </main>
  );
}
