function fn_whatsapp_floating() {
    const whatsappLink = document.createElement('a');
    whatsappLink.id = 'label_WhatsappFloating';
    whatsappLink.href = 'https://wa.me/1234567890'; 
    whatsappLink.className = 'floating';
    whatsappLink.target = '_blank';

    const icon = document.createElement('i');
    icon.className = 'fab fa-whatsapp fab-icon';

    whatsappLink.appendChild(icon);
    document.body.appendChild(whatsappLink);
}


async function fn_GetLookupID(mpMethod) {
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;
    let vlParam_ID = searchParams.get('vpid');

    if (vlParam_ID !== null && vlParam_ID !== "") {
        localStorage.setItem('idreplica', vlParam_ID);
    } else {
        vlParam_ID = localStorage.getItem('idreplica');
        if (vlParam_ID === null || vlParam_ID === "") {
            console.error("empty data");
            return;
        }
    }

    const vlUrl_file = "ar_webreplica?vpid=";
    const vlUrl = vgUrl_api + vlUrl_file + vlParam_ID;
    const jwt = localStorage.getItem('jwt');

    try {
        const response = await fetch(vlUrl, {
            method: mpMethod,
            headers: {
                'Authorization': `Bearer ${jwt}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const obj = await response.json();

        if (obj && obj.Data) {
            obj.Data.forEach(item => {
                let vlID_Replica;
                let vlID_MobileNo;
                let vlID_Email;

                if (item.ReplicaID) {
                    vlID_Replica = item.ReplicaID;
                    const vlObj = document.getElementById("lbWord_Footer_value");
                    if (vlObj) {
                        vlObj.innerText = " " + vlID_Replica;
                    }
                }

                if (item.Mobile) {
                    vlID_MobileNo = item.Mobile;
                    const label_WhatsappFloating = document.getElementById("label_WhatsappFloating");
                    if (label_WhatsappFloating) {
                        label_WhatsappFloating.href = "https://wa.me/" + vlID_MobileNo;
                    }

                    const label_WhatsappLink = document.getElementById("label_WhatsappLink");
                    if (label_WhatsappLink) {
                        label_WhatsappLink.href = "https://wa.me/" + vlID_MobileNo;
                        label_WhatsappLink.innerHTML += " " + vlID_MobileNo;
                    }

                    const vllabel_id_mobile_text = document.getElementById("label_id_mobile_text");
                    if (vllabel_id_mobile_text) {
                        vllabel_id_mobile_text.innerHTML += "Whatsapp:";
                    }
                }

                if (item.Email) {
                    vlID_Email = item.Email;
                    const label_EmailLink = document.getElementById("label_EmailLink");
                    if (label_EmailLink) {
                        label_EmailLink.href = "mailto:" + vlID_Email;
                        label_EmailLink.innerHTML += " " + vlID_Email;
                    }

                    const vllabel_id_email_text = document.getElementById("label_id_email_text");
                    if (vllabel_id_email_text) {
                        vllabel_id_email_text.innerHTML += "Email:";
                    }
                }
            });
        } else {
            console.error("Invalid JSON response or missing data.");
        }
    } catch (error) {
        console.error('Error:', error);
    }
}