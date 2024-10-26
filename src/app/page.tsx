import Link from 'next/link';
import { type SanityDocument } from 'next-sanity';

import { client } from '@/sanity/client';
import HomePage from '@/app-pages/HomePage';
import Banner from '@/components/Banner/Banner';
import Footer from '@/components/Footer';
import React from 'react';

const PROJECTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(publishedAt asc)[0...12]`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(PROJECTS_QUERY, {}, options);

  return <HomePage projects={posts} />;
}
