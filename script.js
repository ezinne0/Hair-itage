// animated text on home page
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired");
    const phrases = ["Celebrating Black culture.", "Understanding our hair's history.", "Learning about our roots."];
    let currentIndex = 0;
  
    const animatedText = document.getElementById('animatedText');
  
    setInterval(() => {
      // Fade out and change the text
      animatedText.style.opacity = 0;
  
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % phrases.length;
        animatedText.textContent = phrases[currentIndex];
  
        // Fade in with new text
        animatedText.style.opacity = 1;
      }, 1000); // Matches the CSS transition time
    }, 3000); // Change text every 3 seconds
  });

// Define your terms and definitions
const terms = [
  { term: "Banding", definition: "The stretching of hair with no heat, usually using small hairbands or elastics." },
  { term: "Big chop", definition: "Cutting off all hair (that’s damaged, relaxed, or chemically processed) to become 100% natural as you start your curly hair journey." },
  { term: "Bonnet", definition: "A (usually satin/silk) protective covering that is put over hair at night. It protects from friction and the absorption of oil by the cotton pillow (which causes afro hair to become dry and brittle)." },
  { term: "Clip-ins", definition: "A form of hair extensions usually used on a temporary basis, they allow hair to look fuller and longer." },
  { term: "Co-wash", definition: "Conditioner-like cleansing solution. Hydrates hair in between traditional shampoo days." },
  { term: "Curl Pattern", definition: "A term is used to explain how tight or loose the curls are." },
  { term: "Deep Conditioning", definition: "The use of a moisturising formula, usually combined with steam or moist heat to further the penetration of the formula into your hair." },
  { term: "Edges",   definition: "The baby hairs/very short hairs at the edge of your scalp. \"Doing your edges\" refers to the styling of these hairs." },
  { term: "Finger coiling", definition: "Wrapping strands around your fingers to form and/or define your curl pattern when styling." },
  { term: "Float test", definition: "Test to find our hair porosity. Take a clean glass of water and place on strand of hair in it. If the hair floats at the top then it is low porosity, if it sinks slowly or settles in the middle it is medium/normal porosity, and if it sinks straight to the bottom then it is high porosity." },
  { term: "Hot comb", definition: "A comb heated by a stove or gas heater and used to (temporarily) straighten the hair from the roots." },
  { term: "Kinky", definition: "Usually describes the most most textured pattern of curly hair; most often associated with curl patterns in the 4A to 4C range." },
  { term: "LOC/LCO method", definition: "Stands for leave-in conditioner, oil, and cream OR leave-in conditioner, cream, and oil — application happens in that order. Delivers maximum hydration and moisture retention for curly/kinky hair." },
  { term: "Natural hair", definition: "Afro/curly hair that naturally grows from your scalp, the has not undergone a process to change its texture." },
  { term: "Palm Rolling", definition: "A technique of maintaining/encouraging locs that includes using the palm of your hands to neaten, and bring shape to your locs." },
  { term: "Plop", definition: "Hair drying method where you wrap washed and styled hair in a soft cloth (microfiber towel, old t-shirt, etc.) to absorb excess water, cut down on frizz, and define curls as they dry." },
  { term: "Porosity", definition: "A measurement of the hair's ability to absorb and hold moisture (low, medium, or high)." },
  { term: "Protective Hairstyle", definition: "Any style that keeps the ends of the hair tucked away and minimises manipulation. These styles tuck away ends and usually group strands together." },
  { term: "Shrinkage", definition: "Curls becoming tighter and appearing shorter, usually after being wet." },
  { term: "Slip", definition: "Hair’s wetness level when detangling–and this doesn’t just refer to water. Conditioners, oils, creams help create slip, or hair moistness. reduces friction." },
  { term: "Teeny Weeny Afro (TWA)", definition: "A short Afro." },
  { term: "Texturism", definition: "The (false) belief that certain hair patterns are better than others." },
  { term: "Transitioning", definition: "Transitioning (to natural hair) is the process that involves no longer using a hair relaxer, letting your natural hair texture grow and gradually cutting off the chemically processed or damaged ends." },
  { term: "Wash and Go", definition: "Washing and styling hair without the use of heat, protective styling, or other manipulation techniques." },
  { term: "Bantu Knots", definition: "Style where the hair is parted into smaller sections and coiled into small buns" },
  { term: "Box Braids", definition: "A protective braided hairstyle for Black hair, achieved by sectioning off the hair into squares, or ‘boxes’ and braiding." },
  { term: "Braid Out", definition: "The coils that come about after taking down braids (usually that have been left in overnight and thoroughly moisturised). This refers to the style once the hair is out." },
  { term: "Cornrows", definition: "Braids, typically done in rows, that lay flat to the scalp." },
  { term: "Flat Twists", definition: "Twists that lay flat on the scalp (similarly to cornrows). This is created by adding hair from underneath and as you twist your hair." },
  { term: "Frohawk", definition: "An updo hairstyle for Afro-textured hair that is usually created with multiple ponytails that mimics the look of a mohawk hairstyle." },
  { term: "Locs", definition: "A hairstyle where small sections of hair are twisted and over time, the strands become permanently secured." },
  { term: "Sisterlocks", definition: "A form of microlocs which are created using a special tool, which locks strands of hair from the bottom up." },
  { term: "Twist Out", definition: "A hairstyle after twisting hair and leaving the twists in (usually overnight), they are taken out for a more defined curl pattern." },
  { term: "Two Strand Twists", definition: "A hairstyle with which the hair is parted and wrapped around each other to create a twist." }
];

// Sort terms alphabetically
terms.sort((a, b) => a.term.localeCompare(b.term));

// Insert terms into the HTML
const termContainer = document.getElementById("termContainer");
terms.forEach(({ term, definition }) => {
  const termDiv = document.createElement("div");
  termDiv.className = "termContainer";

  termDiv.innerHTML = `
    <p class="term">${term}</p>
    <div><p class="definition">${definition}</p></div>
  `;

  termContainer.appendChild(termDiv);
});
