import { Loader2 } from "lucide-react";

interface LoaderProps {
  text?: string;
  fullScreen?: boolean;
  size?: "sm" | "md" | "lg";
}

const Loader = ({
  text = "Loading...",
  fullScreen = false,
  size = "md",
}: LoaderProps) => {
  const sizes = {
    sm: "h-5 w-5",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${
        fullScreen ? "min-h-screen w-full bg-background" : "py-8"
      }`}
    >
      <Loader2
        className={`${sizes[size]} animate-spin text-primary`}
        strokeWidth={2.5}
      />

      {text && <p className="text-sm font-medium text-primary">{text}</p>}
    </div>
  );
};

export default Loader;
