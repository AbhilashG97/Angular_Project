
var text = '{"users":[' +
'{"username":"test","password":"111" },' +
'{"username":"gopal","password":"123" },' +
'{"username":"admin","password":"222" }]}';

obj = JSON.parse(text);



function check(form)
{

for(i=0;i<obj.users.length;i++){


if(form.userid.value == obj.users[i].username)
{

if(form.pswrd.value == obj.users[i].password)
{

window.open("Electronics.htm");
break;

}

else
{
alert("Incorrect Password");
break;

}


}




}


/*alert("Incorrect Credentials");*/
}

