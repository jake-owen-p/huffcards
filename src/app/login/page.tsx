"use client";

import Link from "next/link";

import { RetroCard } from "~/components/ui/retro-card";
import { RetroButton } from "~/components/ui/retro-button";
import { RetroInput } from "~/components/ui/retro-input";
import { useToast } from "~/components/ui/toast";
import { HuffcardsMark } from "~/components/ui/brand-icons";

export default function LoginPage() {
  const { addToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToast("Login coming soon! This is a demo store.", "info");
  };

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md items-center px-4 py-16">
      <RetroCard className="w-full p-8">
        <div className="mb-6 text-center">
          <HuffcardsMark size={44} className="mx-auto mb-4" />
          <h1 className="text-heading-lg text-theme-text">Welcome back</h1>
          <p className="mt-2 font-body text-sm text-theme-text-secondary">
            Sign in to your HuffCards account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block font-body text-xs text-theme-text-secondary">
              Email
            </label>
            <RetroInput type="email" placeholder="your@email.com" />
          </div>
          <div>
            <label className="mb-1 block font-body text-xs text-theme-text-secondary">
              Password
            </label>
            <RetroInput type="password" placeholder="********" />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 font-body text-xs text-theme-text-secondary">
              <input type="checkbox" className="accent-theme-accent" />
              Remember me
            </label>
            <button type="button" className="cursor-pointer font-body text-xs text-theme-accent hover:underline">
              Forgot password?
            </button>
          </div>
          <RetroButton type="submit" variant="primary" className="w-full">
            Login
          </RetroButton>
        </form>

        <p className="mt-6 text-center font-body text-xs text-theme-text-secondary">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-theme-accent hover:underline">
            Register here
          </Link>
        </p>
      </RetroCard>
    </div>
  );
}
