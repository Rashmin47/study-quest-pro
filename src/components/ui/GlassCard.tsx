import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  glowColor?: 'primary' | 'secondary' | 'eca' | 'none';
}

export function GlassCard({ 
  children, 
  className, 
  interactive = false, 
  glowColor = 'none',
  ...props 
}: GlassCardProps) {
  return (
    <div 
      className={cn(
        "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden",
        interactive && "transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-xl",
        glowColor === 'primary' && "hover:shadow-primary/20",
        glowColor === 'secondary' && "hover:shadow-secondary/20",
        glowColor === 'eca' && "hover:shadow-amber-500/20",
        className
      )}
      {...props}
    >
      {/* Subtle top inner gradient for depth */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Background glow effects */}
      {glowColor !== 'none' && (
        <div className={cn(
          "absolute -inset-24 opacity-10 blur-3xl pointer-events-none rounded-full transition-opacity duration-500",
          interactive ? "group-hover:opacity-20" : "",
          glowColor === 'primary' && "bg-primary",
          glowColor === 'secondary' && "bg-secondary",
          glowColor === 'eca' && "bg-amber-500"
        )} />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
