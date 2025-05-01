import { memo } from 'react'
import { useGetPostsQuery } from '@/store/services/post.service'
import PostCard from './postCard.component'
import type { Post } from './postCard.component'

const Post = memo(({ id }: { id: number }) => {
  const { data, isLoading, isError } = useGetPostsQuery(id)
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
      {data?.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
})

export default Post