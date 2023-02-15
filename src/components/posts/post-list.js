import PostCard from './post-card'

function PostList({ posts, heading }) {
	const displayedPost =
		posts.length > 0 ? (
			posts.map((post) => <PostCard key={post.slug} post={post} />)
		) : (
			<h1 className="font-Rubik my-2 text-center text-lg text-gray-700 md:my-0 md:text-left md:text-xl ">
				Nothing available :)
			</h1>
		)
	return (
		<div className="font-Rubik w-full text-gray-800 ">
			<div className="flex max-w-4xl m-auto flex-wrap justify-evenly overflow-hidden px-2 py-4">
				<div className="w-full md:py-6 md:px-14 ">
					<h1 className="font-Bai my-2 text-center text-2xl font-bold md:my-0 md:text-left md:text-3xl ">
						{heading ? heading : 'Resources'}
					</h1>
				</div>
				{displayedPost}
			</div>
		</div>
	)
}

export default PostList
