import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
export interface Post {
  userId: number
  id: number
  title: string
  body: string
}
const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.body}</CardDescription>
      </CardHeader>
    </Card>
  )
}

export default PostCard