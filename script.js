let count=0;
let countEl=document.getElementById("count-ppl");
function increment(){
    count++;
    countEl.textContent=count;
}
let preEntry=document.getElementById("Entries");
function save(){
    preEntry.textContent+='\n'+count+"-";
    console.log(count);
    count=0
    countEl.textContent=count;
}
function reset(){
    countEl.textContent=0;
    preEntry.textContent="Previous Entries:\n";
    count=0;

}