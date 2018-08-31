// init global vars
var $container = $('#resultsPane');
var ftext = '';
var $oldels = '';
var lastx;
//var lastel;
var hastyped = false;
var forcesearch = false;
function Menu_HoverStatic() { };
function Menu_Unhover() { };

var refreshnow = false;

var isloadedpaper9 = false;
var isloadedpaper10 = false;

$(window).scroll(function () {
    if ($(window).outerWidth() > 1140) {
        var scrollPosition = window.scrollY;
        var bodyHeight = $('body').height();
        var windowHeight = $(window).height();
        console.log("bodyHeight : " + bodyHeight + " window : " + windowHeight + " scrollPosition: " + scrollPosition);
        if (scrollPosition < 80) {
            ah1 = 230 - scrollPosition;
            ah2 = 146 - scrollPosition;
            $('.outerheader').css({ 'height': ah1 + 'px' }); // shrinks total header
            $('.menu').css({ 'margin-top': ah2 + 'px' });   // adjusts menu position
        }
        else {
            $('.outerheader').css({ 'height': 150 + 'px' });
            $('.menu').css({ 'margin-top': 66 + 'px' });
        }
    }
});

function playSC(thetrack)
{
    $('#scframe').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + thetrack + '&amp;auto_play=true&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false');
}

function voteBSC(voteid, vname)
{
    $('#voteid').val(voteid);
    $('#whovote').text(vname);
    
    $('.votethanks').fadeIn();
}

function pushURL(path) {

    if (typeof (window.history.pushState) == 'function') {
        window.history.pushState(null, path, path);
    } else {
        window.location.replace = path;
    }
}

var nimg;
var pimg;
var pel;
var nel;

function calcGrey()
{
    var oh = $('.outerheader').outerHeight();
    var fh = $('.footer').outerHeight();
    //var sh = $('.thanksMessage.searchPrimary').outerHeight();
    var mh = $('body').outerHeight();
    $('.thanksMessage.searchPrimary').css({ 'top': oh + 'px' });
    $('.thanksMessage.searchPrimary.whitebg').height(mh);
    //$('body').height(sh);
    if ($('body').outerWidth() <= 767) {
        fw = $('.footer .menu ul').outerWidth();
        $('.footer .menu ul').css({ 'left': '50%', 'margin-left': '-' + (fw / 2) + 'px' });
    }
}

//$(window).resize(function () { calcGrey(); });

//setInterval(function () { calcGrey(); }, 1000);

function goimage(img, el)
{
	//alert(img);
    $('.galleryBG').fadeIn();
    $('.imgarea').attr('src', img);
    nel = el.next('a');
    pel = el.prev('a');

    if (nel.length != 0) {
        nimg = nel.find('div').css('background-image').replace('url("', '').replace('")', '');
        $('.nextImg').css({ 'visibility': 'visible' });
    }
    else
    {
        console.log('no next found');
        $('.nextImg').css({ 'visibility': 'hidden' });
    }

    if (pel.length != 0) {
        pimg = pel.find('div').css('background-image').replace('url("', '').replace('")', '');
        $('.prevImg').css({'visibility':'visible'});
    }
    else {
        console.log('no prev found');
        $('.prevImg').css({'visibility':'hidden'});
    }
    console.log(pimg);
    console.log(nimg);
    $('#galview').fadeIn();
    $.scrollTo('.imgarea', 400);
}

function nextgall()
{
    goimage(nimg, nel);
}

function prevgall() {
    goimage(pimg, pel);
}

function closegall()
{
    $('#galview').fadeOut();
    $('.galleryBG').fadeOut();
}

