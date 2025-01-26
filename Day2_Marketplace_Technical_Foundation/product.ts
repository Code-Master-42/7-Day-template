
export default {
  name: 'rentalProduct',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Product Name' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'rentalPrice', type: 'number', title: 'Rental Price (per day)' },
    { name: 'deposit', type: 'number', title: 'Deposit Amount' },
    { name: 'available', type: 'boolean', title: 'Availability' },
    { name: 'condition', type: 'string', title: 'Condition (e.g., New, Good, Fair)' }
  ]
};