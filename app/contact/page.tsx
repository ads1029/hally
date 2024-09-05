import Navigation from "../components/Navigation";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navigation />
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
        <p className="mb-4">Feel free to reach out for collaborations or inquiries!</p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p>Email: your.email@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Social Media</h2>
          <div className="flex space-x-4">
            {['instagram', 'twitter', 'facebook'].map((platform) => (
              <a
                key={platform}
                href={`https://${platform}.com/yourusername`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}