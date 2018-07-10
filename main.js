const main = document.querySelector("#content")

const etsyItems = items.results.map(function(item) {
	return `
	<a class="product" href="${unescape(item.url)}">
				<img src="${item.Images[0].url_fullxfull}" alt="${item.title}"/>
				<span class="title">${item.title}</span>
				<span class="shop_name">${item.Shop.shop_name}</span>
				<span class="num_favorers"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>(${item.num_favorers})</span>
				<span class="price">$${item.price}</span>
				<span class="quantity">Only ${item.quantity} left!</span>
				<span class="similar">See similar items +</span>
			</a>`

}).join('')

main.innerHTML = etsyItems

function reveal() {
	var x = document.getElementsByClassName("hiddenlist");
	if (x.style.display === 'none') {
		x.style.display = 'block';
	} else {
		x.style.display = 'none'}}

const quantity = items.results.filter(function(item) {
	if (item.quantity <=2) {

	}
})
