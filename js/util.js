var API_URL = 'https://sell-everything-ok.herokuapp.com/api/v1/products';
function getParameterFromUrl(name) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    return url.searchParams.get(name)
}