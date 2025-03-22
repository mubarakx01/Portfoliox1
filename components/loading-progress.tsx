"use client";

import { useProgressiveLoading } from "@/components/progressive-loading-provider";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingProgress() {
  const { isLoading, progress } = useProgressiveLoading();

  return (
    <AnimatePresence data-oid="wvkqu7:">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          data-oid="mij7_39"
        >
          <div
            className="w-64 h-1 bg-muted rounded-full overflow-hidden mb-4"
            data-oid="ceuj11x"
          >
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              data-oid="otx_epk"
            />
          </div>
          <div className="text-sm text-muted-foreground" data-oid="vg53z43">
            Loading portfolio... {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
