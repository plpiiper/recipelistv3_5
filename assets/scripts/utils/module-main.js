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

function removeChildren(parent,lim){
    let num = lim ? lim : 0;
    while (parent.childNodes.length > num){parent.childNodes[0].remove()}
    return parent
}
function addArrayChildren(parent,f,list){
    for (let i=0;i<list.length;i++){append(f(list[i]),parent)}
}
