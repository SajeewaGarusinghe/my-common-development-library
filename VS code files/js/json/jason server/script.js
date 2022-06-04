// const xmlhttp = new XMLHttpRequest();

// xmlhttp.onreadystatechange = function () {
//   if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
//     console.log(JSON.parse(xmlhttp.responseText));
//   }
// };

// xmlhttp.open('GET', 'sample.json');
// xmlhttp.send();

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  //console.log(myObj);
  display(myObj);
};
xmlhttp.open("GET",'sample.json');
xmlhttp.send();

function display(details){
    const a=`<ul>
    <img src="${details.image}" alt="ïmg" srcset=""><br><br>
    <li style="border-bottom:1px solid grey ;">name : ${details.name}</li>
    <li style="border-bottom:1px solid grey ;">age : ${details.age}</li>
    <li style="border-bottom:1px solid grey ;">pets : ${details.pets[0]['animal']}</li>
    
    </ul>`;

    document.getElementById("demo").innerHTML=a;
}
