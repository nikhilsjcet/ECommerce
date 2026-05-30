/* ==========================================
   MOCK PRODUCT FALLBACK DATABASE (RUPEES ₹)
   ========================================== */
const FALLBACK_PRODUCTS = [
    {
        id: "el-1",
        name: "Lumina Studio ANC Headphones",
        category: "electronics",
        price: 24999,
        rating: 4.8,
        reviewsCount: 142,
        image: "assets/headphones.png",
        featured: true,
        description: "Masterfully tuned professional studio monitoring headphones. Immersive hybrid active noise cancellation technology coupled with bio-cellulose diaphragm drivers for warm, high-fidelity bass and clinical acoustics. Sleek, ergonomic design guarantees long-lasting comfort.",
        specs: {
            "Driver Unit": "40mm Dynamic",
            "Connectivity": "Bluetooth 5.3 / 3.5mm Jack",
            "Battery Life": "Up to 45 Hours (ANC off)",
            "Colorway": "Midnight Obsidian"
        }
    },
    {
        id: "el-2",
        name: "Neon Core Mechanical Keyboard",
        category: "electronics",
        price: 15999,
        rating: 4.7,
        reviewsCount: 89,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
        featured: false,
        description: "Ultra-responsive hot-swappable mechanical gaming keyboard featuring premium pre-lubed linear switches, durable double-shot PBT keycaps, and customizable high-frequency RGB neon presets. Precision stabilizer bars prevent key wobbles.",
        specs: {
            "Switches": "Gateron Red Linear (Pre-lubed)",
            "Layout": "75% Minimalist Space Saving",
            "Keycaps": "Double-shot PBT Cherry Profile",
            "Backlighting": "Per-Key Dynamic RGB Aura"
        }
    },
    {
        id: "el-3",
        name: "Prism Stream Condenser Microphone",
        category: "electronics",
        price: 12499,
        rating: 4.4,
        reviewsCount: 56,
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80",
        featured: false,
        description: "High-definition USB condenser microphone designed for premium studio streaming and crisp vocal tracks. Features an internal pop filter, anti-vibration rubber mount, and multi-directional polar pattern toggles.",
        specs: {
            "Capsule": "Triple 14mm Premium Condenser",
            "Polar Patterns": "Cardioid, Omni, Bidirectional, Stereo",
            "Connection": "USB-C Plug & Play",
            "Sample Rate": "24-bit / 96kHz"
        }
    },
    {
        id: "fa-1",
        name: "Lumina Aura High-Tech Runners",
        category: "fashion",
        price: 14499,
        rating: 4.9,
        reviewsCount: 218,
        image: "assets/shoes.png",
        featured: true,
        description: "State-of-the-art aerodynamic athletic runners designed for maximum impact absorption. Integrates custom fly-weave mesh panels for dynamic heat dissipation, carbon-reinforced heels, and highly responsive foam cushioning.",
        specs: {
            "Midsole Cushioning": "Lumina-Foam Responsive",
            "Upper Material": "Recycled Fly-Weave Mesh",
            "Outsole Grip": "Carbon-Traction Segmented Rubber",
            "Weight": "240g (Lightweight Performance)"
        }
    },
    {
        id: "fa-2",
        name: "Eclipse Oversized Trench Coat",
        category: "fashion",
        price: 19999,
        rating: 4.5,
        reviewsCount: 64,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80",
        featured: false,
        description: "Durable, water-resistant premium cotton trench coat offering a modern oversized silhouette. Structured storm flaps, heavy-duty utility zippers, and adjustable cuffs protect from the wind while creating a striking profile.",
        specs: {
            "Fabric Shell": "80% Organic Cotton, 20% Technical Poly",
            "Inner Lining": "Satin-Finish Breathable Viscose",
            "Silhouette": "Modern Relaxed Oversized Drop",
            "Pockets": "4 Waterproof Concealed Utility Pockets"
        }
    },
    {
        id: "fa-3",
        name: "Hydro-Shield Technical Shell Jacket",
        category: "fashion",
        price: 26499,
        rating: 4.6,
        reviewsCount: 78,
        image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&q=80",
        featured: false,
        description: "Fully seam-sealed, waterproof and highly windproof technical hardshell jacket. Designed for wet urban commuting or cold high-altitude mountain trekking. Adjustable storm hood, ventilation zippers, and ergonomic articulates.",
        specs: {
            "Waterproofing": "20,000mm Extreme Rainfall Shield",
            "Seams": "100% Fully Sealed Tape Reinforcements",
            "Ventilation": "Underarm Dual Zip Channels",
            "Material": "3-Layer Hard Wearing Ripstop Tech"
        }
    },
    {
        id: "ac-1",
        name: "Horizon Smartwatch Series X",
        category: "accessories",
        price: 32999,
        rating: 4.7,
        reviewsCount: 304,
        image: "assets/watch.png",
        featured: true,
        description: "Precision-forged titanium smartwatch featuring an always-on AMOLED touchscreen display, medical-grade heart rate sensor overlays, blood oxygen meters, multi-band GPS routing, and robust multi-sport tracking interfaces.",
        specs: {
            "Housing Materials": "Aerospace Grade Titanium / Sapphire Glass",
            "Screen Panel": "1.43\" AMOLED, Always-On (60Hz)",
            "Sensors": "Bio-Tracker HR, SpO2, Core Temp, Barometer",
            "Standby Battery": "Up to 14 Days (Smart Mode)"
        }
    },
    {
        id: "ac-2",
        name: "Nomad Polycarbonate Sunglasses",
        category: "accessories",
        price: 9999,
        rating: 4.3,
        reviewsCount: 92,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
        featured: false,
        description: "Elegant and impact-resistant lightweight matte sunglasses. Fitted with high-clarity polarized lenses that eliminate scattering glares, providing 100% protection against harsh ultraviolet UVA and UVB spectrum bands.",
        specs: {
            "Lenses": "Triacetate Cellulose (TAC) Polarized",
            "UV Blocking": "100% UV400 Category 3 Protection",
            "Frame Build": "Matte Polycarbonate (Super Flexible)",
            "Included": "Vegan Leather Hard Shell Case & Microfiber"
        }
    },
    {
        id: "ac-3",
        name: "Carbon RFID Minimalist Wallet",
        category: "accessories",
        price: 6999,
        rating: 4.6,
        reviewsCount: 154,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
        featured: false,
        description: "A pocket-sized structural masterpiece, forged from dual plates of genuine aerospace-grade 3K twill carbon fiber. Rigid, robust protection with fully integrated RFID blocking technology to keep digital signals locked.",
        specs: {
            "Plates": "3K Carbon Fiber Twill (Matte Finish)",
            "Capacity": "Securely holds 1 to 12 Cards",
            "RFID Blocker": "Military-Grade Dual Alloy Shield",
            "Carrier": "Integrated Spring Steel Cash Clip"
        }
    }
];

