function displayProductInfo() {
  // Get input values
  const productImage = document.getElementById('productImage').value;
  const productId = document.getElementById('productId').value;
  const productName = document.getElementById('productName').value;
  const productDescription = document.getElementById('productDescription').value;

  // Display output
  const outputDiv = document.getElementById('output');
  
  outputDiv.innerHTML = `
    <h2 class="text-center">Product Information</h2>
    <img src="${productImage}" alt="Product Image" class="img-fluid rounded" style="max-width: 100%; "><br>
  
    <strong>Product ID:</strong> ${productId}<br>
    <strong>Product Name:</strong> ${productName}<br>
    <strong>Description:</strong> ${productDescription}
  `;

  // Show buttons after displaying product information
  document.getElementById('downloadBtn').style.display = 'inline';
  document.getElementById('saveBtn').style.display = 'inline';
  document.getElementById('printBtn').style.display = 'inline';
}

function downloadProductInfo() {
  const outputDiv = document.getElementById('output');
  const productInfo = outputDiv.innerText;

  // Create a blob with the text content
  const blob = new Blob([productInfo], { type: 'text/plain' });

  // Create a link element and trigger the download
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'product_info.txt';
  a.click();
}

function saveProductInfo() {
  const outputDiv = document.getElementById('output');
  const productInfo = outputDiv.innerHTML;

  // Save the product information to local storage
  localStorage.setItem('productInfo', productInfo);
  alert('Product information saved successfully!');
}

function printProductInfo() {
  window.print();
}