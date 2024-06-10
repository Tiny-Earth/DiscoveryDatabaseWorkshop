window.addEventListener("load", function(){
    for (const a of document.body.getElementsByTagName("a")){
        // Open external links in new tabs
        if (a.href.length > 0 && new URL(a.href).origin !== location.origin){
            a.setAttribute("target", "_blank");
        }
    }

    // Make the edit link show the plain view so it is quicker to add line-level comments
    document.querySelector('a[title^="Edit"]').href += "?plain=1";

    // Reword "search docs"
    document.getElementById("documenter-search-query").innerText = "Search";
});