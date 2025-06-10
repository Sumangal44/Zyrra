const reviews = [
  {
    id: 1,
    name: "Arjun Patel",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    rating: 5,
    text: "Very good service! I will definitely recommend to everyone."
  },
  {
    id: 2,
    name: "Priya Sharma",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4,
    text: "Nice experience, could be a bit better, but overall good."
  },
  {
    id: 3,
    name: "Rahul Singh",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 3,
    text: "Service was okay, needs improvement in some areas."
  },
  {
    id: 4,
    name: "Neha Gupta",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    rating: 5,
    text: "Excellent experience! Five stars!"
  },
  {
    id: 5,
    name: "Suresh Kumar",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    rating: 4,
    text: "Very nice experience. The staff were friendly and helpful."
  },
  {
    id: 6,
    name: "Anjali Mehta",
    avatar: "https://randomuser.me/api/portraits/women/27.jpg",
    rating: 2,
    text: "Did not like the support. Needs improvement."
  },
  {
    id: 7,
    name: "Vikram Joshi",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    text: "Exceeded my expectations. Wonderful experience!"
  },
  {
    id: 8,
    name: "Sunita Reddy",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 3,
    text: "Service was average, but the price was good."
  },
  {
    id: 9,
    name: "Rohit Sharma",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    rating: 4,
    text: "Smooth process from start to finish. Great job!"
  },
  {
    id: 10,
    name: "Deepa Nair",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    rating: 1,
    text: "Disappointing experience, would not recommend."
  }
];

const Star = ({ filled }) => (
  <span className={filled ? "text-yellow-400" : "text-gray-300"}>★</span>
);

const ReviewsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl  text-center mb-8">Customer Reviews</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map(({ id, name, avatar, rating, text }) => (
          <div
            key={id}
            className="bg-white shadow-md rounded-2xl p-6 transition hover:shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={avatar}
                alt={name}
                className="w-14 h-14 rounded-full border-2 border-gray-200"
              />
              <div>
                <p className="font-semibold">{name}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} filled={i < rating} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
