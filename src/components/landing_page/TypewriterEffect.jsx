"use client";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const TypewriterEffectSmooth = ({
  words = [
    {
      text: "Tailored",
    },
    {
      text: "Responses",
    },
    {
      text: "at",
    },
    {
      text: "Your",
    },
    {
      text: "Fingertips",
    },
  ],
  className,
  cursorClassName,
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => (
    <div>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn("text-slate-200", word.className)}
            >
              {char}
            </span>
          ))}
          &nbsp;
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("flex w-screen", className)}>
      <motion.div
        className="overflow-hidden"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="md:text-lg lg:text-2xl xl:text-3xl text-slate-200 text-start font-normal tracking-normal leading-normal"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "bg-slate-200 rounded-sm w-[4px] h-6 md:h-7 lg:h-9 xl:h-10",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
