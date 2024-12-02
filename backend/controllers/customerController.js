const CustomerRequirement = require('../models/CustomerRequirement');

exports.collectRequirement = async (req, res) => {
    const { name, email, phone, carType, rentalPeriod, additionalInfo } = req.body;
    try {
        const requirement = new CustomerRequirement({ name, email, phone, carType, rentalPeriod, additionalInfo });
        await requirement.save();
        res.status(201).json({ message: 'Requirement submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getRequirements = async (req, res) => {
    try {
        const requirements = await CustomerRequirement.find();
        res.status(200).json(requirements);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
