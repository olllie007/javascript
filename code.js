const survey = document.getElementById("survey"); //importing html elements
const value = document.getElementById("value");
const age = document.getElementById('age');
const subbmit = document.getElementById("subbmit")
var quote = document.getElementById("quote");


subbmit.addEventListener('click', event => { // onclick event listener for when the button is clicked
    if(value.value< 9999){ //validation
        quote.innerHTML = 'You have entered an invalid price of your property';
    }

    else if(survey.value < 1 || survey.value > 3){ //validation
        quote.innerHTML = 'You have entered an invalid survey';
    }
    else{
        var request = 'http://127.0.0.1:500/quote/' + age.value + '/' + value.value + '/' + survey.value //http get request
        console.log(request)
        const Http = new XMLHttpRequest();
        const url=request;
        Http.open("GET", url);
        Http.send();

        Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        }
        
        
        quote.innerHTML = Http.responseText; //output
    }
});
