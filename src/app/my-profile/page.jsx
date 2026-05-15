'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';

const MyProfile = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  if (isPending) {
    return <p className="p-5">Loading...</p>;
  }

  if (!user) {
    return <p className="p-5">You are not logged in.</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-base-100 shadow rounded-lg">

      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <div className="flex items-center gap-4">
        <Image
          src={user?.image || '/user.png'}
          alt="User image"
          width={80}
          height={80}
          className="rounded-full"
        />

        <div>
          <p className="text-lg font-semibold">{user?.name}</p>
          <p className="text-gray-500">{user?.email}</p>
        </div>
      </div>

      <Link href="/update-profile">
        <button className="btn btn-primary mt-6">
          Update Profile
        </button>
      </Link>

    </div>
  );
};

export default MyProfile;