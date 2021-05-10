var cols;
function color(e){
     alert(this.value);
}
draw.addEventListener(`pointermove`,beginpaint);
function beginpaint(e){
    const div=document.createElement('div');
    div.style.width="10px";
    div.style.height="10px";
    div.style.id='divs';
    div.style.position="absolute";
    div.style.left=e.clientX + "px";
    div.style.top=e.clientY + "px";
    div.style.borderRadius="50px";
    draw.append(div);
}
