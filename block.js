var black_list = new Array();
function recieveBlackList(msgEvent) {
   if (msgEvent.name === "sendBlackList") {
       black_list = msgEvent.message;
       console.log("recieve blocklist");
       console.log(msgEvent.message);
       var threads;
       threads = document.getElementsByClassName('t5');
       for(var i = 0; i < threads.length; i++) {
           var name = threads[i].getElementsByClassName('g-has-hovercard2')[0].firstChild.nodeValue;
           if (black_list.indexOf(name) != -1) {
               threads[i].setAttribute("style","display:none;");
           }
       }
   }
}
safari.self.addEventListener("message", recieveBlackList, false);

window.addEventListener('load',
                          function(event){
                              safari.self.tab.dispatchMessage("requireBlackList");
                              event.stopPropagation();
                              event.stopImmediatePropagation();
                          },
                          false);
