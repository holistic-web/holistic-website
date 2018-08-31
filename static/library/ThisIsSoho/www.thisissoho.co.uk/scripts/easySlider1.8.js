/*
 * 	Easy Slider 1.8 - jQuery plugin
 *	written by Alen Grakalic	
 *	http://cssglobe.com/post/4004/easy-slider-15-the-easiest-jquery-plugin-for-sliding
 *
 *	Copyright (c) 2009 Alen Grakalic (http://cssglobe.com)
 *	Dual licensed under the MIT (MIT-LICENSE.txt)
 *	and GPL (GPL-LICENSE.txt) licenses.
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */
 
/*
 *	markup example for $("#slider").easySlider();
 *	
 * 	<div id="slider">
 *		<ul>
 *			<li><img src="images/01.jpg" alt="" /></li>
 *			<li><img src="images/02.jpg" alt="" /></li>
 *			<li><img src="images/03.jpg" alt="" /></li>
 *			<li><img src="images/04.jpg" alt="" /></li>
 *			<li><img src="images/05.jpg" alt="" /></li>
 *		</ul>
 *	</div>
 *
 */

(function ($) {

    $.fn.easySlider = function (options) {

        // default configuration properties
        var defaults = {
            prevId: 'prevBtn',
            prevText: 'Previous',
            nextId: 'nextBtn',
            nextText: 'Next',
            controlsShow: true,
            controlsBefore: '',
            controlsAfter: '',
            controlsFade: true,
            firstId: 'firstBtn',
            firstText: 'First',
            firstShow: false,
            lastId: 'lastBtn',
            lastText: 'Last',
            lastShow: false,
            vertical: false,
            speed: 800,
            auto: false,
            pause: 2000,
            continuous: false,
            numeric: true,
            numericId: 'controls',
            url: false
        };

        var options = $.extend(defaults, options);

        var url = window.location.href;
        var hash = "";
        url = url.split("#");
        if (url.length > 1) hash = url[1];
        url = url[0];

        this.each(function () {
            var obj = this;
            var s = $('li', obj).not('li li', obj).length;
            //$('#imgInfo').html('Image 1 of ' + s);
            if (s > 1) {

                var w = $('li', obj).width();
                var h = $('li', obj).height();
                var clickable = true;
                $(obj).width(w);
                $(obj).height(h);
                $(obj).css("overflow", "hidden");

                var ts = s - 1;
                var t = 0;

                if (!options.vertical) {
                    $("li", obj).css('float', 'left');
                    $("ul", obj).css('width', s * w);
                };
                if (options.controlsShow) {
                    var html = options.controlsBefore;
                    if (options.numeric) {
                        html += '<ol id="' + options.numericId + '"></ol>';
                    } else {
                        if (options.firstShow) html += '<span id="' + options.firstId + '"><a href=\"javascript:void(0);\">' + options.firstText + '</a></span>';
                        html += ' <span id="' + options.prevId + '"><a href=\"javascript:void(0);\">' + options.prevText + '</a></span>';
                        html += ' <span id="' + options.nextId + '"><a href=\"javascript:void(0);\">' + options.nextText + '</a></span>';
                        if (options.lastShow) html += ' <span id="' + options.lastId + '"><a href=\"javascript:void(0);\">' + options.lastText + '</a></span>';
                    };

                    html += options.controlsAfter;
                    $(obj).after(html);
                };

                if (options.numeric) {
                    for (var i = 0; i < s; i++) {
                        $(document.createElement("li"))
							.attr('id', options.numericId + (i + 1))
							.html('<a rel=' + i + ' href=\"javascript:void(0);\">' + (i + 1) + '</a>')
							.appendTo($("#" + options.numericId))
							.click(function () {
							    animate($("a", $(this)).attr('rel'), true);
							});
                    };
                } else {
                    $("a", "#" + options.nextId).click(function () {
                        animate("next", true);
                    });
                    $("a", "#" + options.prevId).click(function () {
                        animate("prev", true);
                    });
                    $("a", "#" + options.firstId).click(function () {
                        animate("first", true);
                    });
                    $("a", "#" + options.lastId).click(function () {
                        animate("last", true);
                    });
                };

                function setNumeric(i) {
                    i = parseInt(i) + 1;
                    $("li", "#" + options.numericId).removeClass("current");
                    $("li#" + options.numericId + i).addClass("current");
                    
                };

                function setInitUrl() {
                    if (hash != "") {
                        var index = -1;
                        var p;
                        $("ul:first li", obj).each(function (i) {
                            if ($(this).attr("id") == hash) {
                                index = i;
                            };
                        });
                        if (index != -1) {
                            if (!options.vertical) {
                                p = (index * w * -1);
                                $("ul", obj).css("margin-left", p + "px");
                            } else {
                                p = (index * h * -1);
                                $("ul", obj).css("margin-top", p + "px");
                            };
                            t = index;
                            if (options.numeric) setNumeric(t);
                        };
                    };
                };
                function setUrl(i) {
                    i = (options.continuous) ? parseInt(i) + 2 : parseInt(i) + 1;
                    var id = $("ul li:nth-child(" + i + ")", obj).attr("id");
                    document.location.href = (id) ? url + "#" + id : url + "#";
                };

                function adjust() {
                    if (t > ts) t = 0;
                    if (t < 0) t = ts;
                    if (!options.vertical) {
                        $("ul", obj).css("margin-left", (t * w * -1));
                    } else {
                        $("ul", obj).css("margin-top", (t * h * -1));
                    }
                    clickable = true;
                    if (options.numeric) setNumeric(t);
                    if (options.url) setUrl(t);
                };

                function animate(dir, clicked) {
                    if (clickable) {
                        clickable = false;
                        var ot = t;
                        switch (dir) {
                            case "next":
                                t = (ot >= ts) ? (options.continuous ? t + 1 : ts) : t + 1;
                                break;
                            case "prev":
                                t = (t <= 0) ? (options.continuous ? t - 1 : 0) : t - 1;
                                break;
                            case "first":
                                t = 0;
                                break;
                            case "last":
                                t = ts;
                                break;
                            default:
                                t = parseInt(dir);
                                break;
                        };
                        var diff = Math.abs(ot - t);
                        var speed = diff * options.speed;
                        if (!options.vertical) {
                            p = (t * w * -1);
                            $("ul", obj).animate(
								{ marginLeft: p },
								{ queue: false, duration: speed, complete: adjust }
							);
                        } else {
                            p = (t * h * -1);
                            $("ul", obj).animate(
								{ marginTop: p },
								{ queue: false, duration: speed, complete: adjust }
							);
                        };

                        //$('#imgInfo').html('Image ' + t + ' of ' + s);

                        if (!options.continuous && options.controlsFade) {
                            if (t == ts) {
                                $("a", "#" + options.nextId).hide();
                                $("a", "#" + options.lastId).hide();
                            } else {
                                $("a", "#" + options.nextId).show();
                                $("a", "#" + options.lastId).show();
                            };
                            if (t == 0) {
                                $("a", "#" + options.prevId).hide();
                                $("a", "#" + options.firstId).hide();
                            } else {
                                $("a", "#" + options.prevId).show();
                                $("a", "#" + options.firstId).show();
                            };
                        };

                        if (clicked) clearTimeout(timeout);
                        if (options.auto && dir == "next" && !clicked) {
                            ;
                            timeout = setTimeout(function () {
                                animate("next", false);
                            }, diff * options.speed + options.pause);
                        };

                    };
                    return false;
                };
                // init
                var timeout;
                if (options.auto) {
                    ;
                    timeout = setTimeout(function () {
                        animate("next", false);
                    }, options.pause);
                };

                if (options.numeric) setNumeric(0);
                if (options.url) setInitUrl();

                if (options.continuous) {
                    $("ul", obj).prepend($("ul li:last-child", obj).clone());
                    $("ul", obj).append($("ul li:nth-child(2)", obj).clone());
                    if (!options.vertical) {
                        $("ul li:first-child", obj).css("margin-left", "-" + w + "px");
                        $("ul", obj).css('width', (s + 1) * w);
                        //$("ul", obj).css('width', w);
                    } else {
                        $("ul li:first-child", obj).css("margin-top", "-" + h + "px");
                        $("ul", obj).css('height', (s + 1) * h);
                        //$("ul", obj).css('height', h);
                    }
                };

                if (!options.continuous && options.controlsFade && t == 0) {
                    $("a", "#" + options.prevId).hide();
                    $("a", "#" + options.firstId).hide();
                };

            };

        });

    };

})(jQuery);