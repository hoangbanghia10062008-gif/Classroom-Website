var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("collapsible-active");
		var content = this.nextElementSibling;
		content.classList.toggle("content-active");
		if (content.style.maxHeight){
			content.style.maxHeight = null;
		}
		else {
			content.style.maxHeight = content.scrollHeight + "px";
		} 
	});
}