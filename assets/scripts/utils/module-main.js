function coverDiv(parent){
    let p = parent; if (typeof parent == "string") {p = document.getElementById(p)}
    let cov = append(cre("div","coverDiv"),p)
        cov.onclick = function(event){
        if (event.target === cov) {cov.remove()} }
        cov.oncontextmenu = function(){event.preventDefault()}
    if (pd(".coverDiv").length > 1){cov.style.backgroundColor = "transparent";}
    return cov
}

function ic(name,ops){
    let c = document.createElement("span"); c.classList.add("material-symbols-outlined"); c.classList.add("icon"); c.innerText = name;
    if (ops !== undefined){
        // [["dataset","data","Text"],["style",["bg","yel"]],["checked","true"]]
        for (let i=0; i<ops.length; i++){ let o = ops[i];
            if (o[0] === "dataset"){ c["dataset"][o[1]] = o[2]; }
            if (o[0] !== "style" && o[0] !== "dataset"){ c[o[0]] = o[1] }
            if (o[0] === "style") { for (let x=1; x<o.length; x++){ let st = o[x];
                c["style"][st[0]] = st[1] }}
        }}
    return c
}

function cre(type,className,style){
    let obj = {type: type};
    if (className || style){
        obj.tags = {}
        if (className) {obj.tags.className = className;}
        if (style){obj.tags.style = style;}
    }
    return createElement(obj);
}

function createElement(obj){
    let elem;
// IF already made
    if (obj.nodeName) { return obj; }
    if (typeof obj === "function"){
        return obj()
    }
// Create Elem: --> input-text, div, button, p, etc
    if (typeof obj.type === "function"){
        elem = obj.type();
    } else if (obj.type.includes("-")){
        elem = cre(obj.type.split("-")[0]);
        elem.type = obj.type.split("-")[1]
    } else {elem = document.createElement(obj.type);}

// DATASETS if exist
    if (obj.dataset){
        for (key in obj.dataset){elem.dataset[key] = obj.dataset[key]}
    }
// Tags
    if (obj.tags){ for (key in obj.tags){
        elem[key] = obj.tags[key];
    }}
// STYLES
    if (obj.styles){ for (key in obj.styles){
        elem[key] = obj.styles[key];
    }}
// IF METHODS/functions
    if (obj.methods){
        for (let i=0;i<obj.methods.length; i++){
            let om = obj.methods[i];
            // TYPE1 --> eventlistener
            if (om.type){elem.addEventListener(om.type,om.func)}
            // TYPE2 --> tagElem
            if (om.name){elem[om.name] = om.func;}
        }}
// Children
    if (obj.children){
        for (let i=0; i<obj.children.length; i++){
            if (obj.children[i].nodeName){
                elem.appendChild(obj.children[i])
            } else if (typeof obj.children[i] === "function"){
                elem.appendChild(createElement(obj.children[i]()));
            }else {// if an element
                elem.appendChild(createElement(obj.children[i]))
            } // else, an obj to be created
        }}

// Methods for all elements
    if (elem.nodeName === "DIV"){
        elem.cl = function(){
            return Array.from(elem.childNodes);
        }
        elem.getData = function(name){
            return JSON.parse(elem.dataset[name]);
        }
        elem.saveData = function(obj,name){
            elem.dataset[name] = JSON.stringify(obj);
        }
    }

    return elem
}

function removeChildren(parent,st){
    let start = st ? st : 0;
    while (parent.childNodes.length > start){parent.childNodes[start].remove()}
    return parent
}
function addArrayChildren(parent,f,list){
    for (let i=0;i<list.length;i++){append(f(list[i]),parent)}
}



