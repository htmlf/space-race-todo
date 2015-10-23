window.addEventListener('load', function() {
	var imp = function(e, tout, tmax) {
		if(tout>tmax) return;
		var xhr = new XMLHttpRequest();
		xhr.open('GET', e.getAttribute('href'), true);
		xhr.send();
		xhr.onreadystatechange = function() {
			if(xhr.readyState!==4) return;
			if(xhr.status!==200) setTimeout(function() { imp(e, tout*2, tmax); },  tout);
			else e.outerHTML = xhr.responseText;
		};
	};
	var es = document.querySelectorAll('link[rel="import"]');
	for(var i=0, I=es.length; i<I; i++)
		imp(es[i], 1000, 1024000);
});
