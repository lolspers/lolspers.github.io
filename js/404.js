if (window.location.pathname.startsWith("/commands/")) {
    let url = window.location.origin + "/commands?command=" + window.location.pathname.split("/commands/")[1];

    window.location.replace(url);
}