

const Contact = () => {
  const email = "gabrielgsilva1995@gmail.com";
  
  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    // Simple feedback - change button text briefly
    const button = document.querySelector('#copy-email-btn');
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    setTimeout(() => {
      button.textContent = originalText;
    }, 2000);
  };

  return (
    <div id="Contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl font-light">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Get in Touch</span>
        </h1>
        <p className="text-center text-lg font-semibold text-gray-500">
          Want to chat? Click the button below to copy my email address.
        </p>
        <button 
          id="copy-email-btn"
          onClick={copyEmail}
          className="rounded-lg border border-indigo-600 bg-black px-6 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
        >
          Copy Email
        </button>
      </div>
    </div>
  )
}

export default Contact