function loadmoreimages(thepage) {
    $('#loaderArea').load('/image-gallery/?page=' + thepage + ' .galleryList .inner .thelisting', function () {
        $('#loaderArea #gallview').remove();
        $('#loaderArea #col1').remove();
        $('#loaderArea #col2').remove();
        $('#loaderArea #col3').remove();
        //alert('loaded');
        $('#loaderArea .gallcoll1 a').appendTo($('.galleryList .inner .thelisting .gallcoll1'));
        $('#loaderArea .gallcoll2 a').appendTo($('.galleryList .inner .thelisting .gallcoll2'));
        $('#loaderArea .gallcoll3 a').appendTo($('.galleryList .inner .thelisting .gallcoll3'));
        $('#loaderArea .gallColumn').remove();
        $('.galleryList .inner .thelisting').html($('.galleryList .inner .thelisting').html() + $('#loaderArea').html());
        $('#lm' + thepage).remove();
    });
}


function slideDebug(el) {
    var p = $(el).css('left');

    if (p == '0px') {
        $(el).animate({ left: '-=120' }, 200);
        $('.NcmsButton').addClass('smallone');
        $('.debugger').addClass('smallone');
        $('.NcmsButton, .divider, .cmson').addClass('smallone');

        $('.ui-dialog').animate({ left: '-=120' }, 200);

        $('.footerInner').removeClass('footerInnerRight');
        $('.footerInner').addClass('footerInnerLeft');

        //$('.debugger:after').css('background-image', 'none');

        //$('.subContentWide').animate({ width: '+=120' }, 200);
    }
    else {
        $(el).animate({ left: '+=120' }, 200);
        $('.NcmsButton, .divider, .cmson').removeClass('smallone');
        $('.ui-dialog').animate({ left: '+=120' }, 200);
        $('.debugger').removeClass('smallone');

        $('.footerInner').removeClass('footerInnerLeft');
        $('.footerInner').addClass('footerInnerRight');

        //$('.debugger:after').css('background-image', 'url(/assets/cms/Module-Logo.png)');
        //$('.subContentWide').animate({ width: '-=120' }, 200);
    }

    setTimeout(function () { cpos = 174 + Math.round($('.debugger').css('left').replace('px', '')); }, 300);
}

$.fn.serializeArrayAll = function () {
    var rCRLF = /\r?\n/g;
    return this.map(function () {
        return this.elements ? jQuery.makeArray(this.elements) : this;
    })
    /* this is what is excluding the unchecked checkboxes (and also other disabled options) 
        .filter(function(){
            return this.name && !this.disabled &&
                ( this.checked || rselectTextarea.test( this.nodeName ) ||
                    rinput.test( this.type ) );
        })
     */
        .map(function (i, elem) {
            var val = jQuery(this).val();

            return val == null ?
                null :
                jQuery.isArray(val) ?
                    jQuery.map(val, function (val, i) {
                        return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
                    }) :
            { name: elem.name, value: val.replace(rCRLF, "\r\n") };
        }).get();
}


function validateJS(container, els) {
    var form_data = els.serializeArrayAll();
    var error_free = true;
    for (var input in form_data) {
        if (form_data[input]['name'] != '')
            {
            var element = $( container + " #" + form_data[input]['name']);
            if (element.prop("type") != "button" && element.prop("type") != "submit" && element.prop("type") != undefined)
            {
                //console.log(form_data[input]['name']);
                if (element.prop("required") != "" && element.val() == "") {
                    element.removeClass("valid");
                }
                else {
                    element.addClass("valid");
                }

                if (valid && element.prop("type") == "email") {
                    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                    valid = re.test(element.val());
                    if (valid) { element.addClass("valid") } else { element.removeClass("valid"); };
                }

                if (element.prop("required") != "" && element.prop("type") == "checkbox") {
                    valid = element.prop("checked");
                    if (valid) { element.addClass("valid") } else { element.removeClass("valid"); };
                }

                var valid = element.hasClass("valid");
                console.log('Valid? ' + valid + " - " + form_data[input]['name'] + ' (' + element.prop("type") + ')');
                var error_element = element;
                if (!valid) { error_element.addClass("error_show"); error_free = false; }
                else { error_element.removeClass("error_show").addClass("valid"); }
            }
        }
    }

    console.log('Error Free? ' + error_free);

    return error_free;
}



