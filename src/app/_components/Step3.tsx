"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Date } from "./Date";
import { motion, AnimatePresence } from "framer-motion";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Step3 = ({ prev, next }) => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);
    setImage(preview);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="w-[380px]">
        <CardHeader>
          <img src="/main 1.svg" className="w-[60px] h-[60px]" />
          <h1 className="text-2xl font-bold">User form 😍</h1>
          <h2 className="font-light text-gray-300">
            Please provide all current information accurately.
          </h2>
        </CardHeader>

        <CardContent className="flex flex-col gap-6 items-center">
          {/* Date */}
          <Date />

          {/* Profile image upload */}
          <label htmlFor="profile-image" className="cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 rounded-full border-2 border-dashed flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {image ? (
                  <motion.img
                    key="preview"
                    src={image}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  />
                ) : (
                  <motion.div
                    key="placeholder"
                    className="flex flex-col items-center text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}>
                    <Camera />
                    <span className="text-xs mt-2">Upload photo</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </label>

          <Input
            id="profile-image"
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />

          <div className="flex flex-row gap-5">
            <Button
              type="button"
              onClick={prev}
              className="bg-black text-white font-bold w-[60px] h-[44px]">
              Back
            </Button>

            <Button
              type="submit"
              onClick={next}
              className="bg-black text-white font-bold w-[280px] h-[44px]">
              Continue 3/3
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
