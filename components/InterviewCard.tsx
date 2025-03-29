import dayjs from "dayjs";
import Image from "next/image";
import { getRandomInterviewCover } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import DisplayTechIcons from "./DisplayTechIcons";

const InterviewCard = ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM D, YYYY");

  return (
    <div className="card-border w-[360px] min-h-96 mb-6 mr-4 hover:shadow-lg transition-shadow duration-200 float-left">
      <div className="card-interview p-6 h-full relative flex flex-col">
        {/* Enhanced Type Badge */}
        <div className="absolute top-0 right-0 px-4 py-2 rounded-bl-lg bg-[#2563eb] text-[#fff] shadow-sm z-10">
          <p className="text-sm font-semibold">{normalizedType}</p>
        </div>

        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          <Image
            src={getRandomInterviewCover()}
            alt="cover image"
            width={96}
            height={96}
            className="rounded-full object-cover w-24 h-24 border-2 border-primary"
          />
          <h3 className="mt-4 text-xl font-semibold capitalize">
            {role} Interview
          </h3>

          {/* Date & Score */}
          <div className="flex gap-4 mt-3 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Image
                src="/calendar.svg"
                alt="calendar"
                width={20}
                height={20}
                className="opacity-70"
              />
              <span className="text-sm">{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/star.svg"
                alt="star"
                width={20}
                height={20}
                className="opacity-70"
              />
              <span className="text-sm">
                {feedback?.totalScore || "---"}/100
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="line-clamp-2 mt-5 text-muted-foreground leading-relaxed px-2 flex-grow">
          {feedback?.finalAssessment ||
            "You haven't taken the interview yet, take it now to improve your skills."}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
          <div className="flex gap-2">
            <span className="text-sm text-muted-foreground">
              <DisplayTechIcons techStack={techstack} />
            </span>
          </div>
          <Button variant="secondary" className="rounded-full" asChild>
            <Link
              href={
                feedback
                  ? `/interview/${interviewId}/feedback`
                  : `/interview/${interviewId}`
              }
              className="px-4 py-2 hover:no-underline"
            >
              {feedback ? "Check Feedback" : "View Interview"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
