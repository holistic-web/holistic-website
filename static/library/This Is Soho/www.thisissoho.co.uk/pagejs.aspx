



function showmid(el)
{
    $('.ddtop_' + el).show();
}

function hidemid(el)
{
    $('.ddtop_' + el).hide();
}

function showfar(el)
{
    $('.ddfar_' + el).show();
}

function hidefar(el)
{
    $('.ddfar_' + el).hide();
}


    
    var parentid = '10';

	(function() {
      var doalert = false;
    if (doalert) 
{
	  var proxied = window.alert;
	  window.alert = function(a) {
		// do something here
		$.colorbox({html:a, className:"redalert",width:'400px',height:'250px',scrolling:false})
		//return proxied.apply(this, arguments);
	  };
}
	})();

    jQuery.extend({
        random: function(X) {
            return Math.floor(X * (Math.random() % 1));
        },
        randomBetween: function(MinV, MaxV) {
          return MinV + jQuery.random(MaxV - MinV + 1);
        }
    });

    function pushURL(path)
    {

        if (typeof(window.history.pushState) == 'function') {
            window.history.pushState(null, path, path);
        } else {
            window.location.replace = path;
        }
    }
           //$(function () {

        var bwidth;
      
        var thewidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
     
       



function slideIn(el)
{
    var p = $(el).css('right');
    //alert('SI ' + p);
    if (p == '-500px')
    {
        $(el).animate({ right: '+=500' }, 200);
    }
    //$(el).css({ 'right': '0px' });
}

function slideOut(el) {
    var p = $(el).css('right');
    //alert('SO ' + p);
    if (p == '0px') {
        $(el).animate({ right: '-=500' }, 200);
        //$(el).css({ 'right': '0px' });
    }
}


$(window).load(function(){
    

    $('.showhide').click(function () {
        //$('.debugger').slideToggle();
        slideDebug('.debugger');
    });

    

    //alert('Tabs');
	$(".tabs").tabs();

	$(".tabsProp").tabs();

	$(".tabsIRD").tabs();


	

	$("#filtertextval").formDefaults({
	  activeColor: '#000',
	  inactiveColor: '#999' 
	});

	$("#propquery").formDefaults({
	  activeColor: '#000',
	  inactiveColor: '#999' 
	});

    $('#SaveContentButtonOutside').click(function (a, c) {
		//$('#SaveContentButton').click();
	});

	$('#delpageButtonOutside').click(function (a, c) {
		$('#delpageButton').click();
	});
});


