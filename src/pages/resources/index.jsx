import PostList from '../../components/posts/post-list'
import Head from 'next/head'
import { getAllPosts } from '../../helpers/posts-utils'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { NextSeo } from 'next-seo'

function AllPost({ posts }) {
	return (
		<>
			<NextSeo title="All resources" description="A list of all resources" />

      <Head>
        <title>Engage on LinkedIn, at lightning speed, with curated, dynamic, and custom feeds. Plus: Analytics.</title>
        <meta
          name="description"
          content="Engage on LinkedIn, at lightning speed, with curated, dynamic, and custom feeds. Plus: Analytics."
        />
      </Head>
			<Header />
			<main>
				<PostList posts={posts} />
			</main>
			<Footer />
		</>
	)
}

export const getStaticProps = () => {
	const data = getAllPosts()
	return {
		props: {
			posts: data,
		},
	}
}

export default AllPost
