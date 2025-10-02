

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getCompanion } from "@/lib/actions/companion.action";
import { getSubjectColor } from "@/lib/utils";
import Image from "next/image";
import CompanionComponents from "@/components/companioncomponents";

interface companionSessionPageProps {
  params: Promise<{id:string}>
}

const companionSession = async ({params}: companionSessionPageProps) => {
  const {id} = await params;
  const companion = await getCompanion(id);
  const user = await currentUser();

  const {name, subject, topic, title, duration} = companion;

  if (!user) {
    redirect("/sign-in");
  }

  if (!name) {
    redirect("/companions");
  }
    return (
      <main className="">
      <article className="flex rounded-xl rounded-border justify-between p-6 max-md:flex-col">
          <div className="flex items-center gap-2 ">
            <div className="size-[72] rounded-lg flex items-center justify-center max-md:hidden" style={{backgroundColor: getSubjectColor(subject)
            }}>
              <Image src={`/icons/${subject}.svg`} alt={subject} width={56} height={56} className="object-cover" />
              </div>

              <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2" >
                <p className="text-2xl font-bold">{name}</p>
                <div className="subject-badge text-lg">
                  {subject}
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
              {topic}
            </p>
            </div>
          </div>
          <div className="items-start text-2xl max-md:hidden gap-2">
            <p className="text-lg">
              {duration}
            </p>
            <p className="text-lg">
              {title}
            </p>
          </div>
      </article>
      <CompanionComponents 
      {...companion} 
      customerid={id}
      userName={user.firstName!}
      userImage={user.imageUrl!}/>
      </main>
    )
  }
  
  export default companionSession