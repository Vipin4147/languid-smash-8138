// **************modal****************

let input =document.querySelector("input")
input.addEventListener("click",function(){
    this.placeholder="";
});

let modal=document.querySelector(".modal-container");


let makeup=document.querySelector("#makeup")
makeup.addEventListener("mouseover",function(){
   
modal.style.opacity=1;

       })
    

 makeup.addEventListener("mouseout",function(){
     modal.style.opacity=0;
   
 })



let modal2=document.querySelector(".modal-container2");

let hair=document.querySelector("#hair")
hair.addEventListener("mouseover",function(){
   
modal2.style.opacity=1;
    
})
hair.addEventListener("mouseout",function(){
    modal2.style.opacity=0;
})

let modal3=document.querySelector(".modal-container3");

let skin=document.querySelector("#skin")
skin.addEventListener("mouseover",function(){
   
modal3.style.opacity=1;
    
})
skin.addEventListener("mouseout",function(){
    modal3.style.opacity=0;
})

let modal4=document.querySelector(".modal-container4");

let sanitize=document.querySelector("#sanitize")
sanitize.addEventListener("mouseover",function(){
   
modal4.style.opacity=1;
    
})
sanitize.addEventListener("mouseout",function(){
    modal4.style.opacity=0;
})

let modal5=document.querySelector(".modal-container5");

let collection=document.querySelector("#collection")
collection.addEventListener("mouseover",function(){
   
modal5.style.opacity=1;
    
})
collection.addEventListener("mouseout",function(){
    modal5.style.opacity=0;
})

let modal6=document.querySelector(".modal-container6");

let rewards=document.querySelector("#rewards")
rewards.addEventListener("mouseover",function(){
   
modal6.style.opacity=1;
    
})
rewards.addEventListener("mouseout",function(){
    modal6.style.opacity=0;
})

let modal7=document.querySelector(".modal-container7");

let studio=document.querySelector("#studio")
studio.addEventListener("mouseover",function(){
   
modal7.style.opacity=1;
    
})
studio.addEventListener("mouseout",function(){
    modal7.style.opacity=0;
})


// **************container*****************


