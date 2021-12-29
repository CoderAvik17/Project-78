var images = [ "https://i.postimg.cc/MGn9GJXw/family.jpg",
              "https://i.postimg.cc/RhFPNRTq/papaji-2.jpg",
              "https://i.postimg.cc/LX5VBVJP/mummyji-1.jpg" , 
              "https://i.postimg.cc/VLJGwK6V/amit.jpg",
               "https://i.postimg.cc/J4STzjH4/rinni.jpg" , 
               "https://i.postimg.cc/MZPPgCWB/neelu.jpg" , 
               "https://i.postimg.cc/MHF9RQs5/suhaan.jpg" , 
                "https://i.postimg.cc/hj4s5r6M/sumit.jpg",
              "https://i.postimg.cc/s2rwpyJk/rachna.jpg" , 
              "https://i.postimg.cc/g2SvNZ3b/avik-1.jpg"
              ];
var names = ["Family Book",
              "Sunder Lal Bhatnagar (Dadu)",
              "Kamlesh Bhatnagar (Mummy Ji)" ,
              "Amit Bhatnagar (Amit Dad)",
              "Tarjani Bhatnagar (Rinni Mom)" ,
              "Neel Bhatnagar (My Bro)" ,
              "Suhan Bhatnagar(My Little Bro)" ,
              "Sumit Bhatnagar (Daddy)",
              "Rachna Bhatnagar (Mumma)",
              "Avik Bhatnagar (Me)"
 ];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 9
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
