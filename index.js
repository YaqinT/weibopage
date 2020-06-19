let name = document.getElementsByClassName("name")[0],
    avatars = document.getElementsByTagName("ul")[0].getElementsByTagName("li"),
    postBtn = document.getElementsByTagName("button")[0],
    tContent = document.getElementsByTagName("textarea")[0],
    feeds = document.getElementsByClassName("feeds")[0],
    words = document.getElementsByClassName("pWrapper")[0].getElementsByTagName("span")[0],
    warning = document.getElementsByClassName("pWrapper")[0].getElementsByTagName("p")[0],
    feedDelete = document.getElementsByClassName("delete"),
    feed = document.getElementsByClassName("feed"),
    avatarSrc = [avatars[0].style.backgroundImage];

    Array.prototype.forEach.call(avatars, (item) => {
      item.onclick = () =>{
        for(var i=0; i<avatars.length;i++) avatars[i].className = "";
        item.className = "active";
         avatarSrc[0] = item.style.backgroundImage;
      }
    })

    tContent.onkeyup = () => {
      let remain = 140 - tContent.value.length;
      if(tContent.value.length <= 140) {
        words.innerText = remain;
        words.style.color = "#b2b2b2";
        warning.innerText = "words left";
      }
      else if(tContent.value.length > 140) {
        let exceed = tContent.value.length - 140;
        words.innerText = exceed
        words.style.color = "#ea7938";
        words.style.fontSize = "2rem";
        words.style.fontWeight = "bold";
        warning.innerText = "words exceeded";
      }

      if(tContent.value.length > 140) postBtn.onclick = () => alert("Your post is overly long！");
      else {
        postBtn.onclick = () => {
           postAvatar = avatarSrc[0];
           postName = name.value;
           postContent = tContent.value;

           if(postName == "") alert("Please input your name first!");
           if(postContent == "") alert("Please write your post first!")

           if(postName !== "" && postContent !== ""){
             let month = new Date().getMonth()+1;
             if(month<10) month = "0"+month;

             let day = new Date().getDate();
             if(day<10) day = "0"+day;

             let hour = new Date().getHours();
             if(hour<10) hour = "0"+hour;

             let minute = new Date().getMinutes();
             if(minute<10) minute = "0"+minute;

             postTime = new Date().getFullYear() + "-" + month + "-" + day + " " + hour + ":" + minute;

             let currentFeed = document.createElement("div");
             currentFeed.className = "feed";
             feeds.insertBefore(currentFeed,document.getElementsByClassName("feed")[0]);

             let profile = document.createElement("div");
             profile.className = "profile";
             profile.style.backgroundImage = postAvatar;
             currentFeed.appendChild(profile);

             let wContent = document.createElement("div");
             wContent.className = "content";
             currentFeed.appendChild(wContent);

             let pContent = document.createElement("div");
             pContent.className = "post_content";
             wContent.appendChild(pContent);

             let pName = document.createElement("a");
             pName.href = "#";
             pName.innerText = postName + ":";
             pContent.appendChild(pName);

             let pPost = document.createElement("span");
             pPost.innerText = postContent;
             pContent.appendChild(pPost);

             let operations = document.createElement("div");
             operations.className = "operations";
             wContent.appendChild(operations);

             let pTime = document.createElement("span");
             pTime.innerText = postTime;
             operations.appendChild(pTime);

             let pDelete = document.createElement("span");
             pDelete.className = "delete";
             operations.appendChild(pDelete);
           }
         }
    }
  }


   postBtn.onclick = () => {
        postAvatar = avatarSrc[0];
        postName = name.value;
        postContent = tContent.value;

        if(postName == "") alert("Please input your name first!");
        if(postContent == "") alert("Please write your post first!")

        if(postName !== "" && postContent !== ""){
          let month = new Date().getMonth()+1;
          if(month<10) month = "0"+month;

          let day = new Date().getDate();
          if(day<10) day = "0"+day;

          let hour = new Date().getHours();
          if(hour<10) hour = "0"+hour;

          let minute = new Date().getMinutes();
          if(minute<10) minute = "0"+minute;

          postTime = new Date().getFullYear() + "-" + month + "-" + day + " " + hour + ":" + minute;

          let currentFeed = document.createElement("div");
          currentFeed.className = "feed";
          feeds.insertBefore(currentFeed,document.getElementsByClassName("feed")[0]);

          let profile = document.createElement("div");
          profile.className = "profile";
          profile.style.backgroundImage = postAvatar;
          currentFeed.appendChild(profile);

          let wContent = document.createElement("div");
          wContent.className = "content";
          currentFeed.appendChild(wContent);

          let pContent = document.createElement("div");
          pContent.className = "post_content";
          wContent.appendChild(pContent);

          let pName = document.createElement("a");
          pName.href = "#";
          pName.innerText = postName + ":";
          pContent.appendChild(pName);

          let pPost = document.createElement("span");
          pPost.innerText = postContent;
          pContent.appendChild(pPost);

          let operations = document.createElement("div");
          operations.className = "operations";
          wContent.appendChild(operations);

          let pTime = document.createElement("span");
          pTime.innerText = postTime;
          operations.appendChild(pTime);

          let pDelete = document.createElement("span");
          pDelete.className = "delete";
          operations.appendChild(pDelete);
        }
   }

    for(let i=0; i<document.getElementsByClassName("feed").length;i++){
       document.getElementsByClassName("feed")[i].onmouseenter = () => {
         if(feedDelete[i]){
           feedDelete[i].style.display = "block";
           document.getElementsByClassName("feed")[i].style.backgroundColor = "#eaeaea";
           feedDelete[i].onclick = () => {
             // feeds.removeChild(document.getElementsByClassName("feed")[i]);
             let feed = document.getElementsByClassName("feed")
             feed.splice(i,1);

           }
                  }

       }
       document.getElementsByClassName("feed")[i].onmouseleave = () => {
         feedDelete[i].style.display = "none";
         document.getElementsByClassName("feed")[i].style.backgroundColor = "white";
       }
    }
