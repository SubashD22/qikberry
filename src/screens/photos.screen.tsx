import { useEffect } from 'react'
import { useGetPhotosQuery } from '../store/services/photos.service'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
function Photos() {
  const { user } = useSelector((state: any) => state.user)
  let navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [user])
  const { data, isLoading, error } = useGetPhotosQuery(1)
  console.log(data)
  return (
    <div>
      {data?.map((photo: any) => (
        <div key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </div>
      ))}
    </div>
  )
}

export default Photos 