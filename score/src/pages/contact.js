import React from 'react'
const ContactForm = () => {
  return (
    <div className="container mt-5" style={{background:"#F0F0F0",padding:"20px",marginTop:"20px"}}>
      <h4 className="mb-3">Contact</h4>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Location
          </label>
          <input className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          Send
        </button>
    </div>
  )
}
export default ContactForm
