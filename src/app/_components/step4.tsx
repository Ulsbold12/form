"use client";

import { Card, CardHeader } from "@/components/ui/card";

export const Step4 = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Card className="w-100">
          <CardHeader>
            <img src="/main 1.svg" className="w-[60px] h-[60px]" />
            <h1 className="text-2xl font-bold">You're all set 😍</h1>
            <h2 className="font-light text-gray-300">
              We have received your submission. Thank you!
            </h2>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};
