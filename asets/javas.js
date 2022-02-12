
//đối tưởng validator
function validator(options) {
    var formElement = document.querySelector(options.form);
           
    if (formElement) {
        options.rules.forEach(function (rule) {
            console.log(rule.selector)
        })
    }
    console.log()
}

//đĩnh nghia các rules
validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function () {

        }
    }
}
validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function () {
    
        }
    }
}
validator.isPassword = function(selector) {
    return {
        selector: selector,
        test: function () {
    
        }
    }
}