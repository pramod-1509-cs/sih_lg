import React from 'react';
import './About.css'
function About() {
  return (
    <div className="container-about">
      <div className="title">About</div> {/* Add the "title" class for center alignment */}
      <div className="header2">Introduction:</div>
      <div className="text">
        Our gamified platform is a dynamic and interactive space that empowers children in India with a deep understanding of their rights and encourages them to become advocates for themselves and their peers. Rooted in real-life scenarios, storytelling, and immersive experiences, our platform makes learning about child rights engaging and enjoyable.
      </div>

      <div className="header2">Mission:</div>
      <div className="text">
        Our mission is to foster increased legal literacy and awareness among children aged 8 to 16 across India. By providing accessible and personalized learning experiences, we aim to equip children with the knowledge and confidence to stand up for their rights and those of others. Through engaging gameplay and a supportive community, we envision a future where children are better prepared to navigate the legal landscape and contribute to social justice and equity.
      </div>
      <div className="header2">Empowering You:</div>
      <div className="text">
        In this section we empower you to take action and make a difference. If you ever witness a violation of your rights or those of your friends, remember that you have the right to seek help from legal authorities. Your voice matters, and it can lead to positive change.
        We're here to support you on your journey to understanding your fundamental rights better. Our platform offers modular learning videos that break down these rights into engaging and easy-to-understand lessons. By accessing these resources, you can equip yourself with the knowledge needed to stand up for your rights confidently.
      </div>
      <div className="header2">Contact Us:</div>
      <div className="text">
        If you have any questions, concerns, or requests related to your privacy and data protection while using our platform, please don't hesitate to reach out to our Privacy Team at <a href="mailto:Teamshadow@kletech.ac.in">Teamshadow@kletech.ac.in</a>. We are here to ensure your online experience is secure and enjoyable.
      </div>
    </div>
  );
}

export default About;
