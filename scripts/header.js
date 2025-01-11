// JavaScript to dynamically insert the header
document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");

  header.innerHTML = `
      <!-- Top Header -->
        <div class="header1">
            <div class="logo">
                <span>TATA</span>
                <span style="font-weight: bold;">CLiQ</span>
                <span style="color: #ff0080;">FASHION</span>
            </div>
        
        <div id="header2">
            <div class="top-header">
                <div class="left-links">
                    <span>Tata CLIQ Luxury</span>
                </div>
                <div class="right-links">
                    <a href="#">CLiQ Cash</a>
                    <a href="#">Gift Card</a>
                    <a href="#">CLiQ Care</a>
                    <a href="#">Track Orders</a>
                    <a href="signup.html">Sign UP</a>
                    <a href="login.html">Login</a>
                </div>
            </div>

       

        <!-- Main Navbar -->
        <div id="sec-header">

            <div class="navbar">
                <div class="nav-item dropdown">Categories ▼
                </div>
                <div class="nav-item dropdown">Brands ▼</div>
                <div class="search-bar">
                    <input type="text" placeholder="Search for Brands">
                    <button>🔍</button>
                </div>
                <div class="nav-icons">
                    <span>🤍</span>
                    <span>🛒</span>
                </div>
            </div>
            </div>
        </div>
        </div>
    `;

  // Append the header to the body (or a specific container)
  document.body.insertAdjacentElement("afterbegin", header);
});
