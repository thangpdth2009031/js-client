function processDelete(id, e) {
    e.preventDefault();
    if (confirm("are you sure")){
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function () {
            if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
                alert("Delete success!");
                window.location.reload();
            }
        }
        xmlHttpRequest.open('DELETE', API_URL + `/${id}`);
        xmlHttpRequest.send();
    }
}
function loadData() {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function() {
        if(xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200){
            var jsonResponse = JSON.parse(xmlHttpRequest.responseText)
            var contentHtml = '';
            for (let i = 0; i < jsonResponse.length; i ++) {
                contentHtml += ` <tr>
            <td>${jsonResponse[i].id}</td>
            <td>${jsonResponse[i].thumbnail}</td>
            <td>${jsonResponse[i].name}</td>
            <td>${jsonResponse[i].description}</td>
            <td> <a href="detail.html?id=${jsonResponse[i].id}">Detail</a>
                                    <a href="update-product.html?id=${jsonResponse[i].id}" id="btnSubmit">Edit</a>
                                    <a href="#" data-id="${jsonResponse[i].id}"
                                    onclick="processDelete(${jsonResponse[i].id}, event)">Delete</a></td>
        </tr>`;
            }
            document.getElementById('data').innerHTML = contentHtml;
        }
    }
    xmlHttpRequest.open('GET', API_URL);
    xmlHttpRequest.send();
}
document.addEventListener('DOMContentLoaded', function() {
    loadData();
})
