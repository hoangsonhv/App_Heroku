var products = [
    {
        name:"Special Fruit & Fresh Produce",
        name2:"New",
        image:"./img/qua1.jpg",
        price: 27.00,
        price2:32,
        star:3.5
    },
    {
        name:"Organic & Special Vegetables",
        name2:"New",
        image:"./img/qua2.jpg",
        price: 12.00,
        price2:27,
        star:4
    },
    {
        name:"Citrus Fennel And Apple Salad",
        name2:"Hot",
        image:"./img/qua3.jpg",
        price: 52.00,
        price2:64,
        star:5
    },
    {
        name:"Special Fruit & Fresh Produce",
        name2: status,
        image:"./img/qua4.jpg",
        price: 21.00,
        price2:28,
        star:2.5
    },
    {
        name:"Organic & Special Vegetables",
        name2:"New",
        image:"./img/qua5.jpg",
        price: 10.00,
        price2:14,
        star:3
    },
    {
        name:"Citrus Fennel And Apple Salad",
        name2:"New",
        image:"./img/qua6.jpg",
        price: 53.00,
        price2:95,
        star:4.5
    },

]


function gridProduct() {
    var g_html = "";
    for (var i=0;i<products.length;i++){
        g_html += "<div class=\"col-md-3\">\n" +
            "            <div class=\"item text-center\">\n" +
            "                <a href=\"#\"><img class=\"product-image\" src=\""+products[i].image+"\"/></a>\n" +
            "                <h2 class=\"product-name\">"+products[i].name+"</h2>\n" +
            "                <div class=\"star\">\n" +
            "                    <p class=\"dola\">$"+products[i].price+'.'+0+0+"</p>\n" +
            "                    <div class=\"star-box\">\n" +
            "                        <div class=\"star-rate\" style=\"width: "+(products[i].star/5*100)+"%\"></div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "                <a href=\"#\" class=\"add-to-cart text-uppercase\">Add</a>\n" +
            "            </div>\n" +
            "            <div class=\"left-item\">"+products[i].name2+"</div>\n" +
            "            <div class=\"itemsicon\">\n" +
            "                <div class=\"icon1\">\n" +
            "                    <svg width=\"1.2em\" height=\"1.2em\" viewBox=\"0 0 16 16\" class=\"bibi\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "                        <path fill-rule=\"evenodd\" d=\"M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z\"></path>\n" +
            "                    </svg>\n" +
            "                </div>\n" +
            "                <div class=\"icon3\">\n" +
            "                    <svg width=\"1.2em\" height=\"1.2em\" viewBox=\"0 0 16 16\" class=\"bibi\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "                        <path d=\"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z\"></path>\n" +
            "                        <path fill-rule=\"evenodd\" d=\"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z\"></path>\n" +
            "                    </svg>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>";
    }
    return g_html;
}
var grid = document.getElementById("grid-products");
grid.innerHTML = gridProduct();