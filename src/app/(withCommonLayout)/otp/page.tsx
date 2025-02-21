"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const otpSchema = z.object({
    otp: z
        .string()
        .length(6, "OTP must be exactly 6 digits")
        .regex(/^\d{6}$/, "OTP must contain only numbers"),
});

export default function OtpVerification() {
    const [isLoading, setIsLoading] = useState(false);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<z.infer<typeof otpSchema>>({
        resolver: zodResolver(otpSchema),
        defaultValues: { otp: "" },
    });

    async function onSubmit(values: z.infer<typeof otpSchema>) {
        setIsLoading(true);
        try {
            console.log("OTP Submitted:", values.otp);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="container section-gap">
            <div className="mx-auto max-w-md p-6 bg-white rounded-md">
                <h1 className="text-2xl font-semibold text-center">OTP Verification</h1>
                <p className="mt-2 text-sm text-gray-600 text-center">
                    Enter the 6-digit code sent to your email.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium">OTP</label>
                        <input
                            {...register("otp")}
                            type="text"
                            className="w-full p-2 border rounded-md text-center"
                            disabled={isLoading}
                            placeholder="Enter OTP"
                        />
                        {errors.otp && <p className="text-red-500 text-sm">{errors.otp.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full p-2 text-white bg-primary/80 hover:bg-primary rounded-xl"
                        disabled={isLoading}
                    >
                        Verify OTP
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    Didn’t receive a code?{' '}
                    <button className="text-blue-500 hover:underline">Resend OTP</button>
                </div>
                <div className="mt-2 text-center text-sm">
                    <Link href="/logIn" className="text-blue-500 hover:underline">Back to Login</Link>
                </div>
            </div>
        </div>
    );
}
