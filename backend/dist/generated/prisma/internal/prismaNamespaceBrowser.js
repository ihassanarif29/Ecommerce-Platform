"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.JsonNullValueInput = exports.SortOrder = exports.NotificationScalarFieldEnum = exports.CouponScalarFieldEnum = exports.ReviewScalarFieldEnum = exports.PaymentScalarFieldEnum = exports.OrderItemScalarFieldEnum = exports.OrderScalarFieldEnum = exports.AddressScalarFieldEnum = exports.WishlistItemScalarFieldEnum = exports.WishlistScalarFieldEnum = exports.CartItemScalarFieldEnum = exports.CartScalarFieldEnum = exports.InventoryScalarFieldEnum = exports.ProductImageScalarFieldEnum = exports.ProductCategoryScalarFieldEnum = exports.ProductScalarFieldEnum = exports.CategoryScalarFieldEnum = exports.BrandScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Brand: 'Brand',
    Category: 'Category',
    Product: 'Product',
    ProductCategory: 'ProductCategory',
    ProductImage: 'ProductImage',
    Inventory: 'Inventory',
    Cart: 'Cart',
    CartItem: 'CartItem',
    Wishlist: 'Wishlist',
    WishlistItem: 'WishlistItem',
    Address: 'Address',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Payment: 'Payment',
    Review: 'Review',
    Coupon: 'Coupon',
    Notification: 'Notification'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    role: 'role',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.BrandScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CategoryScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ProductScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    shortDescription: 'shortDescription',
    sku: 'sku',
    price: 'price',
    compareAtPrice: 'compareAtPrice',
    costPrice: 'costPrice',
    status: 'status',
    rating: 'rating',
    reviewCount: 'reviewCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    brandId: 'brandId'
};
exports.ProductCategoryScalarFieldEnum = {
    productId: 'productId',
    categoryId: 'categoryId'
};
exports.ProductImageScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    url: 'url',
    storageKey: 'storageKey',
    altText: 'altText',
    position: 'position',
    createdAt: 'createdAt'
};
exports.InventoryScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    quantity: 'quantity',
    updatedAt: 'updatedAt'
};
exports.CartScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CartItemScalarFieldEnum = {
    id: 'id',
    cartId: 'cartId',
    productId: 'productId',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.WishlistScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt'
};
exports.WishlistItemScalarFieldEnum = {
    id: 'id',
    wishlistId: 'wishlistId',
    productId: 'productId',
    createdAt: 'createdAt'
};
exports.AddressScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    fullName: 'fullName',
    phone: 'phone',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    city: 'city',
    state: 'state',
    postalCode: 'postalCode',
    country: 'country',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OrderScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    orderNumber: 'orderNumber',
    status: 'status',
    paymentStatus: 'paymentStatus',
    shippingAddress: 'shippingAddress',
    billingAddress: 'billingAddress',
    subtotal: 'subtotal',
    discount: 'discount',
    tax: 'tax',
    shipping: 'shipping',
    total: 'total',
    addressId: 'addressId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OrderItemScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    productName: 'productName',
    unitPrice: 'unitPrice',
    quantity: 'quantity'
};
exports.PaymentScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    provider: 'provider',
    providerRef: 'providerRef',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ReviewScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CouponScalarFieldEnum = {
    id: 'id',
    code: 'code',
    type: 'type',
    value: 'value',
    minOrder: 'minOrder',
    expiresAt: 'expiresAt',
    isActive: 'isActive',
    createdAt: 'createdAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
