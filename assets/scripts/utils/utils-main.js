function pd(parent){
    let p = parent;
    if (typeof parent === "string"){
        if (parent[0] === "."){
            p = Array.from(document.getElementsByClassName(parent.substring(1)))
        } else {
            p = document.getElementById(parent);
        }
    }
    return p
}


function selectElem(id,slct){
    if (id && pd(id) !== null){
        pd(id).classList.remove("selectedElem");
        if (id){ pd(id).id = "";}
    }
    let elem = slct ? slct : event.currentTarget;
    if (id) {elem.id = id;}
    elem.classList.add("selectedElem")

   // console.log(slct ? slct : event.currentTarget)
}

function append(elem,parent){
    pd(parent).appendChild(elem);
    return elem;
}
function prepend(elem,parent){
    pd(parent).prepend(elem);
    return elem;
}

function delete_item(id,list,parentKey){
    let ind = get_index("id",id,list,parentKey);
    if (ind.length === 1){
        return list.filter(x => x.id !== id);
    } else {
        let p = get_item(ind.slice(0,-1),list,parentKey)
        p[parentKey] = p[parentKey].filter(x => x.id !== id);
        return list
    }
}
function addItem(pID,obj,list,parentKey){ //parent id, note id
    let m = list;
    if (typeof pID !== "string"){m.push(obj); return m;}
    let addLoc = get_index("id",pID,m,parentKey);
    let addObj = get_item(addLoc,m,parentKey);
    addObj.items.push(obj);
    return m
}
function insertItemAfter(index,pLoc,obj,list,parentKey){
    let m = list;
    let p = (pLoc.length === 0) ? m : get_item(pLoc,m,parentKey)
    if (pLoc.length === 0){
        p = p.filter(x => x.id !== obj.id);
        let p1 = p.slice(0,index);
        let p2 = p.slice(index);
        p1.push(obj);
        p = p1.concat(p2);
        m = save_item("MAIN",p,m,parentKey)
    } else {
        p[parentKey] = p[parentKey].filter(x => x.id !== obj.id);
        let p1 = p[parentKey].slice(0, index);
        let p2 = p[parentKey].slice(index);
        p1.push(obj);
        p[parentKey] = p1.concat(p2);
        m = save_item(p.id,p,m,parentKey)
    }
    return m
}
function addItemSibling(index,pLoc,obj,list,parentKey){
    if (pLoc.length === 0){
        list = list.slice(0,index).concat([obj]).concat(list.slice(index))
    } else {
        let pl = get_item(pLoc,list,parentKey);
            pl[parentKey] = pl[parentKey].slice(0,index).concat([obj]).concat(pl[parentKey].slice(index))
    }
    return list
}

function get_index(key,text,array,parentKey){
    let list; let found = false;
    get_index_formula(key,text,array,[])
    function get_index_formula(key,text,array,index){
        let initial = array.findIndex(x => x[key] === text);
        if (initial !== -1){
            let new_ind = index; new_ind.push(initial);
            list = new_ind; found = true; return;
        } //searches first in array if it exists

        for (let i=0; i<array.length; i++){
            if (array[i][parentKey] && array[i][parentKey].length > 0 && !found) {
                let child_nodes = array[i][parentKey]
                let new_ind = index.concat([i]);
                get_index_formula(key,text,child_nodes,new_ind)
            }}
    }
    return list
}

function get_item(location,list,parentKey){
    let li = list;  for (let i=0; i<location.length;i++){
        //console.log(location,li[location[i]])
        if (li[location[i]] !== undefined && parentKey in li[location[i]]) {
            if (i === location.length -1) {li = li[location[i]]}
            else {li = li[location[i]][parentKey]}
        }   else {li = li[location[i]]}     } return li; }
function save_item(id,newObj,list,parentKey){
    if (id === "MAIN"){
        list = newObj;
        return list
    }
    let folder = get_index("id",id,list,parentKey);
    let item = folder.pop();
    if (folder.length === 0){
        list[item] = newObj
    } else {// main
        let t = get_item(folder, list, parentKey)
        t.items[item] = newObj;
    }
    return list
}

