
var request=new XMLHttpRequest()
request.open("GET","https://api.github.com/users/Jagadishgollapalli/repos",true)

request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
    
    var Repo=document.getElementById("first-ol")
    var btn=document.getElementById("btn-name")
    btn.addEventListener("click",function(){
        data.forEach((e)=>{
            var Reponame=document.createElement("li");
            Reponame.innerText=e.name;
            Repo.append(Reponame);
    
        });
    })

    var ID=document.getElementById("second-ol")
    var btn=document.getElementById("btn-Id")
    btn.addEventListener("click",function(){
        data.forEach((e)=>{
            var UserId=document.createElement("li");
            UserId.innerText=e.id;
            ID.append(UserId);
            
        });
    })

    var Fullname=document.getElementById("third-ol")
    var btn=document.getElementById("btn-Fullname")
    btn.addEventListener("click",function(){
        data.forEach((e)=>{
            var Username=document.createElement("li");
            Username.innerText=e.full_name;
            Fullname.append(Username);
            
        });
    })

    var Url=document.getElementById("fourth-ol")
    var btn=document.getElementById("btn-Htmlurl")
    btn.addEventListener("click",function(){
        data.forEach((e)=>{
            var Userurl=document.createElement("li");
            Userurl.innerText=e.html_url;
            Url.append(Userurl);
            
        });
    })

}
request.send();
