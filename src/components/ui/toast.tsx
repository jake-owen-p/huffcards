"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { cn } from "~/lib/cn";

type Toast = {
  id: number;
  message: string;
  type: "success" | "info" | "error";
};

type ToastContextValue = {
  addToast: (message: string, type?: Toast["type"]) => void;
};

const ToastContext = createContext<ToastContextValue>({
  addToast: () => undefined,
});

export function useToast() {
  return useContext(ToastContext);
}

let toastId = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    (message: string, type: Toast["type"] = "success") => {
      const id = ++toastId;
      setToasts((prev) => [...prev, { id, message, type }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    },
    [],
  );

  return (
    <ToastContext value={{ addToast }}>
      {children}
      <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              "animate-slide-up border-theme px-4 py-3 font-body text-sm shadow-theme",
              toast.type === "success" &&
                "border-theme-success bg-theme-surface text-theme-success",
              toast.type === "info" &&
                "border-theme-border bg-theme-surface text-theme-text",
              toast.type === "error" &&
                "border-theme-error bg-theme-surface text-theme-error",
            )}
          >
            <span className="mr-2">
              {toast.type === "success" && "+"}
              {toast.type === "info" && ">"}
              {toast.type === "error" && "!"}
            </span>
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext>
  );
}
