import {
  Route, Routes, Navigate, useNavigate,
  Card
} from '../imports'

function PostNav() {
  const status = 200

  const navigate = useNavigate()

  if (status === 404) {
    return <Navigate to='/notfound' />
  }


  const onClick = () => {
    console.log('hello');
    navigate('/about');
  }

  return (
    <Card>PostNav
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<Card><h1>Nexted Route</h1></Card>} />
      </Routes>
    </Card>
  )
}

export default PostNav