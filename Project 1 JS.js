function button()
{
    if(document.getElementById("page_style").getAttribute('href') === 'style1.css')
    {
		  document.getElementById("page_style").setAttribute('href', 'style2.css');
      localStorage.setItem("currentStyle", "style2.css");
	  }
    else if(document.getElementById("page_style").getAttribute('href') === 'style2.css')
    {
		  document.getElementById("page_style").setAttribute('href', 'style1.css');
      localStorage.setItem("currentStyle", "style1.css");
	  }
}

window.onload = function stay()
{
  document.getElementById("page_style") = localStorage.getItem("currentStyle");
  /*if(document.getElementById("page_style").getAttribute('href') === 'style1.css')
  {
    localStorage.setItem("currentStyle","style1.css");
  }
  else if(document.getElementById("page_style").getAttribute('href') === 'style2.css')
  {
    localStorage.setItem("currentStyle","style2.css");
  }*/
}


