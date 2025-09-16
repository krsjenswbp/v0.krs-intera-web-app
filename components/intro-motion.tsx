"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface IntroMotionProps {
  onComplete: () => void
}

export default function IntroMotion({ onComplete }: IntroMotionProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    { text: "Welcome", delay: 0 },
    { text: "to my", delay: 500 },
    { text: "Portfolio", delay: 1000 },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        setTimeout(onComplete, 1000)
      }
    }, steps[currentStep]?.delay || 500)

    return () => clearTimeout(timer)
  }, [currentStep, onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-4xl md:text-6xl font-bold text-primary"
        >
          {steps[currentStep]?.text}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
