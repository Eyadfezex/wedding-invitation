"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Head from "../ui/Head";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type FormValues = z.infer<typeof formSchema>;

/**
 * GiftMessage Component
 *
 * A form component that allows wedding guests to send gift messages to the couple.
 * Collects sender's name, email and message content.
 */
const GiftMessage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      // Send form data to Google Apps Script
      const response = await fetch("YOUR_SCRIPT_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      reset();
    } catch (error) {
      // Optionally handle error (e.g., show notification)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-5xl px-4 space-y-6 pb-[8rem] mx-auto">
      <Head header="GIFT MESSAGE" />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full">
            <Input
              {...register("name")}
              className="w-full"
              required
              placeholder="Jane Smith"
              type="text"
              aria-label="Full Name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <Input
              {...register("email")}
              className="w-full"
              required
              placeholder="jane@framer.com"
              type="email"
              aria-label="Email Address"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <Textarea
            {...register("message")}
            placeholder="Write your message here..."
            required
            className="max-h-40 min-h-[120px]"
            aria-label="Message Content"
          />
          {errors.message && (
            <span className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </span>
          )}
        </div>
        <Button
          className="bg-primary hover:bg-primary/90 transition-colors !py-6"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </section>
  );
};

export default GiftMessage;
