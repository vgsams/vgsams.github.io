

function changePicture(img) {
  if ($(img).attr("src") == "pic1.jpg"){
    $(img).attr("src", "pic2.jpg");
	$('#description').text('Бенгальская кошка');}
  else {
    $(img).attr("src", "pic1.jpg");
	$('#description').text('Британская золотая шиншилла');}
}

