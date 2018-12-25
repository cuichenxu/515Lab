function show1(obj) {

	var obj_parent = obj.parentElement

	if(obj_parent.className == "one_show") {
		obj_parent.className = "one_hide";
	} else {
		obj_parent.className = "one_show";
	}
}

function showtwo(obj) {

	var obj_parent = obj.parentElement

	if(obj_parent.className == "two_show") {
		obj_parent.className = "two_hide";
	} else {
		obj_parent.className = "two_show";
	}
}

function showthree(obj) {

	var obj_parent = obj.parentElement

	if(obj_parent.className == "three_show") {
		obj_parent.className = "three_hide";
	} else {
		obj_parent.className = "three_show";
	}
}

function showfour(obj) {

	var obj_parent = obj.parentElement

	if(obj_parent.className == "four_show") {
		obj_parent.className = "four_hide";
	} else {
		obj_parent.className = "four_show";
	}
}

function showfive(obj) {

	var obj_parent = obj.parentElement

	if(obj_parent.className == "five_show") {
		obj_parent.className = "five_hide";
	} else {
		obj_parent.className = "five_show";
	}
}
window.onload = function() {
	var oTab = document.getElementById("tab");
	var aH3 = oTab.getElementsByTagName("h3");
	var aDiv = oTab.getElementsByTagName("div");
	for(var i = 0; i < aH3.length; i++) {
		aH3[i].index = i;
		aH3[i].onclick = function() {
			for(var i = 0; i < aH3.length; i++) {
				aH3[i].className = "";
				aDiv[i].style.display = "none";
			}
			this.className = "active";
			aDiv[this.index].style.display = "block";
		}
	}
};
function btn1()
{
	document.getElementById('div6').style.display='block';
}
function btn2()
{
	document.getElementById('div6').style.display='none';
}
function btn3()
{
	document	.getElementById('btn10').style.backgroundColor='#196bb2';
}
function btn4()
{
	document	.getElementById('btn10').style.backgroundColor='#FFFFFF';
}
function btn5()
{
	document	.getElementById('btn11').style.backgroundColor='#196bb2';
}
function btn6()
{
	document	.getElementById('btn11').style.backgroundColor='#FFFFFF';
}
function btn7()
{
	document	.getElementById('btn12').style.backgroundColor='#196bb2';
}
function btn8()
{
	document	.getElementById('btn12').style.backgroundColor='#FFFFFF';
}
function windows1()
{
	document.getElementById('div7').style.display='block';
}
function windows2()
{
	document.getElementById('div7').style.display='none';
}

function windows3()
{
	document	.getElementById('btn13').style.backgroundColor='#196bb2';
}
function windows4()
{
	document	.getElementById('btn13').style.backgroundColor='#FFFFFF';
}
function windows5()
{
	document	.getElementById('btn14').style.backgroundColor='#196bb2';
}
function windows6()
{
	document	.getElementById('btn14').style.backgroundColor='#FFFFFF';
}
function windows7()
{
	document	.getElementById('btn15').style.backgroundColor='#196bb2';
}
function windows8()
{
	document	.getElementById('btn15').style.backgroundColor='#FFFFFF';
}

function showone()
{
	var oDiv_d=document.getElementById('div_d');
	var oDiv_d1=document.getElementById('div_d1')
	var oDiv_h=document.getElementById('div_h')
	var oDiv_h1=document.getElementById('div_h1')
	
	oDiv_d.style.display='none';
	oDiv_d1.style.display='block';
	oDiv_h.style.display='none';
	oDiv_h1.style.display='block';
	
}

function showtwo()
{
	var oDiv_d=document.getElementById('div_d');
	var oDiv_d1=document.getElementById('div_d1');
	var oDiv_h=document.getElementById('div_h')
	var oDiv_h1=document.getElementById('div_h1')
	
	oDiv_d.style.display='block';
	oDiv_d1.style.display='none';
	oDiv_h.style.display='block';
	oDiv_h1.style.display='none';
}
function search()
{
	var oDiv0=document.getElementById('div0')
	
	oDiv0.style.display='block';
	
}
function search1()
{
	var oDiv0=document.getElementById('div0')
	
	oDiv0.style.display='none';
	
}