function printDiv(divName){
	var contents=document.getElementById(divName).innerHTML;
	/*w=window.open();
	w.document.write(contents);
	w.print()
	w.close()*/
	var originalContents=document.body.innerHTML;
	document.body.innerHTML=contents;
	window.print();
	document.body.innerHTML=originalContents;
}