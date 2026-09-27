"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponType = exports.PaymentStatus = exports.OrderStatus = exports.ProductStatus = exports.UserRole = void 0;
exports.UserRole = {
    CUSTOMER: 'CUSTOMER',
    ADMIN: 'ADMIN',
    STAFF: 'STAFF'
};
exports.ProductStatus = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
    OUT_OF_STOCK: 'OUT_OF_STOCK',
    DRAFT: 'DRAFT'
};
exports.OrderStatus = {
    PENDING: 'PENDING',
    CONFIRMED: 'CONFIRMED',
    PROCESSING: 'PROCESSING',
    SHIPPED: 'SHIPPED',
    DELIVERED: 'DELIVERED',
    CANCELLED: 'CANCELLED',
    REFUNDED: 'REFUNDED'
};
exports.PaymentStatus = {
    PENDING: 'PENDING',
    PAID: 'PAID',
    FAILED: 'FAILED',
    REFUNDED: 'REFUNDED'
};
exports.CouponType = {
    PERCENTAGE: 'PERCENTAGE',
    FIXED_AMOUNT: 'FIXED_AMOUNT'
};
