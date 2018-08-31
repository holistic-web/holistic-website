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


var istoggled = false;

function cmsPrev()
{
    $('.cmsTools, .debugger, .etabs').fadeOut();
    $('.cke_editable_inline ').attr('contenteditable', 'false');
    $('.cke_editable_inline ').removeClass('cke_show_borders');
    $('.cke_editable_inline ').removeClass('cke_editable');
    $('.page').removeClass('cmson');
    $('#prevOff').fadeIn();
    processShortCodes(true);
}

function cmsPrevOff() {
    $('.cmsTools, .debugger, .etabs').fadeIn();
    $('.cke_editable_inline ').attr('contenteditable', 'true');
    $('.cke_editable_inline ').addClass('cke_show_borders');
    $('.cke_editable_inline ').addClass('cke_editable');
    $('.page').addClass('cmson');
    $('#prevOff').fadeOut();
    processShortCodes(false);
}

function processShortCodes(state)
{
    if (state)
    {
        $('.cke_editable_inline').each(function () {
            var ref = $(this);
            if (ref.html().indexOf('!!csslider!!') != -1) doShortCode(ref, 'builditemslider', '!!csslider!!');
            if (ref.html().indexOf('!!latestnews!!') != -1) doShortCode(ref, 'buildlatestnews', '!!latestnews!!');
        });
    }
    else
    {
        $('.showcode').remove();
        $(".hidecode").each(function () {
            $(this).replaceWith(this.childNodes);
        });
    }
}

function doShortCode(ref,thefunc,sc)
{
    var content = ref.html();
    var pageid = $('#pageidtosave').val();
    var contid = ref.data('contid');
    var theurl = '/ajaxcms.ashx?func=' + thefunc + '&pageid=' + pageid + '&contid=' + contid
    console.log(theurl);
    $.get(theurl, function (data) {
        ref.html(content.replace(sc, '<div class="hidecode">' + sc + '</div><div class="showcode">' + data + '</div>'));
    });
}

function newAlert(msg)
{
    $('#msg .inner').html(msg);
    $('#msg').fadeIn();
    //setTimeout(function () { $('#msg').fadeOut(); }, 3000);
}




$(document).ready(function () {
    $('#msg .button').click(function () { $('#msg').fadeOut(); })
    $('#filterSS').change(function () {
        filterCaseStudies($('#filterSS').val(), $('#filterOrder').val());
    });

    $('#filterOrder').change(function () {
        filterCaseStudies($('#filterSS').val(), $('#filterOrder').val());
    });
    
})

function filterCaseStudies(ss,o)
{
    window.location = '/case-studies/?ss=' + ss + '&o=' + o;
}

function filterProperties(type, o) {
    window.location = '/propertysearch/?type=' + type + '&o=' + o;
}

function toggleItem(el)
{
    el.parent().children('.hideme').fadeToggle();
    if (!istoggled) { istoggled = true; thesorter.option("disabled", istoggled); return; }
    if (istoggled) { istoggled = false; thesorter.option("disabled", istoggled); return; }
}


function slideDebug(el) {
    var p = $(el).css('left');
    if (p == '0px') {
        $(el).animate({ left: '-=' + slideoffset }, 200);
        $('.NcmsButton').addClass('smallone');
        $('.debugger').addClass('smallone');
        $('.NcmsButton, .divider').addClass('smallone');

        $('.ui-dialog').animate({ left: '-=' + slideoffset }, 200);
    }
    else {
        $(el).animate({ left: '+=' + slideoffset }, 200);
        $('.NcmsButton, .divider').removeClass('smallone');
        $('.ui-dialog').animate({ left: '+=' + slideoffset }, 200);
        $('.debugger').removeClass('smallone');
    }


    setTimeout(function () { cpos = 125; }, 300);
}




function goRegInterest() {



    var thedata = $('.registerInterest input,.registerInterest select,.registerInterest textarea').serialize() + '&commandname=reg-interest';
    //alert(thedata);
    $.ajax({
        type: 'POST', url: '/sendform.ashx', data: thedata, success: function (response) {

            if (response.indexOf("error") !== -1) {
                alert(response);
            }
            else {
                alert(response);
                window.location.reload();
            }
        }
    });
}

