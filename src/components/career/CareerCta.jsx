import React, { useState } from "react";

const CareerCta = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="careercta">
        <div className="container">
          <h2>
            If you want to build brands that carry weight and become someone
            who carries weight too
          </h2>

          <p>Send your CV + portfolio + a short note:</p>

          <button
            className="btn1 w-auto"
            onClick={() => setShowPopup(true)}
          >
            Apply
          </button>
        </div>
      </div>

      {/* Popup */}
      <div className={`career-popup ${showPopup ? "active" : ""}`}>
        <div className="career-popup-overlay"></div>

        <div className="career-popup-box">
          <button
            className="career-popup-close"
            onClick={() => setShowPopup(false)}
          >
            ×
          </button>

         <div>
           <h3>Application Form</h3>

          <form>
            <div className=" row">
              <div className="col-lg-12">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Enter name" />
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="Enter email" />
                  </div>

                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <input type="text" placeholder="Enter number" />
                  </div>
                </div>

              </div>
              <div className="col-lg-12">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Total Experience *</label>
                    <input type="text" placeholder="2 Years" />
                  </div>

                  <div className="form-group">
                    <label>Applying For Position *</label>

                    <select>
                      <option>Select</option>
                      <option>Frontend Developer</option>
                      <option>Backend Developer</option>
                      <option>UI/UX Designer</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Current Location *</label>

                    <select>
                      <option>Select</option>
                      <option>Nagpur</option>
                      <option>Pune</option>
                      <option>Mumbai</option>
                    </select>
                  </div>
                </div>

              </div>
              <div className="col-lg-12">
                <div className="form-grid">
                  <div className="form-group fileup">
                    <label>Upload Resume *</label>
                    <input type="file" />
                    <div className="fileinput">
                      <span>
                        Choose A File
                      </span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Cover Letter / Message</label>
                    <textarea rows="4"></textarea>
                  </div>
                </div>

              </div>





            </div>

            <div className="form-btns">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>

              <button type="submit" className="submit-btn">
                Submit Application
              </button>
            </div>
          </form>
         </div>
        </div>
      </div>
    </>
  );
};

export default CareerCta;