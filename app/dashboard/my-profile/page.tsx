'use client';

import Image from 'next/image';
import { useAuthStore } from '@/store/use-auth.store';
import { getInitials } from 'initials-extractor';

export default function MyProfilePage() {
  const { user } = useAuthStore();

  return (
    <div className="w-full px-2 mt-3">
      
      <div className="relative w-full">
        <Image
          src="/cover.svg"
          alt="Cover"
          width={100}
          height={100}
          className="w-full object-cover"
        />

        <div className="absolute -bottom-12 left-6">
          <div className="w-24 h-24 rounded-2xl p-1 shadow-md">
            <div className="w-full h-full flex items-center justify-center rounded-2xl bg-gray-100">
              <span className="text-xl font-bold text-gray-700">
                {getInitials(user?.username ?? 'A')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border rounded-2xl border-[#DEDEE6] mt-20 p-6">
        <div className="w-full flex justify-between items-center mb-6">
          <h3 className="text-base font-bold">
            Informações do Perfil
          </h3>

          <span className="px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">active</span>
        </div>

        <div className="w-[55%] flex justify-between mt-5">
          <div className="flex flex-col gap-2">
            <p className="text-md font-semibold">Nome</p>
            <p className="text-sm">
              {user?.username ?? '—'}
            </p>
          </div>

          <div >
            <p className="text-md font-semibold">Email</p>
            <p className="text-sm ">
              {user?.email ?? '—'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
