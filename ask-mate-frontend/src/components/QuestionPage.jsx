import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function QuestionPage() {
  const [question, setQuestion] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentText, setCommentText] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch(`/api/question/${id}`);
        const data = await response.json();
        setQuestion(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (id) fetchQuestion();
  }, [id]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/answer/${id}`);
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    try {
      const response = await fetch(`/api/answer/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: commentText,
          userId: 1,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const newAnswerId = await response.json();
      const newComment = {
        id: newAnswerId,
        content: commentText,
        userId: 1,
        createdAt: new Date().toISOString(),
      };
      setComments([...comments, newComment]);
      setCommentText('');
      fetchComments();
    } catch (error) {
      console.error('Error posting comment:', error);
      alert('Failed to post comment. Please try again.');
    }
  };

  const sortedComments = [...comments].sort(
    (a, b) => new Date(b.created || b.createdAt) - new Date(a.created || a.createdAt)
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Question</h1>
      {loading || !question ? (
        <p>Loading question...</p>
      ) : (
        <div className="mb-6">
          <h2 className="text-xl font-semibold">{question.title}</h2>
          <p className="text-gray-500">{question.content}</p>
          <small className="text-gray-600">Created: {question.created}</small>
        </div>
      )}
      <form className="mb-6" onSubmit={handleSubmit}>
        <div className="py-2 px-4 mb-4 bg-white rounded-lg border border-gray-200">
          <textarea
            id="comment"
            rows="6"
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
        >
          Post comment
        </button>
      </form>

      <h3 className="text-lg font-bold mb-4">Comments</h3>
      {sortedComments.length > 0 ? (
        sortedComments.map((comment) => (
          <div key={comment.id} className="p-6 mb-3 bg-white rounded-lg border-t border-gray-200">
            <p className="text-lg font-bold mb-4">{comment.content}</p>
            <small className="text-gray-600">
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
