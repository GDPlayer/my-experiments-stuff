javascript:function disappearthings(){for (let i=0;i<document.getElementById("somerandominputforthisrandomjsthing").value;i++){var c=document.body.getElementsByTagName("*");var d=Math.floor(Math.random()*c.length);c[d].innerHTML=""}};function mainthingorwhatever(){a=document.createElement("button");a.setAttribute("class","btn");a.setAttribute("id","buttonidorwhateveridksomething");a.textContent="make a random thing disappear";b=document.createElement("input");b.setAttribute("class","input");b.setAttribute("id","somerandominputforthisrandomjsthing");a.setAttribute("onclick","disappearthings()");document.body.prepend("Amount of random things to disappear",b,a)};mainthingorwhatever()
