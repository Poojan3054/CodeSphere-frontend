import { useState } from 'react';
import { Link } from 'react-router-dom';
import authentication from '../../services/authentication';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    educationLevel: '',
    interestArea: '',
    experience: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits';
    if (!formData.educationLevel.trim()) newErrors.educationLevel = 'Education level is required';
    if (!formData.interestArea.trim()) newErrors.interestArea = 'Interest area is required';
    if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const result = await authentication.register(formData);
      alert(result.message);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light overflow-hidden">
      <div className="card shadow p-4" style={{ maxWidth: '700px', width: '100%' }}>
        <h3 className="text-center mb-4">Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="form-control"
                value={formData.fullName}
                onChange={handleChange}
              />
              <span className="text-danger">{errors.fullName}</span>
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
              <span className="text-danger">{errors.email}</span>
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
              <span className="text-danger">{errors.password}</span>
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
              />
              <span className="text-danger">{errors.phone}</span>
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">Education Level</label>
              <input
                type="text"
                name="educationLevel"
                className="form-control"
                value={formData.educationLevel}
                onChange={handleChange}
              />
              <span className="text-danger">{errors.educationLevel}</span>
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">Interest Area</label>
              <input
                type="text"
                name="interestArea"
                className="form-control"
                value={formData.interestArea}
                onChange={handleChange}
              />
              <span className="text-danger">{errors.interestArea}</span>
            </div>

            <div className="mb-3 col-md-12">
              <label className="form-label">Experience</label>
              <input
                type="text"
                name="experience"
                className="form-control"
                value={formData.experience}
                onChange={handleChange}
              />
              <span className="text-danger">{errors.experience}</span>
            </div>
          </div>

          <button type="submit" className="btn btn-success w-100">Register</button>

          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
