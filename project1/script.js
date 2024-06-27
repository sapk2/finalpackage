document.addEventListener('DOMContentLoaded',function(){
    const sections=document.querySelectorAll('.section');
    const link=document.querySelectorAll('.side ul li a');
    links.forEach(link => {
        link.addEventListener('click',function(e){
            e.preventdefault();
            sections.foreach(section=>section.style.display='none');
            const target =document.querySelector(link.getAttribute('href'));
            if (target) {
                target.style.display='block';
            }
            links.foereach(link=>link.classlist.remove('active'));
            links.classlist.add('active');

        }); 
    });
    if(sections.length>0){
        sections[0].style.display ='block';
        links[0].classlist.add('active');
    }
});