
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >


        <div className="border-b text-center">Login now to get 20% off</div>
        {children}
      </body>
    </html>
  );
}