let product=[
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg",
        h :"Twist It Mascara",
        p:"Volumising and Curling Mascara",
        price:"₹ 387"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Artboard-1-(1)-(2).jpg",
        h :"SUPERFOODS Kajal",
        p:"Long-Wear Smudge-Proof Kajal Infused With Natural Superfood Extracts",
        price:"₹ 279"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Noir-(1).jpg",
        h :"Jet Set Eyes Kajal Eyeliner",
        p:"Long-wear Kohl Pencil",
        price:"₹ 750"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/open-product-with-side-bar_5.jpg",
        h :"POPxo 12 Eyeshadow Kit",
        p:"Eyeshadow palette with 6 matte and 6 shimmer shades",
        price:"₹ 269"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/RSEAD-(1).jpg",
        h :"LIT - pH Lip Balm",
        p:"Creamy, Hydrating Formula with a Luminous Effect",
        price:"₹ 259"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Swng-(1).jpg",
        h :"LIT Liquid Matte Lipstick",
        p:"Moringa Oil Enriched Matte Lipstick",
        price:"₹ 395"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Servingface-(1).jpg",
        h :"LIT Radiant Matte Compact",
        p:"Illuminating Matte Pressed Powder",
        price:"₹ 297"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Open-Product-with-side-bar_1.jpg",
        h :"POPxo Makeup - Mini Lip Kit",
        p:"Mini Lipstick kit with 3 creamy-matte bold lipsticks",
        price:"₹ 227"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Fakeid-(1).jpg",
        h :"Perfect Curves",
        p:"Moisturising Matte Lipstick",
        price:"₹ 489"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Flirtini_6.jpg",
        h :"LIT Velvet Matte Liquid Lipstick",
        p:"Hydrating, Velvet Matte Liquid Lipcolour",
        price:"₹ 296"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Flirtini_6.jpg",
        h :"LIT Creamy Matte Lipstick",
        p:"Precision Perfect Matte Slimstick",
        price:"₹ 419"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Melon-Squeeze-(1).jpg",
        h :"K.Play Flavoured Lipstick",
        p:"Melon Flavoured Vitamin E-enriched Creamy Lipstick",
        price:"₹ 545"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/WarmSand-(1).jpg",
        h :"POSE HD Foundation Stick",
        p:"Nourishing, Matte, Skin-blurring Foundation",
        price:"₹ 419"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Party-parade-(1).jpg",
        h :"Two of Your Kind",
        p:"Long-Lasting Gel Finish Nail Enamel Set",
        price:"₹ 221"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Banan-(1).jpg",
        h :"POSE HD Banana Powder",
        p:"HD Yellow Setting Powder",
        price:"₹ 315"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Hghd-(1).jpg",
        h :"POSE HD Highlighter Duo",
        p:"HD Ultra Shimmer Highlighter",
        price:"₹ 315"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/BLUEBRTHDY-(1).jpg",
        h :"MyGlamm LIT Glossy Liquid Eyeliner",
        p:"Up To 24HR Smudge-Proof Coloured Eyeliner",
        price:"₹ 211"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/open-product-side-bar.jpg",
        h :"POPxo Makeup - Face Kit",
        p:"3-in-1 blush, setting powder, and highlighter palette",
        price:"₹ 259"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/CHii_2.jpg",
        h :"POPxo Makeup - Nail Kit",
        p:"Mini Nail Polish set with 5 chip-resistant neutral nail polishes",
        price:"₹ 187"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Fvr-(1).jpg",
        h :"Tint It Up",
        p:"Lip & Cheek Stain",
        price:"₹ 313"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg",
        h :"Twist It Mascara",
        p:"Volumising and Curling Mascara",
        price:"₹ 387"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Artboard-1-(1)-(2).jpg",
        h :"SUPERFOODS Kajal",
        p:"Long-Wear Smudge-Proof Kajal Infused With Natural Superfood Extracts",
        price:"₹ 279"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Noir-(1).jpg",
        h :"Jet Set Eyes Kajal Eyeliner",
        p:"Long-wear Kohl Pencil",
        price:"₹ 750"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/open-product-with-side-bar_5.jpg",
        h :"POPxo 12 Eyeshadow Kit",
        p:"Eyeshadow palette with 6 matte and 6 shimmer shades",
        price:"₹ 269"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/RSEAD-(1).jpg",
        h :"LIT - pH Lip Balm",
        p:"Creamy, Hydrating Formula with a Luminous Effect",
        price:"₹ 259"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Swng-(1).jpg",
        h :"LIT Liquid Matte Lipstick",
        p:"Moringa Oil Enriched Matte Lipstick",
        price:"₹ 395"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Servingface-(1).jpg",
        h :"LIT Radiant Matte Compact",
        p:"Illuminating Matte Pressed Powder",
        price:"₹ 297"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Open-Product-with-side-bar_1.jpg",
        h :"POPxo Makeup - Mini Lip Kit",
        p:"Mini Lipstick kit with 3 creamy-matte bold lipsticks",
        price:"₹ 227"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Fakeid-(1).jpg",
        h :"Perfect Curves",
        p:"Moisturising Matte Lipstick",
        price:"₹ 489"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Flirtini_6.jpg",
        h :"LIT Velvet Matte Liquid Lipstick",
        p:"Hydrating, Velvet Matte Liquid Lipcolour",
        price:"₹ 296"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Flirtini_6.jpg",
        h :"LIT Creamy Matte Lipstick",
        p:"Precision Perfect Matte Slimstick",
        price:"₹ 419"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Melon-Squeeze-(1).jpg",
        h :"K.Play Flavoured Lipstick",
        p:"Melon Flavoured Vitamin E-enriched Creamy Lipstick",
        price:"₹ 545"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/WarmSand-(1).jpg",
        h :"POSE HD Foundation Stick",
        p:"Nourishing, Matte, Skin-blurring Foundation",
        price:"₹ 419"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Party-parade-(1).jpg",
        h :"Two of Your Kind",
        p:"Long-Lasting Gel Finish Nail Enamel Set",
        price:"₹ 221"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Banan-(1).jpg",
        h :"POSE HD Banana Powder",
        p:"HD Yellow Setting Powder",
        price:"₹ 315"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Hghd-(1).jpg",
        h :"POSE HD Highlighter Duo",
        p:"HD Ultra Shimmer Highlighter",
        price:"₹ 315"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/BLUEBRTHDY-(1).jpg",
        h :"MyGlamm LIT Glossy Liquid Eyeliner",
        p:"Up To 24HR Smudge-Proof Coloured Eyeliner",
        price:"₹ 211"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/open-product-side-bar.jpg",
        h :"POPxo Makeup - Face Kit",
        p:"3-in-1 blush, setting powder, and highlighter palette",
        price:"₹ 259"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/CHii_2.jpg",
        h :"POPxo Makeup - Nail Kit",
        p:"Mini Nail Polish set with 5 chip-resistant neutral nail polishes",
        price:"₹ 187"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Fvr-(1).jpg",
        h :"Tint It Up",
        p:"Lip & Cheek Stain",
        price:"₹ 313"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg",
        h :"Twist It Mascara",
        p:"Volumising and Curling Mascara",
        price:"₹ 387"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Artboard-1-(1)-(2).jpg",
        h :"SUPERFOODS Kajal",
        p:"Long-Wear Smudge-Proof Kajal Infused With Natural Superfood Extracts",
        price:"₹ 279"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Noir-(1).jpg",
        h :"Jet Set Eyes Kajal Eyeliner",
        p:"Long-wear Kohl Pencil",
        price:"₹ 750"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/open-product-with-side-bar_5.jpg",
        h :"POPxo 12 Eyeshadow Kit",
        p:"Eyeshadow palette with 6 matte and 6 shimmer shades",
        price:"₹ 269"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/RSEAD-(1).jpg",
        h :"LIT - pH Lip Balm",
        p:"Creamy, Hydrating Formula with a Luminous Effect",
        price:"₹ 259"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Swng-(1).jpg",
        h :"LIT Liquid Matte Lipstick",
        p:"Moringa Oil Enriched Matte Lipstick",
        price:"₹ 395"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Servingface-(1).jpg",
        h :"LIT Radiant Matte Compact",
        p:"Illuminating Matte Pressed Powder",
        price:"₹ 297"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Open-Product-with-side-bar_1.jpg",
        h :"POPxo Makeup - Mini Lip Kit",
        p:"Mini Lipstick kit with 3 creamy-matte bold lipsticks",
        price:"₹ 227"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Fakeid-(1).jpg",
        h :"Perfect Curves",
        p:"Moisturising Matte Lipstick",
        price:"₹ 489"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Flirtini_6.jpg",
        h :"LIT Velvet Matte Liquid Lipstick",
        p:"Hydrating, Velvet Matte Liquid Lipcolour",
        price:"₹ 296"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Flirtini_6.jpg",
        h :"LIT Creamy Matte Lipstick",
        p:"Precision Perfect Matte Slimstick",
        price:"₹ 419"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Melon-Squeeze-(1).jpg",
        h :"K.Play Flavoured Lipstick",
        p:"Melon Flavoured Vitamin E-enriched Creamy Lipstick",
        price:"₹ 545"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/WarmSand-(1).jpg",
        h :"POSE HD Foundation Stick",
        p:"Nourishing, Matte, Skin-blurring Foundation",
        price:"₹ 419"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Party-parade-(1).jpg",
        h :"Two of Your Kind",
        p:"Long-Lasting Gel Finish Nail Enamel Set",
        price:"₹ 221"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Banan-(1).jpg",
        h :"POSE HD Banana Powder",
        p:"HD Yellow Setting Powder",
        price:"₹ 315"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Hghd-(1).jpg",
        h :"POSE HD Highlighter Duo",
        p:"HD Ultra Shimmer Highlighter",
        price:"₹ 315"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/BLUEBRTHDY-(1).jpg",
        h :"MyGlamm LIT Glossy Liquid Eyeliner",
        p:"Up To 24HR Smudge-Proof Coloured Eyeliner",
        price:"₹ 211"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/open-product-side-bar.jpg",
        h :"POPxo Makeup - Face Kit",
        p:"3-in-1 blush, setting powder, and highlighter palette",
        price:"₹ 259"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/CHii_2.jpg",
        h :"POPxo Makeup - Nail Kit",
        p:"Mini Nail Polish set with 5 chip-resistant neutral nail polishes",
        price:"₹ 187"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Fvr-(1).jpg",
        h :"Tint It Up",
        p:"Lip & Cheek Stain",
        price:"₹ 313"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg",
        h :"Twist It Mascara",
        p:"Volumising and Curling Mascara",
        price:"₹ 387"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Artboard-1-(1)-(2).jpg",
        h :"SUPERFOODS Kajal",
        p:"Long-Wear Smudge-Proof Kajal Infused With Natural Superfood Extracts",
        price:"₹ 279"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Noir-(1).jpg",
        h :"Jet Set Eyes Kajal Eyeliner",
        p:"Long-wear Kohl Pencil",
        price:"₹ 750"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/open-product-with-side-bar_5.jpg",
        h :"POPxo 12 Eyeshadow Kit",
        p:"Eyeshadow palette with 6 matte and 6 shimmer shades",
        price:"₹ 269"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/RSEAD-(1).jpg",
        h :"LIT - pH Lip Balm",
        p:"Creamy, Hydrating Formula with a Luminous Effect",
        price:"₹ 259"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Swng-(1).jpg",
        h :"LIT Liquid Matte Lipstick",
        p:"Moringa Oil Enriched Matte Lipstick",
        price:"₹ 395"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Servingface-(1).jpg",
        h :"LIT Radiant Matte Compact",
        p:"Illuminating Matte Pressed Powder",
        price:"₹ 297"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Open-Product-with-side-bar_1.jpg",
        h :"POPxo Makeup - Mini Lip Kit",
        p:"Mini Lipstick kit with 3 creamy-matte bold lipsticks",
        price:"₹ 227"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Fakeid-(1).jpg",
        h :"Perfect Curves",
        p:"Moisturising Matte Lipstick",
        price:"₹ 489"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Flirtini_6.jpg",
        h :"LIT Velvet Matte Liquid Lipstick",
        p:"Hydrating, Velvet Matte Liquid Lipcolour",
        price:"₹ 296"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Flirtini_6.jpg",
        h :"LIT Creamy Matte Lipstick",
        p:"Precision Perfect Matte Slimstick",
        price:"₹ 419"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Melon-Squeeze-(1).jpg",
        h :"K.Play Flavoured Lipstick",
        p:"Melon Flavoured Vitamin E-enriched Creamy Lipstick",
        price:"₹ 545"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/WarmSand-(1).jpg",
        h :"POSE HD Foundation Stick",
        p:"Nourishing, Matte, Skin-blurring Foundation",
        price:"₹ 419"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Party-parade-(1).jpg",
        h :"Two of Your Kind",
        p:"Long-Lasting Gel Finish Nail Enamel Set",
        price:"₹ 221"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Banan-(1).jpg",
        h :"POSE HD Banana Powder",
        p:"HD Yellow Setting Powder",
        price:"₹ 315"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Hghd-(1).jpg",
        h :"POSE HD Highlighter Duo",
        p:"HD Ultra Shimmer Highlighter",
        price:"₹ 315"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/BLUEBRTHDY-(1).jpg",
        h :"MyGlamm LIT Glossy Liquid Eyeliner",
        p:"Up To 24HR Smudge-Proof Coloured Eyeliner",
        price:"₹ 211"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/open-product-side-bar.jpg",
        h :"POPxo Makeup - Face Kit",
        p:"3-in-1 blush, setting powder, and highlighter palette",
        price:"₹ 259"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/CHii_2.jpg",
        h :"POPxo Makeup - Nail Kit",
        p:"Mini Nail Polish set with 5 chip-resistant neutral nail polishes",
        price:"₹ 187"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Fvr-(1).jpg",
        h :"Tint It Up",
        p:"Lip & Cheek Stain",
        price:"₹ 313"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg",
        h :"Twist It Mascara",
        p:"Volumising and Curling Mascara",
        price:"₹ 387"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Artboard-1-(1)-(2).jpg",
        h :"SUPERFOODS Kajal",
        p:"Long-Wear Smudge-Proof Kajal Infused With Natural Superfood Extracts",
        price:"₹ 279"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Noir-(1).jpg",
        h :"Jet Set Eyes Kajal Eyeliner",
        p:"Long-wear Kohl Pencil",
        price:"₹ 750"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/open-product-with-side-bar_5.jpg",
        h :"POPxo 12 Eyeshadow Kit",
        p:"Eyeshadow palette with 6 matte and 6 shimmer shades",
        price:"₹ 269"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/RSEAD-(1).jpg",
        h :"LIT - pH Lip Balm",
        p:"Creamy, Hydrating Formula with a Luminous Effect",
        price:"₹ 259"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Swng-(1).jpg",
        h :"LIT Liquid Matte Lipstick",
        p:"Moringa Oil Enriched Matte Lipstick",
        price:"₹ 395"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Servingface-(1).jpg",
        h :"LIT Radiant Matte Compact",
        p:"Illuminating Matte Pressed Powder",
        price:"₹ 297"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Open-Product-with-side-bar_1.jpg",
        h :"POPxo Makeup - Mini Lip Kit",
        p:"Mini Lipstick kit with 3 creamy-matte bold lipsticks",
        price:"₹ 227"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Fakeid-(1).jpg",
        h :"Perfect Curves",
        p:"Moisturising Matte Lipstick",
        price:"₹ 489"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Flirtini_6.jpg",
        h :"LIT Velvet Matte Liquid Lipstick",
        p:"Hydrating, Velvet Matte Liquid Lipcolour",
        price:"₹ 296"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Flirtini_6.jpg",
        h :"LIT Creamy Matte Lipstick",
        p:"Precision Perfect Matte Slimstick",
        price:"₹ 419"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Melon-Squeeze-(1).jpg",
        h :"K.Play Flavoured Lipstick",
        p:"Melon Flavoured Vitamin E-enriched Creamy Lipstick",
        price:"₹ 545"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/WarmSand-(1).jpg",
        h :"POSE HD Foundation Stick",
        p:"Nourishing, Matte, Skin-blurring Foundation",
        price:"₹ 419"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Party-parade-(1).jpg",
        h :"Two of Your Kind",
        p:"Long-Lasting Gel Finish Nail Enamel Set",
        price:"₹ 221"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Banan-(1).jpg",
        h :"POSE HD Banana Powder",
        p:"HD Yellow Setting Powder",
        price:"₹ 315"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Hghd-(1).jpg",
        h :"POSE HD Highlighter Duo",
        p:"HD Ultra Shimmer Highlighter",
        price:"₹ 315"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/BLUEBRTHDY-(1).jpg",
        h :"MyGlamm LIT Glossy Liquid Eyeliner",
        p:"Up To 24HR Smudge-Proof Coloured Eyeliner",
        price:"₹ 211"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/open-product-side-bar.jpg",
        h :"POPxo Makeup - Face Kit",
        p:"3-in-1 blush, setting powder, and highlighter palette",
        price:"₹ 259"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/CHii_2.jpg",
        h :"POPxo Makeup - Nail Kit",
        p:"Mini Nail Polish set with 5 chip-resistant neutral nail polishes",
        price:"₹ 187"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Fvr-(1).jpg",
        h :"Tint It Up",
        p:"Lip & Cheek Stain",
        price:"₹ 313"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg",
        h :"Twist It Mascara",
        p:"Volumising and Curling Mascara",
        price:"₹ 387"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Artboard-1-(1)-(2).jpg",
        h :"SUPERFOODS Kajal",
        p:"Long-Wear Smudge-Proof Kajal Infused With Natural Superfood Extracts",
        price:"₹ 279"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Noir-(1).jpg",
        h :"Jet Set Eyes Kajal Eyeliner",
        p:"Long-wear Kohl Pencil",
        price:"₹ 750"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/open-product-with-side-bar_5.jpg",
        h :"POPxo 12 Eyeshadow Kit",
        p:"Eyeshadow palette with 6 matte and 6 shimmer shades",
        price:"₹ 269"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/RSEAD-(1).jpg",
        h :"LIT - pH Lip Balm",
        p:"Creamy, Hydrating Formula with a Luminous Effect",
        price:"₹ 259"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Swng-(1).jpg",
        h :"LIT Liquid Matte Lipstick",
        p:"Moringa Oil Enriched Matte Lipstick",
        price:"₹ 395"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Servingface-(1).jpg",
        h :"LIT Radiant Matte Compact",
        p:"Illuminating Matte Pressed Powder",
        price:"₹ 297"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Open-Product-with-side-bar_1.jpg",
        h :"POPxo Makeup - Mini Lip Kit",
        p:"Mini Lipstick kit with 3 creamy-matte bold lipsticks",
        price:"₹ 227"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Fakeid-(1).jpg",
        h :"Perfect Curves",
        p:"Moisturising Matte Lipstick",
        price:"₹ 489"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Flirtini_6.jpg",
        h :"LIT Velvet Matte Liquid Lipstick",
        p:"Hydrating, Velvet Matte Liquid Lipcolour",
        price:"₹ 296"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Flirtini_6.jpg",
        h :"LIT Creamy Matte Lipstick",
        p:"Precision Perfect Matte Slimstick",
        price:"₹ 419"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Melon-Squeeze-(1).jpg",
        h :"K.Play Flavoured Lipstick",
        p:"Melon Flavoured Vitamin E-enriched Creamy Lipstick",
        price:"₹ 545"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/WarmSand-(1).jpg",
        h :"POSE HD Foundation Stick",
        p:"Nourishing, Matte, Skin-blurring Foundation",
        price:"₹ 419"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Party-parade-(1).jpg",
        h :"Two of Your Kind",
        p:"Long-Lasting Gel Finish Nail Enamel Set",
        price:"₹ 221"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Banan-(1).jpg",
        h :"POSE HD Banana Powder",
        p:"HD Yellow Setting Powder",
        price:"₹ 315"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Hghd-(1).jpg",
        h :"POSE HD Highlighter Duo",
        p:"HD Ultra Shimmer Highlighter",
        price:"₹ 315"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/BLUEBRTHDY-(1).jpg",
        h :"MyGlamm LIT Glossy Liquid Eyeliner",
        p:"Up To 24HR Smudge-Proof Coloured Eyeliner",
        price:"₹ 211"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/open-product-side-bar.jpg",
        h :"POPxo Makeup - Face Kit",
        p:"3-in-1 blush, setting powder, and highlighter palette",
        price:"₹ 259"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/CHii_2.jpg",
        h :"POPxo Makeup - Nail Kit",
        p:"Mini Nail Polish set with 5 chip-resistant neutral nail polishes",
        price:"₹ 187"
    },
    {
        imgurl:"https://files.myglamm.com/site-images/800x800/Fvr-(1).jpg",
        h :"Tint It Up",
        p:"Lip & Cheek Stain",
        price:"₹ 313"
    },
];


product.forEach(function(el){
    let card=document.createElement("div");

    let image =document.createElement("img")
    image.src = el.imgurl;

    let title = document.createElement("h3");
    title.innerText =el.h;

    let para =document.createElement("p");
    para.innerText=el.p;

    let price = document.createElement("h2");
    price.innerText=el.price;

    card.append(image, title, para, price);

    document.querySelector("#container").append(card);
}) ;  

