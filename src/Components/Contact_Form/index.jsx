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
import { Checkbox } from "../ui/checkbox";

// REACT ICONS
import { IoIosSend } from "react-icons/io";
import { FaUserAlt, FaPhone } from "react-icons/fa";
import { MdEmail, MdMessage } from "react-icons/md";
import { FaBuilding, FaBuildingUser } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";

// REACT EMAIL JS
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { form_Drop_Options } from "@/constants";

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
  requirement: z
    .string()
    .min(10, { message: "Message must have at least 10 Characters" })
    .max(10000),
  mobileNumber: z
    .string()
    .min(10, { message: "Mobile number must be at least 10 digits" })
    .max(10, { message: "Mobile number must be at most 10 digits" })
    .regex(/^\d{10,10}$/, {
      message: "Mobile number must contain only digits  10  characters",
    }),
  companyName: z
    .string()
    .min(3, { message: "Company Name must have at least 3 characters" })
    .max(50),
  // companySize: z.coerce
  //   .number()
  //   .min(1, { message: "Company Size must be at least 1" }),
  designation: z
    .string()
    .min(2, { message: "Designation must have at least 2 characters" })
    .max(50),
  profile: z.string().nonempty("Profile is required"),
});

export default function ContactForm() {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(null);

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      requirement: "",
      mobileNumber: "",
      companyName: "",
      designation: "",
      profile: "Consumer",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    console.log(values);
    setLoading(false);
    if (check) {
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
            toast.success("Requirement Successfully  Sent !");
            form.reset();
            setCheck(null);
            navigation("/");
          },
          (error) => {
            console.log(error);
            setLoading(false);
            toast.error("Something went wrong !");
            setLoading(false);
          }
        )
        .finally(() => {
          setLoading(false);
          setCheck(null);
        });
    }
  }

  const onHandle_Privacy = (value) => {
    setCheck(value);
  };

  return (
    <div className="w-[95vw] md:w-[85vw]  mx-auto border overflow-auto scroll-smooth border-border_Color_1 rounded-xl space-y-5  bg-white z-20 max-md:py-2 py-10 px-5 ">
      <div>
        <h1 className="font-semibold text-3xl uppercase text-center text-slate-950">
          Contact Us
        </h1>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-md:space-y-4 space-y-6"
        >
          {/* USER NAME */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-950 flex items-center gap-2 ml-2">
                  <span className="">
                    <FaUserAlt size={20} />
                  </span>
                  <span>Name</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Please Enter Your Name . . . "
                    {...field}
                    className="text-slate-950 placeholder:text-xs"
                  />
                </FormControl>
                <FormDescription className="hidden">
                  This is your public display name.
                </FormDescription>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <div className="flex max-md:flex-col items-center justify-between w-full gap-4 max-md:space-y-2">
            {/* USER Designation  */}
            <FormField
              control={form.control}
              name="designation"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-slate-950 flex items-center gap-2 ml-2">
                    <span>
                      <FaBuildingUser size={20} />
                    </span>
                    <span>Designation</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Please Enter Your Designation  . . ."
                      {...field}
                      className="text-slate-950 w-full placeholder:text-xs"
                    />
                  </FormControl>
                  <FormDescription className="hidden">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            {/* COMPANY NAME */}
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-slate-950 flex items-center gap-2 ml-2">
                    <span>
                      <FaBuilding size={20} />
                    </span>
                    <span>Company Name</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Please Enter Your Mobile Number . . ."
                      {...field}
                      className="text-slate-950 w-full placeholder:text-xs"
                    />
                  </FormControl>
                  <FormDescription className="hidden">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="profile"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-slate-950 flex items-center gap-2 ml-2">
                    <span>
                      <ImProfile size={20} />
                    </span>
                    <span>Profile</span>
                  </FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="text-slate-950 w-full placeholder:text-xs border p-2 rounded-md text-sm font-semibold"
                    >
                      <option value="" disabled className="text-sm">
                        Select your profile
                      </option>
                      {form_Drop_Options.map((each_form, index) => (
                        <option
                          key={index}
                          value={each_form?.opt_value}
                          className="text-sm"
                        >
                          {each_form?.opt}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div className="flex max-md:flex-col items-center justify-between w-full gap-4 max-md:space-y-2">
            {/* USER MOBILE */}
            <FormField
              control={form.control}
              name="mobileNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-slate-950 flex items-center gap-2 ml-2">
                    <span>
                      <FaPhone size={20} className="rotate-90" />
                    </span>
                    <span>Mobile Number</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Please Enter Your Mobile Number . . ."
                      {...field}
                      className="text-slate-950 w-full placeholder:text-xs"
                    />
                  </FormControl>
                  <FormDescription className="hidden">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            {/* USER EMAIL */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-slate-950 flex items-center gap-2 ml-2">
                    <span>
                      <MdEmail size={20} />
                    </span>
                    <span>Email ID</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Please Enter Your Email . . ."
                      {...field}
                      className="text-slate-950 w-full placeholder:text-xs"
                    />
                  </FormControl>
                  <FormDescription className="hidden">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            {/* COMPANY SIZE
            <FormField
              control={form.control}
              name="companySize"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-slate-950 flex items-center gap-2 ml-2">
                    <span>
                      <FaPeopleGroup size={20} />
                    </span>
                    <span>Your Company Size</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Please Enter Your Email . . ."
                      {...field}
                      className="text-slate-950 w-full placeholder:text-xs"
                    />
                  </FormControl>
                  <FormDescription className="hidden">
                    This is your public display name.
                  </FormDescription>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            /> */}
          </div>
          {/* USER MESSAGE */}
          <FormField
            control={form.control}
            name="requirement"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-950 flex items-center gap-2 ml-2">
                  <span>
                    <MdMessage size={20} />
                  </span>
                  <span>Requirement</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    type="text"
                    placeholder="Please Enter Your Message . . ."
                    className="text-slate-950 resize-none placeholder:text-xs"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="hidden">
                  This is your public display name.
                </FormDescription>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          {/* CHECKBOX */}
          <div className="flex items-center gap-2">
            <Checkbox onCheckedChange={onHandle_Privacy} />
            <span
              className={`max-md:text-xs text-base lg:text-sm capitalize ${
                !check ? "text-red-600" : "text-green-600"
              }`}
            >
              By submitting this form, I agree to the use of my personal data as
              outlined in the Privacy Statement.
            </span>
          </div>
          <div>
            <Button
              type="submit"
              disabled={loading || !check}
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
