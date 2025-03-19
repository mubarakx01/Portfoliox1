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
    <ToastProvider data-oid="g7a8xrz">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="le2az.5">
            <div className="grid gap-1" data-oid="9co6jz7">
              {title && <ToastTitle data-oid="di5cz8_">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="jpz9uap">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="m7usxw6" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="vzx1:ca" />
    </ToastProvider>
  );
}
