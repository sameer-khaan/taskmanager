jQuery(document).ready(function () {
    //themes, change CSS with JS
    //default theme(CSS) is cerulean, change it if needed
    var defaultTheme = 'cerulean';

    var currentTheme = jQuery.cookie('currentTheme') == null ? defaultTheme : jQuery.cookie('currentTheme');
    var msie = navigator.userAgent.match(/msie/i);
    jQuery.browser = {};
    jQuery.browser.msie = {};
    switchTheme(currentTheme);

    jQuery('.navbar-toggle').click(function (e) {
        e.preventDefault();
        jQuery('.nav-sm').html(jQuery('.navbar-collapse').html());
        jQuery('.sidebar-nav').toggleClass('active');
        jQuery(this).toggleClass('active');
    });

    var jQuerysidebarNav = jQuery('.sidebar-nav');

    // Hide responsive navbar on clicking outside
    jQuery(document).mouseup(function (e) {
        if (!jQuerysidebarNav.is(e.target) // if the target of the click isn't the container...
            && jQuerysidebarNav.has(e.target).length === 0
            && !jQuery('.navbar-toggle').is(e.target)
            && jQuery('.navbar-toggle').has(e.target).length === 0
            && jQuerysidebarNav.hasClass('active')
            )// ... nor a descendant of the container
        {
            e.stopPropagation();
            jQuery('.navbar-toggle').click();
        }
    });


    jQuery('#themes a').click(function (e) {
        e.preventDefault();
        currentTheme = jQuery(this).attr('data-value');
        jQuery.cookie('currentTheme', currentTheme, {expires: 365});
        switchTheme(currentTheme);
    });


    function switchTheme(themeName) {
        if (themeName == 'classic') {
            jQuery('#bs-css').attr('href', 'bower_components/bootstrap/dist/css/bootstrap.min.css');
        } else {
            jQuery('#bs-css').attr('href', 'css/bootstrap-' + themeName + '.min.css');
        }

        jQuery('#themes i').removeClass('glyphicon glyphicon-ok whitespace').addClass('whitespace');
        jQuery('#themes a[data-value=' + themeName + ']').find('i').removeClass('whitespace').addClass('glyphicon glyphicon-ok');
    }

    //ajax menu checkbox
    jQuery('#is-ajax').click(function (e) {
        jQuery.cookie('is-ajax', jQuery(this).prop('checked'), {expires: 365});
    });
    jQuery('#is-ajax').prop('checked', jQuery.cookie('is-ajax') === 'true' ? true : false);

    //disbaling some functions for Internet Explorer
    if (msie) {
        jQuery('#is-ajax').prop('checked', false);
        jQuery('#for-is-ajax').hide();
        jQuery('#toggle-fullscreen').hide();
        jQuery('.login-box').find('.input-large').removeClass('span10');

    }


    //highlight current / active link
    jQuery('ul.main-menu li a').each(function () {
        if (jQuery(jQuery(this))[0].href == String(window.location))
            jQuery(this).parent().addClass('active');
    });

    //establish history variables
    var
        History = window.History, // Note: We are using a capital H instead of a lower h
        State = History.getState(),
        jQuerylog = jQuery('#log');

    //bind to State Change
    History.Adapter.bind(window, 'statechange', function () { // Note: We are using statechange instead of popstate
        var State = History.getState(); // Note: We are using History.getState() instead of event.state
        jQuery.ajax({
            url: State.url,
            success: function (msg) {
                jQuery('#content').html(jQuery(msg).find('#content').html());
                jQuery('#loading').remove();
                jQuery('#content').fadeIn();
                var newTitle = jQuery(msg).filter('title').text();
                jQuery('title').text(newTitle);
                docReady();
            }
        });
    });

    //ajaxify menus
    jQuery('a.ajax-link').click(function (e) {
        if (msie) e.which = 1;
        if (e.which != 1 || !jQuery('#is-ajax').prop('checked') || jQuery(this).parent().hasClass('active')) return;
        e.preventDefault();
        jQuery('.sidebar-nav').removeClass('active');
        jQuery('.navbar-toggle').removeClass('active');
        jQuery('#loading').remove();
        jQuery('#content').fadeOut().parent().append('<div id="loading" class="center">Loading...<div class="center"></div></div>');
        var jQueryclink = jQuery(this);
        History.pushState(null, null, jQueryclink.attr('href'));
        jQuery('ul.main-menu li.active').removeClass('active');
        jQueryclink.parent('li').addClass('active');
    });

    jQuery('.accordion > a').click(function (e) {
        e.preventDefault();
        var jQueryul = jQuery(this).siblings('ul');
        var jQueryli = jQuery(this).parent();
        if (jQueryul.is(':visible')) jQueryli.removeClass('active');
        else                    jQueryli.addClass('active');
        jQueryul.slideToggle();
    });

    jQuery('.accordion li.active:first').parents('ul').slideDown();


    //other things to do on document ready, separated for ajax calls
    docReady();
});


