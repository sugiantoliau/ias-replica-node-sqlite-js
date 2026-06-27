var vgUrl_api = "https://wsapi.ayobel.com/api/";
//var vgUrl_api = "http://localhost:8080/api/";


async function fn_Product_Detail(vpMethod) {
    let vl_url_param;  
    const vl_url = new URLSearchParams(window.location.search);
    const vl_Id = vl_url.get('vpid');    

    if (!vl_Id) {
        console.error("Product ID not found in URL.");
        return;
    }

    vl_url_param = `?vpid=${vl_Id}`;
    const vlUrl_file = "in_product_detail" + vl_url_param;
    const vlUrl = vgUrl_api + vlUrl_file;    
    const jwt = localStorage.getItem('jwt');

    console.log(vlUrl);
    
      
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
                fn_Product_Name(item.Description);
                fn_Product_Price(item.Price1);
                fn_Product_Brand(item.Brand);
                fn_Product_Description(item.Description2);
                fn_Product_Specification(item.Description3);                
                fn_Product_Variance_Color('GET',item.ItemSKU,'C');
                fn_Product_Variance_Size('GET',item.ItemSKU,'S');
                fn_Product_Image('GET',item.ItemSKU);    
            });
        } 
        else {
            console.warn("No product data received from the API.");
        }
    })
    .catch(err => {
        console.error("Product Detail fetch failed:", err);        
    });
}


function fn_Product_Name(vpValue) {
    const vlObj = document.getElementById("obj_Product_Name");
    if (vlObj) {
        vlObj.innerHTML = vpValue;
    } else {
        console.error("obj_Product_Name not found");
    }
}


function fn_Product_Price(vpValue) {
    const vlObj = document.getElementById("obj_Product_Price");
    if (vlObj) {
        vlObj.innerHTML = vpValue;
    } else {
        console.error("obj_Product_Price not found");
    }
}

function fn_Product_Brand(vpValue) {
    const vlObj = document.getElementById("obj_Product_Brand");
    if (vlObj) {
        vlObj.innerHTML = vpValue;
    } else {
        console.error("obj_Product_Brand not found");
    }
}

function fn_Product_Description(vpValue) {
    const vlObj = document.getElementById("obj_Product_Description");
    if (vlObj) {
        vlObj.innerHTML = `
            <h6>Description:</h6>
            ${vpValue}
       `;
    } else {
        console.error("obj_Product_Description not found");
    }
}


function fn_Product_Specification(vpValue) {
    const vlObj = document.getElementById("obj_Product_Specification");
    if (vlObj && vpValue) {
        vlObj.innerHTML = `
            <h6>Specification:</h6>
            ${vpValue}
        `;
    } else {
        console.error("obj_Product_Specification not found");
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

        if (data && data.Data && data.Data.length > 0) {
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


async function fn_Product_Variance_Color(vpMethod, vpid, vpvariance) {    
    const vlUrl_file = `in_product_variance?vpid=${vpid}&vpvariance=${vpvariance}`;
    const vlUrl = vgUrl_api + vlUrl_file;
    const jwt = localStorage.getItem('jwt');
    
    const vlObj = document.getElementById("obj_Product_Variance_Color");    
    if (!vlObj) {
        console.error("Element with ID 'obj_Product_Variance_Color' not found.");
        return;
    }
    
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
        if (data && data.Data && data.Data.length > 0) {
            let vlHtmlContent =  `
               <ul class="list-inline">
                    <li class="list-inline-item">
                        <h6>Available Color:</h6>
                    </li>
            `;       

            data.Data.forEach(item => {
                 vlHtmlContent += `                  
                    <li class="list-inline-item"><p class="text-muted"><strong>${item.Description}</strong></p></li>
                `;              
            });

            vlHtmlContent += '</ul>';  
            vlObj.innerHTML = vlHtmlContent;   
        } else {            
            console.warn("No color variance data received from the API.");
        }
    })
    .catch(err => {        
        console.error("Variance fetch failed:", err);        
    });
}



async function fn_Product_Variance_Size(vpMethod, vpid, vpvariance) {
    const vlUrl_file = `in_product_variance?vpid=${vpid}&vpvariance=${vpvariance}`;
    const vlUrl = vgUrl_api + vlUrl_file;
    const jwt = localStorage.getItem('jwt');
    
    const vlObj = document.getElementById("obj_Product_Variance_Size");    
    if (!vlObj) {
        console.error("Element with ID 'obj_Product_Variance_Size' not found.");
        return;
    }
    
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
        if (data && data.Data && data.Data.length > 0) {
            let vlHtmlContent =  `
               <ul class="list-inline pb-3">
                    <li class="list-inline-item">Size :
                        <input type="hidden" name="product-size" id="product-size" value="S">
                    </li>
            `;       

            data.Data.forEach(item => {
                 vlHtmlContent += `
                    <li class="list-inline-item"><span class="btn btn-success btn-size">${item.Description}</span></li>                                      
                `;              
            });

            vlHtmlContent += '</ul>';  
            vlObj.innerHTML = vlHtmlContent;   
        } else {            
            console.warn("No Size data received from the API.");
        }
    })
    .catch(err => {
        console.error("Size fetch failed:", err);        
    });
}

