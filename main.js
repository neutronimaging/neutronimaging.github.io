function loadPageBasic(pageFile) {
let requestURL = pageFile; 

let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.onload = function() {
  const pageContents = request.response;
  if (pageContents.header != 0)
    document.getElementById("header").innerHTML = pageContents.header;
  if (pageContents.mainbody != 0)
    document.getElementById("mainbody").innerHTML = pageContents.mainbody;
};
request.responseType = 'json';
request.send();
};

function loadPageWithFeatures(pageFile) {
  let requestURL = pageFile; 

  let request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.onload = function() {
    const pageContents = request.response;
    if (pageContents.header != 0)
      document.getElementById("header").innerHTML = pageContents.header;
    if (pageContents.mainbody != 0) {
      var bodyText = pageContents.mainbody;

      if (Array.isArray(pageContents.features) && pageContents.features.length) {
        bodyText += "<div class=\"row row-eq-height\">";
          for (i in pageContents.features) {
              if (!pageContents.features[i].page || pageContents.features[i].page.length === 0) {
                bodyText += "<div class=\"col-lg-3 col-sm-6 boxy\">";
                bodyText += "<div align=\"center\"><img src=\"" + pageContents.features[i].image + "\" style=\"width:150px\"></div>";
                bodyText += pageContents.features[i].description;
                bodyText += "</div>";
              } 
              else {
                bodyText += "<div class=\"col-lg-3 col-sm-6 boxy\"><a href=\"javascript:loadPageWithFeatures('https://neutronimaging.github.io/" + pageContents.features[i].page  + "')\">";
                bodyText += "<div align=\"center\"><img src=\"" + pageContents.features[i].image + "\" style=\"width:150px\"></div>";
                bodyText += pageContents.features[i].description;
                bodyText += "</a></div>";
              }
          }

        bodyText += "</div>"  
      }

      document.getElementById("mainbody").innerHTML = bodyText;
    }
      
  };
  request.responseType = 'json';
  request.send();
}