function getData() {
    var name = document.getElementById("username").value;
    var maths = parseInt(document.getElementById("maths").value);
    var Science = parseInt(document.getElementById("Science").value);
    var English = parseInt(document.getElementById("English").value);
    var marks = maths + Science + English ;
    var average = (maths + Science + English)/2;

    console.log(`Name is ${name} Maths Marks is ${maths}, Science Marks is ${Science} and English marks are ${English}`);
     
    console.log(`${maths} + ${Science} + ${English} = ${marks}`);
//     console.log((`${maths} + ${Science} + ${English})/2 = ${marks}`)

    if (marks <= 150) {
         var tr = `  <tr style='color:red;'>
         <td>${name}</td>
         <td>${maths}</td>
         <td>${Science}</td>
         <td>${English}</td>
         <td>${marks}</td>
         <td>${average}</td>
         </tr>`;
    }
    else {
         var tr = `  <tr style='color:green;'>
         <td>${name}</td>
         <td>${maths}</td>
         <td>${Science}</td>
         <td>${English}</td>
         <td>${marks}</td>
         <td>${average}</td>
    </tr>`;
    }


    document.getElementById("data").innerHTML += tr;
}