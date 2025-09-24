import Image from "next/image";
import { Button } from "./ui/button";

interface companionCardProps {
    id: string,
    name: string,
    topic: string,
    subject: string,
    duration: string,
    color: string,
}

const CompanionCard = ({id, name, topic, subject, duration, color}: companionCardProps) => {
  return (
    <article className="companion-card" style= { {backgroundColor: color } }>
        <div className="flex justify-between items-center">
            <div className="subject-badge"> {subject}</div>
            <button className="companion-bookmark">
                <Image src="/icons/bookmark.svg" alt="bookmark" width={12.5} height={15} />
            </button>
        </div>
        <h2 className="text-2xl font-bold"> {name}</h2>
        <p className="text-xl font-semibold"> {topic}</p>
        <p className="text-base text-gray-500 flex items-center gap-2 text-center">
        <Image src="/icons/clock.svg" alt="clock" width={12.5} height={15} />
             {duration}</p>
             <Button className="">Launch Lesson</Button>
    </article>
  )
}

export default CompanionCard