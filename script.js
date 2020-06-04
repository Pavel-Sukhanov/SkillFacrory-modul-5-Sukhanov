let startObj = { "text": ["Жили-были {var1} да {var2} ", "Была у них {var3} ", "Снесла {var3 } {var4}, не простое - золотое", "- {var1} бил, бил - не разбил", "- {var2} била, била - не разбила", "{var5} бежала, {var6} задела, {var4} упало и разбилось.", "{var1} плачет, {var2} плачет, а {var3} кудахчет:", "{speach}"] }


// let creatBtn = document.querySelector('.create');

// let textChange = document.querySelector('.text-change');
// let changeBtn = document.querySelector('.change');
// let var1Nod = document.querySelector('.var1');
// let var2Nod = document.querySelector('.var2');
// let var3Nod = document.querySelector('.var3');
// let var4Nod = document.querySelector('.var4');
// let var5Nod = document.querySelector('.var5');
// let var6Nod = document.querySelector('.var6');
// let speachNod = document.querySelector('.speach');


let creatBtn = $('.create');
let changeBtn = $('.change');
let textChange = $('.text-change');
let var1Nod = $('.var1');
let var2Nod = $('.var2');
let var3Nod = $('.var3');
let var4Nod = $('.var4');
let var5Nod = $('.var5');
let var6Nod = $('.var6');
let speachNod = $('.speach');

creatBtn.click (function() {
    textChange.html(startObj.text);
})

changeBtn.click(function () {
    console.log('hello');
    let var1 = var1Nod.val();
    let var2 = var2Nod.val();
    let var3 = var3Nod.val();
    let var4 = var4Nod.val();
    let var5 = var5Nod.val();
    let var6 = var6Nod.val();
    let speach = speachNod.val();

    const newObj = {
        "text":[
          `Жили-были ${var1} да ${var2}`,
          `Была у них ${var3}`,
          `Снесла ${var3} ${var4}, не простое - золотое`,
          `- ${var1} бил, бил - не разбил`,
          `- ${var2} била, била - не разбила`,
          `${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
          `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
          `${speach}`,
        ]
      };
      textChange.html(newObj.text);
})









