var products = [
    {
        name:"Vegettables (15)",
    },
    {
        name:"Fresh Fruits (12)",
    },
    {
        name:"Fresh Meat (12)",
    },
    {
        name:"Mik & Cream (9)",
    },
    {
        name:"Uncategorized (7)",
    },
    {
        name:"Organic Fruits (6)",
    },
    {
        name:"Special Salad (3)",
    },
    {
        name:"Supplements (0)",
    },
]
function gridProduct() {
    var g_html = "<h4>Product Categories</h4></br>\n" +
        "                <ul style=\"list-style: none\">\n" +
        "                    <li>Vegetables(15)</li>\n" +
        "                    <li>Fresh Fruit(12)</li>\n" +
        "                    <li>Fresh Meat(12)</li>\n" +
        "                    <li>Milk & Cream(9)</li>\n" +
        "                    <li>Uncategorized(7)</li>\n" +
        "                    <li>Ogarnic Fruits(6)</li>\n" +
        "                    <li>Special Salads(3)</li>\n" +
        "                    <li>Supplements(0)</li>\n" +
        "                </ul>";

    return g_html;
}
var grid = document.getElementById("category");
grid.innerHTML = gridProduct();