function initIsotope() {
	
}



       
	
	function addpagesubmit() {
			if ($("#seoname").val() == "")
			{
				alert('SEO Name Required!');
			}
			else
			{
			window.location = '/?addpage=1&parentpid=' + $("#parentpid").val() + '&pagename=' + escape($("#pagename").val()) + '&seoname=' + escape($("#seoname").val()) + '&templateid=' + $("#newtemplateDD").val() + '&newparentPageDD=' + $("#newparentPageDD").val() + '&dlang=' +  $("#dlang").val();
			}
		}

        $(document).ready(function () { // dom loaded

            


    $('.PageTitle').addClass('theme');
	
   

	 

	

    
	


    

		
		
		});
	
	var lastbg = "";

	function getlastbg()
	{
			
	}

	
	var propid = 0;
	function loadlet(letid) {
		mytext = "";
		//$('#propTemp').fadeOut();
		$('#contentLoader').html('');
		$('#contentLoader').load('/ajax_propload.ashx?letid=' + letid, function () {
			
			lastx = $(this);
			//alert(letid);
			$.scrollTo('100px', 400);
			mytext += '<div id="proptop" style="padding-left:13px; padding-right:20px; width:1146px; font-size:1em; ">' + $('#contentLoader').html() + '</div><div style="position:absolute; top:10px; right:20px;"><img onmouseup="scrollLast2(30);"  src="/Images/buttons/close_off.png" /></div>';
			
			$('#PSDetails').html(mytext);
			$('#PSDetails').fadeIn(500);
			
			$('#prop_id').val(letid);

            $('#letlink').html("<label>External link to this item : </label><input type='text' value='http://www.thisissoho.co.uk/propertysearch?letid=" + letid + "'>");
			propid = letid;
	
			$('#propVisible').attr('checked',$(this).find('.prop_active').attr('checked'));
			

			$('#propTitle').val($(this).find('.prop_title').html());
			$('#propSubtitle').val($(this).find('.propSubtitle').html());
			$('#propAddress1').val($(this).find('.prop_addr1').html());
			$('#propAddress2').val($(this).find('.prop_addr2').html());
			$('#propAddress3').val($(this).find('.prop_addr3').html());
			$('#propCity').val($(this).find('.prop_city').html());
			$('#propPostcode').val($(this).find('.prop_postcode').html());

			if ($(this).find('.proploc').html() != null) { $('#LocationCK').val($(this).find('.proploc').html());} else {$('#LocationCK').val("");};
			
			if ($(this).find('.propdesc').html() != null) { $('#DescriptionCK').val($(this).find('.propdesc').html()); } else { $('#DescriptionCK').val(""); }
			
			if ($(this).find('.propamen').html() != null) { $('#AmenitiesCK').val($(this).find('.propamen').html()); } else { $('#AmenitiesCK').val(""); }
			
			if ($(this).find('.proplease').html() != null) { $('#LeaseCK').val($(this).find('.proplease').html()); } else { $('#LeaseCK').val(""); }
			
			if ($(this).find('.propavail').html() != null) { $('#AvailabilityCK').val($(this).find('.propavail').html()); } else { $('#AvailabilityCK').val(""); }

			if ($(this).find('.propnotes').html() != null) { $('#NotesCK').val($(this).find('.propnotes').html()); } else { $('#NotesCK').val(""); }

			if ($(this).find('.propfloorareas').html() != null) { $('#FloorareasCK').val($(this).find('.propfloorareas').html()); } else { $('#FloorareasCK').val(""); }

			//$('#propregionDD').val($(this).find('.prop_region').html());

			
			var size1 = $(this).find('.prop_size1').html();
			if (size1 == 'True') { $('#propSize1').attr('checked', 'checked'); } else {$('#propSize1').removeAttr('checked');};

			var size2 = $(this).find('.prop_size2').html();
			if (size2 == 'True') { $('#propSize2').attr('checked', 'checked'); } else {$('#propSize2').removeAttr('checked');};

			var size3 = $(this).find('.prop_size3').html();
			if (size3 == 'True') { $('#propSize3').attr('checked', 'checked'); } else {$('#propSize3').removeAttr('checked');};

			var size4 = $(this).find('.prop_size4').html();
			if (size4 == 'True') { $('#propSize4').attr('checked', 'checked'); } else {$('#propSize4').removeAttr('checked');};

			var theregion = $(this).find('.prop_region').html();
			var regarr = theregion.split(',');

			for (var i = 0; i < regarr.length; i++) {
			 //alert(regarr[i]);
				$('#propregionDD option[value=' +  regarr[i] + ']').attr('selected', true);
				//Do something
			}

			$('#proplastmod').html('Last Modified : ' + $(this).find('.prop_lastmod').html())
			
			$('#proptypeDD').val($(this).find('.prop_type').html());
			
			$('#propSqft').val($(this).find('.prop_sqft').html());
			$('#propSqm').val($(this).find('.prop_sqm').html());
			$('#propPrice').val($(this).find('.prop_price').html());
			$('#propTerms').val($(this).find('.prop_terms').html());
			$('#propURL').val($(this).find('.prop_url').html());
			$('#propRates').val($(this).find('.proprates').html());
			$('#propScharge').val($(this).find('.propscharge').html());
			

			$('#propContactsDD option').attr('selected', false);
            $('#propContactsDD').attr('selectedIndex', '-1');

            $(this).find('.prop_contacts option').each(function(i){
                $('#propContactsDD option[value=' +  $(this).val() + ']').attr('selected', true);
            });

			$('#proptop').find('.propsizeft').prettynumber({
				delimiter : ','
			});

			$('#proptop').find('.propsizem').prettynumber({
				delimiter : ','
			});
			$('#col2').css('height', parseInt($('#PSDetails').css('height').replace('px','') - 80 ) + 'px');
			$('#col1').css('height', $('#col2').css('height'));
		});
			
	}

    function initScrollClick() {
    

	var lastel = "";

    
    }
	
	
	
	

	
	var thefilter1 = "";
	var thefilter2 = "";
	var thefilter3 = "";
	$('#ctl00_MainContent_newstypeDD').change(function () { // set service filter DD to reset sector DD
        if ($(this).val() != '0') { thefilter1 = $(this).val(); } else { thefilter1 = ''; }
        newsfilter();
		$('#isoLoader').fadeOut();
    });

	$('#ctl00_MainContent_officeDD').change(function () { // set service filter DD to reset sector DD
        if ($(this).val() != '0') { thefilter1 = '.office' + $(this).val(); } else { thefilter1 = ''; }
        newsfilter();
    });

    $('#ctl00_MainContent_yearDD').change(function () { // set service filter DD to reset sector DD
        if ($(this).val() != '0') { thefilter2 = '.theyear' + $(this).val(); } else { thefilter2 = ''; }
        newsfilter();
    });

    $('#ctl00_MainContent_monthDD').change(function () { // set service filter DD to reset sector DD
        if ($(this).val() != '0') { thefilter3 = '.themonth' + $(this).val(); } else { thefilter3 = ''; }
        newsfilter();
    });
	
	function newsfilter()
	{
		filternow = thefilter1 + thefilter2 + thefilter3;
		
		$('#resultsPane .element').show();
		if (filternow != '') $('#resultsPane .element').not(filternow).fadeOut();
		//alert(filternow);
		//$('#resultsPane').isotope({ filter: filternow, transformsEnabled : false });
		//if ( !$('#resultsPane').data('isotope').$filteredAtoms.length ) {
			//noresults();
		//}
	}

	
	//$('.notclickable').css('pointer','default');

	function noresults()
	{
		alert('No Results Found');
	}
	
	
	/*function delPage(id)
    {
        if (confirm('Delete this page?' + id))
        {
        window.location = '/contactus/delcontact/?id=' + id;
        }
        return false;   
    }*/

	

    function filterText() {
		showpeople();
		$('#isoLoader').fadeIn();
		 $('.CSDetails').fadeOut();
		if ($('#filtertextval').val() != 'Search our people')
		{ query = escape($('#filtertextval').val());}
		else
		{ query = "";}
		
        if (!hastyped) {
			theurlnow = '/404//loadall/' + query + "?modal=1";
			//alert(theurlnow);
            hastyped = false;
            $(window).unbind('.infscr');
			//alert(qs["sectid"]);
			//if (((qs["sectid"] == "") && (qs["servid"] == "")) || (query != ""))
			if ((!qs["sectid"]) && (!qs["servid"]))
			{	
				$('#resultsPane').isotope({ filter: '' });
				//alert(hastyped);
				$('#contentLoader').load(theurlnow + ' #resultsPane', function () {
					$newElements = $(this).find('.element');
					$('#resultsPane').isotope('remove', $('#resultsPane').data('isotope').$allAtoms);
					$('#resultsPane').isotope('insert', $newElements);
					initRollovers();
					initScrollClick();
					$('#isoLoader').fadeOut();
				});
			}
			else
			{
				$('#isoLoader').fadeOut();
			}
        }
        else {
			initRollovers();
            initScrollClick();
        }
    }

	function saveFormAjaxIRD()
	{
		thedata = $('#tabsIRD-1 input,#tabsIRD-1 checkbox, #tabsIRD-1 select, #tabsIRD-1 hidden').serialize();
        //document.write(thedata);
        $.ajax({type:'POST', url: '/saveIRD.ashx', data:thedata, success: function(response) {
			if (lastx) lastx.click();
            alert(response);
			window.location = '/pagejs.aspx'
        }});
	}


    function saveFormAjax()
    {
        thedata = $('#tabs-1 input,#tabs-1 checkbox, #tabs-1 select,#tabs-1a input,#tabs-1a checkbox, #tabs-1a select, #tabs-2 textarea, #tabs-3 textarea, #tabs-4 textarea').serialize();
        //document.write(thedata);
        $.ajax({type:'POST', url: '/savecontact.ashx', data:thedata, success: function(response) {
			lastx.click();
            alert(response);
            if (response.indexOf("Error") == -1)
			{
			window.location = '/contactus/ourpeople?id=' + $('#contactid').val();
			}
        }});
    }

	function saveFormAjaxCS()
    {
        thedata = $('#tabs-1cs input,#tabs-1cs checkbox, #tabs-1cs select, #tabs-1cs textarea').serialize();
        //document.write(thedata);
        $.ajax({type:'POST', url: '/savecasestudy.ashx', data:thedata, success: function(response) {
			lastx.click();
            alert(response);
        }});
    }

	function saveFormAjaxProp()
    {
        thedata = $('#tabsProp-1 input,#tabsProp-1 checkbox, #tabsProp-1 select, #tabsProp-2 textarea, #tabsProp-3 textarea, #tabsProp-4 textarea, #tabsProp-5 textarea, #tabsProp-5a textarea, #tabsProp-5a1 textarea, #tabsProp-5a2 textarea, #tabsProp-5b select').serialize();
        //document.write(thedata);
        $.ajax({type:'POST', url: '/saveproperty.ashx', data:thedata, success: function(response) {
			lastx.click();
            alert(response);
			if (response.indexOf("Error") == -1)
			{
			window.location = '/propertysearch?letid=' + propid + '&lastsearch=' + theurl;
			}
        }});
    }
	

	function saveFormAjaxNews()
    {
        thedata = $('#tabs-1news input,#tabs-1news checkbox, #tabs-1news select, #tabs-1news textarea').serialize();
        //document.write(thedata);
        $.ajax({type:'POST', url: '/savenews.ashx', data:thedata, success: function(response) {
			lastx.click();
            alert(response);
        }});
    }

    function saveFormAjaxInsight()
    {
        thedata = $('#tabs-1insight input,#tabs-1insight checkbox, #tabs-1insight select, #tabs-1insight textarea').serialize();
        //document.write(thedata);
        $.ajax({type:'POST', url: '/saveinsight.ashx', data:thedata, success: function(response) {
			lastx.click();
            alert(response);
        }});
    }

    function uploadContactImage()
    {
        
    }
   
    function beforeSendHandler(e)
    {
    }

    function completeHandler(e)
    {
    }

    function errorHandler(e)
    {
    }


    function progressHandlingFunction(e){
    if(e.lengthComputable){
        $('progress').attr({value:e.loaded,max:e.total});
    }
}
	
	function clickel()
	{
		
		$('#element').click();
		
	}
	
        $(document).ready(function () { // dom loaded

            
           
            //$(".ajax2").colorbox();
           // $(".login2").colorbox();
            //$(".login2").colorbox({ width: '800px', height: '540px', iframe: true, scrolling: false });
            
	});
