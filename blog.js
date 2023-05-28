function submitData() {
    let project = document.getElementById("project").value;
    let start = document.getElementById("start-date").value;
    let end = document.getElementById("end-date").value;
    let description = document.getElementById("description").value;
    let image = document.getElementById("upload").files;

    if (project == "") {
        return alert("Nama project harus diisi yak");
     } else if (start == "") {
        return alert("Tanggal mulai harus diisi yak");
     } else if (end == "") {
        return alert("Tanggal selesai harus diisi yak");
     } else if (description == "") {
        return alert("Deskripsi harus diisi yak");
     } else if (image == "") {
        return alert("Gambar harus diisi yak");
     }
};



let dataBlog = [];

function addBlog(event) {
    event.preventDefault();

    let project = document.getElementById("project").value;

    let description = document.getElementById("description").value;

    const nodejs = '<i class="fa-brands fa-node-js"></i>';
    const html = '<i class="fa-brands fa-html5"></i>';
    const php = '<i class="fa-brands fa-php"></i>';
    const reactjs = '<i class="fa-brands fa-react"></i>';

    let iconnodejs = document.getElementById("nodejs").checked ? nodejs : "";
    let iconhtml = document.getElementById("html").checked ? html : "";
    let iconphp = document.getElementById("php").checked ? php : "";
    let iconreactjs = document.getElementById("reactjs").checked ? reactjs : "";
    // let checkbox = document.getElementById("technologies").value;
    let image = document.getElementById("upload").files;

    function timeDistance() {
      let start = new Date(document.getElementById("start-date").value);
      let end = new Date(document.getElementById("end-date").value);
      let diff = new Date (end) - new Date (start);
      let days = Math.floor(diff / (1000 * 3600 * 24));
      let weeks = Math.floor(diff / (1000 * 3600 * 24 * 7));
      let months = Math.floor(diff / (1000 * 3600 * 24 * 30)); 
      let years = Math.floor(diff / (1000 * 3600 * 24 * 30 * 12));

      if (years > 0) {
         return `${years} Years ${months} Months ${weeks} Weeks ${days} Days`;
      } else if (months > 0) {
         return `${months} Months ${weeks} Weeks ${days} Days`;
      } else if (weeks > 0) {
         return `${weeks} Weeks ${days} Days`;
      } else if (days > 0) {
         return `${days} Days`;
      }
    }

    let difference = timeDistance()

   //  let startDate = new Data(start-date);
   //  let endDate = new Data(end-date);
   //  let hitung = 

   //  const startDate = new Date (document.getElementById("start-date").value);
   //  const endDate = new Date (document.getElementById("end-date").value);

    // membuat url
    image = URL.createObjectURL(image[0]);
    console.log(image);

    let blog = {
        project,
        difference,
        description,
        iconnodejs,
        iconhtml,
        iconphp,
        iconreactjs,
        // checkbox,
        image,
        postAt: new Date(),
        author: "Arsandi Wira P"
    };

    dataBlog.push(blog);
    console.log(dataBlog);

    renderBlog();
}

function renderBlog() {
    document.getElementById("content").innerHTML = "";

    for (let index = 0; index < dataBlog.length; index++) {
        document.getElementById("content").innerHTML += `
        <div class="card" >
            <img src="${dataBlog[index].image}" alt="hp">
            <p class="title">${dataBlog[index].project}</p>
            <p>duration : ${dataBlog[index].difference}</p>
            <p class="about">${dataBlog[index].description}</p>
            <p>${dataBlog[index].iconnodejs}${dataBlog[index].iconhtml}${dataBlog[index].iconphp}${dataBlog[index].iconreactjs}</p>
            <p>${getFullTime(dataBlog[index].postAt)}</p>
            <p>${getDistanceTime(dataBlog[index].postAt)}</p>
            <div class="button">
               <button>edit</button>
               <button>delete</button>
            </div>  
         </div>  
        `;
    }
}

function getFullTime(time) {
   // console.log("get full time");
   // let time = new Date();
   // console.log(time);
 
   let monthName = [
     "Jan",
     "Feb",
     "Mar",
     "Apr",
     "May",
     "Jun",
     "Jul",
     "Aug",
     "Sep",
     "Oct",
     "Nov",
     "Dec",
   ];
   // console.log(monthName[8]);
 
   let date = time.getDate();
   // console.log(date);
 
   let monthIndex = time.getMonth();
   // console.log(monthIndex);
 
   let year = time.getFullYear();
   // console.log(year);
 
   let hours = time.getHours();
   let minutes = time.getMinutes();
   // console.log(minutes);
 
   if (hours <= 9) {
     hours = "0" + hours;
   } else if (minutes <= 9) {
     minutes = "0" + minutes;
   }
 
   return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
 }
 
 function getDistanceTime(time) {
   let timeNow = new Date();
   let timePost = time;
 
   // waktu sekarang - waktu post
   let distance = timeNow - timePost; // hasilnya milidetik
   console.log(distance);
 
   let milisecond = 1000; // milisecond
   let secondInHours = 3600; // 1 jam 3600 detik
   let hoursInDays = 24; // 1 hari 24 jam
 
   let distanceDay = Math.floor(
     distance / (milisecond * secondInHours * hoursInDays)
   ); // 1/86400000
   let distanceHours = Math.floor(distance / (milisecond * 60 * 60)); // 1/3600000
   let distanceMinutes = Math.floor(distance / (milisecond * 60)); // 1/60000
   let distanceSeconds = Math.floor(distance / milisecond); // 1/1000
 
   if (distanceDay > 0) {
     return `${distanceDay} Day Ago`;
   } else if (distanceHours > 0) {
     return `${distanceHours} Hours Ago`;
   } else if (distanceMinutes > 0) {
     return `${distanceMinutes} Minutes Ago`;
   } else {
     return `${distanceSeconds} Seconds Ago`;
   }
 }
 
 setInterval(function () {
   renderBlog();
 }, 10000);

 function dateDiff() {
   startDate.setHours(0, 0, 0, 0);
   endDate.setHours(0, 0, 0, 0);

   const oneDay = 24 * 60 * 60 * 1000;
   const diff = Math.abs(startDate - endDate);
   const day = Math.round(diff / oneDay);

 }