function goRegInterest() {

    error_free = validateJS('.registerInterest', $('.registerInterest input, .registerInterest .subterms input, .registerInterest select,.registerInterest textarea'));
    //alert(error_free);
    if (!error_free) {
        event.preventDefault();
    }
    else
    {
        var thedata = $('.registerInterest input, .registerInterest .subterms input, .registerInterest select,.registerInterest textarea').serialize() + '&commandname=reg-interest';
        $.ajax({
            type: 'POST', url: '/sendform.ashx', data: thedata, success: function (response) {

                if (response.indexOf("error") !== -1) {
                    alert(response);
                }
                else {
                    //alert(response);
                    window.location = "/?thanks=2"
                }
            }
        });
    }
}




function goContact() {

    error_free = validateJS('.contactForm2', $('.contactForm2 input, .contactForm2 .subterms input, .contactForm2 select, .contactForm2 textarea'));

    //error_free = false;

    if (!error_free) {
        event.preventDefault();
    }
    else {

        var thedata = $('.contactForm2 input,.contactForm2 .subterms input, .contactForm2 select, .contactForm2 textarea').serialize() + '&commandname=contact';
        //alert(thedata);
        $.ajax({
            type: 'POST', url: '/sendform.ashx', data: thedata, success: function (response) {

                if (response.indexOf("error") !== -1) {
                    alert(response);
                }
                else {
                    //alert(response);
                    window.location = "/?thanks=3"
                }
            }
        });
    }
}


function delpage(pid) {
    var cn = "delpage";
    var ca = pid
    if (confirm('Are you sure you want to delete this page? (' + pid + ')')) {
        if (confirm('Are you REALLY sure you want to delete this page?')) {


            var thedata = "CommandName=" + cn + "&CommandArgument=" + ca + "&ctl00$MainContent$pagepropertiesdialog$pageidtosave=" + ca;
            //alert(thedata);
            $.ajax({
                type: 'POST', url: '/savepage.ashx', data: thedata, success: function (response) {

                    if (cn == 'delpage') {
                        alert('Page deleted ok');
                        window.location = response;
                    }
                    //window.location = '<%=request.servervariables("URL") %>'
                }

            });
        }
    }
}

function updateck(id) {
    $('#ckp' + id).val($('#ckeditor' + id).html());
    //alert($('#cke' + id).val());
}

function getps(url)
{
    $.colorbox({ 'href': '/pagespeed.ashx?url=' + url, width: 300, height: 400, iframe:true });
}

$(function () {

    

    $(".cmsDialog2").dialog({
        modal : true,
        width: 730,
        resizable: false, 
        zIndex: 100000,
        autoOpen: false,
        show: {
            effect: "drop",
            duration: 1000
        },
        hide: {
            effect: "fade",
            duration: 1000
        }
        ,open: function (type, data) { $(this).parent().appendTo('form'); }
    });

    //$("#opener").click(function () {
    //    $("#dialog").dialog("open");
    //});

    //$('#ppDialog').dialog({ modal: false, position: [500, 210], width: 730, resizable: false, zIndex: 100000, open: function (type, data) { $(this).parent().appendTo('form'); } });
});



function logout() {
    window.location = '/account/logout.aspx';
}

function addslide()
{
    if (confirm('Are you sure you want to add a new empty slide?'))
        {
    $("#ctl00_MainContent_addtemplate").val(68);
    $("#ctl00_MainContent_AddContentButton").click();
    }
}


function addslide2() {
    if (confirm('Are you sure you want to add a new empty slide?')) {
        $("#ctl00_MainContent_addtemplate").val(96);
        $("#ctl00_MainContent_AddContentButton").click();
    }
}

function addslide3() {
    if (confirm('Are you sure you want to add a new empty slide?')) {
        $("#ctl00_MainContent_addtemplate").val(97);
        $("#ctl00_MainContent_AddContentButton").click();
    }
}

