export default {
    name: 'rentalOrder',
    type: 'document',
    fields: [
      { name: 'user', type: 'reference', to: [{ type: 'user' }], title: 'User' },
      { name: 'product', type: 'reference', to: [{ type: 'rentalProduct' }], title: 'Product' },
      { name: 'duration', type: 'string', title: 'Rental Duration' },
      { name: 'status', type: 'string', title: 'Order Status (e.g., Pending, In Use, Completed)' },
      { name: 'deposit', type: 'number', title: 'Deposit Amount' },
      { name: 'paymentStatus', type: 'string', title: 'Payment Status (e.g., Paid, Pending)' }
    ]
  };