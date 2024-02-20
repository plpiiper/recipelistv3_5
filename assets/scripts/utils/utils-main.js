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



