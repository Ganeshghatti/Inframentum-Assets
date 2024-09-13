import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "../ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

// REACT ICONS
import { IoIosSend } from "react-icons/io";

// REACT EMAIL JS
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Name must have at least 3 characters" })
    .max(50),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must be at least 5 characters long" })
    .max(50, { message: "Email must be at most 50 characters long" })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "Email must follow a valid structure",
    })
    .refine((val) => !val.includes("spam"), {
      message: "Email must not contain 'spam'",
    }),
  message: z
    .string()
    .min(10, { message: "Message must have at least 10 Characters" })
    .max(10000),
});

export default function ContactForm() {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    setLoading(false);
    emailjs
      .send(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        values,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(true);
          toast.success("Message success Sent !");
          form.reset();
          navigation("/");
        },
        (error) => {
          console.log(error);
          setLoading(false);
          toast.error("Something went wrong !");
          setLoading(false);
        }
      )
      .finally(setLoading(false));
  }

  console.log(loading);

  return (
    <div className="lg:w-1/2 w-11/12  mx-auto border border-border_Color_1  rounded-xl space-y-6  bg-white z-20 py-10 px-5 ">
      <div>
        <h1 className="font-semibold text-3xl uppercase text-center text-slate-950">
          Contact Us
        </h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* USER NAME */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-950">Your Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Please Enter Your Name . . . "
                    {...field}
                    className="text-slate-950"
                  />
                </FormControl>
                <FormDescription className="hidden">
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* USER EMAIL */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-950">Your Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Please Enter Your Email . . ."
                    {...field}
                    className="text-slate-950"
                  />
                </FormControl>
                <FormDescription className="hidden">
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* USER MESSAGE */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-950">Your Message</FormLabel>
                <FormControl>
                  <Textarea
                    type="text"
                    placeholder="Please Enter Your Message . . ."
                    className="text-slate-950"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="hidden">
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 rounded-full bg-secondaryColor hover:bg-secondaryColor_hover group"
            >
              <span>Send</span>
              <span>
                <IoIosSend
                  size={20}
                  className="group-hover:-translate-y-1 group-hover:translate-x-2 transition-all duration-500 "
                />
              </span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
