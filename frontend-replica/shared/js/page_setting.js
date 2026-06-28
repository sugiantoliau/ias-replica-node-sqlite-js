//var vgUrl_api = "https://wsapi.ayobel.com/api/";
var vgUrl_api = "http://localhost:8080/api/";

function fn_Logo() {
    const vlObj = document.getElementById("obj_logo");
    if (vlObj) {
        vlObj.src = "assets/images/logo/situs_200.png";        
        vlObj.style.height = "50px";
    } else {
        console.error("obj_logo not found");
    }
}

function fn_Header() {
    const vlObj = document.getElementById("obj_header_menu");
    if (vlObj) {
        vlObj.innerHTML = `
            <div class="flex-fill">
                <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="shop.html">Product</a></li>
                    <li class="nav-item"><a class="nav-link" href="reseller.html">Reseller</a></li>
                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                    <li class="nav-item"><a class="nav-link" target="_blank" href="https://login.situs.com">Login</a></li>
                </ul>
            </div>
        `;
    } else {
        console.error("obj_header_menu not found");
    }
}


function fn_Footer() {
    const vlObj_contact = document.getElementById("obj_footer_contact");
    if (vlObj_contact) {
        vlObj_contact.innerHTML = `
            <ul class="list-unstyled text-light footer-link-list">
                <li>
                    <i class="fa fa-phone fa-fw"></i>
                    <a class="text-decoration-none" href="https://wa.me/+628112345678">0812345678</a>
                </li>
                <li>
                    <i class="fa fa-envelope fa-fw"></i>
                    <a class="text-decoration-none" href="mailto:info@situs.com">info@situs.com</a>
                </li>
            </ul>
        `;
    } else {
        console.error("obj_footer_contact not found");
    }

    const vlObj_menu = document.getElementById("obj_footer_menu");
    if (vlObj_menu) {
        vlObj_menu.innerHTML = `
            <ul class="list-unstyled text-light footer-link-list">
                <li><a class="text-decoration-none" href="index.html">Home</a></li>
                <li><a class="text-decoration-none" href="shop.html">Product</a></li>
                <li><a class="text-decoration-none" href="reseller.html">Reseller</a></li>
                <li><a class="text-decoration-none" href="contact.html">Contact</a></li>
                <li><a class="text-decoration-none" href="https://login.situs.com">Login</a></li>
            </ul>
        `;
    } else {
        console.error("obj_footer_menu not found");
    }

    const vlObj_category = document.getElementById("obj_footer_product_category");
    if (vlObj_category) {
        vlObj_category.innerHTML = `
            <ul class="list-unstyled text-light footer-link-list">
                <li><a class="text-decoration-none" href="shop.html">Health Care</a></li>
                <li><a class="text-decoration-none" href="shop.html">Beauty Care</a></li>
                <li><a class="text-decoration-none" href="shop.html">Personal Care</a></li>
                <li><a class="text-decoration-none" href="shop.html">Fashion</a></li>
                <li><a class="text-decoration-none" href="shop.html">Gadget</a></li>
                <li><a class="text-decoration-none" href="shop.html">Pets Care</a></li>
            </ul>
        `;
    } else {
        console.error("obj_footer_product_category not found");
    }

    const vlObj_social = document.getElementById("obj_footer_socialmedia");
    if (vlObj_social) {
        vlObj_social.innerHTML = `
            <ul class="list-inline text-left footer-icons">
                <li class="list-inline-item border border-light rounded-circle text-center">
                    <a class="text-light text-decoration-none" target="_blank" href="http://facebook.com/situs.store"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                </li>
                <li class="list-inline-item border border-light rounded-circle text-center">
                    <a class="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/situs.store"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                </li>
                <li class="list-inline-item border border-light rounded-circle text-center">
                    <a class="text-light text-decoration-none" target="_blank" href="https://twitter.com/situs_store"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                </li>
                <li class="list-inline-item border border-light rounded-circle text-center">
                    <a class="text-light text-decoration-none" target="_blank" href="https://www.tiktok.com/@situs.store"><i class="fab fa-tiktok fa-lg fa-fw"></i></a>
                </li>
                <li class="list-inline-item border border-light rounded-circle text-center">
                    <a class="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/situs"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                </li>
            </ul>
        `;
    } else {
        console.error("obj_footer_socialmedia not found");
    }

    const vlObj_copyright = document.getElementById("obj_footer_copyright");
    if (vlObj_copyright) {
        vlObj_copyright.innerHTML = `
            <div class="col-12">
                <p class="text-left text-light">Copyright &copy; situs</p>
            </div>
        `;
    } else {
        console.error("obj_footer_copyright not found");
    }
}
