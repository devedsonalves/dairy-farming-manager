"use client";

export default function Loading() {
  return (
    <div className="flex flex-row gap-2">
      <div className="w-4 h-4 rounded-full bg-zinc-700 animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-zinc-700 animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-zinc-700 animate-bounce [animation-delay:-.6s]"></div>
    </div>
  );
}
