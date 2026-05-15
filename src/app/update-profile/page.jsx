"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateProfile() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();

    await authClient.updateUser({
      name,
      image,
    });

    router.push("/my-profile");
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <form onSubmit={handleUpdate} className="p-6 bg-white rounded-xl w-[400px] space-y-4">

        <h2 className="text-2xl font-bold text-center">
          Update Profile
        </h2>

        <input
          className="input w-full"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="input w-full"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button className="btn w-full bg-slate-800 text-white">
          Update
        </button>

      </form>
    </div>
  );
}