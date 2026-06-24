const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Order = require('../models/Order');

// Get statistics
router.get('/', async (req, res) => {
    try {
        const totalProducts = await Product.countDocuments();
        const categories = await Product.distinct('category');
        const totalOrders = await Order.countDocuments();
        const orders = await Order.find();
        
        const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
        const averageOrderValue = totalOrders > 0 ? (totalRevenue / totalOrders).toFixed(2) : 0;
        
        const productsInStock = await Product.aggregate([
            {
                $group: {
                    _id: null,
                    total: { $sum: '$stock' }
                }
            }
        ]);
        
        const averageRating = await Product.aggregate([
            {
                $group: {
                    _id: null,
                    average: { $avg: '$rating' }
                }
            }
        ]);
        
        const stats = {
            totalProducts,
            categories: categories.length,
            categoryList: categories,
            totalOrders,
            averageOrderValue: parseFloat(averageOrderValue),
            totalRevenue: parseFloat(totalRevenue.toFixed(2)),
            productsInStock: productsInStock[0]?.total || 0,
            averageRating: averageRating[0]?.average ? parseFloat(averageRating[0].average.toFixed(2)) : 0
        };
        
        res.json({
            success: true,
            data: stats
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching statistics',
            error: error.message
        });
    }
});

module.exports = router;