function popupcontainer(parent,id){
    if (pd(id) !== null){return}
    // do not create a new one if exists

    let c = coverDiv(parent);
    let div = append(cre("div", "largePopupDiv right"),c);
    div.id = id;
    div.exit = function(){c.remove();}
    div.getData = function(name){
        if (name){
            return typeof div.dataset[name] === "string" ? div.dataset[name] : JSON.parse(div.dataset[name])
        }
        return typeof div.dataset.data === "string" ? div.dataset.data : JSON.parse(div.dataset.data)
    };
    div.saveData = function(obj){
        if (typeof obj === "string"){div.dataset.data = obj;}
        else {div.dataset.data = JSON.stringify(obj);}
    };


    // TITLE
    let title = append(cre("h2","lpHeader"),div);
    div.rename = function(name){title.innerText = name;}
    // BODY
    let body = append(cre("div","lpBody"),div);
    // TEXT
    let ext = append(cre("span","lpExit"),div);
    ext.innerText = "EXIT";
    ext.onclick = div.exit;

    div.body = body;
    return div
}

function popupcontent(type,div){
    if (type === "ci"){
        // Modifier Options
        div.classList.add("right")
        div.rename("Edit Ingredient")
        let id = div.getData();
        let ig = JSON.parse(pd(id).dataset.data);

        if (ig.type){
            div.rename("Edit Group")
            let grd = append(cre("div","ppGroupDiv"),div.body)
                let grtx = append(cre("span","ppGroupName"),grd);
                    grtx.innerText = "Group Name"
                let gr = append(cre("input","ppGroupInput"),grd);
                    gr.value = ig.type
                gr.onkeydown = refreshItem;
                gr.onblur = refreshItem;

                function refreshItem(){
                console.log("?")
                    let ld = pd(".reIngredientsDiv")[0].childNodes[1];
                    let it = findReIngredient(id,ld.getList(),ld)
                    it.obj.type = gr.value;
                    let li = save_item(id,it.obj,ld.getList(),"ingredients");
                    pd("recipeEditor").change(li,"ingredients")
                    it.elem.editData(it.obj)
                    it.elem.refresh()
                }
            let del = prepend(cre("button","ppiDelete"),div.body);
            del.innerText = "Delete Item";
            del.onclick = function(){
                let ld = pd(".reIngredientsDiv")[0].childNodes[1];
                let it = findReIngredient(id,ld.getList(),ld)
                let lis = delete_item(id,ld.getList(),"ingredients");
                re.change(lis,"ingredients")
                it.elem.parentNode.remove()
                div.exit()
            }

        } else {
            console.log(ig)
            append(popupInputElem(ig),div.body)
            let del = prepend(cre("button","ppiDelete"),div.body);
                del.innerText = "Delete Item";
                del.onclick = function(){
                    let ld = pd(".reIngredientsDiv")[0].childNodes[1];
                    let it = findReIngredient(id,ld.getList(),ld)
                    let lis = delete_item(id,ld.getList(),"ingredients");
                    re.change(lis,"ingredients")
                    it.elem.parentNode.remove()
                    div.exit()
                }
        }

    }
    else if (type === "bpSelectModule"){
        console.log("text")
    }
    else {console.log("huh?"); return 1}

    return div
}


