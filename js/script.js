const products=[
    {
        id:1,
        name:"Summer Dress",
        price:35,
        category:"Dress",
        image:"",
        description:"Elegant summer collection"
    },
    {
        id:2,
        name:"Maxi Dress",
        price:45,
        category:"Dress",
        image:"",
        description:"Premium maxi dress"
    },
    {
        id:3,
        name:"Luxury Abaya",
        price:55,
        category:"Abaya",
        image:"",
        description:"Luxury abaya design"
    },
    {
        id:4,
        name:"Premium Outfit",
        price:70,
        category:"Premium",
        image:"",
        description:"Exclusive fashion collection"
    }
];
let cart = [];
function displayProducts(items){
    const productList = document.getElementById("product-list");
    if(!productList)return;
    let output ="";
    items.forEach(product=>{
        output += <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100 shdow-sm">
                <img src="${product.image" alt="${product.name}" class="card-img-top"></img>
                <div class="card-body">
                    <h5>${product.name}</h5>
                    <p>${product.description}</p>
                    <h6>$${product.price}</h6>
                    <button class="btn btn-gold w-100 mb-2" onclick="addToCart( ${product.id})">Add To Cart </button>
                    <button class="btn btn-outline-dark w-100" onclick="showDetails(${product.id})">View Details </button>
                </div>
            </div>
        </div>
        ;
    });
    productList.innerHTML=output;
}
displayProducts(products);
const searchInput = document.getElementById("search");
if(searchInput){
    searchInput.addEventListener("keyup",function(){
        const value = this.value.toLowerCase();
        const filtered = products.filter(product=>product.name .toLowerCase() .includes(value));
        displayProducts(filtered);
    });
}
const category = document.getElementById("category");
if(category){
    category.addEventListener(
        "change",
        function(){
            if(this.value==="all"){
                displayProducts(products);
                return;
            }
            const filtered = 
            products.filter(product=>products.category===this.value

            );
            displayProducts(filtered);
        });
}
function toggleDarkMode(){
    document.body.classList.toggle(
        "dark-mode"
    );
}
function showDetails(id){
    const product = products.find(item=>item.id===id);
    document.getElementById(
        "modalTitle"
    ).innerText = product.name;
    document.getElementById(
        "modalImage"
    ).src = product.image;
    document.getElementById(
        "modalDescription"
    ).innerText = product.description;
    document.getElementById(
        "modalPrice"
    ).innerText = "$"+ product.price;
    const modal = new bootstrap.modal(
        document.getElementById(
            "productModal"
        )
    );
    modal.show();
}
function addToCart(id){
    const product = products.find(item=>item.id===id);
    const existing = cart,find(item=>item.id===id);
    if(existing){
        existing.quantity++;
    }else{
        cart.push({
            ...product,
            quantity:1
        });
    }
    renderCart();
}
function renderCart(){
    const cartItems =
    document.getElementById(
        "cart.items"
    );
    const totalElement = 
    document.getElementById(
        "cart,total"
    );
    if(!cartItems)return;
    let html = "";
    let total = 0;
    cart.forEach(item=>{
        const subtotal = 
        item.price*item.quantity;
        total += subtotal;
        html +=
        <tr>
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="decreaseQuantity(${item.id})">-</button>
                ${item.quantity}
                <button class="btn btn-sm btn-secondary" onclick="increaseQuantity(${item.id})">+</button>
            </td>
            <button class="btn btn-danger btn-sm" onclick="removeItem(${item.id})">Remove</button>
        </tr>
        ;
    });
    cartItems.innerHTML = html;
    totalElement.innerText = "$" + total;
}
function increaseQuantity(id){
    const item = cart.find(product=>product.id===id);
    item.quantity++;
    renderCart();
}
function decreaseQuantity(id){
    const item = cart.find(product=>product.id===id);
    if(item.quantity>1){
        item.quantity--;
    }
    renderCart();
}
function removeItem(id){
    cart = cart.filter(item=>item.id!==id);
    renderCart();
}
const checkoutForm = document.getElementById(
    "checkoutForm"
);
if(checkoutForm){
    checkoutForm.addEventListener(
        "submit",
        function(e){
            e.preventDefault();
            const name = document.getElementById(
                "name"
            ).value.trim();
            const email = document.getElementById(
                "email"
            ).value.trim();
            const email = document.getElementById(
                "email"
            ).value.trim();
            if(
                name===""||
                email===""||
                address===""
            ){
                alert(
                    "Please fill all fields"
                );
                return;
            }
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(
                !emailPattern.test(email)
            ){
                alert(
                    "invalid Email Format"
                );
                return;
            }
            alert("Order Submitted Successfully");
            this.reset();
        });
}
const contactForm = 
document.getElementById(
    "contactForm"
);
if(contactForm){
    contactForm.addEventListener(
        "Submit",
        function(e){
            e.preventDefault();
            alert(
                "Message Sent Successfully"
            );
            this.reset();
        }
    );
}