import type { Metadata } from 'next';
import '../index.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Banner from '@/components/Banner/Banner';
import { client } from '@/sanity/client';
import { SanityDocument } from 'next-sanity';
import Footer from '@/components/Footer';
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Frank Dulko'
};

const PROJECTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]`;

const options = { next: { revalidate: 30 } };

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const posts = await client.fetch<SanityDocument[]>(PROJECTS_QUERY);

  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Banner />
        <div id="root" style={{ flex: 1 }}>
          {children}
        </div>
        <Footer projects={posts} />
      </body>
    </html>
  );
}
