import React from 'react'
import Card from './shared/Card'
import { useParams } from 'react-router-dom'

function Post() {
  const params = useParams()
  return (
    <>
      <Card>This is the post id {params.id}</Card>
      <Card>This is the name {params.name}</Card>
    </>
  )
}

export default Post