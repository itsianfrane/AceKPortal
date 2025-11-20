function toggleContent(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    const targetSection = document.getElementById(sectionId);

    sections.forEach(section => {
        if(section.id === sectionId){
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}