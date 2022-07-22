const hideSquare = document.getElementById('square');
const showCircle =document.getElementById('circle');
const button = document.querySelector('button');
const form = document.querySelector('.popup__form');
const popup = document.querySelector('.popup');
const choice = document.querySelector('.choice');
const disabled = document.querySelector('.disabled');

setTimeout(function(){
  square.style.display = 'none';
}, 2000); 
setTimeout(function(){
  circle.style.display = 'flex';
  circle.style.opacity = '1';
}, 2000); 
setTimeout(function(){
  button.removeAttribute('disabled')
}, 4000); 



button.addEventListener('click', () => {
  form.classList.add('open');
  popup.classList.add('popup_open');
});

fetch('./cars.json')
.then(res => res.json())
.then(json => {

    let jsObj = json
    for (let value in jsObj) {

        let carOption = document.createElement('option');
        let mark = document.getElementById('mark');

        carOption.innerHTML = value;
        mark.appendChild(carOption);


    }
    document.querySelector('#mark').addEventListener('change', function () {
        let cars = jsObj[this.value]

        model.length = 0;

        for (const iterator of cars) {

            let carOption = document.createElement('option');
            let model = document.getElementById('model');

            carOption.innerHTML = iterator;
            model.appendChild(carOption);
        }
    })

})

$('.option').change(function() {
  $('#done').removeClass('nodisplay'); 
  $('.option').each(function() {
    if (!$(this).val()) {
      $('#done').addClass('nodisplay'); 
      return; 
    }
  });
});

function show_popap(id_popap) {
  const id = "#" + id_popap;
  $(id).addClass('active');
}

$(".close_popap").click( function(){
  $(".overlay").removeClass("active");
  popup.classList.remove('popup_open');
  circle.style.display = 'none';
});
$(".close_popap").click( function(){
  choice.style.display = 'block';
});





// $(function() {
	
//   $.datepicker.setDefaults($.datepicker.regional['ru']);
//   $('input[id="datep"]').datepicker({
//       minDate: "+4",
//       maxDate: "+10"
// });
    
// })
$('select.mark').on('click', function() {
  $('.choiceMark').text( $(this).val() );
});
$('select.model').on('click', function() {
  $('.choiceModel').text( $(this).val() );
});
$('select.year').on('click', function() {
  $('.choiceYear').text( $(this).val() );
});

let delivery = document.querySelector('.pop');
let message = document.querySelector('.dateDelivery');
form.ondate = function(evt) {
  evt.preventDefault();
  message.textContent = delivery.value;
};


