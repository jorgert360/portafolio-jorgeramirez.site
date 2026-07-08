import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[transform,filter,background-color,border-color] duration-200 will-change-transform active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[0_10px_30px_-10px_color-mix(in_srgb,var(--primary)_70%,transparent)] hover:brightness-110",
        gradient:
          "text-white bg-[linear-gradient(110deg,#3b82f6,#8b5cf6_55%,#06b6d4)] bg-[length:200%_auto] hover:bg-[position:right_center] shadow-[0_12px_40px_-12px_rgba(99,102,241,0.75)] transition-[background-position,filter] duration-500",
        outline:
          "border border-border-strong bg-transparent text-foreground hover:bg-surface-2 hover:border-primary/50",
        ghost: "text-foreground hover:bg-surface-2",
        glass: "glass text-foreground hover:bg-surface-2/70",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base [&_svg]:size-5",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
