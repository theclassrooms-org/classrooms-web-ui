"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { axiosAuth } from "@/lib/axios-auth";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import { AppDispatch, RootState } from "@/store";
import { setUser } from "@/store/userSlice";

const LoginSuccessPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosAuth.get("/api/my-info");
        dispatch(setUser(response.data));
      } catch (error) {
        console.error("Error fetching user data:", error);
        router.push("/login");
      }
    };

    fetchUserData();
  }, [dispatch, router]);

  const animationSettings = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 1 },
  };

  return (
    <motion.div
      className="flex items-center flex-row justify-center min-h-screen bg-gray-100"
      {...animationSettings}
    >
      <Card className="w-full max-w-md p-4 flex items-center flex-col">
        <CardHeader className="text-center flex flex-col">
          <h1 className="text-2xl font-semibold">Welcome, {user?.username}!</h1>
          <p className="text-sm text-foreground-500">You are successfully logged in.</p>
        </CardHeader>
        <CardBody className="text-center">
          <span className="mb-4 block">Your role: {user?.role}</span>

          <Button
            color="primary"
            size="lg"
            onClick={() => {
              router.push("/classrooms"); // Navigate to dashboard
            }}
          >
            Go to Dashboard
          </Button>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default LoginSuccessPage;
