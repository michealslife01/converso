import Image from "next/image";

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

    </article>
  )
}

export default CompanionCard