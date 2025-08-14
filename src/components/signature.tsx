"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export function Signature() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 450 150"
      className="h-24 w-auto text-foreground"
      aria-label="CEO Signature"
    >
      <path
        d="M20,100 C40,20 80,20 100,80 S150,140 180,80 C200,40 240,40 260,80 S310,120 340,80 C360,50 400,50 420,100"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          "transition-all duration-[2000ms] ease-out",
          isVisible ? "stroke-dashoffset-0" : "stroke-dashoffset-[1000]"
        )}
        style={{ strokeDasharray: 1000 }}
      />
    </svg>
  );
}
