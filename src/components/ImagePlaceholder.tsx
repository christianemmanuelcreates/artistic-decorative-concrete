import { ImagePlus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: "square" | "video" | "wide" | "tall";
}

const aspectClass: Record<NonNullable<ImagePlaceholderProps["aspectRatio"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[21/9]",
  tall: "aspect-[3/4]",
};

export function ImagePlaceholder({
  label,
  className,
  aspectRatio = "video",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Photo placeholder: ${label}`}
      className={cn(
        "flex w-full items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted",
        aspectClass[aspectRatio],
        className
      )}
    >
      <div className="flex flex-col items-center gap-2 text-muted-foreground">
        <ImagePlus className="size-8" aria-hidden="true" />
        <span className="text-xs font-medium tracking-wide uppercase">{label}</span>
      </div>
    </div>
  );
}
