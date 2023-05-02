/* const formas = document.querySelectorAll('.forma');
const sidebars = document.querySelector('.sidebar_number'); */
const btn_back = document.getElementById('go__back');
const btn_next = document.getElementById('next__step');
const box = document.querySelectorAll('.box');

const arcade__box = document.getElementById('arcade__box');
const advanced__box = document.getElementById('advanced__box');
const pro__box = document.getElementById('pro__box');

const online__service = document.getElementById('online__service');
const larger__storage = document.getElementById('larger__storage');
const customizable__profile = document.getElementById('customizable__profile');

const one = document.getElementById('one');
const two = document.getElementById('two');

const addons__os = document.getElementById('addons__os');
const addons__ls = document.getElementById('addons__ls');
const addons__cp = document.getElementById('addons__cp');


let currentStep = 1;
let currentSidebarNumber = 1;



if(currentStep < 2) {
  document.getElementById('go__back').style.display = "none";
  document.querySelector('.next').classList.add('next1');
} else {
  document.getElementById('go__back').style.display = "";
  document.querySelector('.next').classList.remove('next1');
}





// finish up (step 4)
let finishing__up = {
  plan: "Arcade",
  frequency: "(Monthly)",
  addons: [],
  prices: 2,
  addons__prices: 0,
};

function sumary (finishing__up) {
  
  const plan__name = document.getElementById('plan__name');
  const plan__prices = document.getElementById('plan__prices');
  plan__name.innerHTML = `${finishing__up.plan} ${finishing__up.frequency}`;
  plan__prices.innerHTML = `${formatter.format(finishing__up.prices)}`;
  const total__box__addons = document.getElementById('total__box__addons');
  const addons__select = document.getElementById('addons__select');
 /*  const addons__selected = document.querySelectorAll('addons__selected'); */

 if (finishing__up.plan == "Arcade") {
   finishing__up.frequency === "(Monthly)" ? finishing__up.prices = 9 : finishing__up.prices = 90;
 } else if (finishing__up.plan == "Advanced") {
   finishing__up.frequency === "(Monthly)" ? finishing__up.prices = 12 : finishing__up.prices = 120;
 } else if (finishing__up.plan == "Pro") {
   finishing__up.frequency === "(Monthly)" ? finishing__up.prices = 15 : finishing__up.prices = 150;
 };

  let addons__selected = document.createElement('p');
  addons__selected.setAttribute('class', 'addons__selected');
  console.log(addons__selected);
  finishing__up.addons.forEach((addon) => {
  addons__selected.insertAdjacentText('beforeend', addon);
  addons__select.insertAdjacentElement('beforeend', addons__selected);
  
  
  addons__prices99();
  });


function addons__prices99 () {
  if (addons__selected.innerText
    == 'online service') {
    let addons__prices = document.createElement('p');
    addons__prices.setAttribute('class', 'addons__prices');
    if (finishing__up.frequency === "(Monthly)") {
      addons__prices.innerHTML = `${formatter.format(5)}`;
    } else { 
      addons__prices.innerHTML = `${formatter.format(50)}`;
    }
    addons__select.insertAdjacentElement('beforeend', addons__prices);
  } else if (addons__selected.innerText == "larger storage") {
    let addons__prices = document.createElement('p');
    addons__prices.setAttribute('class', 'addons__prices');
    if (finishing__up.frequency === "(Monthly)") {
      addons__prices.innerHTML = `${formatter.format(10)}`; 
    } else {
      addons__prices.innerHTML = `${formatter.format(100)}`;
    }
    addons__select.insertAdjacentElement('beforeend', addons__prices);
  } else if (addons__selected.innerText == "customizable profile") {
    let addons__prices = document.createElement('p');
    addons__prices.setAttribute('class', 'addons__prices');
    if (finishing__up.frequency === "(Monthly)") {
      addons__prices.innerHTML = `${formatter.format(15)}`;
    } else {
      addons__prices.innerHTML = `${formatter.format(150)}`;
    } 
    addons__select.insertAdjacentElement('beforeend', addons__prices);
  }
  console.log(this.addons__prices);
};







 /* 
if (finishing__up.addons.includes("Online Service")) {
  finishing__up.frequency === "(Monthly)" ? finishing__up.addons__prices += 5 : finishing__up.addons__prices += 50;
};
if (finishing__up.addons.includes("Larger Storage")) {
  finishing__up.frequency === "(Monthly)" ? finishing__up.addons__prices += 10 : finishing__up.addons__prices += 100;
};
if (finishing__up.addons.includes("Customizable Profile")) {
  finishing__up.frequency === "(Monthly)" ? finishing__up.addons__prices += 15 : finishing__up.addons__prices += 150;
}; */ 




  
 /*  addons__selected.classList.add('addons__selected'); */
  

  
  /*   
  addons__selected.forEach((addon__selected) => {
    addon__selected.innerHTML = `${formatter.format(finishing__up.addons__prices)}`;
  });
 */

}









// formato de moneda
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: "USD",
  minimumFractionDigits: 0,
});

console.log(formatter.format(2)); // $2






// plans (step 2)
arcade__box.addEventListener('click', () => {
  console.log('lol');
/*   total__box__plan.innerHTML = "Arcade"; */
  finishing__up.plan = "Arcade";
  console.log(finishing__up);
});

advanced__box.addEventListener('click', () => {
  console.log('lol');
/*   total__box__plan.innerHTML = "Advanced"; */
  finishing__up.plan = "Advanced";
  console.log(finishing__up);
});

pro__box.addEventListener('click', () => {
  console.log('lol');
 /*  total__box__plan.innerHTML = "Pro"; */
  finishing__up.plan = "Pro";
  console.log(finishing__up);
});



