function scrollFunction(){if(touchDevice){var e=window.pageYOffset;document.getElementById("navbar").style.top=prevScrollpos>e?"0":"-64px",prevScrollpos=e}document.body.scrollTop>0||document.documentElement.scrollTop>0?document.getElementById("navbar").style.borderColor="#ccc":document.getElementById("navbar").style.borderColor="#fff"}var touchDevice="ontouchstart"in document.documentElement,prevScrollpos=window.pageYOffset;window.addEventListener("scroll",scrollFunction),window.navigator.userAgent.match(/(MSIE|Trident)/)&&alert("You're using an outdated web browser and the website will not display as intended. Please upgrade to a modern web browser to view the website properly.");