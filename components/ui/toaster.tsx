"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider data-oid="3:rn1hh">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="zdch3cd">
            <div className="grid gap-1" data-oid="4s.pz79">
              {title && <ToastTitle data-oid="tn8p8al">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="7-exs58">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="t.2saan" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="nkrrvto" />
    </ToastProvider>
  );
}
