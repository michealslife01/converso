

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getCompanion } from "@/lib/actions/companion.action";
import { getSubjectColor } from "@/lib/utils";

interface companionSessionPageProps {
  params: Promise<{id:string}>
}

const companionSession = async ({params}: companionSessionPageProps) => {
  const {id} = await params;
  const companion = await getCompanion(id);
  const user = await currentUser();


  if (!user) {
    redirect("/sign-in");
  }

  if (!companion) {
    redirect("/companions");
  }
    return (
      <main className="">
      <article className="flex rounded rounded-border justify-between p-6 max-md:flex-col">
          <div className="flex items-center gap-4 ">
            <div className="size-[72] rounded-lg flex items-center justify-center max-md:hidden" style={{backgroundColor: getSubjectColor(companion.subject)
            }}>

            </div>
          </div>
      </article>
      </main>
    )
  }
  
  export default companionSession