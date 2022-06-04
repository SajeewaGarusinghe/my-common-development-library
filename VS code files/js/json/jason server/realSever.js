

const xmlhttp1 = new XMLHttpRequest();
xmlhttp1.onload = function() {
  const myObj = JSON.parse(this.responseText);
  console.log(myObj);
  display(myObj);
};
xmlhttp1.open("GET",'http://www.boredapi.com/api/activity?key=5881028');
xmlhttp1.send();

function display(details1){
    const b=`<ul>
    
    <li style="border-bottom:1px solid grey ;">activity : ${details1.activity}</li>
    <li style="border-bottom:1px solid grey ;">key : ${details1.key}</li>
    <li style="border-bottom:1px solid grey ;">type : ${details1.type}</li>
    
    </ul>`;

    document.getElementById("server1").innerHTML=b;
}

// {
// 	"activity": "Learn Express.js",
// 	"accessibility": 0.25,
// 	"type": "education",
// 	"participants": 1,
// 	"price": 0.1,
// 	"link": "https://expressjs.com/",
// 	"key": "3943506"
// } 