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

const plan__name = document.getElementById('plan__name');
const plan__prices = document.getElementById('plan__prices');

const total__box__addons = document.getElementById('total__box__addons');
const addons__select = document.getElementById('addons__select');

const name__field = document.getElementById('name__field');
const email = document.getElementById('email');
const phone = document.getElementById('phone');


// formato de moneda
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: "USD",
  minimumFractionDigits: 0,
});

function entfernen() {
  if (finishing.finishing__up.addons !== null) {
    finishing.finishing__up.addons = [];
  }
};

// step 1

const formIsValid = {
  name__field: false,
  email: false,
  phone: false
};

name__field.addEventListener('change', (e) => {
  if(e.target.value.trim().length > 0) formIsValid.name__field = true
});

email.addEventListener('change', (e) => {
  if(e.target.value.trim().length > 0) formIsValid.email = true
});

phone.addEventListener('change', (e) => {
  if(e.target.value.trim().length > 0) formIsValid.phone = true
});

const validateForm = () => {
  const formValues = Object.values(formIsValid)
  const valid = formValues.findIndex(value => value == false)

  if(valid == -1) {
    console.log('go go go')
  } else { 
    btn_next.style.display = "none";
    alert('Form invalid')
  }
};



  if(currentStep < 2) {
    document.getElementById('go__back').style.display = "none";
    document.querySelector('.next').classList.add('next1');
  } else {
    document.getElementById('go__back').style.display = "";
    document.querySelector('.next').classList.remove('next1');
  }



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

  if (currentStep == 3) { 
   /*  finishing.prices__remove(); */
    finishing.addon__remove(); 
  };
});
btn_next.addEventListener('click', () => {
  console.log(currentStep);
  if(currentStep == 1) {
    validateForm();
    console.log(formIsValid);
    if (formIsValid.name__field == true && formIsValid.email == true && formIsValid.phone == true ) {
      console.log('go go go !!!');
    } else {
      currentStep = 1;
      return;
    }
  }
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
    
    finishing.sumary();
    finishing.plan__prices99();
    finishing.plan__show();
    finishing.prices__total();
    console.log(finishing);
  } else if (currentStep == 5) {
    document.querySelector('.next').style.display = "none";
  }
  
});



// plans (step 2)
arcade__box.addEventListener('click', () => {
  console.log('lol');
/*   total__box__plan.innerHTML = "Arcade"; */
  finishing.finishing__up.plan = "Arcade";
  console.log(finishing);
});

advanced__box.addEventListener('click', () => {
  console.log('lol');
/*   total__box__plan.innerHTML = "Advanced"; */
  finishing.finishing__up.plan = "Advanced";
  console.log(finishing);
});

pro__box.addEventListener('click', () => {
  console.log('lol');
 /*  total__box__plan.innerHTML = "Pro"; */
  finishing.finishing__up.plan = "Pro";
  console.log(finishing);
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
    finishing.finishing__up.frequency = "(Monthly)";
    
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

  finishing.finishing__up.frequency = "(Yearly)";
  
});

//addons (step 3) 
online__service.addEventListener('click', () => {
  if (online__service.form[0].checked == true) {
    addons__os.style.backgroundColor = "hsl(217, 100%, 97%)";
    finishing.finishing__up.addons.push('online service');
    finishing.finishing__up.frequency === "(Monthly)" ? finishing.finishing__up.addons__prices += 1 : finishing.finishing__up.addons__prices += 10;
    console.log("lol+");
    console.log(finishing);
  } else {
    if (finishing.finishing__up.addons.includes('online service')) {
      finishing.finishing__up.addons.splice((finishing.finishing__up.addons.indexOf('online service')), 1);
      console.log("lol-");
      console.log(finishing);
    
    }
    
  }
});


larger__storage.addEventListener('click', () => {
  if (larger__storage.form[0].checked == true) {
    addons__ls.style.backgroundColor = "hsl(217, 100%, 97%)";
    finishing.finishing__up.addons.push('larger storage');
    finishing.finishing__up.frequency === "(Monthly)" ? finishing.finishing__up.addons__prices += 2 : finishing.finishing__up.addons__prices += 20;
    console.log("lol+larger storage");
    console.log(finishing);
  } else {
    if (finishing.finishing__up.addons.includes('larger storage')) {
      finishing.finishing__up.addons.splice((finishing.finishing__up.addons.indexOf('larger storage')), 1);
    }
    console.log("lol-");
    console.log(finishing);
  }
});
  


