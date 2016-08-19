





function check(form)

{
obj = JSON.parse(mydata);
a = 0;
for(i=0;i<obj.length;i++){


if(form.userid.value == obj[i].username)
{
a=1;
if(form.pswrd.value == obj[i].password)
{

window.open("/home/testexam/Angular_Project/Real_Project/index.html");
break;

}

else
{
alert("Incorrect Password");
break;

}


}




}
if(a==0){

alert("Incorrect Credentials");
}
}

