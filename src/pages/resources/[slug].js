import PostContent from '../../components/posts/post-content'
import Head from 'next/head'
import { getPostData, getPostsFiles } from '../../helpers/posts-utils'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { NextSeo } from 'next-seo';

function SinglePost({ data }) {
    return (
        <>
          <NextSeo
              title={data.title}
              description={data.excerpt}
          />

          <Head>
            <title>Engage on LinkedIn, at lightning speed, with curated, dynamic, and custom feeds. Plus: Analytics.</title>
            <meta
              name="description"
              content="Engage on LinkedIn, at lightning speed, with curated, dynamic, and custom feeds. Plus: Analytics."
            />
          </Head>
          <Header />
          <main>
            <PostContent postData={data} />
          </main>
          <Footer />
        </>
    )
}



export const getStaticProps = (context) => {
    const { params } = context;
    const { slug } = params
    const postData = getPostData(slug);
    return {
        props: {
            data: postData
        },
        revalidate: 600,
    }
}
export const getStaticPaths = () => {
    const postsFileNames = getPostsFiles()
    const postsSlugs = postsFileNames.map((fileName) => fileName.replace(/\.md$/, ''))
    return {
        paths: postsSlugs.map((slug) => ({ params: { slug } })),
        fallback: false
    }
}

export default SinglePost
