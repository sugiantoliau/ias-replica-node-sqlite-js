var vgUrl_api = "http://localhost:8081";
var vgUrl_web = "http://www.ayobel.com/";
var vgUrl_member = "https://login.ayobel.com/api/";
var vgUrl_reseller = "https://reseller.ayobel.com/api/";



var vgJWT = localStorage.getItem('jwt');
var vgSecretKey = localStorage.getItem('secretkey');



function fnHidePanelScript() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
    x.style.display = "none";
    }
}


function fnHideAllPanel() {
    var x = document.getElementById("pnFILL");
    x.style.display = "none";
    
    var x = document.getElementById("pnGRID");
    x.style.display = "none";
}


function fnShowPanelFill() {   
    var x = document.getElementById("pnFILL");
    x.style.display = "block";

    var x = document.getElementById("pnGRID");
    x.style.display = "none";    
}


function fnShowPanelGrid() {        
    var x = document.getElementById("pnFILL");
    x.style.display = "none";    

    var x = document.getElementById("pnGRID");
    x.style.display = "block";
}



function openwindow(url,nama,width,height) {
    OpenWin = this.open(url, nama);
    if (OpenWin != null)
    {
    if (OpenWin.opener == null)
    OpenWin.opener=self;
    }
    OpenWin.focus();
} 


function ShowTypePassword() {
    var x = document.getElementById("txPASSWORD");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


function isNumeric(mpInput) {
    return !isNaN(parseFloat(mpInput)) && isFinite(mpInput);
}
    

function isEmail(mpInput) {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(mpInput);
}


function isString(mpInput) {
    return typeof mpInput === 'string';
}


function isPostalCode(mpInput) {
    // Regular expression for a simple postal code validation
    // Modify the regex according to the expected format for your use case
    const postalCodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
    
    return postalCodeRegex.test(mpInput);
}


function isValidStringOrNumber(mpInput) {
    // Regular expression for allowing only strings and numbers
    const regex = /^[a-zA-Z0-9]*$/;
    
    return regex.test(mpInput);
}
    

function isValidDate(dateString) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
}


function isValidURL(mpInput) {
    // Regular expression for a simple URL validation
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    
    return urlRegex.test(mpInput);
}


function isValidIPAddress(mpInput) {
    // Regular expression for a simple IP address validation
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])){3}$/;
    
    return ipRegex.test(mpInput);
}


function isNone(mpTEMP) {
    try {
        let isNoneValue = false;
    
        if (mpTEMP !== null && mpTEMP !== undefined) {
        if (!isNaN(parseFloat(mpTEMP)) && isFinite(mpTEMP)) {
            // If it's a numeric value
            if (mpTEMP === 0) {
            isNoneValue = true;
            }
        } else {
            // If it's not a numeric value
            if (mpTEMP === "") {
            isNoneValue = true;
            }
        }
        } else {
        isNoneValue = mpTEMP === null;
        }
    
        return isNoneValue;
    } 
    catch (error) {
        return mpTEMP === null || mpTEMP === undefined;
    }
}


function isNotEmpty(mpInput) {
    return mpInput !== null && mpInput !== undefined && mpInput !== "";
}


function getStringAtPosition(mpSTRING, mpPosition, mpSEPARATOR = "", mpNOTRIM = false, mpFROMRIGHT = false) {
    let mlPOSITION = 0;
    let mlSEPARATOR = mpSEPARATOR || " ";
    let mlSTRING = "";

    if (!mpFROMRIGHT) {
        for (let i = 0; i < mpSTRING.length; i++) {
        if (mpSTRING[i] === mlSEPARATOR) {
            mlPOSITION++;
        } else {
            if (mpPosition === mlPOSITION) {
            mlSTRING += mpSTRING[i];
            }
        }
        }
    } else {
        for (let i = mpSTRING.length - 1; i >= 0; i--) {
        if (mpSTRING[i] === mlSEPARATOR) {
            mlPOSITION++;
        } else {
            if (mpPosition === mlPOSITION) {
            mlSTRING = mpSTRING[i] + mlSTRING;
            }
        }
        }
    }      
    return mpNOTRIM ? mlSTRING : mlSTRING.trim();
}

      
function decreaseBvMonth(mpBVMONTH) {
    let mlYEAR = parseInt(mpBVMONTH.substring(0, 4), 10);
    let mlMONTH = parseInt(mpBVMONTH.substring(4, 6), 10);

    if (mlMONTH !== 1) {
        mlMONTH--;
    } else {
        mlMONTH = 12;
        mlYEAR--;
    }

    return mlYEAR + mlMONTH.toString().padStart(2, '0');
}

  
function increaseBvMonth(mpBVMONTH) {
    let mlYEAR = parseInt(mpBVMONTH.substring(0, 4), 10);
    let mlMONTH = parseInt(mpBVMONTH.substring(4, 6), 10);

    if (mlMONTH !== 12) {
        mlMONTH++;
    } else {
        mlMONTH = 1;
        mlYEAR++;
    }

    return mlYEAR + mlMONTH.toString().padStart(2, '0');
}


