var ddc = false;

var pccheck = 0;
var tot = 0;
var count = 0;
var pc = 0;

function gochecklist(pid) {
    ddc = unclick(ddc);
    $('#checkpid').val(pid);
    if (!ddc) {
        ddc = true;
        $('#checkdialog').dialog(
            {
                modal: true, width: 492, draggable: false, resizable: false, zIndex: 100000,
                close: function (e, u) { unclick(); dd2 = false; },
                open: function (type, data) { $(this).parent().appendTo('form'); $(this).parent().css({ 'right': '0px', 'top': '0px', 'left' : 'inherit' }) }
            });
    }
    else {
        ddc = false;
        $('#checkdialog').dialog("close");
    }
}

function sendclick(state, item, logid) {
    //alert(state);
    if (state) {
        count++;

    }
    else {
        count--;
    }
    pc = (100 / tot) * count
    pcw = (472 / 100) * pc;
    //alert(pcw);
    $('#pctotnum').text(Math.round(pc) + '%');
    $('#pctot').css({ 'width': pcw + 'px' });
    $.ajax({
        type: 'POST', url: '/sendcheck.ashx', data: "state=" + state + '&item=' + item + '&logid=' + logid, success: function (response) {
            //alert('OK');
            $('.hf').fadeIn();
            
            setTimeout(function () { $('.hf').fadeOut(); }, 2000);
        }

    });
}
