"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showFullSequence, setShowFullSequence] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if this is the user's first time entering the site during this session
    const hasEntered = sessionStorage.getItem("has_entered");
    
    if (!hasEntered) {
      sessionStorage.setItem("has_entered", "true");
      setShowFullSequence(true);
    } else {
      // If not the first time, only show full sequence on the homepage (logo click)
      setShowFullSequence(pathname === "/");
    }
  }, [pathname]);

  // Prevent hydration mismatch by not rendering the loader until client state is resolved
  if (showFullSequence === null) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence>
        {showFullSequence ? (
          /* FULL CINEMATIC SEQUENCE (First visit OR clicking logo to Home) */
          <motion.div
            key="full-sequence"
            className="fixed inset-0 z-[99999] bg-ink flex flex-col items-center justify-center pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 4.5 }}
          >
            {/* Logo 1: Slow cinematic push in and fade out */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1.1, opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 2.5,
                ease: "linear",
                opacity: { times: [0, 0.2, 0.8, 1], duration: 2.5, ease: "easeInOut" }
              }}
            >
              <div className="relative h-48 w-64 sm:h-64 sm:w-96 md:h-80 md:w-[36rem]">
                <Image
                  src="/wde-logo-final.png"
                  alt="WDE Loading Logo"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 384px, 576px"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Logo 3: Slow cinematic push in and fade out (Overlaps slightly) */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1.1, opacity: [0, 1, 1, 0] }}
              transition={{
                delay: 2.2, // Start slightly before Logo 1 finishes for a smooth crossfade feel
                duration: 2.5,
                ease: "linear",
                opacity: { times: [0, 0.2, 0.8, 1], duration: 2.5, delay: 2.2, ease: "easeInOut" }
              }}
            >
              <div className="relative h-48 w-64 sm:h-64 sm:w-96 md:h-80 md:w-[36rem]">
                <Image
                  src="/wde-logo-3.png"
                  alt="WDE Brand Logo"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 384px, 576px"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* SHORT SEQUENCE (Clicking any other header link) */
          <motion.div
            key="short-sequence"
            className="fixed inset-0 z-[99999] bg-transparent backdrop-blur-md flex flex-col items-center justify-center pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <motion.div
              initial={{ rotateY: 180, scale: 0.5, opacity: 0 }}
              animate={{ rotateY: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="relative h-48 w-64 sm:h-64 sm:w-96 md:h-80 md:w-[36rem] perspective-1000"
            >
              <Image
                src="/wde-logo-final.png"
                alt="WDE Loading Logo"
                fill
                sizes="(max-width: 640px) 256px, (max-width: 768px) 384px, 576px"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
