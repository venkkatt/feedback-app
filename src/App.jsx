import {
  BrowserRouter, Route, Routes,
  FeedBackForm, FeedBackStats, FeedbackList,
  useState,
  FeedbackData,
  About, Header, Post, PostNav, AboutIconLink
} from './imports';
import { FeedbackProvider } from './context/FeedbackContext'


function App() {

  // const [feedback, setFeedback] = useState(FeedbackData);

  // const deleteFeedback = (id) => {

  //   if (window.confirm('Are you sure you want to delete?')) {
  //     setFeedback(feedback.filter((item) => item.id !== id))
  //   }

  // }


  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />

        <div className='container'>
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedBackForm />
                <FeedBackStats />
                <FeedbackList />
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
    </FeedbackProvider>
  );
}

export default App;
