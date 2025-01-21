import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <nav className="bg-gray-800 p-4 text-white">
          <Link href="/feedback" className="hover:underline text-white">
            Give Feedback
          </Link>
        </nav>
        <div>{modal}</div>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