customizable__profile.addEventListener('click', () => {
  if (customizable__profile.form[0].checked == true) {
    addons__cp.style.backgroundColor = "hsl(217, 100%, 97%)";
    finishing.finishing__up.addons.push('customizable profile');
    finishing.finishing__up.frequency === "(Monthly)" ? finishing.finishing__up.addons__prices += 2 : finishing.finishing__up.addons__prices += 20;
    console.log("lol+customizable__profile");
    console.log(finishing);

  } else {
    if (customizable__profile.form[0].checked == false) {
      if (finishing.finishing__up.addons.includes('customizable profile')) {
        finishing.finishing__up.addons.splice(finishing.finishing__up.addons.indexOf('customizable profile'), 1);
          
      }
    console.log("lol-customizable__profile");
    console.log(finishing);
    }
  }
});

// finish up (step 4)
const finishing = {

  finishing__up: {
   plan: "Arcade_",
   frequency: "(Monthly)_",
   addons: [],
   prices: 0,
   addons__prices: 0,
   total__prices: 0,
  },

  plan__show () {
    plan__name.innerHTML = `${this.finishing__up.plan} ${this.finishing__up.frequency}`;
    plan__prices.innerHTML = `${formatter.format(this.finishing__up.prices)}`;
    console.log(this.finishing__up.prices);
    console.log(this.finishing__up.plan);
  },  
 
  sumary ( ) {
    
    this.finishing__up.addons.forEach((addon) => {
      let addons__div = document.createElement('div');
      addons__div.setAttribute('class', 'addons__div');
      let addons__selected = document.createElement('div');
      addons__selected.setAttribute('class', 'addons__selected');
      console.log(addons__selected);
      addons__selected.insertAdjacentElement('beforeend', addons__div);
      addons__div.insertAdjacentText('beforeend', addon);
      addons__select.insertAdjacentElement('beforeend', addons__selected);
    

      if (addons__selected.innerText
        == 'online service') {
        let addons__prices = document.createElement('p');
        addons__prices.setAttribute('class', 'addons__prices');
        if (this.finishing__up.frequency === "(Monthly)") {
          addons__prices.innerHTML = `${formatter.format(1)}`;
        } else { 
          addons__prices.innerHTML = `${formatter.format(10)}`;
        }
        addons__selected.insertAdjacentElement('beforeend', addons__prices);
        
        } else if (addons__selected.innerText == "larger storage") {
        let addons__prices = document.createElement('p');
        addons__prices.setAttribute('class', 'addons__prices');
        if (this.finishing__up.frequency === "(Monthly)") {
          addons__prices.innerHTML = `${formatter.format(2)}`; 
        } else {
          addons__prices.innerHTML = `${formatter.format(20)}`;
        }
        addons__selected.insertAdjacentElement('beforeend', addons__prices);
        
        } else if (addons__selected.innerText == "customizable profile") {
        let addons__prices = document.createElement('p');
        addons__prices.setAttribute('class', 'addons__prices');
        if (this.finishing__up.frequency === "(Monthly)") {
          addons__prices.innerHTML = `${formatter.format(2)}`;
        } else {
          addons__prices.innerHTML = `${formatter.format(20)}`;
        } 
        addons__selected.insertAdjacentElement('beforeend', addons__prices);
      }
    });

  },

  plan__prices99 () {

    if (this.finishing__up.plan == "Arcade") {
      this.finishing__up.frequency === "(Monthly)" ? this.finishing__up.prices = 9 : this.finishing__up.prices = 90;
    } else if (this.finishing__up.plan == "Advanced") {
      this.finishing__up.frequency === "(Monthly)" ? this.finishing__up.prices = 12 : this.finishing__up.prices = 120;
    } else if (this.finishing__up.plan == "Pro") {
      this.finishing__up.frequency === "(Monthly)" ? this.finishing__up.prices = 15 : this.finishing__up.prices = 150;
    };

  },

  prices__total () {
    const total__prices = document.getElementById('total__prices');
    const total__frequency = document.getElementById('total__frequency');
    this.finishing__up.total__prices = this.finishing__up.addons__prices + this.finishing__up.prices;
    total__prices.innerHTML = `${formatter.format(this.finishing__up.total__prices)}`;
    this.finishing__up.frequency == "(Monthly)" ? total__frequency.innerHTML = `Total (per month)` : total__frequency.innerHTML = `Total (per year)`;
    
  },

  addon__remove() {
    document.querySelectorAll('.addons__selected').forEach((addon) => {
      if (this.finishing__up.addons !== null) {
        addon.remove();
      }
    });
  },
  
  prices__remove() {
    document.querySelectorAll('.addons__prices').forEach((addon) => {
      if (this.finishing__up.prices !== null) {
        this.finishing__up.prices = 0;
      }
    });
  }
};
 
 
finishing.sumary();
finishing.plan__prices99();
finishing.plan__show();
finishing.prices__total();
console.log(finishing);
 
 
 






   
   