// Mutable Active Database, loaded dynamically from Rust API
let PRODUCTS = [];

const CATEGORIES = [
    { id: "all", name: "All Collections", count: 0 },
    { id: "electronics", name: "Electronics", count: 0, image: "assets/headphones.png" },
    { id: "fashion", name: "Fashion", count: 0, image: "assets/shoes.png" },
    { id: "accessories", name: "Accessories", count: 0, image: "assets/watch.png" }
];

/* ==========================================
   APPLICATION STATE ENGINE
   ========================================== */
const STATE = {
    activeView: "home",
    selectedProductId: null,
    filters: {
        category: "all",
        maxPrice: 80000, // INR Limit
        minRating: "all",
        searchQuery: ""
    },
    sort: "featured",
    cart: [],
    theme: "light"
};

// Initialize State from LocalStorage
function loadPersistedData() {
    // Cart Data
    const savedCart = localStorage.getItem("lumina_cart");
    if (savedCart) {
        try {
            STATE.cart = JSON.parse(savedCart);
        } catch (e) {
            STATE.cart = [];
        }
    }
    
    // Theme Preference
    const savedTheme = localStorage.getItem("lumina_theme") || "light";
    STATE.theme = savedTheme;
    document.documentElement.setAttribute("data-theme", savedTheme);
}

