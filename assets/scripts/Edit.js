const locArr = window.location.href.split("?");
if (locArr.length > 1){
    let id = locArr[1].split("=")[1].split("#")[0];
        if (id === "NEW"){
            createRecipeEditor("new");
        }
        else {
            let r = recipeList.find(x => x.id === id);
            if (r){createRecipeEditor(r.id);} else { createRecipeEditor("new");}
        }
} else { createRecipeEditor("new");}
function createRecipeEditor(id){
    let div = append(cre("div"),document.body); div.id = "recipeEditor";
    if (id === "new"){
        div.recipe = {
            name: "New Recipe", cat: "Red Meat",
            ingredients: [], steps: [], id: randomID(recipeList)
        }
    } else {div.recipe = recipeList.find(x => x.id === id);}
    div.change = function(data,key){
        key ? div.recipe[key] = data : div.recipe = data;
    }
    div.refresh = function(){
        let r = div.recipe;
        ni.value = r.name;
        cat.value = r.cat;
        bll.refresh()
        sll.refresh()
    }


        let t = append(cre("div","top"),div);
            let ni = append(cre("input"),t); ni.placeholder = "Name";
                ni.oninput = function(){div.change(ni.value,"name");}
            let catCats = append(ic("takeout_dining"),t);
                catCats.classList.add("catCats");
                catCats.onclick = function(){
                    let gc = getCategories();
                    let cv = coverDiv("recipeEditor")
                    let cp = append(cre("div","categoryList"),cv);
                    for (var i=0; i<gc[0].length; i++){
                        let cd = append(cre("button","categoryBtn"),cp);
                        cd.innerText = gc[0][i];
                        cd.onclick = function(){cat.value = cd.innerText; cat.onkeyup(); cv.remove();}
                    }
                    let cph = prepend(cre("h2"),cp);
                        cph.innerText = "Choose Existing Category"
                }
            let cat = append(cre("input","reSelect"),t);
                cat.onkeyup = function(){ div.change(cat.value,"cat"); }
            let sv = append(cre("button"),t); sv.innerText = "Save";
                sv.onclick = function(){
                    let r = div.recipe;
                    let rInd = recipeList.findIndex(x => x.id === r.id);
                    if (rInd !== -1){   recipeList[rInd] = r;
                    } else {   recipeList.push(r);   }
                    saveLS()
                    toast("Saved recipe!")
                }
            let ex = append(cre("a"),t);
                ex.href = "index.html";
                if (recipeList.find(x => x.id === div.recipe.id)){
                    ex.href = "recipe.html?id=" + div.recipe.id
                }
                let exbtn = append(cre("button"),ex); exbtn.innerText = "Exit"

        let b = append(cre("div","bot"),div);
            let bl = append(cre("div","reIngredientsDiv reMainListDiv"),b);
                let blt = append(cre("h2","reTitle"),bl); blt.innerText = "Ingredients"
                let bll = append(cre("div","list"),bl);
                    div.bll = bll;
                    bll.refresh = function(){
                        removeChildren(bll);
                        addArrayChildren(bll,createReIngredientDiv,div.recipe.ingredients)
                    }
                    bll.getList = function(){
                        return Array.from(bll.childNodes).map(x => x.ingredientDiv.getData())
                    }
                let bplusList = append(cre("div","bplusList"),bl);
                    let bplusIng = append(cre("button"),bplusList);
                        function bplusFunction(type){
                            let obj = {}
                            obj.id = generateID();
                            while (pd(obj.id) !== null) {obj.id = generateID();}
                            if (type === "ing"){ obj.ingredient = "New Ingredient" }
                            else if (type === "grp") {obj.type = "New Group"; obj.ingredients = []; }
                            else {return false}
                            append(createReIngredientDiv(obj),bll)
                            div.change(bll.getList(),"ingredients")
                            bll.scrollTo(0,10000)
                        }
                        bplusIng.innerText = "+ Add Ingredient"; bplusIng.onclick = function(){bplusFunction("ing")}
                    let bplusGrp = append(cre("button"),bplusList);
                        bplusGrp.innerText = "+ Add Group"; bplusGrp.onclick = function(){bplusFunction("grp")}
                    div.addIngredient = bplusIng.onclick;
                    div.addGrp = bplusGrp.onclick;
            let sl = append(cre("div","reStepsDiv reMainListDiv"),b);
                let slt = append(cre("h2","reTitle"),sl); slt.innerText = "Steps"
                let sll = append(cre("div","list"),sl);
                    div.sll = sll;
                    sll.refresh = function(){
                        removeChildren(sll);
                        addArrayChildren(sll,createStepDiv,div.recipe.steps)
                    }
                    sll.getList = function(){
                        return Array.from(sll.childNodes).map(x => x.stepDiv.value)
                    }
                let splusList = append(cre("div","bplusList"),sl);
                    let splus = append(cre("button"),splusList);
                        splus.innerText = "+ Add"; splus.onclick = function(){
                            append(createStepDiv("New step"),sll);
                            div.change(sll.getList(),"steps");
                            sll.scrollTo(0,100000)
                        }
                    div.addStep = splus.onclick;
// update
div.refresh()
if (id === "new"){
    div.addIngredient()
    div.addStep();
}
}

