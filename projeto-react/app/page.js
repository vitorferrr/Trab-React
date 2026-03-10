import Profile from "@/components/Profile";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl">
        Site criado para a disciplina Programação Front-End
      </h1>

      <hr />
      
      <Profile />
    </div>
  );
}
