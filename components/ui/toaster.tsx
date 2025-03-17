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
    <ToastProvider data-oid="f:2r_1m">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="rq4w_.g">
            <div className="grid gap-1" data-oid="3titgn3">
              {title && <ToastTitle data-oid="82k8k-b">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="xkgk_sw">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="h3994zw" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="vwzhyz3" />
    </ToastProvider>
  );
}
