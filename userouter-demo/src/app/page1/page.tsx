"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Page1 = () => {
  const router = useRouter();

  const navigate = (page: string) => {
    router.push(`${page}`);
  };
  return <button onClick={() => navigate("page2")}>Go to Page2</button>;
};

export default Page1;
