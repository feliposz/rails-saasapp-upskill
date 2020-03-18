//Document ready.
$(document).on('turbolinks:load', function () {

    var proForm = $("#pro_form");
    var submitBtn = $("#form-signup-btn");

    //Set Stripe public key.
    Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));

    //When user clicks form submit btn,
    submitBtn.click(function (event) {
        //prevent default submission behavior.
        event.preventDefault();
        submitBtn.val("Processing").prop('disabled', true);

        //Collect the credit card fields.
        var ccNum = $("#card_number").val(),
            cvcNum = $("#card_code").val(),
            expMonth = $("#card_month").val(),
            expYear = $("#card_year").val();

        //Use Stripe JS library to check for card errors.
        var error = false;

        if (!Stripe.card.validateCardNumber(ccNum)) {
            error = true;
            alert('The credit card number appears to be invalid');
        }
        if (!Stripe.card.validateCVC(cvcNum)) {
            error = true;
            alert('The CVC appears to be invalid');
        }
        if (!Stripe.card.validateExpiry(expMonth, expYear)) {
            error = true;
            alert('The expiration date appears to be invalid');
        }

        if (error) {
            submitBtn.prop('disabled', false).val("Sign up");
        } else {
            //Send the card info to Stripe.
            Stripe.createToken({
                number: ccNum,
                cvc: cvcNum,
                exp_month: expMonth,
                exp_year: expYear
            }, stripeResponseHandler);
        }

        return false;
    });

    function stripeResponseHandler(status, response) {
        //Stripe will return a card token.
        var token = response.id;

        //Inject card token as hidden field into form.
        proForm.append($('<input type="hidden" name="user[stripe_card_token]">').val(token));

        //Submit form to our Rails app.
        proForm.get(0).submit();
    }

});
