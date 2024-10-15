import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:bg-neutral-100',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-b from-primary to-primary text-white hover:from-primary-foreground hover:to-primary-foreground',
        secondary: 'bg-gradient-to-b from-secondary to-secondary text-primary hover:text-primary-foreground shadow-none'
        // destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        // outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        // ghost: 'hover:bg-accent hover:text-accent-foreground',
        // link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-14 px-4 py-4',
        lg: 'h-14 rounded-md px-8',
        sm: 'h-10 rounded-md px-2 text-xs',
        icon: 'size-4'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export { Button, buttonVariants }
