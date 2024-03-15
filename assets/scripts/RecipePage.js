const locArr = window.location.href.split("?");
if (locArr.length > 1){
    let id = locArr[1].split("=")[1].split("#")[0];
    let r = recipeList.find(x => x.id === id);
    if (r){
        pd("pageTitle").innerText = r.name
        const p = pd("recipePage");
        let ld = append(cre("div","left"),p);
            // ingredients
            let igt = append(cre("h2","rlHeader"),ld); igt.innerText = "Ingredients"; igt.id = "ingredients"
            addArrayChildren(ld,addIngredient,r.ingredients);
            // steps
            let stt = append(cre("h2","rlHeader"),ld); stt.innerText = "Steps"; stt.id = "steps"
            addArrayChildren(ld,addStep,r.steps);

        let rd = append(cre("div","right"),p);
            let ti = append(cre("h2","rlTitle"),rd);
                ti.innerText = r.name;
            let catTime = append(cre("div","rlFlex"),rd);
                let cat = append(cre("button","rlBtn rlCat"),catTime);
                    cat.innerText = r.cat;
                if (r.time){
                let time = append(cre("button","rlBtn rlTime"),catTime);
                    time.innerText = getTime(r.time);
                }
            let edDelDiv = append(cre("div","rlFlex"),rd);
                let ed = append(cre("a","iconA"),edDelDiv);
                    append(ic("edit"),ed); ed.href = "edit.html?id=" + r.id;
                let del = append(cre("a","iconA"),edDelDiv);
                    append(ic("delete"),del); del.onclick = function() {
                        let c = coverDiv("recipePage");
                            let cd = append(confirmDiv(),c);
                            cd.setTitle("Delete Recipe")
                            cd.setDesc("Are you sure you want to delete the recipe: \n\"" + r.name + "\"?")
                            cd.setFunction(function(){
                                recipeList = recipeList.filter(x => x.id !== r.id);
                                saveLS()
                                window.location.href = "index.html";
                            })
                    }
                    let linkI = append(cre("a","rlLink no-link-style"),rd); linkI.href = "#ingredients"; linkI.innerText = "Ingredients";
            let linkS = append(cre("a","rlLink no-link-style"),rd); linkS.href = "#steps"; linkS.innerText = "Steps";
            let exit = append(cre("a","iconA exitBtn"),rd);
                append(ic("logout"),exit); exit.href = "index.html";
}}


function addStep(tx){
    let div = cre("div","stepDiv");
        div.innerText = tx;
    return div
}

function getTime(time){
    if (!time){return ""}
    let str = "";
    let hrs = time / 60;
    let mins = time % 60;
    if (hrs >= 1){str += hrs +"H "}
    if (mins > 0){str += mins + "M "}
    return str
}