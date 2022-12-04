var myarray=[{'sn':'1','lan':'C','rat':'★★★★☆'},
{'sn':'2','lan':'C++','rat':'★★★★☆'},
{'sn':'3','lan':'Python','rat':'★★★★★'},
{'sn':'4','lan':'Html','rat':'★★☆☆☆'}]
var table=document.getElementById('tb')
var button=document.getElementById('btn')
for(var i=0;i<myarray.length;i++){
    var row=`<tr>
    <td> ${myarray[i].sn}</td>
    <td> ${myarray[i].lan}</td>
    <td> ${myarray[i].rat}</td>
    </tr>`
    table.innerHTML+=row;
}
function show_hide(){
    if(document.getElementById('table1').style.display!="none"){
        button.innerHTML="Show Table";
        document.getElementById('table1').style.display="none";
    }
    else{
        button.innerHTML="Hide Table";
        document.getElementById('table1').style.display="inline-block";
    }
}