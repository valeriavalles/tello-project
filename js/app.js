
var consultaJson = '/js/proyectos.json'
console.log(consultaJson)
function rutesJson() {
  $.ajax({
    url: consultaJson,
    type: 'GET',
    dataType: 'json',
     success: function (data) {
       console.log(data)
      var contentproject = ''
      // filtro;
      for (var i = 0; i < 6; i++) {
        console.log(data[i].imagen)
        console.log(data[i].title)
        var active = '';
        if(i == 1){
          active = 'activo';
        }
        contentproject += `<div class=" col-md-6 col-sm-6 col-xs-12 pl-50">
                            <h4 class="mb-40 ${active}"><strong>${data[i].title}</strong></h4>
                            <img class="mb-40" src="${data[i].imagen}" data-aos="fade-up"/>
											    </div>`

        }
        $('#content-list').append(contentproject)

        var contentHtml = '';
    
        $('#btn').on('click',function(){
          contentHtml += `<div class="item">1</div>`
          $("#content-list").append(contentHtml);
          console.log('ssjh')
        })
      

      for (var j = 6; j < 12 ; j++){
        $('#content-list').append(contentproject)
        }
      }

      
     
      
      // nameEvents.innerHTML = nameTaller;
      // dataEvents.innerHTML = t;


    })
    

  }

  rutesJson()

  console.log('sdja')