function addslide4() {
    if (confirm('Are you sure you want to add a new empty slide?')) {
        $("#ctl00_MainContent_addtemplate").val(98);
        $("#ctl00_MainContent_AddContentButton").click();
    }
}

function cleanspaces()
{
    $('#ctl00_MainContent_subContent').html($('#ctl00_MainContent_subContent').html().replace(/\u200B/g, '')); // clean up CKEDITOR invisible spaces
}

function godirs() {
    var href = 'http://maps.google.com/maps';
    //var d = $('#getdirs').serialize();
    window.open(href + '?daddr=' + $('#daddr').val() + '&saddr=' + $('#saddr').val());
}

function fixWidth(el, bg, theclass, offset, hoffset) {
    if ($(el).height() != null) {
        //alert($(el).height());
        var myheight = $(el).outerHeight() + hoffset;
        var position = $(el).offset();
        var myposy = position.top + offset;
        output = '<div style="width:100%; z-index:0; height:' + myheight + 'px; position:absolute; left:0px; top:' + myposy + 'px; background-color:' + bg + ';"';
        if (theclass != "") {
            output += ' class="' + theclass + '"';
        }
        output += '></div>';
        $('body').append(output)
    }
}

function fixWidthI(el, bg, theclass, offset, hoffset) {
    if ($(el).height() != null) {
        //alert($(el).height());
        var myheight = $(el).outerHeight() + hoffset;
        var position = $(el).offset();
        var myposy = position.top + offset;
        output = '<div style="width:100%; z-index:-1; height:' + myheight + 'px; position:absolute; background-repeat:repeat-x; left:0px; top:' + myposy + 'px; background-image:url(' + bg + ');"';
        if (theclass != "") {
            output += ' class="' + theclass + '"';
        }
        output += '></div>';
        $('body').append(output)
    }
}

function fixWidthMap(el, bg, theclass, offset, hoffset) {
    if ($(el).height() != null) {
        //alert($(el).height());
        var myheight = $(el).height() + hoffset;
        var position = $(el).offset();
        var myposy = position.top + offset;
        output = '<div class="mapContainer" style="width:100%; z-index:100; height:' + myheight + 'px; position:absolute; left:0px; top:' + myposy + 'px; background-color:' + bg + ';"';
        if (theclass != "") {
            output += ' class="' + theclass + '"';
        }
        output += '></div>';
        $('body').append(output)
    }
}

function fixWidthB(el, bg, theclass, offset, hoffset) {
    // alert(el);
    if ($(el).height() != null) {
        //alert(el);
        var myheight = $(el).height() + hoffset;
        var position = $(el).offset();
        var myposy = offset;
        output = '<div style="width:100%; z-index:-1; height:' + myheight + 'px; position:absolute; left:0px; bottom:' + myposy + 'px; background-color:' + bg + ';"';
        if (theclass != "") {
            output += ' class="' + theclass + '"';
        }
        output += '></div>';
        $('body').append(output)
    }
}

function loadmorenewspage(url,p)
{
    $('.storeRelated').load(url + '?p=' + p + ' .storeRelated .inner', function () { console.log('Loaded page ' + p) });
}

