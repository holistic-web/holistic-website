var newprodid = 0;

function addNewProduct()
{
    if (confirm('Are you sure you want to add a new product? - the details will be saved now')) {
        var thedata = "commandname=addProduct"
        $.ajax({
            type: 'POST', url: '/shopfuncs.ashx', data: thedata, success: function (response) {


                //$('.ckareaInner').removeClass('loading');
               //$('.loader').fadeOut();
                alert("New product (" + response + ") added ok, will now refresh the page to see it in the list");

                window.location.reload();
            }

        });
    }
}

function addtocart(pid, sid, bid) {
    if (bid == '') bid = 0;
    //if (confirm('Are you sure you want to add this to your basket?')) {
        var thedata = "commandname=addCart&pid=" + pid + '&sid=' + sid + '&bid=' + bid;
        $.ajax({
            type: 'POST', url: '/shopfuncs.ashx', data: thedata, success: function (response) {


                $('.ckareaInner').removeClass('loading');
                $('.loader').fadeOut();
                if (response == 'error')
                {
                    alert(response);
                }
                else
                {
                    alert('Item added to basket ok');
                    window.location = location.protocol + '//' + location.host + location.pathname + '?bid=' + response;
                }

                
            }

        });
    //}
}

function delfromcart(pid, sid, bid) {
    if (bid == '') bid = 0;
    //if (confirm('Are you sure you want to add this to your basket?')) {
    var thedata = "commandname=delCart&pid=" + pid + '&sid=' + sid + '&bid=' + bid;
    $.ajax({
        type: 'POST', url: '/shopfuncs.ashx', data: thedata, success: function (response) {


            $('.ckareaInner').removeClass('loading');
            $('.loader').fadeOut();
            if (response == 'error') {
                alert(response);
            }
            else {
                alert('Item(s) removed from basket ok');
                window.location = '/basket';
            }


        }

    });
    //}
}

function changeProduct() {
    if (confirm('Are you sure you want to change this product? - the details will be saved now')) {
        $('#switchproduct').val(1);
        $('#SaveContentButton').trigger('click');
        refreshnow = true;
    }
}
