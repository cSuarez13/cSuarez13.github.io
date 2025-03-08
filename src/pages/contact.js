// src/pages/contact.js
import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Mail, Send, User, MessageSquare, Briefcase, CheckCircle, XCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    contactReason: 'question', // default value: 'question', 'job', 'collaboration'
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: ''
    });

    try {
      // Use environment variable for Formspree endpoint
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your-formspree-id';
      
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          contactReason: formData.contactReason
        })
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          isError: false,
          message: 'Thank you! Your message has been sent successfully.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          contactReason: 'question',
        });
        
        // Scroll to top after successful submission
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: error.message || 'Failed to send message. Please try again later.'
      });
    }
  };

  // Animation hooks
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Layout title="Contact - Claudia Suarez" description="Get in touch with Claudia Suarez">
      <div className="container mx-auto px-4 pt-16 pb-24 max-w-6xl">
        <div 
          ref={headerRef}
          className={`text-center mb-16 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000 ease-out`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-400 mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Have a question, job opportunity, or want to collaborate on a project? 
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Status messages */}
        {formStatus.isSubmitted && (
          <div className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start">
            <CheckCircle className="flex-shrink-0 text-green-500 dark:text-green-400 mr-3" size={24} />
            <div>
              <h3 className="font-semibold text-green-800 dark:text-green-200">Message Sent!</h3>
              <p className="text-green-700 dark:text-green-300">{formStatus.message}</p>
            </div>
          </div>
        )}

        {formStatus.isError && (
          <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start">
            <XCircle className="flex-shrink-0 text-red-500 dark:text-red-400 mr-3" size={24} />
            <div>
              <h3 className="font-semibold text-red-800 dark:text-red-200">Error</h3>
              <p className="text-red-700 dark:text-red-300">{formStatus.message}</p>
            </div>
          </div>
        )}

        {/* Contact Form */}
        <div 
          ref={formRef}
          className={`bg-white dark:bg-dark-900 p-6 md:p-8 rounded-xl shadow-md border border-dark-100 dark:border-dark-800 max-w-3xl mx-auto ${
            formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000 delay-300 ease-out`}
        >
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-dark-700 dark:text-dark-300 font-medium mb-2 flex items-center">
                  <User size={18} className="mr-2 text-purple-600 dark:text-purple-400" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formErrors.name 
                      ? 'border-red-300 dark:border-red-600' 
                      : 'border-dark-200 dark:border-dark-700'
                  } bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600 transition-colors`}
                />
                {formErrors.name && (
                  <p className="mt-1 text-red-500 dark:text-red-400 text-sm">{formErrors.name}</p>
                )}
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-dark-700 dark:text-dark-300 font-medium mb-2 flex items-center">
                  <Mail size={18} className="mr-2 text-purple-600 dark:text-purple-400" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formErrors.email 
                      ? 'border-red-300 dark:border-red-600' 
                      : 'border-dark-200 dark:border-dark-700'
                  } bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600 transition-colors`}
                />
                {formErrors.email && (
                  <p className="mt-1 text-red-500 dark:text-red-400 text-sm">{formErrors.email}</p>
                )}
              </div>

              {/* Subject field */}
              <div>
                <label htmlFor="subject" className="block text-dark-700 dark:text-dark-300 font-medium mb-2 flex items-center">
                  <MessageSquare size={18} className="mr-2 text-purple-600 dark:text-purple-400" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formErrors.subject 
                      ? 'border-red-300 dark:border-red-600' 
                      : 'border-dark-200 dark:border-dark-700'
                  } bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600 transition-colors`}
                />
                {formErrors.subject && (
                  <p className="mt-1 text-red-500 dark:text-red-400 text-sm">{formErrors.subject}</p>
                )}
              </div>

              {/* Contact Reason */}
              <div>
                <label className="block text-dark-700 dark:text-dark-300 font-medium mb-2 flex items-center">
                  <Briefcase size={18} className="mr-2 text-purple-600 dark:text-purple-400" />
                  Reason for Contact
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="contactReason"
                      value="question"
                      checked={formData.contactReason === "question"}
                      onChange={handleChange}
                      className="form-radio h-4 w-4 text-purple-600 dark:text-purple-500 border-dark-300 dark:border-dark-600 focus:ring-purple-500 dark:focus:ring-purple-600"
                    />
                    <span className="ml-2 text-dark-700 dark:text-dark-300">Question</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="contactReason"
                      value="job"
                      checked={formData.contactReason === "job"}
                      onChange={handleChange}
                      className="form-radio h-4 w-4 text-purple-600 dark:text-purple-500 border-dark-300 dark:border-dark-600 focus:ring-purple-500 dark:focus:ring-purple-600"
                    />
                    <span className="ml-2 text-dark-700 dark:text-dark-300">Job Opportunity</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="contactReason"
                      value="collaboration"
                      checked={formData.contactReason === "collaboration"}
                      onChange={handleChange}
                      className="form-radio h-4 w-4 text-purple-600 dark:text-purple-500 border-dark-300 dark:border-dark-600 focus:ring-purple-500 dark:focus:ring-purple-600"
                    />
                    <span className="ml-2 text-dark-700 dark:text-dark-300">Collaboration</span>
                  </label>
                </div>
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message" className="block text-dark-700 dark:text-dark-300 font-medium mb-2 flex items-center">
                  <MessageSquare size={18} className="mr-2 text-purple-600 dark:text-purple-400" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Enter your message here..."
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formErrors.message 
                      ? 'border-red-300 dark:border-red-600' 
                      : 'border-dark-200 dark:border-dark-700'
                  } bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600 transition-colors`}
                ></textarea>
                {formErrors.message && (
                  <p className="mt-1 text-red-500 dark:text-red-400 text-sm">{formErrors.message}</p>
                )}
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-70"
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Contact info section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <ContactInfoCard 
            icon={<Mail size={24} />}
            title="Email"
            content={<a href="mailto:csuarez.socorro@gmail.com" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">csuarez.socorro@gmail.com</a>}
          />
          <ContactInfoCard 
            icon={<Briefcase size={24} />}
            title="Work"
            content={<a href="mailto:csuarez-socorro@myseneca.ca" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">csuarez-socorro@myseneca.ca</a>}
          />
          <ContactInfoCard 
            icon={<User size={24} />}
            title="Location"
            content="Toronto, Ontario, Canada"
          />
        </div>
      </div>
    </Layout>
  );
}

function ContactInfoCard({ icon, title, content }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`flex flex-col items-center text-center p-6 bg-white dark:bg-dark-900 rounded-lg shadow-md border border-dark-100 dark:border-dark-800 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } transition-all duration-700 ease-out`}
    >
      <div className="mb-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-dark-800 dark:text-dark-200 mb-2">{title}</h3>
      <div className="text-dark-600 dark:text-dark-400">{content}</div>
    </div>
  );
}