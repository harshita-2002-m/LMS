import React, { useState } from "react";
import Syllabus from "./Syllabus";

export default function CourseSyllabus() {
  const [faqs, setFaqs] = useState([
    {
      question: "Topic 1",
      answer: "Lorem ipsum...",
      open: false,
      isEditing: false, // Add isEditing property to track edit mode
    },
    {
      question: "Topic 2",
      answer: "Sub Topic 1, Sub Topic 2",
      open: false,
      isEditing: false,
    },
    {
      question: "topic3",
      answer: "This many!",
      open: false,
      isEditing: false,
    },
    // ... (other syllabus items)
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  const toggleEdit = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.isEditing = !faq.isEditing; // Toggle edit mode
        }
        return faq;
      })
    );
  };

  const handleEdit = (index, editedContent) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.isEditing = false; // Exit edit mode
          faq.answer = editedContent; // Update content
        }
        return faq;
      })
    );
  };

  return (
    <div className="container CourseSyllabus">
      <div className="syllabusFaq faqs text-light">
        SYLLABUS
        {/* <button
          className="btn btn-sm float-end bg-white text-dark AddContent"
          type="button"
        >
          Add Topic
        </button> */}
      </div>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <Syllabus
            faq={faq}
            index={index}
            key={index}
            toggleFAQ={toggleFAQ}
            toggleEdit={toggleEdit} // Pass toggleEdit function
            handleEdit={handleEdit} // Pass handleEdit function
          />
        ))}
      </div>
    </div>
  );
}
