"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Step1 } from "./_components/Step1";
import { Step2 } from "./_components/Step2";
import { Step3 } from "./_components/Step3";
import { motion, AnimatePresence } from "framer-motion";
import { Step4 } from "./_components/step4";

const FormPage = () => {
  const methods = useForm();
  const [step, setStep] = useState(1);

  return (
    <FormProvider {...methods}>
      <div className="w-screen h-screen flex justify-center items-center">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}>
              <Step1 next={() => setStep(2)} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}>
              <Step2 next={() => setStep(3)} prev={() => setStep(1)} />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}>
              <Step3 next={() => setStep(4)} prev={() => setStep(2)} />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}>
              <Step4 prev={() => setStep(3)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FormProvider>
  );
};

export default FormPage;
