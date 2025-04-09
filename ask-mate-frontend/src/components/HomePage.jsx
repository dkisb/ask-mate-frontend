import { useState, useEffect } from 'react';

export default function HomePage() {
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/question/all');
        const data = await response.json();
        console.log(data);
        setQuestions(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>All Questions</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        questions.map((question) => {
          return (
            <div key={question.id}>
              <h2>{question.title}</h2>
              <p>{question.content}</p>
              <small>Created: {question.created}</small>
            </div>
          );
        })
      )}
    </div>
  );
}
