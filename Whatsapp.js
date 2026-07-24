function contactWhatsApp(product){

let phone = "237652681834";

let message = "Hello Advanced Auto Spare Parts, I am interested in: " + product;

let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

window.open(url, "_blank");

}
