"use client";

import Link from "next/link";
import { RetroCard } from "~/components/ui/retro-card";
import { RetroButton } from "~/components/ui/retro-button";
import { RetroInput } from "~/components/ui/retro-input";
import { useToast } from "~/components/ui/toast";
import { PixelCoin } from "~/components/ui/pixel-coin";

export default function RegisterPage() {
  const { addToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToast("Registration coming soon! This is a demo store.", "info");
  };

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md items-center px-4 py-16">
      <RetroCard className="w-full p-8">
        <div className="mb-6 text-center">
          <PixelCoin size={32} className="mx-auto mb-3" />
          <h1 className="text-heading-lg text-theme-text">Create Account</h1>
          <p className="mt-2 font-body text-xs text-theme-text-secondary">
            Join the HuffCards community!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block font-body text-xs text-theme-text-secondary">
              Name
            </label>
            <RetroInput type="text" placeholder="Your name" />
          </div>
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
          <div>
            <label className="mb-1 block font-body text-xs text-theme-text-secondary">
              Confirm Password
            </label>
            <RetroInput type="password" placeholder="********" />
          </div>
          <RetroButton type="submit" variant="primary" className="w-full">
            Create Account
          </RetroButton>
        </form>

        <p className="mt-6 text-center font-body text-xs text-theme-text-secondary">
          Already have an account?{" "}
          <Link href="/login" className="text-theme-accent hover:underline">
            Login here
          </Link>
        </p>
      </RetroCard>
    </div>
  );
}
