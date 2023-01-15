const info = document.getElementsByTagName('main')[0];

document.getElementsById('left-column').addEventListener('click', () => {
	info.getElementById('ISF').style.display='block';
   	info.getElementById('IMB').style.display='none';
})
/*
document.getElementsById('MB').addEventListener('click', () => {
	info.getElementById('ISF').style.display='none';
   	info.getElementById('IMB').style.display='block';
})*/