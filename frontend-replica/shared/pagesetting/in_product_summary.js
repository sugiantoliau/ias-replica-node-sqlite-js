//import { vgUrl_api } from 'page_setting.js';
var vgUrl_api = "https://wsapi.ayobel.com/api/";
//var vgUrl_api = "http://localhost:8080/api/";

function fn_Product_Category_Promotion() {
    var vlObj = document.getElementById("obj_product_category_promotion");
    if (vlObj) {
        vlObj.innerHTML = `
            <li><a class="text-decoration-none" href="#">Not Available</a></li>            
        `;          

    } else {
        console.error("obj_product_category_promotion not found");
    }
}


function fn_Product_Pagination() {
    var vlObj = document.getElementById("obj_product_pagination");
    if (vlObj) {
        vlObj.innerHTML = `
            <ul class="pagination pagination-lg justify-content-end">
                <li class="page-item disabled">
                    <a class="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#" tabindex="-1">1</a>
                </li>
                <li class="page-item">
                    <a class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#"></a>
                </li>                
            </ul>
        `;
    } else {
        console.error("obj_product_category_list not found");
    }
}

function fn_Product_Category_List(vpMethod) {
    const vlUrl_file = "xm_mslookup?vpid=ItemGroup2";
    const vlUrl = vgUrl_api + vlUrl_file;
    const jwt = localStorage.getItem('jwt');
    
    var vlObj = document.getElementById("obj_product_category_list");
    vlObj.innerHTML = "";      

    fetch(vlUrl, {
        method: vpMethod,
        headers: {
            "Authorization": "Bearer " + jwt,
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) throw new Error("HTTP error " + response.status);
        return response.json();
    })
    .then(data => {
        console.log("API response:", data);

        if (data && data.Data) {
            data.Data.forEach(item => {
                 vlObj.innerHTML += `
                    <li><a class="text-decoration-none" href="shop.html?vpcategory=${item.Id}">${item.Description}</a></li>                    
                `;              
            });
        } else {
            container.innerHTML = "<li>No categories found</li>";
        }
    })
    .catch(err => {
        console.error("Category fetch failed:", err);
        container.innerHTML = "<li>Error loading categories</li>";
    });
}


function fn_Product_Category_List22() {
    var vlObj = document.getElementById("obj_product_category_list");
    if (vlObj) {
        vlObj.innerHTML = `
            <li><a class="text-decoration-none" href="shop.html?vpcategory=HC">Health Care</a></li>
            <li><a class="text-decoration-none" href="shop.html?vpcategory=BC">Beauty Care</a></li>
            <li><a class="text-decoration-none" href="shop.html?vpcategory=PC">Personal Care</a></li>
            <li><a class="text-decoration-none" href="shop.html?vpcategory=FS">Fashion</a></li>
            <li><a class="text-decoration-none" href="shop.html?vpcategory=GG">Gadget</a></li>
            <li><a class="text-decoration-none" href="shop.html?vpcategory=PC">Pets Care</a></li> 
        `;
    } else {
        console.error("obj_product_category_list not found");
    }
}

