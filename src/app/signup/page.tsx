"use client";

import NextLink from "next/link";
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Button,
  Divider,
  Link,
} from "@heroui/react";

/* Reuse Google icon from login */
function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.1 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.2 2.8l5.7-5.7C33.5 6.4 28.9 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10 0 19-8 19-20 0-1.1-.1-2.2-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.6 16.1 19 13 24 13c2.8 0 5.3 1 7.2 2.8l5.7-5.7C33.5 6.4 28.9 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c4.7 0 9.1-1.8 12.3-4.9l-6.2-5.2C28.5 35.1 26.4 36 24 36c-5.2 0-9.6-3.3-11.2-7.9l-6.6 5.1C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-1.2 3.2-3.6 5.7-6.6 7.3l.1.1 6.2 5.2C36.6 38.6 43 34 43 24c0-1.1-.1-2.2-.4-3.5z"
      />
    </svg>
  );
}

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center md:px-4 px-2">
      <Card className="w-full max-w-md md:px-4 px-2">
        <CardHeader className="flex flex-col gap-1 items-center">
          <h1 className="text-2xl font-semibold">Create account</h1>
          <p className="text-sm text-foreground-500">
            Join Classroom to start learning and teaching
          </p>
        </CardHeader>

        <CardBody className="gap-4">
          {/* Google Sign up */}
          <Button
            variant="bordered"
            size="lg"
            startContent={<GoogleIcon />}
          >
            Sign up with Google
          </Button>

          <Divider className="my-4" />

          {/* Signup form */}
          <Input
            label="Full name"
            placeholder="Your name"
          />

          <Input
            type="email"
            label="Email"
            placeholder="you@school.edu"
          />

          <Input
            type="password"
            label="Password"
            placeholder="Create a password"
          />

          <Button color="primary" size="lg">
            Create account
          </Button>

          <p className="text-center text-sm text-foreground-500">
            Already have an account?{" "}
            <Link as={NextLink} href="/login">
              Sign in
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