function delpage(pid) {
    $('#ppDialog').dialog("close");
    var cn = "delpage";
    var ca = pid
    //if (confirm('Are you sure you want to delete this page? (' + pid + ')')) {
    //    if (confirm('Are you REALLY sure you want to delete this page?')) {


    //        var thedata = "CommandName=" + cn + "&CommandArgument=" + ca + "&ctl00$MainContent$pagepropertiesdialog$pageidtosave=" + ca;
    //        //alert(thedata);
    //        $.ajax({
    //            type: 'POST', url: '/savepage.ashx', data: thedata, success: function (response) {

    //                if (cn == 'delpage') {
    //                    alert('Page deleted ok');
    //                    window.location = response;
    //                }
    //                //window.location = '<%=request.servervariables("URL") %>'
    //            }

    //        });
    //    }
    //}


    $.confirm({
        theme: 'supervan',
        title: 'Delete Page',
        content: 'Are you REALLY sure you want to delete this page?',
        buttons: {
            confirm: function () {
                var thedata = "CommandName=" + cn + "&CommandArgument=" + ca + "&pageidtosave=" + ca;
                //alert(thedata);
                $.ajax({
                    type: 'POST', url: '/savepage.ashx', data: thedata, success: function (response) {

                        if (cn == 'delpage') {
                            newAlert('Page deleted ok');
                            window.location = response;
                        }
                        //window.location = '<%=request.servervariables("URL") %>'
                    }

                });
            },
            cancel: function () {
                //$.alert('Canceled!');
            }
        }
        
    });
    return false;
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
    $.confirm({
        theme: 'supervan',
        title: 'Add Slide',
        content: 'Are you sure you want to add a new empty slide?',
        buttons: {
            confirm: function () {
                $("#ctl00_MainContent_addtemplate").val(68);
                $("#ctl00_MainContent_AddContentButton").click();
            },
            cancel: function () {
                //$.alert('Canceled!');
            }
        }
    });
}