// Persist Cart state
function saveCartState() {
    localStorage.setItem("lumina_cart", JSON.stringify(STATE.cart));
    updateCartBadge();
}

/* ==========================================
   ASYNCHRONOUS REST API LOADER
   ========================================== */
async function fetchProductsFromBackend() {
    try {
        const response = await fetch('/api/products');
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        PRODUCTS = await response.json();
        console.log("Loaded products dynamically from Rust Axum API:", PRODUCTS);
    } catch (err) {
        console.warn("Could not connect to Rust backend, loading local Rupees fallback mock database:", err);
        PRODUCTS = FALLBACK_PRODUCTS;
    }

    // Refresh Category counts dynamically
    CATEGORIES.forEach(cat => {
        if (cat.id === "all") {
            cat.count = PRODUCTS.length;
        } else {
            cat.count = PRODUCTS.filter(p => p.category === cat.id).length;
        }
    });
}

/* ==========================================
   NAVIGATION & VIEW ROUTING
   ========================================== */
function navigateTo(viewName, productId = null) {
    STATE.activeView = viewName;
    if (productId) {
        STATE.selectedProductId = productId;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    document.querySelectorAll(".view-section").forEach(section => {
        section.classList.remove("active");
    });

    if (viewName === "home") {
        document.getElementById("home-view").classList.add("active");
        renderHomeCategories();
        renderFeaturedProducts();
    } else if (viewName === "catalog") {
        document.getElementById("catalog-view").classList.add("active");
        syncCatalogFilterUI();
        renderCatalog();
    } else if (viewName === "detail") {
        document.getElementById("product-detail-view").classList.add("active");
        renderProductDetails();
    }
}

/* ==========================================
   HTML RENDERING HELPER UTILITIES
   ========================================== */

// Helper: Renders review stars based on rating number
function generateStarIcons(rating) {
    let starsHtml = "";
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHtml += `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHtml += `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%); position: absolute; z-index: 2;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position: relative; color: var(--border);"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
        } else {
            starsHtml += `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--border);"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
        }
    }
    return `<div class="stars">${starsHtml}<span class="rating-value">${rating}</span></div>`;
}

// Render dynamic Category grids on Homepage
function renderHomeCategories() {
    const container = document.getElementById("home-categories-grid");
    if (!container) return;

    const showcaseCats = CATEGORIES.filter(cat => cat.id !== "all");

    container.innerHTML = showcaseCats.map(cat => `
        <div class="category-card" data-category-id="${cat.id}">
            <img class="category-img" src="${cat.image}" alt="${cat.name}">
            <div class="category-overlay">
                <h3 class="category-title">${cat.name}</h3>
                <span class="category-count">${cat.count} Models Available</span>
            </div>
        </div>
    `).join('');

    container.querySelectorAll(".category-card").forEach(card => {
        card.addEventListener("click", () => {
            const catId = card.getAttribute("data-category-id");
            STATE.filters.category = catId;
            navigateTo("catalog");
        });
    });
}

// Render dynamic Product grids with Rupee format
function generateProductCardHtml(product) {
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="card-img-wrapper">
                <span class="badge-tag">${product.category}</span>
                <img class="card-img" src="${product.image}" alt="${product.name}" loading="lazy">
                <button class="quick-add-btn" data-product-id="${product.id}" aria-label="Quick Add to Cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
            </div>
            <div class="card-info">
                <span class="card-category">${product.category}</span>
                <h3 class="card-title">${product.name}</h3>
                <div style="margin-bottom: 12px;">
                    ${generateStarIcons(product.rating)}
                </div>
                <div class="card-footer">
                    <span class="card-price">₹${product.price.toLocaleString('en-IN')}</span>
                </div>
            </div>
        </div>
    `;
}

