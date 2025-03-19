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
    <ToastProvider data-oid="l-pvr:o">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="7h-w7l4">
            <div className="grid gap-1" data-oid="-_jtctq">
              {title && <ToastTitle data-oid="5on2aj5">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="uxfkba.">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="1iyhh2m" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="uau-6e4" />
    </ToastProvider>
  );
}