function fn_Product_List_Summary(vpMethod) {
    let vl_url_param;  
    const vl_url = new URLSearchParams(window.location.search);
    const vl_categoryId = vl_url.get('vpcategory');    

    vl_url_param = "";
    if (vl_categoryId) {
        vl_url_param += `?vpcategory=${vl_categoryId}`;
    }
    
    const vlUrl_file = "in_product_summary" + vl_url_param;
    const vlUrl = vgUrl_api + vlUrl_file;    
    const jwt = localStorage.getItem('jwt');
    
    var vlObj = document.getElementById("obj_product_list_summary");
    vlObj.innerHTML = "";          
    const vlLoop_Until = 5;
    let vlHtmlContent = ''; 
    let vlProduct_Code=''; 
    let vlProduct_Name= ''; 
    let vlProduct_Image=''; 
    let vlProduct_Price=''; 
    
    fetch(vlUrl, {
        method: vpMethod,
        headers: {
            "Authorization": "Bearer " + jwt,
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) throw new Error("HTTP error " + response.status);
        return response.json();
    })
    .then(data => {
        console.log("API response:", data);

        if (data && data.Data) {
            data.Data.forEach(item => {
                vlProduct_Code=item.ItemSKU; 
                vlProduct_Name= item.Description; 
                vlProduct_Image=item.MediaPath; 
                vlProduct_Price='Rp.' + item.Price; 
                
                 vlObj.innerHTML += `
                    <div class="col-md-4">
                        <div class="card mb-4 product-wap rounded-0">
                            <div class="card rounded-0">
                                <img class="card-img rounded-0 img-fluid" src=${vlProduct_Image}>
                                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                    <ul class="list-unstyled">                                        
                                        <li><a class="btn btn-success text-white mt-2" href="shop_single.html?vpid=${vlProduct_Code}"><i class="far fa-eye"></i></a></li>                                        
                                    </ul>
                                </div>
                            </div>
                            <div class="card-body">
                                <a href="shop-single.html" class="h3 text-decoration-none">
                                    ${vlProduct_Code} - ${vlProduct_Name} 
                                </a>
                               
                                <p class="text-center mb-0">
                                    ${vlProduct_Price} 
                                </p>
                            </div>
                        </div>
                    </div>
                `;              
            });
            vlObj.insertAdjacentHTML('afterbegin', vlHtmlContent);

        } else {
            container.innerHTML = "<li>No categories found</li>";
        }
    })
    .catch(err => {
        console.error("Category fetch failed:", err);
        container.innerHTML = "<li>Error loading categories</li>";
    });
}


function fn_Product_List_Summary22(mpMethod) {       
    var vlObj = document.getElementById("obj_product_list_summary"); 
    
    if (!vlObj) {
        console.error("Product grid row not found. Ensure an element with id 'obj_product_list_summary' exists.");
        return; 
    }
       
    const vlLoop_Until = 5;
    let vlHtmlContent = ''; 
    let vlProduct_Code=''; 
    let vlProduct_Name= ''; 
    let vlProduct_Image=''; 
    let vlProduct_Price=''; 
    
    
    for (let vlLoop_i = 0; vlLoop_i < vlLoop_Until; vlLoop_i++) {        
        vlProduct_Code='HF00' + vlLoop_i;
        vlProduct_Name= 'Produk' + vlLoop_i;
        vlProduct_Image='assets/img/shop_01.jpg';
        vlProduct_Price='Harga $123';

        vlHtmlContent += `
            <div class="col-md-4">
                <div class="card mb-4 product-wap rounded-0">
                    <div class="card rounded-0">
                        <img class="card-img rounded-0 img-fluid" src=${vlProduct_Image}>
                        <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                            <ul class="list-unstyled">
                                <li><a class="btn btn-success text-white" href="shop-single.html"><i class="far fa-heart"></i></a></li>
                                <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="far fa-eye"></i></a></li>
                                <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fas fa-cart-plus"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <a href="shop-single.html" class="h3 text-decoration-none">
                            ${vlProduct_Code} - ${vlProduct_Name} 
                        </a>
                        <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                            <li>M/L/X/XL</li>
                            <li class="pt-2">
                                <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                            </li>
                        </ul>
                        <ul class="list-unstyled d-flex justify-content-center mb-1">
                            <li>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-warning fa fa-star"></i>
                                <i class="text-muted fa fa-star"></i>
                                <i class="text-muted fa fa-star"></i>
                            </li>
                        </ul>
                        <p class="text-center mb-0">
                            ${vlProduct_Price} 
                        </p>
                    </div>
                </div>
            </div>
        `;

        console.log("The number is " + vlLoop_i);
    }
    
    // Insert all the generated HTML at once
    vlObj.insertAdjacentHTML('afterbegin', vlHtmlContent);
}