function addIngredient(obj,type){
    let div = cre("div","ingredientDiv");
    div.dataset.data = JSON.stringify(obj);
    div.getData = function(){return JSON.parse(div.dataset.data);}
    div.saveData = function(data){div.dataset.data = JSON.stringify(data);}
    div.editData = function(data,key){
        let dt = div.getData();
        key ? dt[key] = data : dt = data
        div.saveData(dt);
    }
    if (obj.type){
        div.classList.add("list");
        div.getIngredients = function(){
            return Array.from(div.childNodes).filter(x => x.classList.contains("ingredientDiv")).map(x => x.getData())
        }
        div.getItem = function(){return div.getData();}

        let ti = append(cre("div","ingredientDivHeader"),div);
        ti.innerText = obj.type.toUpperCase();

        div.refresh = function(newObj){
            if (newObj){div.saveData(newObj)}
            let o = div.getData();
            if (o.type){
                ti.innerText = o.type.toUpperCase();
                removeChildren(div,1)
                for (var i=0; i<o.ingredients.length; i++){
                    let igd = append(addIngredient(o.ingredients[i],"edit"),div);
                    o.ingredients[i].id = igd.ingredientDiv.id;
                }; div.saveData(o)
                if (type !== "edit"){
                    for (var i=1; i<div.childNodes.length; i++) {
                        let tx = prepend(cre("span", "idNumber"), div.childNodes[i])
                        tx.innerText = "(#" + i + ")";
                    }}
                let add = append(cre("button"),div); add.innerText = "Add Ingredient"; add.onclick = function(){
                    let dt = div.getData();
                    dt.ingredients.push({ingredient: "New Ingredient"});
                    div.saveData(dt)
                    let sv = save_item(dt.id,dt,re.bll.getList(),"ingredients");
                    re.change(sv,"ingredients");
                    div.refresh()
                }
            }}
    } else {
        div.setListener = function(type,f){div.addEventListener(type,function(){f(div)});}
        let spam = append(cre("span","idAmount"),div);
        let spsz = append(cre("span","idSize"),div);
        let spig = append(cre("span","idIngredient"),div);
        let spcm = append(cre("div","idCommentList"),div);

        div.refresh = function(newObj){
            if (newObj){div.saveData(newObj)}
            let o = div.getData();
            if(o.amount){spam.innerText = o.amount;}
            else {spam.innerText = null;}
            if(o.size){spsz.innerText = o.size}
            else {spsz.innerText = null;}
            if(o.ingredient){spig.innerText = o.ingredient}
            else {spig.innerText = null;}
            if(o.comment){
                removeChildren(spcm);
                for (var i=0; i<o.comment.length; i++){
                    let sc = append(cre("span","idComment"),spcm);
                    sc.innerText = o.comment[i];
                }
            }
        }
    }
    if (type === "edit"){
        if (!obj.id){
            let sp_id = generateID();
            while (pd(sp_id) !== null){sp_id = generateID();}
            div.id = sp_id; div.editData(sp_id,"id"); }
        else {div.id = obj.id;}

        let st = cre("div","reIngredientDiv");
        let edit = append(cre("button","reIngredientEditBtn"),st); append(ic("edit"),edit);

        append(div,st)

        let updown = append(cre("div","reIngredientUpDown"),st);
        let u = append(cre("button","reIngredientUpDownBtn"),updown);
            append(ic("expand_less"),u); u.onclick = function(){
            let lis = re.bll.getList()
            let r = findReIngredient(div.id,lis,re.bll)
            let indL = get_index("id",div.id,lis,"ingredients");
                let ind = indL.pop();
                if (ind !== 0){
                    re.change(insertItemAfter(ind-1,indL,r.obj,lis,"ingredients"),"ingredients");
                    r.elem.parentNode.previousElementSibling.before(r.elem.parentNode)
                }
            }
        let d = append(cre("button","reIngredientUpDownBtn"),updown);
            append(ic("expand_more"),d); d.onclick = function(){
            let lis = re.bll.getList();
            let r = findReIngredient(div.id,lis,re.bll)
            let indL = get_index("id",div.id,lis,"ingredients");
            let ind = indL.pop();
            re.change(insertItemAfter(ind+1,indL,r.obj,lis,"ingredients"),"ingredients");
            if (r.elem.parentNode.nextElementSibling !== null && r.elem.parentNode.nextElementSibling.nodeName !== "BUTTON"){
            r.elem.parentNode.nextElementSibling.after(r.elem.parentNode); }
            }
        st.editDiv = edit;
        st.ingredientDiv = div;
        st.updownDiv = updown;



        edit.addEventListener("click",function(elem){
            console.log("???")
            let ppd = popupcontainer("recipeEditor","popupCreateIngredient");
            if (ppd){
                ppd.saveData(div.id);
                popupcontent("ci",ppd)
                ppd.elem = elem;
            }
        })
        div.refresh()
        return st
    }
    div.refresh()
    return div
}