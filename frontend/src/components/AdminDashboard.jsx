import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [requirements, setRequirements] = useState([]);

    useEffect(() => {
        const fetchRequirements = async () => {
            const response = await axios.get('http://localhost:5000/api/customer/requirements');
            setRequirements(response.data);
        };
        fetchRequirements();
    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Car Type</th>
                        <th>Rental Period</th>
                        <th>Additional Info</th>
                    </tr>
                </thead>
                <tbody>
                    {requirements.map((req) => (
                        <tr key={req._id}>
                            <td>{req.name}</td>
                            <td>{req.email}</td>
                            <td>{req.phone}</td>
                            <td>{req.carType}</td>
                            <td>{req.rentalPeriod}</td>
                            <td>{req.additionalInfo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
