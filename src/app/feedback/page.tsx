export default function FeedbackPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800">Feedback</h1>
      <p className="text-gray-600">We’d love to hear your thoughts!</p>
      <form className="mt-4 flex flex-col gap-4 w-full max-w-md">
        <textarea
          className="border border-gray-300 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your feedback..."
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
