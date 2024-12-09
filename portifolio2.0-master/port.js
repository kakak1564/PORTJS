
window.onscroll = function() {
    const button = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
      button.style.display = "block"; 
    } else {
      button.style.display = "none"; 
    }
  };
  
  
  document.getElementById("backToTop").onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };
  