$(document).ready(function () { // window loaded
    //alert('loading');
    //fixWidth('#ctl00_theFooter', '#d5d4d3', '', 0, 40);
    //$('#delpageButtonOutside').insertAfter('.debugger .cmsButton:last-child');

    fixWidth('.loadMore', '#e2e2e2', 'greyone', -30, 0);

    $('.homeSearchEWI').appendTo('.homesliderHolder');
    $('.homeSearchEWI').fadeIn();
    //$('.news.smallbg .blueTitleStrip h3').appendTo('#homeslider .inner');
    $('.smallbg .blueTitleStrip .breadcrumb').appendTo('#homeslider .inner');
    $('.smallbg3 .blueTitleStrip .breadcrumb').appendTo('#homeslider .inner');
    var speed = 500;
    $('#seq1').fadeIn(speed, function () {
        //$('#seq2').fadeIn(speed, function () {
            //$('#seq3').fadeIn(speed, function () {
                $('#seq4').fadeIn(speed, function () {
                    //$('#seq5').fadeIn(speed, function () {
                        //$('#seq6').fadeIn(speed, function () {
                            $('#seq7').fadeIn(speed, function () {
                                //$('#seq8').fadeIn(speed, function () {
                                    //$('#seq9').fadeIn(speed, function () {
                                        // done
                                    });
                                });
    });

    if ($('body').outerWidth() <= 767) {
        $('#ctl00_searchheader').insertBefore('.outerheader');
        
        //alert('Test');
        $('td.td25.sidebar').insertAfter('.td71:last-child');
        $('a.viewAllbutt').insertAfter('.newsSlider');
    }
                        });
                    //});
                //});
            //});
        //});
    //});
//});

function movecontent(state) {
    if (state == 0) {
        $('#thePage').removeClass('cmson');
        $('#thePage').css('margin', '0px auto');
    }
    else {
        $('#thePage').addClass('cmson');
    }
    $('#thedebugger').toggle(500); 
}

if (window.addEventListener) {

    var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

    window.addEventListener(orientationEvent, function () {
        //alert('HOLY ROTATING SCREENS BATMAN:' + window.orientation + " " + screen.width);
        var orientation = window.orientation;

        if (orientation == 0) {
            //document.getElementById('extViewportMeta').setAttribute('content', 'width=' + document.documentElement.scrollWidth);
            //$('#extViewportMeta').remove();
            //$('head').append('<meta id ="extViewportMeta" name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.5, minimum-scale=1.0; user-scalable=0;">');
        } else {
            //document.getElementById('extViewportMeta').setAttribute('content', 'width=' + document.documentElement.scrollWidth);
            //$('#extViewportMeta').remove();
            //$('head').append('<meta id ="extViewportMeta" name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0, minimum-scale=1.0; user-scalable=0;">');
        }
    }, false);
}

var qs = (function (a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=');
        if (p.length != 2) continue;
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));

function showpeople() {
    $('#ssPanel').hide();
    $('#rpwrapper').show();
    $('#resultsPane').isotope();
}

function newsslide(el, id) {
    if ($(el).html() == 'Show') {
        $('#csd' + id).hide();
        fullheight = parseInt($('#csdfull' + id).css('height').replace('px', '')) + parseInt($('#csn' + id).css('height').replace('px', '')) + 40 + 'px';
        fullheight2 = parseInt($('#csdfull' + id).css('height').replace('px', '')) + parseInt($('#csn' + id).css('height').replace('px', '')) + 100 + 'px';

        $('#csdfull' + id).show();
        $('#element' + id).css('height', fullheight2);
        $(el).html('Hide');
    }
    else {
        fullheight = parseInt($('#csd' + id).css('height').replace('px', '')) + parseInt($('#csn' + id).css('height').replace('px', '')) + 'px';
        $('#element' + id).css('height', fullheight);
        $('#csd' + id).show();
        $('#csdfull' + id).hide();
        $(el).html('Show'); 
    } 
}

$.fn.loadWithoutCache = function () {
    var elem = $(this);
    var func = arguments[1];
    $.ajax({
        url: arguments[0],
        cache: false,
        dataType: "html",
        success: function (data, textStatus, XMLHttpRequest) {
            elem.html(data);
            if (func != undefined) {
                func.call(data, textStatus, XMLHttpRequest);
            }
        }
    });
    return elem;
}

function loadme(theurl,theel,thefunc) {
    $.ajax({
        url: theurl,
        cache: false,
        dataType: "html",
        success: function (data) {
            //alert(theel);
            $(theel).html(data);
            eval(thefunc);
        }
    }); 

}


