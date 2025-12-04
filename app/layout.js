
import "./globals.css";

export const metadata = {
  title: "Anna Beauty | Personalized Skincare",
  description: "Japanese Skincare Advisor and Personalized Routine.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
