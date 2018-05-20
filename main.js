function submit() {
    var data = {};
    var els = document.getElementsByClassName("form-input");
    var subreddits = [];
    for (var i = 0; i < els.length; i++) {
        subreddit = document.getElementById("subreddit-input" + i).value;
        filters = document.getElementById("filter-input" + i).value;
        if(subreddit) {
            subreddits.push([subreddit, filters])
        }
    }
    data["subreddits"] = subreddits;
    data = JSON.stringify(data);

    url = "https://reddit.com/message/compose/?to=sub_notif_bot&subject=update%20settings&message=" + encodeURIComponent(data);

    window.location = url
}