async function fn_Product_Image(vpMethod, vpid) {
    const vlUrl_file = `in_product_image?vpid=${vpid}`;
    const vlUrl = vgUrl_api + vlUrl_file;
    const jwt = localStorage.getItem('jwt');
    
    const vlObj2 = document.getElementById("product-detail");
    if (!vlObj2) {
        console.error("Element with ID 'product-detail' not found.");
        return;
    }

    const vlObj = document.getElementById("obj_Product_Image");
    if (!vlObj) {
        console.error("Element with ID 'obj_Product_Image' not found.");
        return;
    }
    
    vlObj.innerHTML = "";
    
    try {
        const response = await fetch(vlUrl, {
            method: vpMethod,
            headers: {
                "Authorization": "Bearer " + jwt,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        console.log("API response:", data);

        if (data && data.Data && data.Data.length > 0) {
            let vlHtmlContent = '';

            // Set the main product image (the first one) initially
            vlObj2.src = data.Data[0].MediaPath;

            for (let i = 0; i < data.Data.length; i++) {
                // Start a new carousel item for every 3 images
                if (i % 3 === 0) {
                    // Determine if it's the first slide to add the 'active' class
                    const activeClass = i === 0 ? 'active' : '';
                    if (i > 0) {
                        // Close the previous row and carousel item
                        vlHtmlContent += `</div></div>`;
                    }
                    // Start a new carousel item and row
                    vlHtmlContent += `<div class="carousel-item ${activeClass}"><div class="row">`;
                }

                // Add the image thumbnail
                const item = data.Data[i];
                vlHtmlContent += `
                    <div class="col-4">
                        <a href="#" class="thumb-link" data-src="${item.MediaPath}">
                            <img class="card-img img-fluid" src="${item.MediaPath}" alt="Product Image">
                        </a>
                    </div>
                `;
            }
            // Close the last carousel item and row after the loop finishes
            vlHtmlContent += `</div></div>`;
            
            vlObj.innerHTML = vlHtmlContent;

            // Add event listeners after the HTML is in the DOM
            document.querySelectorAll('#obj_Product_Image .thumb-link').forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const clickedImageSrc = this.getAttribute('data-src');
                    vlObj2.src = clickedImageSrc;
                });
            });

        } else {
            console.warn("No Image received from the API.");
        }
    } catch (err) {
        console.error("Image fetch failed:", err);
    }
}


///////////////////////////

