// - membuat kelas
// - membuat objek
// - menyebutnya sehingga muncul di browser menggunakan loop dan innerHTML
// - refactor kode sehingga menerapkan warisan AuthorTestimonial
// - refactor kode sehingga mengimplementasikan polimorfisme dengan membuat kelas CompanyTestimonial dan menimpa get author (poin kuncinya adalah mengimplementasikan dan menimpa polymorphp)
// - refactor kode sehingga mengimplementasikan abstraksi dengan membuat get testimonialHTML dan dapatkan kesalahan lempar penulis ketika anak-anak tidak menggunakannya
// - refactor kode sehingga mengimplementasikan enkapsulasi, gunakan setter dan getter (poin kuncinya adalah, enkapsulasi mencoba membuat aplikasi lebih aman dengan mengimplementasikan pembatasan)

// class Testimonial {
//    #quote = "";
//    #image = "";
 
//    constructor(quote, image) {
//      this.#quote = quote;
//      this.#image = image;
//    }
 
//    get quote() {
//      return this.#quote;
//    }
 
//    get image() {
//      return this.#image;
//    }
 
//    // Ini adalah metode abstrak yang akan diterapkan oleh subclass
//    get author() {
//      throw new Error("getAuthor() method must be implemented");
//    }
 
//    // Ini adalah metode polimorfik yang dapat mengambil semua subkelas dari Testimonial
//    get testimonialHTML() {
//      return `<div class="testimonial">
//                  <img
//                      src="${this.image}"
//                      class="profile-testimonial"
//                  />
//                  <p class="quote">${this.quote}</p>
//                  <p class="author">- ${this.author}</p>
//              </div>
//          `;
//    }
//  }
 
//  // Subclass
//  class AuthorTestimonials extends Testimonial {
//    #author = "";
 
//    constructor(author, quote, image) {
//      super(quote, image);
//      this.#author = author;
//    }
 
//    get author() {
//      return this.#author;
//    }
//  }
 
//  // Subclass
//  class CompanyTestimonials extends Testimonial {
//    #company = "";
 
//    constructor(company, quote, image) {
//      super(quote, image);
//      this.#company = company;
//    }
 
//    get author() {
//      return this.#company + " Company";
//    }
//  }
 
//  const testimonial1 = new AuthorTestimonials(
//    "Power Ranger",
//    "Pahlawan Negara",
//    "https://infonegeri.id/wp-content/uploads/2022/10/Power-Rangers-Foto-Moviexplorers.jpg"
//  );
//  const testimonial2 = new AuthorTestimonials(
//    "Ultamen",
//    "Nyawa habis tit tit tit",
//    "https://cdn.idntimes.com/content-images/duniaku/post/20230201/ultraman-b9d0c409b187ffa11152fd1a4fce8e0f.jpg"
//  );
//  const testimonial3 = new CompanyTestimonials(
//    "Kamen Rider",
//    "Pahlawan Fiksi!! 🔥🔥🔥",
//    "https://cdn.idntimes.com/content-images/duniaku/post/20221214/kamen-rider-geats-all-kamen-rider-4ed8a2c7aa3c38c8858a88747b7fdd1b.jpg"
//  );
 
//  let testimonialData = [testimonial1, testimonial2, testimonial3];
//  let testimonialHTML = "";
 
//  for (let i = 0; i < testimonialData.length; i++) {
//    testimonialHTML += testimonialData[i].testimonialHTML;
//  }
 
//  document.getElementById("testimonials").innerHTML = testimonialHTML;


const testimonialData = [
  {
    author: "Power Ranger",
    quote: "Pahlawan Negara",
    image:
      "https://infonegeri.id/wp-content/uploads/2022/10/Power-Rangers-Foto-Moviexplorers.jpg",
    rating: 4,
  },
  {
    author: "Ultamen",
    quote: "Nyawa habis tit tit tit",
    image:
      "https://cdn.idntimes.com/content-images/duniaku/post/20230201/ultraman-b9d0c409b187ffa11152fd1a4fce8e0f.jpg",
    rating: 3,
  },
  {
    author: "Kamen Rider",
    quote: "Pahlawan Fiksi!! 🔥🔥🔥",
    image:
      "https://cdn.idntimes.com/content-images/duniaku/post/20221214/kamen-rider-geats-all-kamen-rider-4ed8a2c7aa3c38c8858a88747b7fdd1b.jpg",
    rating: 4,
  },
];

function allTestimonials() {
  let testimonialHTML = "";

  testimonialData.forEach(function (item) {
    testimonialHTML += `<div class="testimonial">
                            <img
                                src="${item.image}"
                                class="profile-testimonial"
                            />
                            <p class="quote">${item.quote}</p>
                            <p class="author">- ${item.author}</p>
                            <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                        </div>
        `;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonials();

function filterTestimonials(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter(function (item) {
    return item.rating === rating;
  });

  //   console.log(testimonialFiltered);

  if (testimonialFiltered.length === 0) {
    testimonialHTML += `<h1>Data not found!</h1>`;
  } else {
    testimonialFiltered.forEach(function (item) {
      testimonialHTML += `<div class="testimonial">
                                <img
                                    src="${item.image}"
                                    class="profile-testimonial"
                                />
                                <p class="quote">${item.quote}</p>
                                <p class="author">- ${item.author}</p>
                                <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                            </div>
                        `;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}