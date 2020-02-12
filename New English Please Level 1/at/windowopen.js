function launchMathTool(strFilePath, strResourcePath)
{
	var nScreenHeight = screen.height;
	var nScreenWidth = screen.width;
	var strBrowserName=navigator.appName;
	if(strBrowserName == "Netscape"){
		strFilePath = "file:///" + strFilePath;
	}
	if(strResourcePath != undefined){
		strFilePath += "?path=" + strResourcePath;
	}
	window.open(strFilePath, "", "titlebar=1, status=1, toolbar=0, menubar=0, resizable=yes, height="+nScreenHeight + ", width="+ nScreenWidth)
}