function getItemFromList(id,list){
    return get_item(get_index("id",id,list,"items"),list,"items")
}

function recipeValue(type,id,key,value){
    let r = recipeList.findIndex(x => x.id === id); if (r >= 0){
        if (type === "o"){  recipeList[r][key] = value; }
        else if (type === "g") {return recipeList[r][key] }
        else {console.log("err")}
    }
}

function getCategories(){
    let arr = {}; recipeList.map(x => arr[x.cat] ? arr[x.cat] += 1 : arr[x.cat] = 1);
    return [Object.keys(arr),arr]
}

function saveLS(){
    localStorage.recipeListv3 = JSON.stringify({
        recipeList: recipeList
    });
}
function loadLS(){
    if (localStorage.recipeListv3){
        let j = JSON.parse(localStorage.recipeListv3);
        for (key in j){window[key] = j[key]}
    }
}

function getItemIDList(list,key){
    return list.map(x => x[key]);
}
function randomID(list){
    let ri = generateID(); if (!list){return ri};
    if (typeof list === "function"){list = list()}
    while (getItemIDList(list,"items").includes(ri)){ri = generateID()}
    return ri
}
function generateID(){
    let id = ""; let lis = ["num","letters"]
    for (var i=0; i<8; i++){
        let vallist = nvRandomIDChars[lis[Math.floor(Math.random() * 2)]]
        id += vallist[Math.floor(Math.random() * vallist.length)]
    }
    return id
}


function addIngredient(obj){
    let div = cre("div","ingredientDiv");
        div.dataset.data = JSON.stringify(obj);
        div.getData = function(){return JSON.parse(div.dataset.data);}
        div.saveData = function(data){div.dataset.data = JSON.stringify(data);}
        div.editData = function(data,key){
            let dt = div.getData();
            if (key){dt[key] = data;} else {dt = data;}
            div.saveData(dt);
        }
    if (obj.type){
        div.setListener = function(type,f){
            div.addEventListener("click",function(){
                let t = event.target;
                while (t && t.nodeName && (t.className.includes("idComment") || t.nodeName.toLowerCase() !== "div")){t = t.parentNode;}
                if (t.classList.contains("ingredientDiv") && !t.classList.contains("list")){   f(t);     }
                else { f(div);}
            })
            // div.addEventListener(type,f);
        }
        div.classList.add("list");
        div.getItems = function(){
            return Array.from(div.childNodes).filter(x => x.classList.contains("ingredientDiv")).map(x => x.getData())
        }

        let ti = append(cre("div","ingredientDivHeader"),div);
        ti.innerText = obj.type.toUpperCase();

        div.refresh = function(newObj){
            if (newObj){div.saveData(newObj)}
            let o = div.getData();
            if (o.type){
                ti.innerText = obj.type.toUpperCase();
                removeChildren(div,1)
                addArrayChildren(div,addIngredient,obj.ingredients)
                    for (var i=1; i<div.childNodes.length; i++) {
                        let tx = prepend(cre("span", "idNumber"), div.childNodes[i])
                        tx.innerText = "(#" + i + ")";
                    }
        }}
    } else {
        div.setListener = function(type,f){div.addEventListener(type,function(){f(div)});}
        let spam; let spsz; let spig; let spcm;
        if (obj.amount){
            spam = append(cre("span","idAmount"),div);
        }
        if (obj.size){
            spsz = append(cre("span","idSize"),div);
        }
        if (obj.ingredient){
            spig = append(cre("span","idIngredient"),div);
        }
        if (obj.comment){
            spcm = append(cre("div","idCommentList"),div);
        }

        div.refresh = function(newObj){
            if (newObj){div.saveData(newObj)}
            let o = div.getData();
            if(spam){spam.innerText = o.amount;}
            if(spsz){spsz.innerText = o.size}
            if(spig){spig.innerText = o.ingredient}
            if(spcm){
                removeChildren(spcm);
                for (var i=0; i<o.comment.length; i++){
                    let sc = append(cre("span","idComment"),spcm);
                    sc.innerText = o.comment[i];
                }
            }
        }
    }
    div.refresh()
    return div
}