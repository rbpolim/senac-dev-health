import { ProfileForm } from "@/components/profile-form";

export default function Profile() {
  return (
    <main className="h-full bg-[#F5FAF7] flex items-center justify-center">
      <div className="p-6 rounded-lg bg-white w-full max-w-md">
        <h1 className="font-black text-2xl text-center text-[#065F46] mb-4">
          Digite os seus dados
        </h1>
        <ProfileForm />
      </div>
    </main>
  )
}