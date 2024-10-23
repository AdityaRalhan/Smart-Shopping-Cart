const groceryDatabase = [
    { id: 'GR001', name: 'Rice', price: 60, weight: '1 kg' },
    { id: 'BR002', name: 'Whole Wheat Bread', price: 40, weight: '400 g' },
    { id: 'DK003', name: 'Milk', price: 25, weight: '500 ml' },
    { id: 'EG004', name: 'Eggs', price: 60, weight: '12 pcs' },
    { id: 'SG005', name: 'Sugar', price: 45, weight: '1 kg' },
    { id: 'SL006', name: 'Salt', price: 20, weight: '1 kg' },
    { id: 'OL007', name: 'Sunflower Oil', price: 150, weight: '1 liter' },
    { id: 'VG008', name: 'Potatoes', price: 30, weight: '1 kg' },
    { id: 'VG009', name: 'Onions', price: 40, weight: '1 kg' },
    { id: 'VG010', name: 'Tomatoes', price: 50, weight: '1 kg' },
    { id: 'TE011', name: 'Green Tea', price: 120, weight: '250 g' },
    { id: 'CO012', name: 'Coffee Powder', price: 180, weight: '200 g' },
    { id: 'DA013', name: 'Butter', price: 60, weight: '100 g' },
    { id: 'DA014', name: 'Cheese', price: 120, weight: '200 g' },
    { id: 'DA015', name: 'Yogurt', price: 25, weight: '200 g' },
    { id: 'MT016', name: 'Chicken Breast', price: 250, weight: '500 g' },
    { id: 'HC017', name: 'Detergent Powder', price: 90, weight: '1 kg' },
    { id: 'HC018', name: 'Toothpaste', price: 80, weight: '150 g' },
    { id: 'HC019', name: 'Shampoo', price: 180, weight: '500 ml' },
    { id: 'HC020', name: 'Hand Wash', price: 60, weight: '250 ml' }
];

let totalAmount = 0;
const billItems = [];

// Function to fetch product data by barcode
function getProductByBarcode(barcode) {
    return groceryDatabase.find(item => item.id === barcode);
}

// Function to add item to the bill
function addToBill() {
    const barcode = document.getElementById('scanItem').value;
    const product = getProductByBarcode(barcode);

    if (product) {
        billItems.push(product);
        totalAmount += product.price;

        // Display product info
        document.getElementById('productName').innerText = `Name: ${product.name}`;
        document.getElementById('productPrice').innerText = `Price: Rs ${product.price}`;
        document.getElementById('productWeight').innerText = `Weight: ${product.weight}`;

        // Update bill list and total amount
        updateBillDisplay();
    } else {
        alert('Product not found!');
    }

    // Clear the input field
    document.getElementById('barcode').value = '';
}

// Function to delete the last item from the bill
function deleteFromBill() {
    if (billItems.length > 0) {
        const lastItem = billItems.pop();
        totalAmount -= lastItem.price;

        // Update bill display
        updateBillDisplay();
    } else {
        alert('No items to remove!');
    }
}

// Function to update bill display
function updateBillDisplay() {
    const billList = document.getElementById('billList');
    const totalAmountSpan = document.getElementById('totalAmount');

    billList.innerHTML = ''; // Clear the current list
    billItems.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - Rs ${item.price}`;
        billList.appendChild(li);
    });

    totalAmountSpan.innerText = totalAmount.toFixed(2);
}

// Function to print the bill
function printBill() {
    const printBillList = document.getElementById('printBillList');
    const printTotalAmount = document.getElementById('printTotalAmount');

    printBillList.innerHTML = ''; // Clear the current list
    billItems.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - Rs ${item.price}`;
        printBillList.appendChild(li);
    });

    printTotalAmount.innerText = totalAmount.toFixed(2);

    // Display the modal
    document.getElementById('printModal').style.display = 'block';
}

// Function to close the print modal
function closeModal() {
    document.getElementById('printModal').style.display = 'none';
}
