(function () {

  'use strict';

  const libraries = ['jquery', 'lodash', 'moment'];
  const modal = document.querySelector('.modal');
  const close = document.querySelector('.modal-close');
  const open = document.querySelector('.modal-open');

  // Modal Open/Close
  open.addEventListener('click', event => {
    event.preventDefault();
    modal.classList.add('is-active');
  });
  close.addEventListener('click', event => {
    event.preventDefault();
    modal.classList.remove('is-active');
  });
  

  // Checks the Querystring for libraries installed
  function checkQuery (lib) {
  	let url = window.location.href;
  	if(url.indexOf('?' + lib) != -1)
  		return true;
  	else if(url.indexOf('&' + lib) != -1)
  		return true;
  	return false
  };

  // Add's Script to Page
  function addScript (lib) {
  	let script_tag = document.createElement('script');
  	script_tag.setAttribute('src', 'assets/vendor/' + lib + '.js');
  	document.body.appendChild(script_tag);
    console.log(`${lib} was successfully installed.`);
  };

  // Check for Libraries
  libraries.forEach( lib => {
    if (checkQuery(lib)) { addScript(lib); }
  });

}())