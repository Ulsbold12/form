"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Date } from "./Date";
import { Input } from "@/components/ui/input";

export const Step3 = ({ prev }) => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <Card className="w-100">
          <CardHeader>
            <img src="/main 1.svg" className="w-[60px] h-[60px]" />
            <h1 className="text-2xl font-bold">User form 😍</h1>
            <h2 className="font-light text-gray-300">
              Please provide all current information accurately.
            </h2>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            <Date />
            <Input type="file" />
          </CardContent>
        </Card>
      </div>
    </>
  );
};
