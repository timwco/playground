(function () {

  'use strict';

  var script_tag, checkQuery, addScript, listTag, elem;


  checkQuery = function (q) {
  	var url = window.location.href;
  	if(url.indexOf('?' + q) != -1)
  		return true;
  	else if(url.indexOf('&' + q) != -1)
  		return true;
  	return false
  };


  addScript = function (which) {
  	script_tag = document.createElement('script');
  	script_tag.setAttribute('src', 'assets/vendor/' + which + '.js');
  	document.body.appendChild(script_tag);

  	listTag = document.getElementById('list');
  	elem = document.createElement('li');
  	elem.textContent = which;
  	listTag.appendChild(elem);
  };


  // jQuery
  if (checkQuery('j')) { addScript('jquery') }

  // Underscore
  if (checkQuery('u')) { addScript('underscore') }

  // Angular
  if (checkQuery('a')) { addScript('angular') }

  // Cookie
  if (checkQuery('c')) { addScript('cookies') }

  // Backbone
  if (checkQuery('b')) { addScript('backbone') }

}())