function docReady() {
    //prevent # links from moving to top
    jQuery('a[href="#"][data-top!=true]').click(function (e) {
        e.preventDefault();
    });

    //notifications
    jQuery('.noty').click(function (e) {
        e.preventDefault();
        var options = jQuery.parseJSON(jQuery(this).attr('data-noty-options'));
        noty(options);
    });

    //chosen - improves select
    jQuery('[data-rel="chosen"],[rel="chosen"]').chosen();

    //tabs
    jQuery('#myTab a:first').tab('show');
    jQuery('#myTab a').click(function (e) {
        e.preventDefault();
        jQuery(this).tab('show');
    });


    //tooltip
    jQuery('[data-toggle="tooltip"]').tooltip();

    //auto grow textarea
    jQuery('textarea.autogrow').autogrow();

    //popover
    jQuery('[data-toggle="popover"]').popover();

    //iOS / iPhone style toggle switch
    jQuery('.iphone-toggle').iphoneStyle();

    //star rating
    jQuery('.raty').raty({
        score: 4 //default stars
    });

    //uploadify - multiple uploads
    jQuery('#file_upload').uploadify({
        'swf': 'misc/uploadify.swf',
        'uploader': 'misc/uploadify.php'
        // Put your options here
    });

    //gallery controls container animation
    jQuery('ul.gallery li').hover(function () {
        jQuery('img', this).fadeToggle(1000);
        jQuery(this).find('.gallery-controls').remove();
        jQuery(this).append('<div class="well gallery-controls">' +
            '<p><a href="#" class="gallery-edit btn"><i class="glyphicon glyphicon-edit"></i></a> <a href="#" class="gallery-delete btn"><i class="glyphicon glyphicon-remove"></i></a></p>' +
            '</div>');
        jQuery(this).find('.gallery-controls').stop().animate({'margin-top': '-1'}, 400);
    }, function () {
        jQuery('img', this).fadeToggle(1000);
        jQuery(this).find('.gallery-controls').stop().animate({'margin-top': '-30'}, 200, function () {
            jQuery(this).remove();
        });
    });


    //gallery image controls example
    //gallery delete
    jQuery('.thumbnails').on('click', '.gallery-delete', function (e) {
        e.preventDefault();
        //get image id
        //alert(jQuery(this).parents('.thumbnail').attr('id'));
        jQuery(this).parents('.thumbnail').fadeOut();
    });
    //gallery edit
    jQuery('.thumbnails').on('click', '.gallery-edit', function (e) {
        e.preventDefault();
        //get image id
        //alert(jQuery(this).parents('.thumbnail').attr('id'));
    });

    //gallery colorbox
    jQuery('.thumbnail a').colorbox({
        rel: 'thumbnail a',
        transition: "elastic",
        maxWidth: "95%",
        maxHeight: "95%",
        slideshow: true
    });

    //gallery fullscreen
    jQuery('#toggle-fullscreen').button().click(function () {
        var button = jQuery(this), root = document.documentElement;
        if (!button.hasClass('active')) {
            jQuery('#thumbnails').addClass('modal-fullscreen');
            if (root.webkitRequestFullScreen) {
                root.webkitRequestFullScreen(
                    window.Element.ALLOW_KEYBOARD_INPUT
                );
            } else if (root.mozRequestFullScreen) {
                root.mozRequestFullScreen();
            }
        } else {
            jQuery('#thumbnails').removeClass('modal-fullscreen');
            (document.webkitCancelFullScreen ||
                document.mozCancelFullScreen ||
                jQuery.noop).apply(document);
        }
    });

    //tour
    if (jQuery('.tour').length && typeof(tour) == 'undefined') {
        var tour = new Tour();
        tour.addStep({
            element: "#content", /* html element next to which the step popover should be shown */
            placement: "top",
            title: "Custom Tour", /* title of the popover */
            content: "You can create tour like this. Click Next." /* content of the popover */
        });
        tour.addStep({
            element: ".theme-container",
            placement: "left",
            title: "Themes",
            content: "You change your theme from here."
        });
        tour.addStep({
            element: "ul.main-menu a:first",
            title: "Dashboard",
            content: "This is your dashboard from here you will find highlights."
        });
        tour.addStep({
            element: "#for-is-ajax",
            title: "Ajax",
            content: "You can change if pages load with Ajax or not."
        });
        tour.addStep({
            element: ".top-nav a:first",
            placement: "bottom",
            title: "Visit Site",
            content: "Visit your front end from here."
        });

        tour.restart();
    }

    //datatable
    jQuery('.datatable').dataTable({
        "sDom": "<'row'<'col-md-6'l><'col-md-6'f>r>t<'row'<'col-md-12'i><'col-md-12 center-block'p>>",
        "sPaginationType": "bootstrap",
        "oLanguage": {
            "sLengthMenu": "_MENU_ records per page"
        }
    });
    jQuery('.btn-close').click(function (e) {
        e.preventDefault();
        jQuery(this).parent().parent().parent().fadeOut();
    });
    jQuery('.btn-minimize').click(function (e) {
        e.preventDefault();
        var jQuerytarget = jQuery(this).parent().parent().next('.box-content');
        if (jQuerytarget.is(':visible')) jQuery('i', jQuery(this)).removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
        else                       jQuery('i', jQuery(this)).removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
        jQuerytarget.slideToggle();
    });
    jQuery('.btn-setting').click(function (e) {
        e.preventDefault();
        jQuery('#myModal').modal('show');
    });


    jQuery('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2014-06-12',
        events: [
            {
                title: 'All Day Event',
                start: '2014-06-01'
            },
            {
                title: 'Long Event',
                start: '2014-06-07',
                end: '2014-06-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2014-06-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2014-06-16T16:00:00'
            },
            {
                title: 'Meeting',
                start: '2014-06-12T10:30:00',
                end: '2014-06-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2014-06-12T12:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2014-06-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2014-06-28'
            }
        ]
    });

}


