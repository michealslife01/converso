import CompanionForm from "@/components/companionform";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const companionSession = async () => {
  const {userId} = await auth();

  if (!userId) {
    redirect("/sign-in");
  }
    return (
      <main className="companion-form-container min-lg:w-1/3 min-md:w-2/4\3 items-center justify-center">
      <article className="w-full gap-4 flex flex-col">
          <h1>Companion Builder</h1>
          <CompanionForm />
      </article>
      </main>
    )
  }
  
  export default companionSession