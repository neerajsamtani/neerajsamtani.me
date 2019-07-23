function setContent(elem, should_show) {
	if(should_show){
		$(elem).fadeIn(500);
	} else {
		$(elem).hide();
	}    
}

function hideAllContent(){
	var content_list = $('.main-content').children();
	for(var i = 0; i < content_list.length; i++){
		setContent(content_list[i], false);
	}
}

function goHome(event){
	deselectNav();
    deselectSubnav();
    hideSubnavs();
	hideAllContent();
	select($('.items').children().first(), true);
	$('.about-me').fadeIn();
}

function showSubnav(subnav){
	if(subnav === "projects"){
		$('.projects-subnav').fadeIn(500);
        $('.work-subnav').hide();
	} else {
        $('.work-subnav').fadeIn(500);
		$('.projects-subnav').hide();
	}
}

function select(elem, selected){
    if(selected){
        elem.classList.add("selected");
    }
    else {
        elem.classList.remove("selected");
    }
}

function deselectNav(){
	var nav_elem_list = $('.items').children();
	for(var i = 0; i < nav_elem_list.length; i++){
		var temp_elem = nav_elem_list[i];
		select(temp_elem, false);
	}
}

function deselectSubnav(){
    var subnav_elem_list = $('.sub-items').children();
    for (var i = 0; i < subnav_elem_list.length; i++){
        var temp_elem = subnav_elem_list[i];
		select(temp_elem, false);
    }
}

function hideSubnavs(){
    $('.work-subnav').hide();
    $('.projects-subnav').hide();
}

function handleNavClick(event){
    deselectNav();
    deselectSubnav();
    hideSubnavs();
    var target = event.target;
    select(target, true);
    var nav_elem_list = $('.items').children();
	hideAllContent();
    if (target.hash === "#about-me"){
        setContent('.about-me', true);
    }
    else if (target.hash === "#writing"){
        setContent('.writing', true);
    }
    else if (target.hash === "#projects-code"){
        setContent('.projects-code', true);
        showSubnav("projects");
        select($('.sub-items').children()[0], true);
    }
    else if (target.hash === "#work-film"){
        setContent('.work-film', true);
        showSubnav("work");
        select($('.sub-items').children()[1], true);
    }
    else if (target.hash === "#work-code"){
        setContent('.work-code', true);
        showSubnav("work");
        select($('.sub-items').children()[2], true);
    }
    else if (target.hash === "#projects-film"){
        setContent('.projects-film', true);
        showSubnav("projects");
        select($('.sub-items').children()[3], true);
    }
    else{
        hideSubnavs();
    }
}

function handleSubnavClick(event){
    deselectSubnav();
    hideAllContent();
    var target = event.target;
    select(target, true);
    setContent(('.'+target.hash.substr(1)), true);
}

$(document).ready(function () {
    hideSubnavs();
    select($('.items').children().first()[0], true);
    setContent('.about-me', true);
    setContent('.projects-code', false);
    setContent('.projects-film', false);
    setContent('.work-code', false);
    setContent('.work-film', false);
    setContent('.writing', false);
})