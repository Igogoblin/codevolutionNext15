"use client";
import { useRouter } from "next/navigation";
function About() {
  const router = useRouter();
  return (
    <div>
      <h1>page about</h1>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        go home
      </button>
    </div>
  );
}

export default About;
