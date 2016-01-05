    function DetectTheThing()
    {
       var uagent = navigator.userAgent.toLowerCase();
       if (uagent.search("iphone") > -1 || uagent.search("ipad") > -1 
       || uagent.search("android") > -1 || uagent.search("blackberry") > -1
       || uagent.search("webos") > -1)
          window.location.href ="mindex.htm";
    }

    DetectTheThing();