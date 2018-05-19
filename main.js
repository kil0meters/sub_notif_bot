function submit() {
    var data = {};
    var elements = document.getElementsByClassName("subreddit-input");
    var subreddits = [];
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].value) {
            subreddits.push(elements[i].value.trim())
        }
    }
    var elements = document.getElementsByClassName("filter-input");
    var filters = [];
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].value) {
            filters.push(elements[i].value.trim())
        }
    }
    data["subreddits"] = subreddits;
    data["filters"] = filters;
    data = JSON.stringify(data);

    url = "https://reddit.com/message/compose/?to=sub_notif_bot&subject=update%20settings&message=" + encodeURIComponent(data);

    window.location = url
}