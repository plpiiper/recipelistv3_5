function createHomePage(){
if (pd("homePage") === null){
    let div = append(cre("div"),pd("content")); div.id = "homePage";
        div.append(createTopHomePage())
        let lis = append(cre("div","list"),div);
            lis.changeList = function(list){
                removeChildren(lis);
                addArrayChildren(lis,createRecipeDiv,list)
            }
            lis.filterRecipes = function(filters,list){
                if (!filters){filters = div.filters;}
                let f = (list ? list : recipeList).filter(x => filterRecipe(x.id,filters))
                lis.changeList(f)
            }
    div.listDiv = lis;
    div.list = function(){return Array.from(lis.childNodes).map(x => recipeList.find(y=>y.id === x.dataset.id));}
    div.filters = {};
    div.addFilter = function(key,value,type,extra){
        if (key === "del"){
            if (type === "p"){
                if (div.filters[value]){
                    div.filters[value][0] = div.filters[value][0].filter(x => x.toLowerCase() !== extra.toLowerCase())}
                if (div.filters[value][0].length === 0){
                    delete div.filters[value.toLowerCase()];
                }
            } else {  delete div.filters[value.toLowerCase()]; }
            return}
        // DELETE
        if (type === "p"){
            let PUSH = value.toLowerCase ? value.toLowerCase() : value
            if (div.filters[key]){
                div.filters[key][0].push(PUSH);
            } else {div.filters[key] = [[PUSH],type];}
        } else {  div.filters[key] = [value,type];  }
    }
    div.getFilter = function(key){return div.filters[key];}

    lis.changeList(recipeList)
}}

function createTopHomePage(){
    let div = cre("div","top");
        let sd = append(cre("div","searchBar"),div);
            let inp = append(cre("input","searchInput"),sd); inp.onkeyup = function(){
                if (inp.value.length === 0){
                    hp.addFilter("del","name");
                } else {  hp.addFilter("name",inp.value,"i"); }
                hp.listDiv.filterRecipes();
            }; inp.placeholder = "Search";
            inp.onclick = function(){  if (pd("filterPopup") !== null){   pd("filterPopup").remEv();
            }}
        let fdst = append(cre("div","barBody"),div);
            let fd = append(cre("div","filterBar"),fdst);
                let ft = append(cre("h2","filterTitle"),fd); ft.innerText = "Filters";
                let type = append(ic("restaurant_menu"),fd); type.onclick = function(){
                    filterPopup();
                    type.classList.add("selected");
                }; type.id = "filterCat";
                let fav = append(ic("favorite"),fd); fav.onclick = function(){
                    const KEY = "fav"
                    if (hp.getFilter(KEY) !== undefined && hp.getFilter(KEY).includes(true)){
                        hp.addFilter("del",KEY);
                        fav.classList.remove("favorited");
                    } else {
                        hp.addFilter(KEY,true,"e");
                        fav.classList.add("favorited");
                    }
                    hp.listDiv.filterRecipes();
                }
        let std = append(cre("div","filterBar"),fdst);
            let st = append(cre("h2","filterTitle"),std); st.innerText = "Settings";
            let stbtn = append(ic("settings"),std); stbtn.onclick = function(){
                settingsPopup()
            }
        let ad = append(cre("div","addBar"),div);
            let addA = append(cre("a","iconA"),ad); addA.href = "edit.html?id=NEW";
                let at = append(cre("h2","filterTitle"),addA); at.innerText = "Add Recipe";
                append(ic("add"),addA);
return div
}

function createRecipeDiv(obj){
    let div = cre("div","recipeDiv");
    div.dataset.id = obj.id;
    let fav = append(ic("favorite"),div); fav.classList.add("recipeFav");
    fav.onclick = function(){
        if (recipeValue("g",obj.id,'fav') === true){
            recipeValue("o",obj.id,'fav',false)
        } else {recipeValue("o",obj.id,'fav',true)}
        fav.refresh()
        saveLS()
        hp.listDiv.filterRecipes();
    }
    fav.refresh = function(){
        const KEY = "favorited"
        if (recipeValue("g",obj.id,'fav')){fav.classList.add(KEY);} else {fav.classList.remove(KEY)}
    }
    fav.refresh();
    let cat = append(cre("span","recipeCat"),div); cat.innerText = obj.cat;
    let nm = append(cre("a","recipeName"),div); nm.innerText = obj.name;
        nm.href = "recipe.html?id=" + obj.id;
    return div
}

function filterRecipe(id,filters){
    let r = recipeList.find(x => x.id === id);
        for (key in filters){ let f = filters[key];
            if (r[key] === undefined){return false}
            let rk = r[key].toLowerCase ? r[key].toLowerCase() : r[key];
            if (f[1] === "i"){
                if (!rk.includes(f[0])){return false}
            } // include
            if (f[1] === "e"){
                if (rk !== f[0]){return false}
            } // exact
            if (f[1] === "p"){
                if (f[0].findIndex(x => x.toLowerCase() === rk) < 0){return false}
            }
        }
    return true
}


