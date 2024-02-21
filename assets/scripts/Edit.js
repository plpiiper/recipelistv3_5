const locArr = window.location.href.split("?");
if (locArr.length > 1){
    let id = locArr[1].split("=")[1].split("#")[0];
        if (id === "NEW"){
            createRecipeEditor("new");
        }
    let r = recipeList.find(x => x.id === id);
    if (r){createRecipeEditor(r.id);} else { createRecipeEditor("new");}
} else { createRecipeEditor("new");}
function createRecipeEditor(id){
    let div = append(cre("div"),document.body); div.id = "recipeEditor";
    if (id === "new"){
        div.recipe = {
            name: "New Recipe", cat: "Red Meat",
            ingredients: [
                {ingredient: "Ingredient"}
            ], steps: [
                "New Step"
            ], id: randomID(recipeList)
        }
    } else {div.recipe = recipeList.find(x => x.id === id);}
    div.change = function(data,key){
        if (key) {  div.recipe[key] = data;
        } else {div.recipe = data;}
    }
    div.refresh = function(){
        let r = div.recipe;
        ni.value = r.name;
        cat.choose(r.cat);
        bll.refresh()
        sll.refresh()
    }


        let t = append(cre("div","top"),div);
            let ni = append(cre("input"),t); ni.placeholder = "Name";
                ni.oninput = function(){div.change(ni.value,"name");}
            let cat = append(cre("select","reSelect"),t); let cs = getCategories()[0];
                cat.choose = function(name){
                    cat.value = name;
                    div.change(name,"cat")
                }
                cat.oninput = function(){cat.choose(cat.value);}
                for (var i=0; i<cs.length; i++){
                    let c = append(cre("option"),cat);
                        c.innerText = cs[i]; c.value = cs[i];
                }
            let sv = append(cre("button"),t); sv.innerText = "Save";
            let ex = append(cre("a"),t); ex.href = "index.html";
                let exbtn = append(cre("button"),ex); exbtn.innerText = "Exit"

        let b = append(cre("div","bot"),div);
            let bl = append(cre("div","reIngredientsDiv"),b);
                let blt = append(cre("h2","reTitle"),bl); blt.innerText = "Ingredients"
                let bll = append(cre("div","list"),bl);
                    bll.refresh = function(){
                        removeChildren(bll);
                        addArrayChildren(bll,createIngredientDiv,div.recipe.ingredients)
                    }
                let bplus = append(cre("button"),bl);
                    bplus.innerText = "+ Add"; bplus.onclick = function(){
                        console.log("Add")
                    }
            let sl = append(cre("div","reStepsDiv"),b);
                let slt = append(cre("h2","reTitle"),sl); slt.innerText = "Steps"
                let sll = append(cre("div","list"),sl);
                    sll.refresh = function(){
                        removeChildren(sll);
                        addArrayChildren(sll,createStepDiv,div.recipe.steps)
                    }
                let splus = append(cre("button"),sl);
                    splus.innerText = "+ Add"; splus.onclick = function(){
                        console.log("Add")
                    }

// update
div.refresh()
}

function createStepDiv(text){
    let st = cre("textarea","reStep");
    st.innerText = text;
    return st;
}
function createIngredientDiv(obj){
    let st = cre("div","reIngredientDiv");
        let ig = append(addIngredient(obj),st);
            ig.setListener("click",function(elem){
                let ppd = popupcontainer("recipeEditor","popupCreateIngredient");
                if (ppd){
                    ppd.saveData(elem.getData());
                    popupcontent("ci",ppd)
                    ppd.elem = elem;
                }
            })
        ig.ingredient = obj;
    return st;
}



function popupInputElem(obj){
    let div = cre("div","popupInputElem");
        let dt = append(cre("div","top"),div);
        let am = append(cre("input","ppieAmount"),dt);
            am.placeholder = "Amt";
        let sz = append(cre("input","ppieSize"),dt);
            sz.placeholder = "Size";
        let ing = append(cre("input","ppieIng"),dt);
            ing.placeholder = "Ingredient Name";
        let comms = append(cre("div","ppieComs"),div);
            let cmt = append(cre("div","top"),comms)
                let c2 = append(cre("div","span"),cmt); c2.innerText = "Comments";
                let plus = append(ic("add_circle"),cmt); plus.onclick = function(){
                    console.log("plus")
                }
            let cml = append(cre("div","list"),comms);
                cml.addComm = function(tx){
                    let cd = append(cre("div","ppieComDiv"),cml);
                        let del = append(cre("button"),cd); del.onclick = function(){
                            console.log("del")
                        }; append(ic("remove"),del);
                        let txd = append(cre("input"),cd);
                            txd.placeholder = "Comment Here";
                            txd.onkeyup = function(){
                                let p = pd("popupCreateIngredient");
                                p.elem.refresh(div.getItem())
                                let pe = p.elem.parentNode; if (pe !== null){
                                if (pe.classList.contains("list")){
                                    let np = pe.getData();
                                    np.ingredients = pe.getItems();
                                    pe.refresh(np)
                                    console.log(pe)
                                } else {
                                    // main ingr
                                }
                            }}
                            if (tx) {txd.value = tx;}

                }
    
    div.refresh = function(){
        if (obj.amount){am.value = obj.amount;}
        if (obj.size){sz.value = obj.size;}
        if (obj.ingredient){ing.value = obj.ingredient;}
        if (obj.comment){for (var i=0;i<obj.comment.length;i++){cml.addComm(obj.comment[i]);}}
    }
    div.getItem = function(){
        let obj = {}
        if (am.value.length > 0){obj.amount = am.value;}
        if (sz.value.length > 0){obj.size = sz.value;}
        if (ing.value.length > 0){obj.ingredient = ing.value;}
        let cmtL = Array.from(cml.childNodes).map(x => x.childNodes[1].value)
        if (cmtL.length > 0){obj.comment = cmtL.filter(x => x.length > 0);}
        return obj
    }
    div.refresh()
    return div
}


let re = pd("recipeEditor");
// pd(".reIngredientDiv")[3].click()