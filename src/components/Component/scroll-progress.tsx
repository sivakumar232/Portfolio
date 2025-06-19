'use client';

import { motion, SpringOptions, useScroll, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';
import { RefObject } from 'react';
import React from 'react';

export type ScrollProgressProps = {
  className?: string;
  springOptions?: SpringOptions;
  containerRef?: RefObject<HTMLDivElement>;
};

const DEFAULT_SPRING_OPTIONS: SpringOptions = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
};

export function ScrollProgress({
  className,
  springOptions,
  containerRef,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll({
    container: containerRef,
    layoutEffect: false,
  });

  const scaleY = useSpring(scrollYProgress, {
    ...DEFAULT_SPRING_OPTIONS,
    ...(springOptions ?? {}),
  });

  return (
    <motion.div
      className={cn(
        'fixed left-0 top-0 h-full w-1 bg-white origin-top z-50',
        className
      )}
      style={{ scaleY }}
    />
  );
}
