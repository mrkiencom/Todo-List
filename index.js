window.onload =function() {
    contentList = []
    var idArray =1000000;
    key = 'Codex';
    index = 'STT';
    //add to localStorage 
    if (localStorage.getItem(key)){
        var List = JSON.parse(localStorage.getItem(key));
    }else{
        var List = [];
    }
    if (localStorage.getItem(key)){
        var ix = JSON.parse(localStorage.getItem(index));
    }else{
        var ix = 0;
    }
    
    //=====================================================================================

    stt = 0;
    var btnAdd = document.getElementById("btn-add");
    btnAdd.onclick = add;
    
    //add
    function add(){      
        var content = document.getElementById("txt-content").value;
        if (content !== ''){
            List.push('<li id="'+ix+'" data-user="uncheck" ><p></p>' + content + '<i data-id="'+ ix+'" class="fas fa-times"></i></li>');
            
            //render();
            localStorage.setItem(key,JSON.stringify(List));
            localStorage.setItem(index,JSON.stringify(ix));
            ix++;
            document.getElementById("txt-content").value ='';
            document.getElementById("todo-list").innerHTML = List.join(' ');
        }
    }
    //upView 

    
    //delete 
    var del = document.getElementById("todo-list");
    del.addEventListener('click',function(events){
        var get = events.target;
        var getId = get.dataset.id; 
        if (getId == undefined){}
        else{ 

            idArray = getId ;
            List.splice(getId,1);
            document.getElementById("todo-list").innerHTML = List.join(' ');
        }
        

        localStorage.setItem(index,JSON.stringify(ix));
    })

    //chose  
    var choose = document.getElementById("todo-list");
    choose.addEventListener('click',function(click){
        var checked = click.target.innerText;
        i = parseInt(click.target.id); 
        if (i > idArray) {
            i--;
            idArray++;
        } 
        if (click.target.dataset.user == 'check'){
            List[i] = '<li id="'+i+'" data-user="uncheck" > <p></p>' + checked + '<i data-id="'+ i+'" class="fas fa-times"></i></li>';
        }  
        else {
            List[i] = '<strike><li style="background-color:rgb(128,128,128);" id="'+i+'" data-user="check" > <i class="fas fa-check"></i>'  
                            + checked + '<i data-id="'+ i+'"class="fas fa-times"></i></li></strike>';
            
        }
        localStorage.setItem('keyid',JSON.stringify(idArray));


        console.log(parseInt(idArray));
        console.log(i);
        //document.getElementById("txt-content").value = checked;
        localStorage.setItem(key,JSON.stringify(List));
        document.getElementById("todo-list").innerHTML = List.join(' ');
        
    })
    
    document.getElementById("todo-list").innerHTML = List.join(' ');

}