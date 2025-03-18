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
    <ToastProvider data-oid="3hv:2eg">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="h0oi0wm">
            <div className="grid gap-1" data-oid="i_x0mz:">
              {title && <ToastTitle data-oid="jcbz5bz">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="2rcrrpk">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="cwf:g27" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="kceu3uv" />
    </ToastProvider>
  );
}
