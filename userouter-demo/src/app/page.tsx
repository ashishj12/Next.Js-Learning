"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const navigate = (page: string) => {
    router.push(`/${page}`);
  };
  return <button onClick={() => navigate("login")}>Go to login page</button>;
};

export default Home;