async function fn_Product_Image3(vpMethod,vpid) {
    const vlProduct_Image_Additional_Path="../store2/";    
    
    const vlUrl_file = `in_product_image?vpid=${vpid}`;
    const vlUrl = vgUrl_api + vlUrl_file;
    const jwt = localStorage.getItem('jwt');
    
    const vlObj2 = document.getElementById("product-detail");
    if (!vlObj2) {
        console.error("Element with ID 'product-detail' not found.");
        return;
    }

    const vlObj = document.getElementById("obj_Product_Image");
    if (!vlObj) {
        console.error("Element with ID 'obj_Product_Image' not found.");
        return;
    }
    
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
            let vlcount=0;
            let vlHtmlContent = '';
            

            data.Data.forEach(item => {
                vlcount = vlcount + 1;
               
                if (vlcount===1) {
                    vlHtmlContent +=  `
                        <div class="carousel-item">
                            <div class="row">
                    `;
                }
                else if (vlcount===4 || vlcount===7)  {
                    vlHtmlContent +=  `
                        <div class="carousel-item">
                            <div class="row">
                    `;
                }                

                if (vlcount===1) {
                    vlObj2.src = `${item.MediaPath}`;
                }

                vlHtmlContent += `
                    <div class="col-4">
                        <a href="#">
                            <img class="card-img img-fluid" src=${item.MediaPath} alt="Product Image">                            
                        </a>
                    </div>
                `;

                console.log(item.MediaPath);
                
                if (vlcount===1 ||vlcount===4 || vlcount===7)  {
                     vlHtmlContent +=  `
                            </div>
                        </div>
                    `;   
                }

            });
         
            vlObj.innerHTML = vlHtmlContent;   
        } else {            
            console.warn("No Image received from the API.");
        }
    })
    .catch(err => {
        console.error("Image fetch failed:", err);        
    });
}




function fn_Product_Image2(vpid) {
    const vlProduct_Image_Additional_Path="../store2/";
    
    var vlObj = document.getElementById("product-detail");
    if (vlObj) {
        vlObj.src ="assets/images/products/products/01.png";        
    }

    
    var vlObj = document.getElementById("obj_Product_Image");
    if (vlObj) {
        vlObj.innerHTML = `
            <div class="carousel-item active">
                <div class="row">

                    <div class="col-4">
                        <a href="#">
                            <img class="card-img img-fluid" src="assets/images/products/products/01.png" alt="Product Image 1">
                        </a>
                    </div>

                    <div class="col-4">
                        <a href="#">
                            <img class="card-img img-fluid" src="assets/images/products/products/02.png" alt="Product Image 2">
                        </a>
                    </div>

                    <div class="col-4">
                        <a href="#">
                            <img class="card-img img-fluid" src="assets/images/products/products/03.png" alt="Product Image 3">
                        </a>
                    </div>

                </div>
            </div>

             <div class="carousel-item">
                <div class="row">
                    <div class="col-4">
                        <a href="#">
                            <img class="card-img img-fluid" src="assets/images/products/products/04.png" alt="Product Image 4">
                        </a>
                    </div>
                    <div class="col-4">
                        <a href="#">
                            <img class="card-img img-fluid" src="assets/images/products/products/05.png" alt="Product Image 5">
                        </a>
                    </div>
                    <div class="col-4">
                        <a href="#">
                            <img class="card-img img-fluid" src="assets/images/products/products/06.png" alt="Product Image 6">
                        </a>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="col-4">
                        <a href="#">
                            <img class="card-img img-fluid" src="assets/images/products/products/07.png" alt="Product Image 7">
                        </a>
                    </div>
                    <div class="col-4">
                        <a href="#">
                            <img class="card-img img-fluid" src="assets/images/products/products/08.png" alt="Product Image 8">
                        </a>
                    </div>
                    <div class="col-4">
                        <a href="#">
                            <img class="card-img img-fluid" src="assets/images/products/products/09.png" alt="Product Image 9">
                        </a>
                    </div>
                </div>
            </div>
        `;          

    } else {
        console.error("obj_Product_Image_1 not found");
    }
}

