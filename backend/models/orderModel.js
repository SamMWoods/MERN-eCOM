import mongoose from 'mongoose'

const orderScheme = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    orderItems:[
        {
            name: { type: String, require: true},
            qty: { type: Number, require: true},
            image: { type: String, require: true},
            price: { type: Number, require: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                require: true,
                ref: 'Products'
            }
        }
    ],
    shippingAddress:{
        address: { type: String, require: true},
        city: { type: String, require: true},
        postcode: { type: String, require: true},
        country: { type: String, require: true},
    },
    paymentMethod:{
        type: String,
        require: true,
    },
    paymentResults:{
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
    },
    taxPrice:{
        type: String,
        require: true,
        default: 0.0
    },
    shippingPrice:{
        type: String,
        require: true,
        default: 0.0
    },    
    totalPrice:{
        type: String,
        require: true,
        default: 0.0
    },
    isPaid:{
        type: Boolean,
        require: true,
        default: false
    },
    paidAt:{
        type: Date,
    },
    isDelivered:{
        type: Boolean,
        require: true,
        default: false
    },
    deliveredAt:{
        type: Date,
    },
},{
    timestamps: true
})

const Order = mongoose.model('Order', orderScheme)

export default Order