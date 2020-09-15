$(document).ready(function() {
    console.log("ready!");
    initProducts();
    initBuyers();
});

function initProducts() {
    $.getJSON("api/products.json", function(data) {
        var items = [];
        const products = data['products'];
        $.each(products, function(key, val) {
            let itemToPush = `<a href="#" class="products-card">
            <div class="products-card-img"><img src="${val.img}" alt="Potatos"></div>
            <div class="products-card-content">
                <div class="products-card-row">Seller: VegKing</div>
                <div class="products-card-row">Veraity: Solist</div>
                <div class="products-card-row">Flesh Color: Light Yellow</div>
                <div class="products-card-row">Market Processing: Packing</div>
                <div class="products-card-row">QualityType: Unwashed/Unwashable</div>
                <div class="products-card-row">Soil: N/A</div>
                <div class="products-card-row">Size: 45-80</div>
                <div class="products-card-row">Packing: 1250 kg (big bags)</div>
                <div class="products-card-row">Loc: SE 534-61 Vedum</div>
                <div class="products-card-price">105 EUR/Tone</div>
            </div>
        </a>`;

            items.push(itemToPush);
        });

        $('.products-row').append(items.join(""));
    });
}

function initBuyers() {
    $.getJSON("api/buyers.json", function(data) {
        var items = [];
        const buyers = data['buyers'];
        $.each(buyers, function(key, val) {
            let itemToPush = `
                <tr>
                    <th scope="row">${val.id}</th>
                    <td>${val.name}</td>
                    <td>${val.country}</td>
                    <td>${val.wd}</td>
                    <td>${val.number}</td>
                    <td>${val.lsd}</td>
                    <td>${val.price}</td>
                    <td class="text-success">${val.profit}</td>
                    <td class="text-success rating">${val.rating}</td>
                    <td>
                        <button><img src="img/actions-icon/mail-envelope-open.svg" alt=""></button>
                        <button><img src="img/actions-icon/watsapp.svg" alt=""></button>
                        <button><img src="img/actions-icon/002-sms.svg" alt=""></button>
                        <button><img src="img/actions-icon//more.svg" alt=""></button>
                    </td>
                </tr>`;

            items.push(itemToPush);
        });

        $('.table').find('tbody').append(items.join(""));
    });
}