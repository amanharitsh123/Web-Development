function makeCookie()
{  //Alert box in case of no input Provided
	if(document.myform.name_input.value=="")
    {	alert("Enter Some value");
		return;
    }

    //The Main Woking Code of the makeCookie Function
    cookieval=escape(document.myform.name_input.value)+";";
    /*
     Cookie values may not include semicolons, commas, or whitespace.
     For this reason, you may want to use the JavaScript escape() function 
     to encode the value before storing it in the cookie. 
     If you do this, you will also have to use the corresponding unescape()
     function when you read the cookie value.
    */

    document.cookie="name="+cookieval;
    alert("Setting Cookie with Name = "+unescape(cookieval));
}

function getCookie()
{   var name="name=";

    var decodedCookie=unescape(document.cookie);
    var array=decodedCookie.split(";");
    var ans="";
    for(var i=0;i<array.length;i++)
    {  var c=array[i];
    	//alert(c);
    	while(c.charAt(0) == ' ')
         { 
         	c=c.substring(1);
         }
        
         if(c.indexOf(name)==0)
         {
            ans=c.substring(name.length,c.length);

         }
       
    }
    if(ans=="")
    	alert("no user found");
    else
    	{alert("User Found with Name ="+ans);
          delete_cookie(ans);
         // delete_cookie('roundcube_sessauth');
        }

}

function delete_cookie(ans)
{
  document.cookie ="name="+ans +";expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}