document.querySelectorAll(".box").forEach((boxes) => {
  boxes.addEventListener("click", activ__class);  
});
function activ__class() {
  document.querySelectorAll(".box").forEach((boxes) => {
    boxes.classList.remove("activ");
  });
  this.classList.add("activ");
  console.log(this);  
}; 



/* total__box__plan 
<br> ${formatter.format(finishing__up.plan_arcade.monthly_plan)}/mo`;*/


// swicht monthly and yearly
one.addEventListener('click', (e) => {
  e.preventDefault();
  one.style.opacity='1';
  two.style.opacity='0';
  document.getElementById('one__monthly').classList.add('plan__text__color');
  document.getElementById('two__yearly').classList.remove('plan__text__color');
  box.forEach((boxs) => {
    boxs.classList.remove('yearly__box');
    });
    document.getElementById('arcade__prices').textContent = "$9/mo";
    document.getElementById('advanced__prices').textContent = "$12/mo";
    document.getElementById('pro__prices').textContent = "$15/mo";

    document.getElementById('ol__price').innerHTML = "$1/mo";
    document.getElementById('ls__price').innerHTML = "$2/mo";
    document.getElementById('cp__price').innerHTML = "$2/mo";
    finishing__up.frequency = "(Monthly)";
    
});

two.addEventListener('click', (e) => {
  e.preventDefault();
  one.style.opacity='0';
  two.style.opacity='1';
  document.getElementById('two__yearly').classList.add('plan__text__color');
  document.getElementById('one__monthly').classList.remove('plan__text__color');
  box.forEach((boxs) => {
  boxs.classList.add('yearly__box');
  });
  document.getElementById('arcade__prices').innerHTML = "$90/yr <br> 2 months free";
  document.getElementById('advanced__prices').innerHTML = "$120/yr<br> 2 months free";
  document.getElementById('pro__prices').innerHTML = "$150/yr <br> 2 months free";
  
  document.getElementById('ol__price').innerHTML = "$10/yr";
  document.getElementById('ls__price').innerHTML = "$20/yr";
  document.getElementById('cp__price').innerHTML = "$20/yr";

  finishing__up.frequency = "(Yearly)";
});

//Botones de addons (step 3)
btn_back.addEventListener('click', () => {
  console.log(currentStep);
  document.querySelector(`#sidebar_number-${currentSidebarNumber}`).classList.remove('active');
  document.querySelector(`#step${currentStep}`).style.display = 'none';
  currentStep--;
  currentSidebarNumber--;
  document.querySelector(`#sidebar_number-${currentSidebarNumber}`).classList.add('active');
  document.querySelector(`#step${currentStep}`).style.display = 'flex';
  console.log(currentSidebarNumber);
  console.log(currentStep);
  (currentStep == 1) ? document.getElementById('go__back').style.display = "none" : null;  
});
btn_next.addEventListener('click', () => {
  console.log(currentStep);
  document.querySelector(`#sidebar_number-${currentSidebarNumber}`).classList.remove('active');
  document.querySelector(`#step${currentStep}`).style.display = 'none';
  currentStep++;
  document.querySelector(`#step${currentStep}`).style.display = 'flex';
  currentSidebarNumber++;
  if(currentSidebarNumber == 5) {
    currentSidebarNumber = 4;
  }
  document.querySelector(`#sidebar_number-${currentSidebarNumber}`).classList.add('active');
  console.log(currentStep);
  console.log(currentSidebarNumber);
  if (currentStep == 2) {
    document.getElementById('go__back').style.display = "";
    document.querySelector('.next').classList.remove('next1');
  } else if (currentStep == 4) {
    sumary (finishing__up);
  } else if (currentStep == 5) {
    document.querySelector('.next').style.display = "none";
  }
  
});



//addons  
larger__storage.addEventListener('click', () => {
  if (larger__storage.form[0].checked == true) {
    addons__ls.style.backgroundColor = "hsl(217, 100%, 97%)";
    finishing__up.addons.push('larger storage');
    finishing__up.frequency === "(Monthly)" ? finishing__up.addons__prices += 10 : finishing__up.addons__prices += 100;
    console.log("lol+larger storage");
    console.log(finishing__up);
  } else {
    if (finishing__up.addons.includes('larger storage')) {
      finishing__up.addons.splice((finishing__up.addons.indexOf('larger storage')), 1);
    }
    console.log("lol-");
    console.log(finishing__up);
  }
});
  

online__service.addEventListener('click', () => {
  if (online__service.form[0].checked == true) {
    addons__os.style.backgroundColor = "hsl(217, 100%, 97%)";
    finishing__up.addons.push('online service');
    finishing__up.frequency === "(Monthly)" ? finishing__up.addons__prices += 5 : finishing__up.addons__prices += 50;
    console.log("lol+");
    console.log(finishing__up);
  } else {
    if (finishing__up.addons.includes('online service')) {
      finishing__up.addons.splice((finishing__up.addons.indexOf('online service')), 1);
      console.log("lol-");
      console.log(finishing__up);
    
    }
    
  }
});

customizable__profile.addEventListener('click', () => {
  if (customizable__profile.form[0].checked == true) {
    addons__cp.style.backgroundColor = "hsl(217, 100%, 97%)";
    finishing__up.addons.push('customizable profile');
    finishing__up.frequency === "(Monthly)" ? finishing__up.addons__prices += 15 : finishing__up.addons__prices += 150;
    console.log("lol+customizable__profile");
    console.log(finishing__up);

  } else {
    if (customizable__profile.form[0].checked == false) {
      if (finishing__up.addons.includes('customizable profile')) {
        finishing__up.addons.splice(finishing__up.addons.indexOf('customizable profile'), 1);
          
      }
    console.log("lol-customizable__profile");
    console.log(finishing__up);
    }
  }
});








   
   