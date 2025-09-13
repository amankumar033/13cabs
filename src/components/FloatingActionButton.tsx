"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { companyConfig } from "@/config/company";

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth spring transition
  const smoothSpring = { type: "spring" as const, stiffness: 60, damping: 20 };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative w-14 h-14">
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Call Button */}
              <motion.a
                key="call"
                href={`tel:${companyConfig.phoneHref}`}
                className="absolute w-12 h-12 rounded-full bg-green-600 flex items-center justify-center shadow-lg bottom-0"
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: -70, opacity: 1 }}
                exit={{ x: 0, opacity: 0 }}
                transition={smoothSpring}
              >
                <PhoneIcon className="w-6 h-6 text-white" />
              </motion.a>

              {/* WhatsApp Button */}
              <motion.a
                key="whatsapp"
                href={`https://wa.me/${companyConfig.phone.replace(
                  "+",
                  ""
                )}?text=${encodeURIComponent(
                  companyConfig.whatsapp.defaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg bottom-0"
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: -130, opacity: 1 }}
                exit={{ x: 0, opacity: 0 }}
                transition={{ ...smoothSpring, delay: 0 }}
              >
                <Image src="/whatsapp-white.png" alt="WhatsApp" width={24} height={24} />
              </motion.a>
            </>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-110 transition-all duration-300 border border-yellow-300/30"
        >
          <Image
            src="/phone.png"
            alt="Logo"
            width={25}
            height={25}
          />
        </button>
      </div>
    </div>
  );
}
