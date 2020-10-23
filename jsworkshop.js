function save()
   {
       var key1=document.getElementById('bid').value;
       var key2=document.getElementById('bname').value;
       var key3=document.getElementById('bauthor').value;
       localStorage.setItem(key1,key2,key3);
       var table1= document.getElementsByTagName('table')[0];
       var newrow=table1.insertRow(table1.rows.length);
       var cell1=newrow.insertCell(0);
       var cell2=newrow.insertCell(1);
       var cell3=newrow.insertCell(2);
       var cell4=newrow.insertCell(3);
       cell1.innerHTML=key1;
       cell2.innerHTML=key2;
       cell3.innerHTML=key3;
      

}

function remove()
{
   localStorage.clear();
   var deleteall=table1.rows.length;
   for(var i=deleteall-1;i>0;i--)
   {
       table1.deleteRow(i);
   }

}

function hid()
{
 var h=document.getElementById('div1');
 var h1=document.getElementById('show');
 h1.hidden=true;
h.hidden=false;
}