function adduser(){
    user_name=document.getElementById("input1").value;
    localStorage.setItem("your_name",user_name);
    window.location="kwitter_room.html";
}