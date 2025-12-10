"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { Step1 } from "./_components/Step1";
import { useState } from "react";
import { Step2 } from "./_components/Step2";
import { Step3 } from "./_components/Step3";

const FormPage = () => {
  const methods = useForm();
  const [step, setStep] = useState(1);

  return (
    <>
      <FormProvider {...methods}>
        <div>
          {step === 1 && <Step1 next={() => setStep(2)} />}
          {step === 2 && (
            <Step2
              next={() => {
                setStep(3);
                console.log("fgjh");
              }}
              prev={() => setStep(1)}
            />
          )}
          {step === 3 && <Step3 prev={() => setStep(2)} />}
        </div>
      </FormProvider>
    </>
  );
};

export default FormPage;
