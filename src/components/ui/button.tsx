import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "dark" | "light";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild, variant = "dark", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex h-12 items-center justify-center rounded-none px-6 text-sm font-bold uppercase tracking-[0.08em] transition",
          variant === "dark"
            ? "bg-ink text-cream hover:bg-green"
            : "border border-cream/40 bg-cream/10 text-cream hover:bg-cream hover:text-ink",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
