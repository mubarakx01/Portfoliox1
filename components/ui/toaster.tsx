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
    <ToastProvider data-oid="a8df0s4">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid=":s5gpr0">
            <div className="grid gap-1" data-oid="s60vi4v">
              {title && <ToastTitle data-oid="pr81zq-">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="ouf6qb9">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="62qno12" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="fau9ds6" />
    </ToastProvider>
  );
}
