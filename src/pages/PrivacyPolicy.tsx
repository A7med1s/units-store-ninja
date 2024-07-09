// src/components/PrivacyPolicy.tsx
import React from 'react';
import { FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white text-blue-900 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <FaLock className="text-6xl text-yellow-500 mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Privacy & Policy</h1>
          <p className="text-lg md:text-xl mb-4">
            Welcome to <span className="text-yellow-500">Units Store</span>. This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context.
          </p>
          <p className="text-lg md:text-xl mb-4">
            Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What personal information do we collect from the people that visit our blog, website or app?</h2>
          <p className="text-lg md:text-xl mb-4">
            When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number or other details to help you with your experience.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">When do we collect information?</h2>
          <p className="text-lg md:text-xl mb-4">
            We collect information from you when you register on our site, place an order, subscribe to a newsletter, fill out a form or enter information on our site.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How do we use your information?</h2>
          <p className="text-lg md:text-xl mb-4">
            We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:
          </p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
            <li>To improve our website in order to better serve you.</li>
            <li>To allow us to better service you in responding to your customer service requests.</li>
            <li>To quickly process your transactions.</li>
            <li>To send periodic emails regarding your order or other products and services.</li>
          </ul>
          <p className="text-lg md:text-xl mb-4">
            If you have any questions or concerns regarding this privacy policy, please contact us .
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;