function cleanspaces()
{
    //$('#ctl00_MainContent_subContent').html($('#ctl00_MainContent_subContent').html().replace(/\u200B/g, '')); // clean up CKEDITOR invisible spaces
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
        output = '<div style="width:100%; z-index:-1; height:' + myheight + 'px; position:absolute; left:0px; top:' + myposy + 'px; background-color:' + bg + ';"';
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

$(window).load(function () { // window loaded
    //alert('loading');
    //fixWidth('#ctl00_theFooter', '#d5d4d3', '', 0, 40);
    //$('#delpageButtonOutside').insertAfter('.debugger .cmsButton:last-child');

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
        $('.homeSearchEWI').insertAfter('#area4 p.introPara:nth-child(2)');
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
//$(window).scroll(function () {
//    //console log determines when nav is fixed
//    //console.log($(window).scrollTop())
//    if ($(window).scrollTop() > 598) {
//        $('#area139').addClass('fixed');
//    }
//    if ($(window).scrollTop() < 597) {
//        $('#area139').removeClass('fixed');
//    }

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

function doDates()
{
    $('.editableDate').datepicker(
			{
			    changeMonth: true,
			    changeYear: true,
			    dateFormat: 'dd/mm/yy',
			}
	);
}


$(document).ready(function () { // dom loaded
    $('#menuwrapper').css('visibility', 'visible');
    //$("#contentLoader").ajaxError(function (event, request, settings) {
    //alert('AJAX Error');
    //  $(this).append("<li>Error requesting page " + settings.url + "</li>");
    //});
    //background-image:url(/images/courseArrow.png);
    //background-repeat:no-repeat;
    //background-position: 88% 50%;

    //$('.productListtbl tr').hover(function () {
    //    $(this).find('td:last-child').css({
    //        'background-image': 'url(/images/courseArrow.png);',
    //        'background-repeat': 'no-repeat;',
    //        'background-position':' 88% 50%;'
    //    }, function () {
    //        $(this).find('td:last-child').css('background-image','none');
    //    }

    //    );

    //});

    doDates();

  //  $('#myaccounttabs .etabs').insertAfter('#homeslider');

    //$("#accordion").accordion();
    
    $('.accordion .head').click(function () {
        $(this).next().toggle();
        return false;
    }).next().hide();





    $.ajaxSetup({
        // Disable caching of AJAX responses
        cache: true
    });

    $('#propquery').keypress(function (e) {
        if (e.which == 13) loadresults($('#pslocDD').val(), $('#pstypeDD').val(), $('#pssizeDD').val(), $('#propquery').val());
        $('#aspnetForm').submit(function () { return false; });
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

    $('.home_links').hover(function () { // init home page slide-up rollovers
        $(this).find('.caption').animate({ 'bottom': '70px' }, { duration: 200 });
        $(this).find('.home_links_blue').animate({ 'bottom': '66px' }, { duration: 200 });
        $(this).find('img').animate({ 'bottom': '25px' }, { duration: 200 });
    },
	function () {
	    $(this).find('.caption').animate({ 'bottom': '0px' }, { duration: 400 });
	    $(this).find('img').animate({ 'bottom': '0px' }, { duration: 400 });
	    $(this).find('.home_links_blue').animate({ 'bottom': '0px' }, { duration: 400 });
	});

    $('.ps_links').hover(function () { // init home page slide-up rollovers
        $(this).find('.caption').animate({ 'bottom': '73px' }, { duration: 200 });
        $(this).find('.home_links_blue').animate({ 'bottom': '66px' }, { duration: 200 });
        $(this).find('img').animate({ 'bottom': '30px' }, { duration: 200 });
    },
	function () {
	    $(this).find('.caption').animate({ 'bottom': '0px' }, { duration: 400 });
	    $(this).find('img').animate({ 'bottom': '0px' }, { duration: 400 });
	    $(this).find('.home_links_blue').animate({ 'bottom': '0px' }, { duration: 400 });
	});

    var option = {
        x: 0,
        y: 1,
        radius: 1,
        color: "#bbb"
    };


    $('#ctl00_MainContent_sectorDD').change(function () { // set sector filter DD to reset service DD
        $('#orderbyDD_Div').show();
        $('#ctl00_MainContent_serviceDD').val(0);
        $('#ctl00_MainContent_officeDD').val(0);
        if ($(this).val() != '0') { myfilter = '.sector' + $(this).val(); } else { myfilter = ''; }
        filterText();
        $('#resultsPane').isotope({ filter: myfilter });
    });

    $('#ctl00_MainContent_serviceDD').change(function () { // set service filter DD to reset sector DD
        $('#orderbyDD_Div').show();
        $('#ctl00_MainContent_sectorDD').val(0);
        $('#ctl00_MainContent_officeDD').val(0);
        if ($(this).val() != '0') { myfilter = '.service' + $(this).val(); } else { myfilter = ''; }
        filterText();
        $('#resultsPane').isotope({ filter: myfilter });
    });


    $('#ctl00_MainContent_filterbyDD').change(function () { // set service filter DD to reset sector DD
        mydd = $(this).val();
        if (mydd == "ShowAll") {
            $('#resultsPane').isotope({ filter: '' });
            filterText();
        }
        $('#serviceDD_Div').fadeOut();
        $('#sectorDD_Div').fadeOut();
        $('#officeDD_Div').fadeOut();
        $('#monthDD_Div').fadeOut();
        $('#yearDD_Div').fadeOut();
        if (mydd != 'noDD') $('#' + mydd + '_Div').fadeIn();

        //showpeople();
    });

    $('#ctl00_MainContent_orderbyDD').change(function () { // set sort order
        filterText();
        thesort = $(this).val().replace('Desc', '');
        if ($(this).val().indexOf('Desc') > 0) {
            $('#resultsPane').isotope({ sortBy: thesort, sortAscending: false });
        }
        else {
            $('#resultsPane').isotope({ sortBy: thesort, sortAscending: true });
        }
    });

   // initScrollClick();
   

    $('.galleryContainer').bxSlider({
        controls: true,
        pager: false,
        infiniteLoop: false,
        hideControlOnEnd: true,
        slideMargin: 20
    })

    $('.newsList').bxSlider({
        mode: 'fade',
        controls: false,
        //slideWidth: 300,
        //minSlides: 1,
        //maxSlides: 1,
        pager: true,
        infiniteLoop: false,
        //hideControlOnEnd: true,
    })


});                                       // end init dom


$(window).load(function () {
    $('.featureSlider').not('.noslide').bxSlider({
        adaptiveHeight: true,
        controls: false,
        pager: false,
        auto: true,
        mode: 'fade'
    });
})


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

function scrollLast2(num) {
    myy = lastx.offset().top - $('.CSDetails').height() - num;
    $('.CSDetails').fadeOut(500, function () {
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


//function addsubpage(pid) {
//    //newpagename = prompt('New Paqe Name','');
//    $('#parentpid').val(pid);
//    $("#dialog").dialog({ modal: true, width: 450, resizable: false, zIndex: 1000000 });
//}

$('.ckarea').live('click', function (event) {
    event.stopImmediatePropagation();
    $('.hinter').not('.hideme').removeClass('highlight');
    $(this).children('.inner').find('.hinter').not('.hideme').addClass('highlight');
    //thesorter.option("disabled", true);
});

$('.ckarea').live('blur', function () {
    $('.hinter').removeClass('highlight');
    //thesorter.option("disabled", false);
});

/*
$('li.ui-state-default').not('.ui-state-active').live('click', function () {
    $(this).addClass('ui-state-hovering');
});
*/

var cpos = 125;

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
        $('#ppDialog').dialog({ modal: true, show: {
            effect: "fade",
            duration: 500
        },
            hide: {
                effect: "fade",
                duration: 500
            }, width: 492, draggable: false, resizable: false, zIndex: 100000, close: function (e, u) { unclick(); dd1 = false; }, open: function (type, data) { $(this).parent().appendTo('form'); $(this).parent().css({ 'left': cpos + 'px', 'top': '45px' }) } }); return false;
    }
    else {
        dd1 = false;
        $('#ppDialog').dialog("close");
    }
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
        console.log('closing');
        $('#dialog').dialog("close");
        
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
    window.location = '/account/logout.aspx';
}

function showsub(el) {
    $('#level' + el).slideToggle();
}



function initSortContacts(srcel, sectorid, serviceid) {
    $('#' + srcel).sortable({
		handle : '.handle',
        update: function () {
            var order = $('#' + srcel).sortable('serialize');
            var theurl = "/process_sortableContacts.ashx?sectorid=" + sectorid + "&serviceid=" + serviceid + "&" + order;
            $("<div/>").load(theurl);
        }
    });
}

function initSortCustom() {
    $('#metaLoader').sortable({
        update: function () {
            var pageid = $('#pageidtosave').val();
            var order = $('#metaLoader').sortable('serialize');
            var theurl = "/customFieldsSort.ashx?pageid=" + pageid + "&" + order;
            $("<div/>").load(theurl);
        }
    })
}


$(window).load(function () {
    $('.ourEbooks img').on('click', function () {
        $('.overlay').fadeIn();
    });
});

$(window).load(function () {
    $(".tabs").tabs();
});

var projectfilterid = 'all';
var thepage = 0;
var allLoaded = false;

//setInterval(function () {
$(window).scroll(function () {
    var projectDiv = $("#cmssortbox-2 .projects");
    if (projectDiv.length) {
        projectDiv = $('#ctl00_theFooter');
        var offsetTop = projectDiv.offset().top;
        var divPosition = offsetTop;
        var scrollPosition = window.scrollY + $(window).height();
        var bodyHeight = $('body').height();
        var windowHeight = $(window).height();

        if (scrollPosition > divPosition && !allLoaded && window.scrollY > 200 || bodyHeight < windowHeight) {
            console.log("bodyHeight : " + bodyHeight + " window : " + windowHeight);
            loadmore(pageid);
        }
    }
    //}, 600);
});




function loadmore(pageid) {
    thepage += 1;
    console.log('loadmore');
    $.ajax({
        url: "/controls/LoadMoreProjects.ashx?pageid=" + pageid +"&page=" + thepage,
        success: function (data) {
            if (data == "false") {
                allLoaded = true;
            } else {
                console.log("appended projects");
                $('#projects').append(data);
                if (projectfilterid == 'all') {
                    $('.project:not(.visible)').each(function (i) {
                        $(this).delay(i * 300).css({ 'opacity': 0, 'display': 'inline-block' }).animate({ 'opacity': 1 }, 500);
                        $(this).addClass('visible');
                    });
                } else {
                    $('.projectType' + projectfilterid + ':not(.visible)').each(function (i) {
                        $(this).delay(i * 300).css({ 'opacity': 0, 'display': 'inline-block' }).animate({ 'opacity': 1 }, 500);
                        $(this).addClass('visible');
                    });
                }
                formatEvens();
                //window.scroll(0, 200);
            }
            
        },
        error: function () {
            allLoaded = true;
            $('#projects').append("<h2>Error getting new projects</h2>");
        }
    })
}


var pageid;

$(document).ready(function () {
    if ($('.projects').length) {
        formatEvens();
    }
    
    pageid = GetPageID();


});

function GetPageID() {
    var classArr = $('body').attr("class").split(' ');
    for (var i = 0; i < classArr.length; i++) {
        if (classArr[i].indexOf('pageid') != -1) {
            var ret = classArr[i].replace("pageid", "");
        }
    }
    return ret;
}


function formatEvens() {
    console.log('formatEvens');
    if (!$('#projects').hasClass("quarter")) {
        $('.visible').filter(function (index) {
            return index % 2 == 1
        }).addClass('even');
    } else {
        formatQuarter();
    }
}

function formatQuarter() {
    $('.visible').filter(function (index) {
        return index % 4 == 3
    }).addClass('endcol');
    $('.visible').filter(function (index) {
        return index % 4 == 0
    }).addClass('firstcol');
}

function showProject(id) {
    console.log('show project ' + id);
    projectfilterid = id;
    if ($('.visible').length > 0) {
        console.log('lots of visible' + $('.visible').length);
        $('.project').fadeOut(300);
        window.setTimeout(function () { fadeIn(id) }, 300);
    } else {
        console.log('oops no visible');
        fadeIn(id);
    }
    
    $('.projects ul li a').removeClass('active');
    $('.title' + id).addClass('active');
}

function fadeIn(id) {
    $('.project').removeClass('even');
    $('.project').removeClass('visible');
    if (id == 'all') {
        $('.project:not(.visible)').each(function (i) {
            $(this).delay(i * 300).css({ 'opacity': 0, 'display': 'inline-block' }).animate({ 'opacity': 1 }, 500);
            $(this).addClass('visible');
            formatEvens();
        });
    } else {
        $('.projectType' + id + ':not(.visible)').each(function (i) {
            $(this).delay(i * 300).css({ 'opacity': 0, 'display': 'inline-block' }).animate({ 'opacity': 1 }, 500);
            $(this).addClass('visible');
            formatEvens();
       });
    }

}

function showmore() {
    if ($('.readMoreContent').is(":hidden")) {
        $('.readMoreContent').slideToggle();
        $('.readmoreLink').css("display", "none");
        $('.closeMore').css("display", "block");
    } else {
        $('.readMoreContent').slideToggle();
        $('.readmoreLink').css("display", "block");
        $('.closeMore').css("display", "none");
    }
   
}


function addImg(pageid) {
    CKFinder.popup({
        chooseFiles: true,
        onInit: function (finder) {
            finder.on('files:choose', function (evt) {
                var file = evt.data.files.first();
                var fileUrl = file.getUrl();
                $.ajax({
                    url: "/controls/gallery.ashx?pageid=" + pageid + "&url=" + fileUrl + "&func=add",
                    success: function (data) {
                        $('.galleryContainer').append(data);
                        formatEvens();
                    }
                });

            });
        }
    });
}


function EditImg(ImgID) {
    CKFinder.popup({
        chooseFiles: true,
        onInit: function (finder) {
            finder.on('files:choose', function (evt) {
                var file = evt.data.files.first();
                var fileUrl = file.getUrl();

                $.ajax({
                    url: "/controls/gallery.ashx?imgid=" + ImgID + "&url=" + fileUrl + "&func=edit",
                    success: function (data) {
                        //$('.item' + ImgID + " ).
                        $('.galleryContainer').append(data);
                        formatEvens();
                    }
                });

            });
        }
    });
}


function ShowModal(id) {
    var instance = $('#modal' + id).Chocolat().data('chocolat');
    instance.api().open();
}

    function SubmitContactForm() {
        if ($('#firstname').val() == "" && $('#Name').val() != "" && $('#Email').val() != "" && $('#Query').val() != "") {
            var theData = $('#contactForm :input').serialize();
            $.ajax({
                url: "/sendform.ashx",
                data: theData,
                success: function (response) {
                    if (response.indexOf("error") !== -1) {
                        alert(response);
                    } else {
                        alert("Email has been sent");
                        window.location.reload();
                    }
                }
            })
        } else {
            alert("All fields marked with a  *  are mandatory");
        }
    }

    $(document).ready(function () {
        if ($('.galleryContainer').is(':empty')) {
            $('.bx-controls-direction').hide();
        }
    });
