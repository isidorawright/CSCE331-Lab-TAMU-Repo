function button()
{
    if(document.getElementById("page_style").getAttribute('href') === 'style1.css')
    {
		  document.getElementById("page_style").setAttribute('href', 'style2.css');
      let style = localStorage.setItem("currentStyle", "style2.css");
	  }
    else if(document.getElementById("page_style").getAttribute('href') === 'style2.css')
    {
		  document.getElementById("page_style").setAttribute('href', 'style1.css');
      let style = localStorage.setItem("currentStyle", "style1.css");
	  }
}

function loadStyle()
{
  style = localStorage.getItem("currentStyle");
  document.getElementById("page_style").setAttribute('href', style);
}

document.addEventListener('DOMContentLoaded', loadStyle)


