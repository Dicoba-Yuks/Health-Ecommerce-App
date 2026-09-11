export const metadata = {
  title: 'Health E-Commerce Web',
  description: 'Monorepo Next.js Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}