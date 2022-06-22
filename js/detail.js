function loadDetail(id) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            var jsonRespon = JSON.parse(xmlHttpRequest.responseText)
            document.getElementById('content').innerHTML = xmlHttpRequest.responseText;
        }
    }
    xmlHttpRequest.open('GET', API_URL + `/${id}`);
    xmlHttpRequest.send();
}
document.addEventListener('DOMContentLoaded', function () {
    var id = getParameterFromUrl('id');
    loadDetail(id);
})