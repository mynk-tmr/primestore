# Entities

## Users

```js
_id: ObjectId
username: String
email: String
password: String
role: String
created_at: Date
updated_at: Date
```

## Vendors

```javascript
_id: ObjectId
user_id: ObjectId
name: String
description: String
created_at: Date
updated_at: Date
```

## Products

```javascript
_id: ObjectId
vendor_id: ObjectId
name: String
description: String
price: Number
quantity: Number
categories: Catgories[]
created_at: Date
updated_at: Date
```

## Categories

```javascript
_id: ObjectId
name: String
parent_category_id: ObjectId (nullable)
created_at: Date
updated_at: Date
```

## Orders

```javascript
_id: ObjectId
user_id: ObjectId
status: String
amount: Number
items: Array({ product_id: ObjectId, quantity: Number, price: Number })
shipping_address: String
created_at: Date
updated_at: Date
```

## Reviews

```javascript
_id: ObjectId
product_id: ObjectId
user_id: ObjectId
rating: Number
comment: String
created_at: Date
parent_review: ObjectId(nullable)
```

## Payments

```javascript
_id: ObjectId
order_id: ObjectId
amount: Number
payment_method: String
payment_status: String
created_at: Date
updated_at: Date
```