// Render Featured Highlights on Homepage
function renderFeaturedProducts() {
    const container = document.getElementById("featured-products-grid");
    if (!container) return;

    const featuredItems = PRODUCTS.filter(p => p.featured);
    container.innerHTML = featuredItems.map(p => generateProductCardHtml(p)).join('');

    attachProductCardEvents(container);
}

function attachProductCardEvents(containerElement) {
    containerElement.querySelectorAll(".quick-add-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const pId = btn.getAttribute("data-product-id");
            addToCart(pId);
        });
    });

    containerElement.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", () => {
            const pId = card.getAttribute("data-product-id");
            navigateTo("detail", pId);
        });
    });
}

/* ==========================================
   CATALOG VIEW LOGIC & FILTERING
   ========================================== */
function syncCatalogFilterUI() {
    const listContainer = document.getElementById("category-filter-list");
    if (listContainer) {
        listContainer.innerHTML = CATEGORIES.map(cat => `
            <li class="filter-option">
                <input type="radio" name="category-filter" id="cat-opt-${cat.id}" value="${cat.id}" ${STATE.filters.category === cat.id ? 'checked' : ''}>
                <label for="cat-opt-${cat.id}">${cat.name}</label>
            </li>
        `).join('');

        listContainer.querySelectorAll('input[name="category-filter"]').forEach(radio => {
            radio.addEventListener("change", (e) => {
                STATE.filters.category = e.target.value;
                renderCatalog();
            });
        });
    }

    const slider = document.getElementById("price-filter");
    const valText = document.getElementById("price-slider-value");
    if (slider && valText) {
        slider.value = STATE.filters.maxPrice;
        valText.textContent = `₹${STATE.filters.maxPrice.toLocaleString('en-IN')}`;
    }

    const ratingRadio = document.querySelector(`input[name="rating-filter"][value="${STATE.filters.minRating}"]`);
    if (ratingRadio) {
        ratingRadio.checked = true;
    }

    const headerSearch = document.getElementById("universal-search");
    if (headerSearch) {
        headerSearch.value = STATE.filters.searchQuery;
    }
}