//additional functions for data table
jQuery.fn.dataTableExt.oApi.fnPagingInfo = function (oSettings) {
    return {
        "iStart": oSettings._iDisplayStart,
        "iEnd": oSettings.fnDisplayEnd(),
        "iLength": oSettings._iDisplayLength,
        "iTotal": oSettings.fnRecordsTotal(),
        "iFilteredTotal": oSettings.fnRecordsDisplay(),
        "iPage": Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength),
        "iTotalPages": Math.ceil(oSettings.fnRecordsDisplay() / oSettings._iDisplayLength)
    };
}
jQuery.extend(jQuery.fn.dataTableExt.oPagination, {
    "bootstrap": {
        "fnInit": function (oSettings, nPaging, fnDraw) {
            var oLang = oSettings.oLanguage.oPaginate;
            var fnClickHandler = function (e) {
                e.preventDefault();
                if (oSettings.oApi._fnPageChange(oSettings, e.data.action)) {
                    fnDraw(oSettings);
                }
            };

            jQuery(nPaging).addClass('pagination').append(
                '<ul class="pagination">' +
                    '<li class="prev disabled"><a href="#">&larr; ' + oLang.sPrevious + '</a></li>' +
                    '<li class="next disabled"><a href="#">' + oLang.sNext + ' &rarr; </a></li>' +
                    '</ul>'
            );
            var els = jQuery('a', nPaging);
            jQuery(els[0]).bind('click.DT', { action: "previous" }, fnClickHandler);
            jQuery(els[1]).bind('click.DT', { action: "next" }, fnClickHandler);
        },

        "fnUpdate": function (oSettings, fnDraw) {
            var iListLength = 5;
            var oPaging = oSettings.oInstance.fnPagingInfo();
            var an = oSettings.aanFeatures.p;
            var i, j, sClass, iStart, iEnd, iHalf = Math.floor(iListLength / 2);

            if (oPaging.iTotalPages < iListLength) {
                iStart = 1;
                iEnd = oPaging.iTotalPages;
            }
            else if (oPaging.iPage <= iHalf) {
                iStart = 1;
                iEnd = iListLength;
            } else if (oPaging.iPage >= (oPaging.iTotalPages - iHalf)) {
                iStart = oPaging.iTotalPages - iListLength + 1;
                iEnd = oPaging.iTotalPages;
            } else {
                iStart = oPaging.iPage - iHalf + 1;
                iEnd = iStart + iListLength - 1;
            }

            for (i = 0, iLen = an.length; i < iLen; i++) {
                // remove the middle elements
                jQuery('li:gt(0)', an[i]).filter(':not(:last)').remove();

                // add the new list items and their event handlers
                for (j = iStart; j <= iEnd; j++) {
                    sClass = (j == oPaging.iPage + 1) ? 'class="active"' : '';
                    jQuery('<li ' + sClass + '><a href="#">' + j + '</a></li>')
                        .insertBefore(jQuery('li:last', an[i])[0])
                        .bind('click', function (e) {
                            e.preventDefault();
                            oSettings._iDisplayStart = (parseInt(jQuery('a', this).text(), 10) - 1) * oPaging.iLength;
                            fnDraw(oSettings);
                        });
                }

                // add / remove disabled classes from the static elements
                if (oPaging.iPage === 0) {
                    jQuery('li:first', an[i]).addClass('disabled');
                } else {
                    jQuery('li:first', an[i]).removeClass('disabled');
                }

                if (oPaging.iPage === oPaging.iTotalPages - 1 || oPaging.iTotalPages === 0) {
                    jQuery('li:last', an[i]).addClass('disabled');
                } else {
                    jQuery('li:last', an[i]).removeClass('disabled');
                }
            }
        }
    }
});
