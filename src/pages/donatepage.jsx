import React, { useState } from 'react';
import donorsImage from '../assets/donors.webp';

const DonateBookForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        condition: '',
        contactInfo: ''
    });

    const [donationSuccess, setDonationSuccess] = useState(false); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        
        // Reset form data
        setFormData({
            title: '',
            author: '',
            condition: '',
            contactInfo: ''
        });

        // Show success message
        setDonationSuccess(true);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center mb-4">
                    <img src={donorsImage} alt="Donors" className="img-fluid" />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="donate-book-form">
                        <h2 className="text-center mb-4">Donate a Book</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <label>Title:</label>
                                <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} />
                            </div>
                            <div className="form-group mb-3">
                                <label>Author:</label>
                                <input type="text" className="form-control" name="author" value={formData.author} onChange={handleChange} />
                            </div>
                            <div className="form-group mb-3">
                                <label>Condition:</label>
                                <select className="form-select" name="condition" value={formData.condition} onChange={handleChange}>
                                    <option value="">Select Condition</option>
                                    <option value="new">New</option>
                                    <option value="like new">Like New</option>
                                    <option value="good">Good</option>
                                    <option value="fair">Fair</option>
                                    <option value="poor">Poor</option>
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <label>Contact Information:</label>
                                <input type="text" className="form-control" name="contactInfo" value={formData.contactInfo} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">Donate</button>
                        </form>
                        {donationSuccess && <p className="text-success mt-3">You have successfully donated a book!</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonateBookForm;
