import {
  BrowserRouter, Route, Routes,
  FeedBackForm, FeedBackStats, FeedbackList,
  useState,
  FeedbackData,
  uuidv4,
  About, Header, Post, PostNav, AboutIconLink
} from './imports'


function App() {

  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {

    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }

  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <>
      <BrowserRouter>
        <Header />

        <div className='container'>
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedBackForm handleAdd={addFeedback} />
                <FeedBackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
              </>
            }>

            </Route>

            <Route path="/about" element={<About />} />
            <Route path="/post/:id/:name" element={<Post />} />
            <Route path="/postnav/*" element={<PostNav />} />
          </Routes>


          <AboutIconLink />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
