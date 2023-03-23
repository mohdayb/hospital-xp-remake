let toggleBtn = document.querySelector(".mdi-menu");
console.log(toggleBtn);
let links = document.querySelector(".links");
console.log(links);

toggleBtn.onclick = function () {
	// this.classList.toggle("menu-active");
	links.classList.toggle("open");
};



// started or not



// let nums = document.querySelectorAll(".number-of-satistics span");
// console.log(nums);

// let nums2 = document.querySelectorAll(".info-box .number span");

// let section = document.querySelector(".corporates");
// console.log(section);
let introduction = document.querySelector(".introduction .container");
let idsGroub = document.querySelector(".IDS-groub");
let govermentSupp = document.querySelector(".goverment-supp");
let progress = document.querySelector(".company-progress .progress");

let projectFeaturesOne = document.querySelectorAll(".project-features .feature")[0];
let projectFeaturesTwo = document.querySelectorAll(".project-features .feature")[1];
let projectFeaturesThree = document.querySelectorAll(".project-features .feature")[2];




// let started = false;
// let startedTow = false;

// function startCount(el) {
// 	let goal = el.dataset.goal;
// 	let count = setInterval(() => {
//         // if(goal > 100){

//         //     el.textContent= parseInt( parseInt(el.textContent) + goal / 1000);
//         // }
//         // else {
//         //     el.textContent= parseInt(el.textContent) + 5;
//         // }

//         el.textContent++;
// 		if (parseInt(el.textContent) >= goal) {
// 			clearInterval(count);
// 		}
// 	}, 3000 / goal);
// }
async function animate(){
    if (window.scrollY + window.screen.availHeight >= document.querySelector('#filler_f1').offsetTop +300  ) {
        projectFeaturesOne.classList.add('animt-up');
        document.getElementById('filler_f1').classList.remove('filler-f');
        // setTimeout(()=>{
            projectFeaturesOne.classList.remove('hidden')
        // },2000)
    }
    setTimeout(()=>{

        if (window.scrollY + window.screen.availHeight >= document.querySelector('#filler_f1').offsetTop + 200  ) {
            projectFeaturesTwo.classList.add('animt-up');
            document.getElementById('filler_f2').classList.remove('filler-f');
            // setTimeout(()=>{
                projectFeaturesTwo.classList.remove('hidden')
            // },2000)
        }

        setTimeout(()=>{

            if (window.scrollY + window.screen.availHeight >= document.querySelector('#filler_f1').offsetTop  + 200 ) {
                projectFeaturesThree.classList.add('animt-up');
                document.getElementById('filler_f3').classList.remove('filler-f');
                // setTimeout(()=>{
                    projectFeaturesThree.classList.remove('hidden')
                // },2000)
            }
        },200)
    },200)
}

window.onload = ()=>{
    //up
    animate();
    if (window.scrollY + window.screen.availHeight >= govermentSupp.offsetTop -500 ) {
        govermentSupp.classList.add('animt-up1');
        document.getElementById('filler').classList.remove('filler');
        setTimeout(()=>{
            govermentSupp.classList.remove('hidden')
        },3000)
    }

    

    //down
    if (window.scrollY + window.screen.availHeight >= introduction.offsetTop -500 ) {
        introduction.classList.add('animt-down');
        document.getElementById('filler').classList.remove('filler');
        setTimeout(()=>{
            introduction.classList.remove('hidden')
        },2000)
    }

    if (window.scrollY + window.screen.availHeight >= idsGroub.offsetTop -500 ) {
        idsGroub.classList.add('animt-down1');
        document.getElementById('filler').classList.remove('filler');
        setTimeout(()=>{
            idsGroub.classList.remove('hidden')
        },3000)
    }

    if (window.scrollY + window.screen.availHeight >= progress.offsetTop -500 ) {
        progress.classList.add('animt-down');
        document.getElementById('filler').classList.remove('filler');
        setTimeout(()=>{
            progress.classList.remove('hidden')
        },2000)
    }

    
}

window.onscroll = function () {

    animate();

    if (window.scrollY + window.screen.availHeight >= govermentSupp.offsetTop -500 ) {
        govermentSupp.classList.add('animt-up');
        document.getElementById('filler').classList.remove('filler');
        setTimeout(()=>{
            govermentSupp.classList.remove('hidden')
        },2000)
    }

    
    
    //down
    if (window.scrollY + window.screen.availHeight >= introduction.offsetTop -500 ) {
        introduction.classList.add('animt-down');
        document.getElementById('filler').classList.remove('filler');
        setTimeout(()=>{
            introduction.classList.remove('hidden')
        },2000)
    }

    if (window.scrollY + window.screen.availHeight >= idsGroub.offsetTop -500 ) {
        idsGroub.classList.add('animt-down');
        document.getElementById('filler').classList.remove('filler');
        setTimeout(()=>{
            idsGroub.classList.remove('hidden')
        },2000)
    }

    if (window.scrollY + window.screen.availHeight >= progress.offsetTop -500 ) {
        progress.classList.add('animt-down');
        document.getElementById('filler').classList.remove('filler');
        setTimeout(()=>{
            progress.classList.remove('hidden')
        },2000)
    }
    // if (window.scrollY + window.screen.availHeight >= sectionThird.offsetTop -500 ) {
    //     sectionTwo.classList.add('animt');
    //     document.getElementById('filler').classList.remove('filler');
    //     setTimeout(()=>{
    //         sectionTwo.classList.remove('hidden')
    //     },2000)
        // if(!startedTow) {
        //     nums2.forEach((num2) => startCount(num2));
        // }
        // startedTow = true;
};
// }
// console.log(" nms2 ",nums2);