function filterPopup(){
    if (pd("filterPopup") !== null){return}
    let div = append(cre("div","popup"),hp.childNodes[0]); div.id = "filterPopup";
        pd("filterCat").classList.add("selected");

    let sp = event.target; let x = sp.getBoundingClientRect().x;
    div.style.left = (x/window.screenX*100)+"%";

    let lis = append(cre("div","list"),div);
        addArrayChildren(lis,createPopupFilter,getCategories()[0]);
    div.remEv = function(){
        if (pd("filterCat")) {
            if (!hp.getFilter("cat")){  pd("filterCat").classList.remove("selected");  }
        }
        document.body.removeEventListener("click",closeIf);
        if (pd("filterPopup")) {pd("filterPopup").remove();}
    }

    function closeIf(){
    let tg = event.target;
    if (tg.id === "filterCat"){div.remEv();}
        let dr = div.getBoundingClientRect();
        let x = [dr.x,dr.x+dr.width]; let y = [dr.y,dr.y+dr.height];
        let del = false;
        let inX = x[0] < event.clientX && x[1] > event.clientX
        let inY = y[0] < event.clientY && y[1] > event.clientY
        if (!inX || !inY) {if (div) {div.remEv();}}
    }
    setTimeout(() => {
        document.body.addEventListener("click",closeIf)
    }, 1)
}

function createPopupFilter(name){
    let div = cre("button","filterPopupDiv");
        let nm = append(cre("div","fpName"),div); nm.innerText = name;
        let am = append(cre("div","fpNumber"),div); am.innerText = getCategories()[1][name];

    div.onclick = function(){
        const KEY = 'cat'
        if (hp.getFilter(KEY) && hp.getFilter(KEY)[0].includes(name.toLowerCase())){
            hp.addFilter("del",KEY,"p",name);
        } else {hp.addFilter(KEY,name,"p");}
        if (!hp.getFilter("cat")){  pd("filterCat").classList.remove("selected");  }
        div.refresh()
        hp.listDiv.filterRecipes()
    }
    div.refresh = function(){
        const KEY = "cat"; const CLASS = 'selected'
        if (hp.getFilter(KEY) && hp.getFilter(KEY)[0].includes(name.toLowerCase())) {
            div.classList.add(CLASS);
        } else {div.classList.remove(CLASS)}
    }
    div.refresh();
    return div
}




function settingsPopup(){
let c = coverDiv("content");
let div = append(cre("div"),c); div.id = "settingsDiv";
    let ti = append(cre("h2","settingsTitle"),div);
        ti.innerText = "Settings";
    let slDiv = append(cre("div","SaveLoadDiv"),div);
        let sDiv = append(cre("div","flex aCentered"),slDiv);
            sDiv.style = "gap: 1rem;"
        let sTx = append(cre("span","settingsHeader"),sDiv);
        sTx.innerText = "Save";
        let sInpDiv = append(cre("button","settingsButton"),sDiv)
            let sInpIcon = append(ic("upload"),sInpDiv);
            let sInpInput = append(cre("input","settingsInput"),sInpDiv);
                sInpInput.value = "Download Files"
                sInpInput.type = "button"; sInpInput.onclick = function(){
                    div.download("RecipesV3.json",JSON.stringify(recipeList))
                }; sInpIcon.onclick = sInpInput.onclick;
        let lDiv = append(cre("div","flex aCentered"),slDiv);
            lDiv.style = "gap: 1rem;"
        let lTx = append(cre("span","settingsHeader"),lDiv);
        lTx.innerText = "Load";
        let lInpDiv = append(cre("button","settingsButton"),lDiv)
            let lInpIcon = append(ic("download"),lInpDiv);
            let lInpInput = append(cre("input","settingsInput"),lInpDiv);
                lInpInput.type = "file"; lInpInput.oninput = function(){
                    let f = lInpInput.files[0];
                    let r = new FileReader();
                    r.onload = function() {
                        let text = r.result;
                        try {
                            let rl = JSON.parse(text);
                            recipeList = rl;
                            pd("homePage").listDiv.changeList(recipeList);
                            saveLS()
                        } catch(err){
                            console.log("error")
                        }
                    };
                    r.readAsText(f);
                }; lInpIcon.onclick = lInpInput.click;

    div.download = function(n, text) {
        let a = cre('a',"mainDownloadBtn");
        a.href = "data:text/json;charset=utf-8," + encodeURIComponent(text);
        a.download = n;
        append(a,div); a.click(); a.remove();
    }
}





createHomePage()
let hp = pd("homePage");