function currentBvMonth() {
    const now = new Date();
    return now.getFullYear().toString() + (now.getMonth() + 1).toString().padStart(2, '0');
}
  

function currentBvMonthDate() {
    const now = new Date();
    return now.getFullYear().toString() +
        (now.getMonth() + 1).toString().padStart(2, '0') +
        now.getDate().toString().padStart(2, '0');
}


function convertDateToBvMonthDate(mpDATE) {
    return mpDATE.getFullYear().toString() +
        (mpDATE.getMonth() + 1).toString().padStart(2, '0') +
        mpDATE.getDate().toString().padStart(2, '0');
}


function bvMonthLongCounter(mpBIGBVMONTH, mpSMALLBVMONTH) {
    let mlCHECKMONTH = mpSMALLBVMONTH;
    let mlLOOP = 0;

    while (mpBIGBVMONTH !== mlCHECKMONTH) {
        mlCHECKMONTH = increaseBvMonth(mlCHECKMONTH);
        mlLOOP++;
    }

    return mlLOOP;
    }


    function bvMonthToDate(mpBVMONTH) {
    const mlYEAR = parseInt(mpBVMONTH.substring(0, 4), 10);
    const mlMONTH = parseInt(mpBVMONTH.substring(4, 6), 10) - 1;

    return new Date(mlYEAR, mlMONTH);
}

  
function bvMonthToFirstDate(mpBVMONTH) {
    const formattedDate = `${mpBVMONTH.substring(0, 4)}/${mpBVMONTH.substring(4, 6)}/01`;
    return formatDate(formattedDate);
}

  
function bvMonthToLastDate(mpBVMONTH) {
    let mlLASTDATE = 31;
    let mlISDATE = false;

    while (!mlISDATE) {
        const formattedDate = `${mpBVMONTH.substring(0, 4)}/${mpBVMONTH.substring(4, 6)}/${mlLASTDATE}`;
        if (isValidDate(formattedDate)) {
        mlISDATE = true;
        return formatDate(formattedDate);
        } else {
        mlLASTDATE--;
        }
    }
}

  
function getSubsequentMonday(mpDATE, mpSUBSEQUENTWEEK) {
    const mlDAYOFWEEK = mpDATE.getDay();
    const mlDAYSUNTILMONDAY = (mlDAYOFWEEK === 0 ? 6 : mlDAYOFWEEK - 1) + 1;
    const resultDate = new Date(mpDATE);
    resultDate.setDate(mpDATE.getDate() + mlDAYSUNTILMONDAY + 7 * (mpSUBSEQUENTWEEK - 1));
    return resultDate;
}

  
function dateToBvMonth(mpDATE) {
    return mpDATE.getFullYear().toString().padStart(4, '0') +
        (mpDATE.getMonth() + 1).toString().padStart(2, '0') +
        mpDATE.getDate().toString().padStart(2, '0');
}

  
function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options).replace(/\//g, '');
}


function dateLastDayOnThisMonth() {
    const mlCurrDate = new Date();
    const mlFirstDay = new Date(mlCurrDate.getFullYear(), mlCurrDate.getMonth() + 1, 1);
    const dateLastDayOnThisMonth = new Date(mlFirstDay - 1);
    return dateLastDayOnThisMonth;
}


function fn_CheckPageIsFirstLoad() {
    if (performance.navigation.type === 1) {
        //alert("Page is loaded for the first time");
        return true;
    } else {
        //alert("Page is being reloaded or navigated");
        return false;
    }
}