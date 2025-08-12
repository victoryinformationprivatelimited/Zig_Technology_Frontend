import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null); // 'success', 'error', or null

  //interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> { }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: typeof formData) => ({
      ...prev,
      [name]: value,
    }));

    // Clear status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const validateForm = () => {
    const errors = [];

    if (!formData.name.trim()) errors.push("Name is required");
    if (!formData.phone.trim()) errors.push("Phone is required");
    if (!formData.email.trim()) errors.push("Email is required");
    if (!formData.message.trim()) errors.push("Message is required");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push("Please enter a valid email address");
    }

    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      errors.push("Please enter a valid phone number");
    }

    return errors;
  };

  // interface ContactFormData {
  //   name: string;
  //   phone: string;
  //   email: string;
  //   message: string;
  // }

  interface ApiResponse {
    message?: string;
    [key: string]: string | undefined;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    const errors: string[] = validateForm();
    if (errors.length > 0) {
      alert("Please fix the following errors:\n\n" + errors.join("\n"));
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response: Response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result: ApiResponse = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        alert("Thank you! Your message has been sent successfully. We'll get back to you soon.");
      } else {
        setSubmitStatus('error');
        alert("Sorry, there was an error sending your message. Please try again or contact us directly.");
        console.error('Error:', result.message);
      }
    } catch (error: unknown) {
      setSubmitStatus('error');
      alert("Sorry, there was an error sending your message. Please check your internet connection and try again.");
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto border border-blue-300 bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-100 group">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h4 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold mb-4 group-hover:text-blue-800 transition-colors duration-300">
            Contact Form
          </h4>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full group-hover:w-32 transition-all duration-300"></div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
          {/* Name Field */}
          <div className="form-field-group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-2xl border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-md focus-within:border-blue-400 focus-within:shadow-lg">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name *"
                required
                className="w-full px-6 py-5 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-lg font-medium"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Field */}
          <div className="form-field-group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-2xl border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:border-purple-300 hover:shadow-md focus-within:border-purple-400 focus-within:shadow-lg">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone *"
                required
                className="w-full px-6 py-5 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-lg font-medium"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Email Field */}
          <div className="form-field-group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-2xl border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:border-emerald-300 hover:shadow-md focus-within:border-emerald-400 focus-within:shadow-lg">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email *"
                required
                className="w-full px-6 py-5 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-lg font-medium"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="form-field-group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-2xl border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:border-amber-300 hover:shadow-md focus-within:border-amber-400 focus-within:shadow-lg">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message *"
                rows={6}
                required
                className="w-full px-6 py-5 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none resize-none text-lg font-medium"
              ></textarea>
              <div className="absolute right-4 top-6">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group/btn relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-bold text-white transition-all duration-300 border-2 rounded-full cursor-pointer ${isSubmitting
                ? 'border-gray-300 bg-gray-400 cursor-not-allowed'
                : 'border-blue-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105'
                }`}
            >
              <span className={`absolute inset-0 w-full h-full transition-all duration-300 transform rounded-full ${isSubmitting
                ? 'bg-gray-400'
                : 'bg-gradient-to-r from-blue-600 to-blue-700 group-hover/btn:from-blue-500 group-hover/btn:to-blue-600'
                }`}></span>
              <span className="relative text-xl font-semibold flex items-center">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}