import React from 'react';

export default function FeedbackForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('emailId');
    const feedback = formData.get('feedback');
    const mailtoLink = `mailto:pramodsend8@gmail.com?subject=Feedback&body=Name: ${name}%0AEmail: ${email}%0AFeedback: ${feedback}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="John Doe" />
        <input type="email" name="emailId" placeholder="abc@gmail.com" />
        <textarea name="feedback" cols="30" rows="10"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
