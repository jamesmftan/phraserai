import { Roboto } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/utils/cn";
import { AuthProvider } from "../utils/providers";

export const metadata = {
  title: "PhraserAI",
  description: "Developed by James Tan",
};

const roboto = Roboto({
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  weight: "400",
  variable: "--roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-blue-950 select-none overflow-x-hidden",
          roboto.className
        )}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