function renderCatalog() {
    const grid = document.getElementById("catalog-products-grid");
    if (!grid) return;

    let filtered = PRODUCTS.filter(p => {
        const matchCategory = STATE.filters.category === "all" || p.category === STATE.filters.category;
        const matchPrice = p.price <= STATE.filters.maxPrice;

        let matchRating = true;
        if (STATE.filters.minRating !== "all") {
            const min = parseFloat(STATE.filters.minRating);
            matchRating = p.rating >= min;
        }

        let matchSearch = true;
        if (STATE.filters.searchQuery.trim() !== "") {
            const q = STATE.filters.searchQuery.toLowerCase();
            matchSearch = p.name.toLowerCase().includes(q) || 
                          p.category.toLowerCase().includes(q) ||
                          p.description.toLowerCase().includes(q);
        }

        return matchCategory && matchPrice && matchRating && matchSearch;
    });

    if (STATE.sort === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (STATE.sort === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (STATE.sort === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    } else {
        filtered.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return a.name.localeCompare(b.name);
        });
    }

    const countLabel = document.getElementById("results-count-text");
    if (countLabel) {
        countLabel.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} products`;
    }

    if (filtered.length === 0) {
        grid.style.display = "block";
        grid.innerHTML = `
            <div class="empty-state animate-fade">
                <div class="empty-state-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                </div>
                <h3>No Matching Products</h3>
                <p style="color: var(--text-muted); margin-top: 8px;">Try clearing filters or search expressions to browse our wider collections.</p>
            </div>
        `;
    } else {
        grid.style.display = "grid";
        grid.innerHTML = filtered.map(p => generateProductCardHtml(p)).join('');
        attachProductCardEvents(grid);
    }
}

/* ==========================================
   PRODUCT DETAIL RENDER LOGIC
   ========================================== */
function renderProductDetails() {
    const container = document.getElementById("product-details-container");
    if (!container) return;

    const product = PRODUCTS.find(p => p.id === STATE.selectedProductId);
    if (!product) {
        container.innerHTML = `<div class="empty-state"><h3>Product Not Found</h3></div>`;
        return;
    }

    const specsRows = Object.entries(product.specs).map(([key, val]) => `
        <tr>
            <td>${key}</td>
            <td>${val}</td>
        </tr>
    `).join('');

    container.innerHTML = `
        <div class="details-grid animate-fade">
            <div class="details-gallery">
                <img class="details-main-img" src="${product.image}" alt="${product.name}">
            </div>
            <div class="details-info">
                <div class="details-header">
                    <span class="details-cat">${product.category}</span>
                    <h1 class="details-title">${product.name}</h1>
                    <div class="details-rating">
                        ${generateStarIcons(product.rating)}
                        <span class="details-reviews">(${product.reviewsCount} customer reviews)</span>
                    </div>
                </div>

                <div class="details-price-row">
                    <span class="details-price">₹${product.price.toLocaleString('en-IN')}</span>
                </div>

                <p class="details-description">${product.description}</p>

                <div class="details-specs">
                    <h4 class="specs-title">Key Details</h4>
                    <table class="specs-table">
                        <tbody>
                            ${specsRows}
                        </tbody>
                    </table>
                </div>

                <div class="details-actions">
                    <div class="qty-selector">
                        <button class="qty-btn" id="detail-qty-minus">-</button>
                        <span class="qty-val" id="detail-qty-value">1</span>
                        <button class="qty-btn" id="detail-qty-plus">+</button>
                    </div>
                    <button class="btn-primary" id="detail-add-cart-btn" style="flex-grow: 1; justify-content: center; height: 48px;">
                        Add to Cart
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    `;

    let currentQty = 1;
    const qtyVal = document.getElementById("detail-qty-value");
    const minusBtn = document.getElementById("detail-qty-minus");
    const plusBtn = document.getElementById("detail-qty-plus");
    const addBtn = document.getElementById("detail-add-cart-btn");

    if (minusBtn && plusBtn && qtyVal && addBtn) {
        minusBtn.addEventListener("click", () => {
            if (currentQty > 1) {
                currentQty--;
                qtyVal.textContent = currentQty;
            }
        });
        plusBtn.addEventListener("click", () => {
            currentQty++;
            qtyVal.textContent = currentQty;
        });
        addBtn.addEventListener("click", () => {
            addToCart(product.id, currentQty);
            openCartDrawer();
        });
    }
}

/* ==========================================
   SHOPPING CART CONTROLLER
   ========================================== */
function updateCartBadge() {
    const badge = document.getElementById("cart-badge-count");
    if (!badge) return;

    const totalQty = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalQty;
    
    badge.style.animation = "none";
    void badge.offsetWidth;
    badge.style.animation = "pulseBadge 2s infinite";
}

function openCartDrawer() {
    document.getElementById("cart-overlay").classList.add("open");
    renderCartDrawer();
}

function closeCartDrawer() {
    document.getElementById("cart-overlay").classList.remove("open");
}

function addToCart(productId, quantity = 1) {
    const existing = STATE.cart.find(item => item.productId === productId);
    if (existing) {
        existing.quantity += quantity;
    } else {
        STATE.cart.push({ productId, quantity });
    }
    saveCartState();
}

function adjustCartQty(productId, delta) {
    const item = STATE.cart.find(it => it.productId === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        STATE.cart = STATE.cart.filter(it => it.productId !== productId);
    }
    saveCartState();
    renderCartDrawer();
}

function deleteCartItem(productId) {
    STATE.cart = STATE.cart.filter(it => it.productId !== productId);
    saveCartState();
    renderCartDrawer();
}

function renderCartDrawer() {
    const container = document.getElementById("cart-items-container");
    const footer = document.getElementById("cart-footer-details");
    if (!container) return;

    if (STATE.cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-state">
                <div class="cart-empty-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                </div>
                <h3>Your Cart is Empty</h3>
                <p style="font-size: 14px; margin-top: 8px;">Explore our collections and add designer accessories to your checkout.</p>
            </div>
        `;
        if (footer) footer.style.display = "none";
    } else {
        if (footer) footer.style.display = "block";

        let subtotal = 0;
        
        container.innerHTML = STATE.cart.map(item => {
            const product = PRODUCTS.find(p => p.id === item.productId);
            if (!product) return '';
            
            const cost = product.price * item.quantity;
            subtotal += cost;

            return `
                <div class="cart-item animate-fade">
                    <img class="cart-item-img" src="${product.image}" alt="${product.name}">
                    <div class="cart-item-info">
                        <h4 class="cart-item-title">${product.name}</h4>
                        <span class="cart-item-price">₹${product.price.toLocaleString('en-IN')}</span>
                        <div class="cart-item-actions">
                            <div class="cart-item-qty">
                                <span class="cart-item-qty-btn" data-action="minus" data-p-id="${product.id}">-</span>
                                <span class="cart-item-qty-val">${item.quantity}</span>
                                <span class="cart-item-qty-btn" data-action="plus" data-p-id="${product.id}">+</span>
                            </div>
                            <span class="cart-item-delete" data-p-id="${product.id}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                Remove
                            </span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        const shipping = subtotal > 40000 ? 0 : 1500; // Free shipping above ₹40,000
        const total = subtotal + shipping;

        document.getElementById("cart-subtotal").textContent = `₹${subtotal.toLocaleString('en-IN')}`;
        document.getElementById("cart-shipping").textContent = shipping === 0 ? "Free" : `₹${shipping.toLocaleString('en-IN')}`;
        document.getElementById("cart-total").textContent = `₹${total.toLocaleString('en-IN')}`;

        container.querySelectorAll(".cart-item-qty-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const action = btn.getAttribute("data-action");
                const pId = btn.getAttribute("data-p-id");
                adjustCartQty(pId, action === "plus" ? 1 : -1);
            });
        });

        container.querySelectorAll(".cart-item-delete").forEach(btn => {
            btn.addEventListener("click", () => {
                const pId = btn.getAttribute("data-p-id");
                deleteCartItem(pId);
            });
        });
    }
}

/* ==========================================
   EVENT INITIALIZATION ENGINE
   ========================================== */
document.addEventListener("DOMContentLoaded", async () => {
    // 1. Fetch products from API backend (falls back to Rupees mocks if failed)
    await fetchProductsFromBackend();

    // 2. Load LocalStorage details
    loadPersistedData();
    updateCartBadge();

    // 3. Initial home routing
    navigateTo("home");

    // 4. Header Logo Clicks
    const logoTrigger = document.getElementById("logo-trigger");
    if (logoTrigger) {
        logoTrigger.addEventListener("click", () => navigateTo("home"));
    }

    // 5. Header Universal Search Inputs
    const headerSearch = document.getElementById("universal-search");
    if (headerSearch) {
        headerSearch.addEventListener("input", (e) => {
            STATE.filters.searchQuery = e.target.value;
            if (STATE.activeView !== "catalog") {
                navigateTo("catalog");
            } else {
                renderCatalog();
            }
        });
    }

    // 6. Theme Toggles
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const nextTheme = STATE.theme === "light" ? "dark" : "light";
            STATE.theme = nextTheme;
            document.documentElement.setAttribute("data-theme", nextTheme);
            localStorage.setItem("lumina_theme", nextTheme);
        });
    }

    // 7. Navigation Cart Trigger
    const cartBtn = document.getElementById("cart-btn");
    const closeCartBtn = document.getElementById("close-cart-btn");
    if (cartBtn) cartBtn.addEventListener("click", openCartDrawer);
    if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);

    const cartOverlay = document.getElementById("cart-overlay");
    if (cartOverlay) {
        cartOverlay.addEventListener("click", (e) => {
            if (e.target === cartOverlay) closeCartDrawer();
        });
    }

    // 8. Homepage Promo Banner explorer CTA
    const bannerExplorer = document.getElementById("explore-catalog-btn");
    const highlightsExplorer = document.getElementById("view-all-featured");
    const footerCatalogLink = document.getElementById("footer-catalog-link");
    const footerHomeLink = document.getElementById("footer-home-link");

    if (bannerExplorer) {
        bannerExplorer.addEventListener("click", () => {
            STATE.filters.category = "all";
            navigateTo("catalog");
        });
    }
    if (highlightsExplorer) {
        highlightsExplorer.addEventListener("click", () => {
            STATE.filters.category = "all";
            navigateTo("catalog");
        });
    }
    if (footerCatalogLink) {
        footerCatalogLink.addEventListener("click", (e) => {
            e.preventDefault();
            STATE.filters.category = "all";
            navigateTo("catalog");
        });
    }
    if (footerHomeLink) {
        footerHomeLink.addEventListener("click", (e) => {
            e.preventDefault();
            navigateTo("home");
        });
    }

    // 9. Catalog Specific Triggers (Sticky Panel controls)
    const priceSlider = document.getElementById("price-filter");
    const sliderText = document.getElementById("price-slider-value");
    if (priceSlider && sliderText) {
        priceSlider.addEventListener("input", (e) => {
            STATE.filters.maxPrice = parseInt(e.target.value);
            sliderText.textContent = `₹${STATE.filters.maxPrice.toLocaleString('en-IN')}`;
            renderCatalog();
        });
    }

    const ratingRadios = document.querySelectorAll('input[name="rating-filter"]');
    ratingRadios.forEach(radio => {
        radio.addEventListener("change", (e) => {
            STATE.filters.minRating = e.target.value;
            renderCatalog();
        });
    });

    const resetFiltersBtn = document.getElementById("reset-filters-btn");
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener("click", () => {
            STATE.filters.category = "all";
            STATE.filters.maxPrice = 80000;
            STATE.filters.minRating = "all";
            STATE.filters.searchQuery = "";
            STATE.sort = "featured";

            const catalogSort = document.getElementById("catalog-sort");
            if (catalogSort) catalogSort.value = "featured";

            syncCatalogFilterUI();
            renderCatalog();
        });
    }

    const sortSelect = document.getElementById("catalog-sort");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            STATE.sort = e.target.value;
            renderCatalog();
        });
    }

    const backToHome = document.getElementById("back-to-home-btn");
    if (backToHome) backToHome.addEventListener("click", () => navigateTo("home"));

    const backToCatalog = document.getElementById("back-to-catalog-btn");
    if (backToCatalog) backToCatalog.addEventListener("click", () => navigateTo("catalog"));

    // 10. Checkout Simulation
    const checkoutBtn = document.getElementById("checkout-trigger-btn");
    const checkoutOverlay = document.getElementById("checkout-overlay");
    const checkoutClose = document.getElementById("checkout-close-btn");

    if (checkoutBtn && checkoutOverlay) {
        checkoutBtn.addEventListener("click", () => {
            closeCartDrawer();
            checkoutOverlay.classList.add("active");
        });
    }

    if (checkoutClose && checkoutOverlay) {
        checkoutClose.addEventListener("click", () => {
            checkoutOverlay.classList.remove("active");
            STATE.cart = [];
            saveCartState();
            navigateTo("home");
        });
    }
});
