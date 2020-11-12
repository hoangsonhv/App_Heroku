var products = [
    {
        name:"Green Life (15)",
    },
    {
        name:"Organic Life (22)",
    },
    {
        name:"Whole Foods (21)",
    },
    {
        name:"Orwell Company (14)",
    },
    {
        name:"Organnica (6)",
    },
    {
        name:"Other (3)",
    },
]
function gridProduct() {
    var g_html = "<div class=\"product-brands\" id=\"brands\">\n" +
        "                    <h4>Product Brands</h4></br>\n" +
        "                    <div class=\"product-1\">\n" +
        "                        <label class=\"label-check\">\n" +
        "                            <input type=\"checkbox\"/>\n" +
        "                            <span class=\"check-lb\"></span>\n" +
        "                            <p>Green life(24)</p>\n" +
        "                        </label>\n" +
        "                    </div>\n" +
        "                    <div class=\"product-1\">\n" +
        "                        <label class=\"label-check\">\n" +
        "                            <input type=\"checkbox\" />\n" +
        "                            <span class=\"check-lb\"></span>\n" +
        "                            <p>Organic life(22)</p>\n" +
        "                        </label>\n" +
        "                    </div>\n" +
        "                    <div class=\"product-1\">\n" +
        "                        <label class=\"label-check\">\n" +
        "                            <input type=\"checkbox\" />\n" +
        "                            <span class=\"check-lb\"></span>\n" +
        "                            <p>Whole Foods(21)</p>\n" +
        "                        </label>\n" +
        "                    </div>\n" +
        "                    <div class=\"product-1\">\n" +
        "                        <label class=\"label-check\">\n" +
        "                            <input type=\"checkbox\" />\n" +
        "                            <span class=\"check-lb\"></span>\n" +
        "                            <p>Orwell Company(14)</p>\n" +
        "                        </label>\n" +
        "                    </div><div class=\"product-1\">\n" +
        "                        <label class=\"label-check\">\n" +
        "                            <input type=\"checkbox\" />\n" +
        "                            <span class=\"check-lb\"></span>\n" +
        "                            <p>Organica(6)</p>\n" +
        "                        </label>\n" +
        "                    </div>\n" +
        "                    <div class=\"product-1\">\n" +
        "                        <label class=\"label-check\">\n" +
        "                            <input type=\"checkbox\" />\n" +
        "                            <span class=\"check-lb\"></span>\n" +
        "                            <p>Other(3)</p>\n" +
        "                        </label>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";

    return g_html;
}
var grid = document.getElementById("brands");
grid.innerHTML = gridProduct();