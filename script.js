gsap.from(".img1",{
    y:-100,
    duration:3,
    opacity:0,
    scrollTrigger:{
        trigger:".img1",
        scrollTrigger:"body",
        
        start:"top 35%",
        end:"top 100%"

    }
    
})
gsap.from(".img2",{
    y:200,
    duration:3,
    opacity:0,
    scrollTrigger:{
        trigger:".img1",
        scrollTrigger:"body",
        
        start:"top 35%",
        end:"top 100%"
        
    }
    
})
gsap.from(".our",{
    x:-300,
    duration:3,
    opacity:0,
    scrollTrigger:{
        trigger:".img1",
        scrollTrigger:"body",
        
        start:"top 35%",
        end:"top 100%"
        
    }
})
gsap.from(".services",{
    x:250,
    duration:3,
    opacity:0,
    scrollTrigger:{
        trigger:".img1",
        scrollTrigger:"body",
        
        start:"top 35%",
        end:"top 100%"
        
    }
})




