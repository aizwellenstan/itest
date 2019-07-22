var i = 0;
	var j = 0;
	var s = 0;
	var row = 3;
	for(i=1; i <= row; i++)		//首先列印上半部分
	{
		for(j=1; j <= row-i; j++)
		{
            console.log(" ");
            document.write(" ");
		}
		for(s=1; s <= (2*i-1); s++)
		{
            console.log("*");
            document.write("*");
		}
        console.log("\n");
        document.write("<br>");
	}

	for(i=row-1; i > 0; i--)		//列印下半部分  
	{
		for(j=row-i; j >0; j--) 
		{
            console.log(" ");
            document.write(" ");
		}
		for(s=(2*i-1); s > 0; s--)
		{
            console.log("*");
            document.write("*");
		}
        console.log("\n");
        document.write("<br>");
	}