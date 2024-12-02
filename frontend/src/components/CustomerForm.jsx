import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        carType: '',
        rentalPeriod: '',
        additionalInfo: ''
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/customer/requirement', formData);
            alert('Requirement submitted successfully');
        } catch (error) {
            alert('Submission failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
            <input name="carType" placeholder="Car Type" value={formData.carType} onChange={handleChange} required />
            <input name="rentalPeriod" placeholder="Rental Period" value={formData.rentalPeriod} onChange={handleChange} required />
            <textarea name="additionalInfo" placeholder="Additional Information" value={formData.additionalInfo} onChange={handleChange}></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CustomerForm;
