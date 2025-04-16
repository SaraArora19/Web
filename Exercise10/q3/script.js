document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("orderForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value;
            let phone = document.getElementById("phone").value;
            let email = document.getElementById("email").value;
            let products = document.querySelectorAll(".product-checkbox");
            let selectedProducts = [];
            let total = 0;

            products.forEach((product, index) => {
                if (product.checked) {
                    let quantity = document.querySelectorAll(".quantity")[index].value;
                    if (quantity > 0) {
                        let item = {
                            name: product.dataset.name,
                            price: parseInt(product.dataset.price),
                            quantity: parseInt(quantity),
                        };
                        total += item.price * item.quantity;
                        selectedProducts.push(item);
                    }
                }
            });

            let orderData = {
                name: name,
                phone: phone,
                email: email,
                products: selectedProducts,
                total: total,
            };

            localStorage.setItem("order", JSON.stringify(orderData));
            window.location.href = "receipt.html";
        });
    } else {
        let orderData = JSON.parse(localStorage.getItem("order"));

        if (orderData) {
            document.getElementById("r-name").textContent = orderData.name;
            document.getElementById("r-phone").textContent = orderData.phone;
            document.getElementById("r-email").textContent = orderData.email;

            let productList = document.getElementById("r-products");
            orderData.products.forEach(item => {
                let li = document.createElement("li");
                li.textContent = `${item.name} - ${item.quantity} kg ($${item.price * item.quantity})`;
                productList.appendChild(li);
            });

            document.getElementById("r-total").textContent = orderData.total;
        }
    }
});
