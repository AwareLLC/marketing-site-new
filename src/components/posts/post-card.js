// import { AiOutlineLike } from 'react-icons/ai'
// import { GoComment } from 'react-icons/go'
import Image from 'next/image'
import Link from 'next/link'

function PostCard({ post }) {
	const { title, image, excerpt, date, slug, readTime, topic } = post

	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})

	const imagePath = `/images/posts/${slug}/${image}`
	const linkPath = `/posts/${slug}`

	return (
		<>
			<Link href={linkPath}>
				<div className="my-2 mx-auto w-11/12 overflow-hidden rounded-lg border border-gray-500 py-6 px-6 hover:cursor-pointer hover:border-slate-600 hover:bg-slate-200 hover:shadow-sm md:flex md:w-[600px]">
					<div className="text-center md:w-7/12 md:text-left">
						<h1 className="font-Bai text-2xl font-bold">{title}</h1>
						<h3 className="my-2 text-lg text-gray-600">{excerpt}</h3>
					</div>
					<div className="h-full md:w-5/12">
						<Image
							src={imagePath}
							className="rounded-xl shadow-md"
							width="700"
							height="400"
							alt="post image"
						/>
						<div>
							<h3 className="text-center text-xl font-semibold">
								{formattedDate}
							</h3>
						</div>
						<div className="my-4 flex justify-evenly font-medium">
							<h3 className="inline rounded-lg  border border-slate-300 bg-slate-100 px-2 text-base ">
								{topic}
							</h3>
							<h2 className="text-lg">{readTime} read</h2>
						</div>
					</div>
				</div>
			</Link>
		</>
	)
}

export default PostCard
