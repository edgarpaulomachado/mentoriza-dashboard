"use client";

import React from "react";
import type { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  content?: React.ReactNode;
  icon: LucideIcon;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export default function DashboardCards({
  title,
  content,
  icon,
  children,
  footer,
  className,
}: CardProps) {
  const Icon = icon;

  return (
    <Card className={cn("min-h-31 bg-white rounded-lg", className)}>
      <CardHeader className="pb-2">
        <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-md">
          <Icon className="w-4 h-4 text-purple-600" />
        </div>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="flex justify-between items-center">
          <h2 className="text-xs font-normal text-muted-foreground">{title}</h2>
          {children}
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex justify-between items-center w-full">
          <div className="text-base font-bold">{content}</div>
          {footer}
        </div>
      </CardFooter>
    </Card>
  );
}
