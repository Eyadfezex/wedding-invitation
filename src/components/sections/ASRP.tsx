"use client";
import React, { useState } from "react";
import Head from "../ui/Head";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  attendance: z
    .number()
    .min(1, "Minimum attendance is 1")
    .max(10, "Maximum attendance is 10"),
});

type FormValues = z.infer<typeof formSchema>;

/**
 * ASRP (Attendance and ASRP) Component
 *
 * A form component that handles wedding guest registration and ASRP functionality.
 *
 * @component
 * @example
 * ```tsx
 * <ASRP />
 * ```
 *
 * @remarks
 * This component uses react-hook-form for form handling and zod for validation.
 * The form collects the following information:
 * - Full name (minimum 2 characters)
 * - Email address (must be valid email format)
 * - Number of guests attending (between 1-10)
 *
 * @state
 * - isSubmitting: boolean - Tracks form submission state
 *
 * @validation
 * Form validation is handled through zod schema with the following rules:
 * - Name: Minimum 2 characters
 * - Email: Must be valid email format
 * - Attendance: Number between 1-10
 *
 * @todo
 * - Implement actual API integration for form submission
 * - Add success/error notifications
 * - Consider adding additional guest information fields
 */
const ASRP: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      attendance: 1,
    },
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
        throw new Error("Failed to submit ASRP");
      }
      reset();
    } catch (error) {
      console.error("ASRP submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 space-y-6 pb-[8rem]">
      <Head header="ASRP" />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-full">
            <Input
              {...register("name")}
              required
              placeholder="Full Name"
              type="text"
              className="w-full"
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
              placeholder="Email Address"
              required
              type="email"
              className="w-full"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        <div>
          <Input
            {...register("attendance", { valueAsNumber: true })}
            placeholder="Number of Guests"
            required
            type="number"
            min={1}
            max={10}
          />
          {errors.attendance && (
            <span className="text-red-500 text-sm mt-1">
              {errors.attendance.message}
            </span>
          )}
        </div>

        <Button
          className="bg-primary !py-6 hover:bg-primary/90 transition-colors"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Send ASRP"}
        </Button>
      </form>
    </section>
  );
};

export default ASRP;
