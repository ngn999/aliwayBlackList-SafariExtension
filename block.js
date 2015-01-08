function messageHandler(event) {
    if (event.name === "set_blackList") {
        // debug
        // console.log("set blocklist");
        var black_list = [];
        event.message.split(/\s+/).forEach(function (element, index, array) {
            black_list.push('(' + element + ')')
        });
        console.log(black_list);
        var threads;
        threads = document.getElementsByClassName('t5');
        console.log(black_list);
        for(var i = 0; i < threads.length; i++){
            if (!threads[i]) continue;
            var fl_black = threads[i].getElementsByClassName('fl black');
            if (fl_black.length < 1) continue;
            if (fl_black[0].childNodes.length < 2) continue;
            var nick_name =  fl_black[0].childNodes[1].nodeValue;
            // console.log(nick_name);
            if (black_list.indexOf(nick_name) != -1) {
                threads[i].setAttribute("style","display:none;");
            }
        }
        safari.self.removeEventListener("message", messageHandler);
    }
}
safari.self.addEventListener("message", messageHandler, false);

$(document).ready(function() {
    safari.self.tab.dispatchMessage("get_blackList");
    console.log("in ready");
});