function createStepDiv(text){
    let st = cre("textarea","reStep");
    st.innerText = text;
    let sp_id = generateID();
    while (pd(sp_id) !== null){sp_id = generateID();}
    st.id = sp_id;
    let main = cre("div","reStepDiv");


    let del = append(cre("button","reStepDel"),main); del.onclick = function(){
        main.remove();
        let list = re.sll.getList();
        re.change(list,"steps");
    }; append(ic("remove"),del);


    append(st,main);

    let updown = append(cre("div","reIngredientUpDown"),main);
    let u = append(cre("button","reIngredientUpDownBtn"),updown);
    append(ic("expand_less"),u); u.onclick = function(){
        let ind = Array.from(re.sll.childNodes).findIndex(x => x === main);
        if (ind !== 0){
            main.previousElementSibling.before(main)
            re.change(re.sll.getList(),"steps");
        }
    }
    let d = append(cre("button","reIngredientUpDownBtn"),updown);
    append(ic("expand_more"),d); d.onclick = function(){
        let ind = Array.from(re.sll.childNodes).findIndex(x => x === main);
        if (ind !== re.sll.childNodes.length-1){
            main.nextElementSibling.after(main)
            re.change(re.sll.getList(),"steps");
        }
    }

    main.delDiv = del; main.stepDiv = st; main.updownDiv = updown;
    return main;
}
function createReIngredientDiv(obj){
let ig_elem = addIngredient(obj,"edit");
    return ig_elem;
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
                let plus = append(cre("button"),cmt); plus.onclick = function(){
                    cml.addComm("New comment");
                    div.changeItem()
                }; plus.classList.add("ppieComsBtn")
                    append(ic("add_circle"),plus);
            let cml = append(cre("div","list"),comms);
                cml.addComm = function(tx){
                    let cd = append(cre("div","ppieComDiv"),cml);
                        let del = append(cre("button"),cd); del.onclick = function(){
                            cd.remove();
                            div.changeItem()
                        }; append(ic("remove"),del);
                        let txd = append(cre("input"),cd);
                            txd.placeholder = "Comment Here";
                            txd.onkeyup = div.changeItem;
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
            else {delete obj.amount;}
        if (sz.value.length > 0){obj.size = sz.value;}
            else {delete obj.size;}
        if (ing.value.length > 0){obj.ingredient = ing.value;}
            else {delete obj.ingredient;}
        obj.comment = Array.from(cml.childNodes).map(x => x.childNodes[1].value);
        return obj
    }
    div.changeItem = function(){
        let ld = pd(".reIngredientsDiv")[0].childNodes[1];

        let id = pd("popupCreateIngredient").getData();
        let new_it = div.getItem();
        let it = findReIngredient(id,ld.getList(),ld)
            it.obj = new_it; it.obj.id = id;
            let li = save_item(id,it.obj,ld.getList(),"ingredients");
        re.change(li,"ingredients")
        it.elem.editData(it.obj)
        it.elem.refresh()
    }
    am.onkeyup = div.changeItem;
    sz.onkeyup = div.changeItem;
    ing.onkeyup = div.changeItem;

    div.refresh()
    return div
}


let re = pd("recipeEditor");
// pd(".reIngredientEditBtn")[4].click()