import type { Metadata } from 'next';
import '../index.scss';

export const metadata: Metadata = {
  title: 'Frank Dulko'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
