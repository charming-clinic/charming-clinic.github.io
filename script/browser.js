     function DetectTheThing()
    {
       var uagent = navigator.userAgent.toLowerCase();
       var filename = window.location.href.split('/').pop()
       var newfilename = "m" + filename;
       //alert(filename + " -> " + newfilename);


       if (uagent.search("iphone") > -1 || uagent.search("ipad") > -1 
       || uagent.search("android") > -1 || uagent.search("blackberry") > -1
       || uagent.search("webos") > -1) {
          window.location.href = newfilename;
       }        
    }

    DetectTheThing();