window.addEventListener("load", function(){
    for (const a of document.body.getElementsByTagName("a")){
        // Open external links in new tabs
        if (a.href.length > 0 && new URL(a.href).origin !== location.origin){
            a.setAttribute("target", "_blank");
        }
    }

    // Display alt text as figure captions
    let fig_no = 1;
    for (const img of document.querySelectorAll("img[alt]")){
        const figure = document.createElement("figure");
        const figcaption = document.createElement("figcaption");
        const p = document.createElement("p");
        const strong = document.createElement("strong");
        const br = document.createElement("br");
        const span = document.createElement("span");
        img.parentNode.insertBefore(figure, img);
        img.parentNode.removeChild(img);
        figure.appendChild(figcaption);
        figure.appendChild(img);
        figcaption.appendChild(p);
        p.appendChild(strong);
        p.appendChild(br);
        p.appendChild(span);
        strong.innerText = `Figure ${fig_no++}.`;
        span.innerText = img.getAttribute("alt");
    }

    // Make the edit link show the plain view so it is quicker to add line-level comments
    document.querySelector('a[title^="Edit"]').href += "?plain=1";

    // Reword "search docs"
    document.getElementById("documenter-search-query").innerText = "Search";
});