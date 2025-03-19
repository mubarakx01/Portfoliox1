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
    <ToastProvider data-oid="4.u0z62">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="x99u58:">
            <div className="grid gap-1" data-oid=".m5nn7i">
              {title && <ToastTitle data-oid="80yzmo7">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="j6_73xw">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="xsh_bp9" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="2xmu.ab" />
    </ToastProvider>
  );
}