$(document).ready(function () { // dom loaded
    $('#menuwrapper').css('visibility', 'visible');

    $('.editableDate').datepicker(
			{
			    changeMonth: true,
			    changeYear: true,
			    dateFormat: 'dd/mm/yy',
			}
	);

    
    //$(".tbox").formDefaults({
    //    activeColor: '#000',
    //    inactiveColor: '#7b7979'
    //});

    $.ajaxSetup({
        // Disable caching of AJAX responses
        cache: true
    });

    

    $('#filtertextval').keypress(function (e) {
        if (e.which == 13) filterText();
        $('#aspnetForm').submit(function () { return false; });
    });

    $('#searchbox').keypress(function (e) {
        //if (e.which == 13) filterText();
        $('#aspnetForm').submit(function () { return false; });
    });


    $('.selected').parent('li').addClass('hovered');
    $('.selected').parent('li').find('.lisep').hide();

    

    var option = {
        x: 0,
        y: 1,
        radius: 1,
        color: "#bbb"
    };


});                                       // end init dom

function covertToUnixTime(yourDate) {
    return new Date(yourDate).getTime() / 1000;
}

function directScrollClick() {
        /*lastx = $(this);
        $.scrollTo('100px', 400);
        $('.CSDetails').slideDown();
        mytext = $(this).find('.csDescriptionFull').html();
        $('.CSDetails').html(mytext);*/
}

function scrollLast(num) {
    //alert(num);
    myy = lastx.offset().top - $('.CSDetails').height() - num;
    //alert(myy);
    /*$.scrollTo(myy, 100, function (){ 
            $('.CSDetails').hide();
       });*/
    $('.CSDetails').fadeOut(500, function () {
        $.scrollTo(myy, 1000);
        lastx.css('border', '2px solid #0e81b6');
       
        lastx.css('height', parseInt(lastx.css('height').replace('px','')) - 4  + 'px');
    });

}

function removeDups(el) {
    var seen = {};
    $(el).each(function () {
        var txt = $(this).text();
        if (seen[txt])
            //$(this).remove();
            $('#resultsPane').isotope('remove', $(this));
        else
            seen[txt] = true;
    });

}

var query;

function dosearch() {
    query = $('#filtertextval').val();
    if (query.length >= 3 || query.length == 0) {
        ftext = query;
        if ($oldels != '') $('#resultsPane').isotope('insert', $oldels);
        $('#resultsPane').isotope('reloadItems');
        $('#resultsPane').isotope('reLayout');
        //$oldels = $(".element:not(:contains('" + query + "'))");
        //$('#resultsPane').isotope('remove', $oldels, function (z) { $('#isoLoader').fadeOut(); });
        removeDups('.element');
    }
}

$('.ckarea').live('click', function (event) {
    event.stopImmediatePropagation();
    $('.hinter').not('.hideme').removeClass('highlight');
    $(this).children('.inner').find('.hinter').not('.hideme').addClass('highlight');
});

$('.ckarea').live('blur', function () {
    $('.hinter').removeClass('highlight');
});

/*
$('li.ui-state-default').not('.ui-state-active').live('click', function () {
    $(this).addClass('ui-state-hovering');
});
*/

function loadmoreevents(thepage)
{
    $('#loaderArea').load('/events/?page=' + thepage + ' .eventsList .inner .thelisting', function () {
        //alert('loaded');
        $('.eventsList .inner .thelisting').html($('.eventsList .inner .thelisting').html() + $('#loaderArea').html());
        $('#lm' + thepage).remove();
    });
}

function loadmorenews(thepage) {
	//alert(thepage);
    setTimeout(function () {
        $('.greyone').remove();
        $('#loaderArea').load('/news/?page=' + thepage + ' .pressReleases .inner .thelisting .item, .loadMore', function () {
        //alert('loaded');
        $('.pressReleases .inner .thelisting').html($('.pressReleases .inner .thelisting').html() + $('#loaderArea').html());
        $('#lm' + thepage).remove();
        fixWidth('.loadMore', '#e2e2e2', 'greyone', -0, 0);
    });
	},100);
}

