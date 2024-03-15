function findReIngredient(id,array,p){
    let location = get_index("id",id,array,"ingredients");
    let ig = get_item(location,array,"ingredients");
    let obj = {loc: location, obj: ig}
    if (p) {obj.elem = getReIngredient(location,p);}
    return obj
}

function getReIngredient(loc,parent){
    if (loc.length === 1){return parent.childNodes[loc[0]].ingredientDiv;}
    for (var i=0; i<loc.length; i++){
        if (i < loc.length - 1) {
            parent = Array.from(parent.childNodes).filter(x => x.classList.contains("reIngredientDiv"))[loc[i]].ingredientDiv;
        } else {parent = Array.from(parent.childNodes).filter(x => x.classList.contains("reIngredientDiv"))[loc[i]].ingredientDiv}
    }
    return parent
}