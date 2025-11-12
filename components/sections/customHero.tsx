"use client";

import { motion, useAnimation } from "framer-motion";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const ease = [0.16, 1, 0.3, 1];

interface HeroPillProps {
  href?: string;
  text: string;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

function HeroPill({ href, text, icon, endIcon }: HeroPillProps) {
  const controls = useAnimation();

  return (
    <Link href={href || "/docs"} className="group">
      <motion.div
        className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm transition-colors hover:bg-muted"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        onHoverStart={() => controls.start({ rotate: -10 })}
        onHoverEnd={() => controls.start({ rotate: 0 })}
      >
        <motion.div
          className="text-foreground/60 transition-colors group-hover:text-primary"
          animate={controls}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          {icon || <Icons.logo className="h-4 w-4" />}
        </motion.div>
        <span>{text}</span>
        {endIcon || <Icons.chevronRight className="h-4 w-4" />}
      </motion.div>
    </Link>
  );
}

interface HeroContentProps {
  description: string;
  primaryAction?: {
    href: string;
    text: string;
    icon?: React.ReactNode;
  };
  secondaryAction?: {
    href: string;
    text: string;
    icon?: React.ReactNode;
  };
}

function HeroContent({
  description,
  primaryAction,
  secondaryAction,
}: HeroContentProps) {
  return (
    <div className="flex flex-col space-y-4">
      <motion.h1
        className="text-4xl tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <span className="max-w-[1024px] whitespace-pre-wrap ~text-3xl/6xl text-default-font text-center font-inter-stylized">
          <span className="text-[1.5em]">
            <span className="inline-block h-[1.6em] font-rany font-bold text-transparent bg-clip-text bg-linear-to-br from-wg-purple-500 via-wg-purple-600 to-wg-purple-700">
              Gamify
            </span>
            <span className="text-[0.98em]">Kit</span>
          </span>
          <br />
          Free UI kit to
          <br />
          <span className=" inline-block h-[1.1em] font-rany font-bold text-transparent bg-clip-text bg-linear-to-br from-wg-purple-500 via-wg-purple-600 to-wg-purple-700">
            gamify
          </span>{" "}
          your apps
        </span>
        {/*<span className="font-medium leading-snug tracking-tight ~text-7xl/9xl font-roboto-serif-slab text-default-font text-transparent bg-clip-text bg-linear-to-br from-purple-600 via-violet-700 to-indigo-800">
          <TypeAnimation
            sequence={[
              "leaderboards",
              2000,
              "daily check-ins",
              2000,
              "badges",
              2000,
              "quests",
              2000,
              "loot boxes",
              2000,
              "collectibles",
              2000,
              "highscores",
              2000,
              "lucky draws",
              2000,
              "missions",
              2000,
              "streaks",
              2000,
              "achievements",
              2000,
            ]}
            speed={{ type: "keyStrokeDelayInMs", value: 100 }}
            repeat={Infinity}
          />
        </span>*/}
      </motion.h1>
      <motion.p
        className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeInOut" }}
      >
        {description}
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      >
        {primaryAction && (
          <Link
            href={primaryAction.href}
            className={cn(
              buttonVariants({ size: "lg" }),
              "gap-2 w-full sm:w-auto justify-center font-inter-stylized font-bold text-lg",
            )}
          >
            {primaryAction.icon}
            {primaryAction.text}
          </Link>
        )}
        {secondaryAction && (
          <Link
            href={secondaryAction.href}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 w-full sm:w-auto justify-center",
            )}
          >
            {secondaryAction.icon}
            {secondaryAction.text}
          </Link>
        )}
      </motion.div>
    </div>
  );
}

interface HeroProps {
  pill?: {
    href?: string;
    text: string;
    icon?: React.ReactNode;
    endIcon?: React.ReactNode;
  };
  content: HeroContentProps;
  preview?: React.ReactNode;
}

export default function Hero({ pill, content, preview }: HeroProps) {
  return (
    <div className="container relative overflow-hidden">
      <div className="flex min-h-[calc(100vh-64px)] flex-col lg:flex-row items-center py-8 px-4 md:px-8 lg:px-12">
        <div className="flex flex-col gap-4 w-full lg:max-w-2xl">
          {pill && <HeroPill {...pill} />}
          <HeroContent {...content} />
        </div>
        {preview && (
          <div className="w-full lg:max-w-xl lg:pl-16 mt-12 lg:mt-0">
            {preview}
          </div>
        )}
      </div>
    </div>
  );
}
