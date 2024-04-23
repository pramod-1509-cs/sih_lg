import React from 'react';
import './Privacy.css'
function Privacy() {
  return (
    <div className="container-privacy">
      <div className="privacy-section">
        <div className="section-title">Privacy</div> {/* Privacy as a section title */}
        <div className="section-content">
          At TeamShadow, we are deeply committed to ensuring the privacy and data protection of our users, especially children between the ages of 8 and 16. This privacy section outlines our practices and policies regarding the collection, use, and protection of personal information and data. We adhere to stringent standards to create a safe and secure online environment for all users.
        </div>

        <div className="subheading">Anonymous Input</div>
        <div className="section-content">
          When you participate in our interactive games, quizzes, and complaint submission, rest assured that your personal information remains strictly confidential. We do not collect, store, or share any personal information that can identify you, such as your name, address, or contact details.
        </div>

        <div className="subheading">Complaint Anonymity</div>
        <div className="section-content">
          If you choose to report a violation of rights through our platform, your complaint is handled with the utmost care. Your identity remains anonymous throughout the process. We believe in empowering children to take action without fear of exposure.
        </div>

        <div className="subheading">Legal Compliance</div>
        <div className="section-content">
          We fully comply with Indian laws and regulations, including the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021. We are committed to cooperating with legal authorities in the event of any legal obligations.
        </div>
      </div>
    </div>
  );
}

export default Privacy;
