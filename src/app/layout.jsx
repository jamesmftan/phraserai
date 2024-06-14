import "../styles/globals.css";
import { Roboto } from "next/font/google";
import { AuthProvider } from "../utils/providers";
import { cn } from "@/utils/cn";

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
