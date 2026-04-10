"use client";

import Link from "next/link";
import { RetroCard } from "~/components/ui/retro-card";
import { RetroButton } from "~/components/ui/retro-button";
import { RetroInput } from "~/components/ui/retro-input";
import { useToast } from "~/components/ui/toast";
import { HuffcardsMark } from "~/components/ui/brand-icons";

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
          <HuffcardsMark size={44} className="mx-auto mb-4" />
          <h1 className="text-heading-lg text-theme-text">Create account</h1>
          <p className="mt-2 font-body text-sm text-theme-text-secondary">
            Join HuffCards and start collecting.
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
