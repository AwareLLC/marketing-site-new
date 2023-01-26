import PostList from '../../components/posts/post-list'
import Head from 'next/head'
import { getAllPosts } from '../../helpers/posts-utils'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { NextSeo } from 'next-seo'

function AllPost({ posts }) {
	return (
		<>
			<NextSeo title="All post" description="A list of all blog post" />

			<Head>
				<title>TaxPal - Accounting made simple for small businesses</title>
				<meta
					name="description"
					content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
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
