function skillsMember(){
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberHeight = member.offsetHeight;
    var skillsHeight = skills.offsetHeight;
    if(memberHeight > skillsHeight){
        skills.style.height = memberHeight + "px";
    }else{
        member.style.height = skillsHeight + "px";
    }
}
