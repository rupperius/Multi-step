/* const formas = document.querySelectorAll('.forma');
const sidebars = document.querySelector('.sidebar_number'); */
const btn_back = document.getElementById('go__back');
const btn_next = document.getElementById('next__step');
const box = document.querySelectorAll('.box');
const online__service = document.getElementById('online__service');
const larger__storage = document.getElementById('larger__storage');
const customizable__profile = document.getElementById('customizable__profile');
const one = document.getElementById('one');
const two = document.getElementById('two');

const addons__os = document.getElementById('addons__os');
const addons__ls = document.getElementById('addons__ls');
const addons__cp = document.getElementById('addons__cp');

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: "EUR",
  minimumFractionDigits: 0,
});

console.log(formatter.format(2)); // $2


let currentStep = 1;
let currentSidebarNumber = 1;


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
  (currentStep == 2) ? document.getElementById('go__back').style.display = "" : null;
  (currentStep == 5) ? document.querySelector('.next').style.display = "none" : null;  
});


one.addEventListener('click', () => {
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
});

two.addEventListener('click', () => {
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
});


online__service.addEventListener('click', () => {
  if (online__service.form[0].checked == true) {
    addons__os.style.backgroundColor = "hsl(217, 100%, 97%)";
  }
  });
  
  larger__storage.addEventListener('click', () => {
    if (larger__storage.form[0].checked == true) {
      addons__ls.style.backgroundColor = "hsl(217, 100%, 97%)";
    }
  });
  
  customizable__profile.addEventListener('click', () => {
    if (customizable__profile.form[0].checked == true) {
      addons__cp.style.backgroundColor = "hsl(217, 100%, 97%)";
    }
  });


const Finishing__up = {
  plan_arcade : {
  monthly_plan: 9,
  yearly_plan: 90,
  },
  plan_advanced : {
  monthly_plan: 12,
  yearly_plan: 120,
  },
  plan_pro : {
  monthly_plan: 15,
  yearly_plan: 150,
  },
};

const Addons = {
  online_service : {
  monthly_plan: 1,
  yearly_plan: 10,
  },
  larger_storage : {
  monthly_plan: 2,
  yearly_plan: 20,
  },
  customizable_profile : {
  monthly_plan: 2,
  }
};



   
   