function loadmorethings(thepage) {
    //alert(thepage);
    setTimeout(function () {
        $('.greyone').remove();
        $('#loaderArea').load('/thingstodo/?page=' + thepage + ' .thingsToDo .inner .thelisting', function () {
            //alert('loaded');
            $('.thingsToDo .inner .thelisting').html($('.thingsToDo .inner .thelisting').html() + $('#loaderArea').html());
            $('#lm' + thepage).remove();
            fixWidth('.loadMore', '#e2e2e2', 'greyone', -0, 0);
        });
    }, 100);
}



var cpos = 0;

var dd1 = false;
var dd2 = false;
var dd3 = false;
var dd4 = false;

// Close all menus when white overlay is clicked.
$('.ui-widget-overlay').live('click', function () { unclick(); });

function unclick(id) {
    dd1 = false;
    dd2 = false;
    dd3 = false;
    dd4 = false;

    $('.ui-widget-overlay').remove();
    $('.NcmsButton').removeClass('active');
    $(".ui-dialog-content").dialog("close");

    return id
}

function addsubpage(pid) {
    dd2 = unclick(dd2);
    $('#parentpid').val(pid);
    if (!dd2) {
        dd2 = true;
        $('#dialog').dialog(
            {
                modal: true, width: 492, draggable: false, resizable: false, zIndex: 100000,
                close: function (e, u) { unclick(); dd2 = false; },
                open: function (type, data) { $(this).parent().appendTo('form'); $(this).parent().css({ 'left': cpos + 'px', 'top': '45px' }) }
            });
    }
    else {
        dd2 = false;

        $('#dialog').dialog("close");
        
    }
}

function gositestructure() {
    dd3 = unclick(dd3);
    if (!dd3) {
        dd3 = true;
        $('#sitestructuredialog').dialog({ modal: true, width: 492, draggable: false, resizable: false, zIndex: 100000, close: function (e, u) { unclick() }, open: function (type, data) { $(this).parent().appendTo('form'); $(this).parent().css({ 'left': cpos + 'px', 'top': '45px' }) } }); return false;
    }
    else {
        dd3 = false;
        $('#sitestructuredialog').dialog("close");
        
    }
}


function gopageprops() {
    dd1 = unclick(dd1);
    if (!dd1) {
        dd1 = true;
        $('#ppDialog').dialog({ modal: true, width: 492, draggable: false, resizable: false, zIndex: 100000, close: function (e, u) { unclick(); dd1 = false; }, open: function (type, data) { $(this).parent().appendTo('form'); $(this).parent().css({ 'left': cpos + 'px', 'top': '45px' }) } }); return false;
    }
    else {
        dd1 = false;
        $('#ppDialog').dialog("close");
        
    }
}

function gocopypage() {
    dd4 = unclick(dd4);
    if (!dd4) {
        dd4 = true;
        $('#copypagedialog').dialog({ modal: true, width: 492, draggable: false, resizable: false, zIndex: 100000, close: function (e, u) { unclick(); dd4 = false; }, open: function (type, data) { $(this).parent().appendTo('form'); $(this).parent().css({ 'left': cpos + 'px', 'top': '45px' }) } }); return false;
    }
    else {
        dd4 = false;
        $('#copypagedialog').dialog("close");
    }
}

function logout() {
    window.location = 'index.html';
}

function showsub(el) {
    //$('.sortul2').slideUp();
    //$('.sortul3').slideUp();
    $('#level' + el).slideToggle();
}


$(document).ready(function () {

    $(".menu ul").filter(function () {
        return this.childNodes.length === 0;
    }).hide();
    //.overlay

 $('a.tooltip').hover(
    function () {
        $(this).find(".circletool").fadeIn();
    },
    function () {
        $(this).find(".circletool").fadeOut();
    });
});