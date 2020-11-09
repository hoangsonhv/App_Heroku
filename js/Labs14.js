

function item(items) {
    var g_html = "";
    for(var  i=0;i<items.length;i++) {
        g_html += "<div class=\"col-md-4\">\n" +
            "                    <div class=\"item-main text-center\">\n" +
            "                        <h3 class=\"item-name\">" + items[i].name + "</h3>\n" +
            "                        <img class=\"item-img\" src=\"" + items[i].image + "\"/>\n" +
            "                        <p class=\"dola\">£" + items[i].price + "</p>\n" +
            "                    </div>\n" +
            "                </div>"
    }
    return g_html;
}

function loadData() {
    var xhttp = new  XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            var rs = this.responseText;
            rs = JSON.parse(rs);
            var items = rs.data.foods;
            var item1 = document.getElementById("item-1");
            item1.innerHTML = item(items);
        }
    }
    xhttp.open("GET","https://foodgroup.herokuapp.com/api/category/3");
    xhttp.send();
}
loadData();