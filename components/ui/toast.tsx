"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

// Keep UI-specific props clean — don’t extend HTMLAttributes
export interface ToastProps {
  id?: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  onClose?: () => void;
}

export function Toast({ title, description, action, onClose }: ToastProps) {
  return (
    <div className="group relative flex w-full items-start justify-between rounded-md border bg-white p-4 shadow-lg">
      <div className="flex-1">
        {title && <div className="font-semibold">{title}</div>}
        {description && (
          <div className="text-sm text-gray-600 mt-1">{description}</div>
        )}
      </div>
      {action}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-2 top-2 rounded-md p-1 text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export function ToastViewport({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 max-w-sm z-50">
      {children}
    </div>
  );
}
