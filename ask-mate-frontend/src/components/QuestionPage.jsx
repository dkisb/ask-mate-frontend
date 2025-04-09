import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function QuestionPage() {
  const [question, setQuestion] = useState(null);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch(`/api/question/${id}`);
        const data = await response.json();
        setQuestion(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (id) fetchQuestion();
  }, [id]);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/answer/${id}`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchComments();
  }, [id, question]);

  return (
    <div>
      <h1>Question</h1>
      {question ? (
        <div>
          <h2>{question.title}</h2>
          <p>{question.content}</p>
          <small>Created: {question.created}</small>
        </div>
      ) : (
        <p>Loading question...</p>
      )}

      <h3>Comments</h3>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.content}</p>
            <small>
              By User {comment.user_id} on {comment.created}
            </small>
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
}
