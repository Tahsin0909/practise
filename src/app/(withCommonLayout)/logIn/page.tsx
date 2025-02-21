"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
    email: z
        .string()
        .email("Please enter a valid email address")
        .refine(
            (email) => {
                const domain = email.split("@")[1];
                return domain === "gmail.com" || domain === "yahoo.com";
            },
            { message: "Only Gmail and Yahoo email addresses are allowed" }
        ),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(50, "Password must not exceed 50 characters"),
    rememberMe: z.boolean().default(false),
});

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            console.log(values);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="container section-gap">
            <div className="mx-auto max-w-md p-6 bg-white rounded-md">
                <h1 className="text-2xl font-semibold text-center">Log in</h1>
                <p className="mt-2 text-sm text-gray-600 text-center">
                    Welcome back! Please enter your details.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            {...register("email")}
                            type="email"
                            className="w-full p-2 border rounded-md"
                            disabled={isLoading}
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            {...register("password")}
                            type="password"
                            className="w-full p-2 border rounded-md"
                            disabled={isLoading}
                            placeholder="Enter your password"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    <div className="flex items-center justify-between">
                        <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full p-2 text-white bg-primary/80 hover:bg-primary rounded-xl"
                        disabled={isLoading}
                    >
                        Sign in
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    Not a member yet?{' '}
                    <Link href="/signup" className="text-blue-500 hover:underline">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}
