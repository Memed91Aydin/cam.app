









/*#########(TheGoodone)###############

const video = document.getElementById('video')
function startVideo(){
   navigator.getUserMedia(
      {video: {} },
      stream => video.srcObject = stream,
      err => console.error(err)
   )
}
startVideo()
 
##############(theGoodone)########*/





/***#############(

   var desiredWidth;

    $(document).ready(function() {
        $("#takePictureField").on("change",gotPic);
        desiredWidth = window.innerWidth;

        if(!("url" in window) && ("webkitURL" in window)) {
            window.URL = window.URL;   
        }

    });

    function gotPic(event) {
        if(event.target.files.length == 1 && 
           event.target.files[0].type.indexOf("image/") == 0) {
            $("#yourimage").attr("src",URL.createObjectURL(event.target.files[0]));
        }
    }

    function capture() {
        $('#target').html2canvas({
            onrendered: function (canvas) {
                var img = canvas.toDataURL("image/png");
                var output = encodeURIComponent(img);
                var cur_path = 'uploads';

                var Parameters = "image=" + output + "&filedir=" + cur_path;
                $.ajax({
                    type: "POST",
                    url: "savePNG.php",
                    data: Parameters,
                    success : function(data)
                    {
                        console.log("screenshot done");
                    }
                }).done(function() {
                    //$('body').html(data);
                });
            }
        });
 
)###############****/