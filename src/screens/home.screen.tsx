import { useEffect, useState } from 'react'
import PaginationComponent from '@/components/pagination.component'
import Post from '@/components/posts.component'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
function Home() {
  const { user } = useSelector((state: any) => state.user)
  let navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [user])
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <div className=''>
      <Post id={currentPage} />
      <div className='fixed bottom-0 left-0 right-0 flex justify-center items-center p-4'>
        <PaginationComponent currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  )
}

export default Home