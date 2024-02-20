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
                        console.log("confirm del of ",r)
                    }
                    let linkI = append(cre("a","rlLink no-link-style"),rd); linkI.href = "#ingredients"; linkI.innerText = "Ingredients";
            let linkS = append(cre("a","rlLink no-link-style"),rd); linkS.href = "#steps"; linkS.innerText = "Steps";
            let exit = append(cre("a","iconA exitBtn"),rd);
                append(ic("logout"),exit); exit.href = "index.html";
}}


function addIngredient(obj){
    let div = cre("div","ingredientDiv");
        if (obj.type){
            div.classList.add("list");
            let ti = append(cre("div","ingredientDivHeader"),div);
                ti.innerText = obj.type.toUpperCase();
            addArrayChildren(div,addIngredient,obj.ingredients)
            if (obj.type === "alternatives"){
                for (var i=1; i<div.childNodes.length; i++){
                    let tx = prepend(cre("span","idNumber"),div.childNodes[i])
                        tx.innerText = "(#" + i + ")";
                }
            }
        } else {
            if (obj.amount){
                let sp = append(cre("span","idAmount"),div); sp.innerText = obj.amount
            }
            if (obj.size){
                let sp = append(cre("span","idSize"),div); sp.innerText = obj.size
            }
            if (obj.ingredient){
                let sp = append(cre("span","idIngredient"),div); sp.innerText = obj.ingredient
            }
            if (obj.comment){
                let sp = append(cre("div","idCommentList"),div);
                    for (var i=0; i<obj.comment.length; i++){
                        let sc = append(cre("span","idComment"),sp);
                            sc.innerText = obj.comment[i];
                    }
            }
        }
    return div
}
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