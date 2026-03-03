import React, { useState, useEffect } from 'react';
import { IconCheck } from './Icons.jsx';

const QuoteModal = ({ isOpen, onClose, quoteData }) => {
  const [status, setStatus] = useState("idle"); 

  useEffect(() => {
    if (isOpen) setStatus("idle");
  }, [isOpen]);

  if (!isOpen) return null;

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    const formData = new FormData(event.target);
    
    formData.append("access_key", "e769da46-1e41-45e4-ae33-acae1bc6b547");
    
    const subject = quoteData 
      ? `Website Quote Request: ${quoteData.product.name} (Article: ${quoteData.variant.article})` 
      : `Website Bulk Inquiry / Contact Form`;
    formData.append("subject", subject);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setTimeout(() => onClose(), 3000); 
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box bounce-in">
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        {status === "success" ? (
          <div className="modal-success">
            <div className="success-icon"><IconCheck size={60} /></div>
            <h2>Request Sent Successfully</h2>
            <p>Thank you for reaching out. Our sales team will contact you shortly.</p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2>{quoteData ? "Request Custom Quote" : "Bulk Inquiry"}</h2>
              <p>{quoteData ? "Enter your details to get pricing for this specific variant." : "Need bulk anchors? Leave your requirements below."}</p>
            </div>

            <form onSubmit={onSubmit} className="modal-form">
              <input type="hidden" name="Product_Requested" value={quoteData ? `${quoteData.product.name} | Article: ${quoteData.variant.article}` : "General Bulk Inquiry"} />
              {quoteData && (
                <div className="quote-product-card">
                  <strong>Selected Product:</strong> {quoteData.product.name}<br/>
                  <strong>Article No:</strong> <span className="text-accent">{quoteData.variant.article}</span><br/>
                  <strong>Size:</strong> {quoteData.variant.drill} x {quoteData.variant.length}
                </div>
              )}
              <div className="form-row">
                <div className="form-group"><label>Full Name *</label><input type="text" name="name" required placeholder="John Doe" /></div>
                <div className="form-group"><label>Company Name *</label><input type="text" name="company" required placeholder="BuildTech Corp" /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Email Address *</label><input type="email" name="email" required placeholder="john@example.com" /></div>
                <div className="form-group"><label>Phone / WhatsApp *</label><input type="tel" name="phone" required placeholder="+91 98765 43210" /></div>
              </div>
              <div className="form-group"><label>Estimated Quantity Required</label><input type="text" name="quantity" placeholder="e.g., 5,000 pieces" /></div>
              <div className="form-group"><label>Additional Message / Requirements *</label><textarea name="message" required rows="3" placeholder="Please share lead time and best pricing..."></textarea></div>
              <button type="submit" className="btn btn-primary full-width btn-large" disabled={status === 'submitting'}>{status === "submitting" ? "Sending Request..." : "Send Request"}</button>
              {status === "error" && <p className="error-text">Something went wrong. Please try again.</p>}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default QuoteModal;