function loadDetail(id) {
    var txtName = document.forms['form-edit']['name'];
    var txtDescription = document.forms['form-edit']['description'];
    var txtThumbnail = document.forms['form-edit']['thumbnail'];
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
            var jsonRespon = JSON.parse(xmlHttpRequest.responseText)
            txtName.value =jsonRespon.name;
            txtDescription.value = jsonRespon.description;
            txtThumbnail.value = jsonRespon.thumbnail;
        }
    }
    xmlHttpRequest.open('GET', API_URL + `/${id}`);
    xmlHttpRequest.send();
}
document.addEventListener('DOMContentLoaded', function () {
    var id = getParameterFromUrl('id');
    loadDetail(id);
})
function UpdateProduct() {
    var id = getParameterFromUrl('id');
    var txtName = document.forms['form-edit']['name'];
    var txtDescription = document.forms['form-edit']['description'];
    var txtThumbnail = document.forms['form-edit']['thumbnail'];
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var response = JSON.parse(this.responseText);
            console.log("du lie tra ve: "+ response.name)
            window.location.href = "list-product.html"
        }
    };

    xhr.open("PUT", API_URL+ `/${id}`, true);
    xhr.setRequestHeader("Content-type", "application/json");
    const obj = {
        name: txtName.value,
        description: txtThumbnail.value,
        thumbnail: txtDescription.value
    };
    xhr.send(JSON.stringify(obj));
}
