import React, { useState, useContext } from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'


function FeedBackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState()
  const [btnDisabled, setbtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const { addFeedback } = useContext(FeedbackContext)

  const handleTextChange = (e) => {
    if (text === '') {
      setbtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setbtnDisabled(true)
      setMessage('Text must be atlease 10 characters')
    }
    else {
      setbtnDisabled(false)
      setMessage(null)

    }
    setText(e.target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text, rating
      }
      addFeedback(newFeedback)
      setText('')


    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder='Write a review'
            value={text} />
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedBackForm